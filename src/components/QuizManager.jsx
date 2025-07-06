import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Plus, 
  Trash2, 
  Save, 
  X, 
  FileText,
  Clock,
  Target,
  CheckCircle,
  AlertCircle,
  Eye,
  Download
} from 'lucide-react';
import { questionsData as questions } from '../data/questions';

const QuizManager = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [alert, setAlert] = useState(null);
  const [previewQuiz, setPreviewQuiz] = useState(null);

  const [newQuiz, setNewQuiz] = useState({
    title: '',
    description: '',
    timeLimit: 30,
    questionCount: 20,
    questionTypes: {
      definition: true,
      enumerate: true,
      trueFalse: true,
      multipleChoice: true
    },
    categories: {
      'مقدمة في الكمبيوتر والشبكات': true,
      'الإنترنت': true,
      'أساسيات الأمن السيبراني': true,
      'أنواع الهجمات السيبرانية': true
    },
    difficulty: 'mixed'
  });

  useEffect(() => {
    // Load saved quizzes from localStorage
    const savedQuizzes = JSON.parse(localStorage.getItem('customQuizzes') || '[]');
    setQuizzes(savedQuizzes);
  }, []);

  const showAlert = (message, type = 'success') => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 3000);
  };

  const getAllQuestions = () => {
    return [
      ...questions.definitions.map(q => ({ ...q, type: 'definition' })),
      ...questions.enumerations.map(q => ({ ...q, type: 'enumerate' })),
      ...questions.trueFalse.map(q => ({ ...q, type: 'trueFalse' })),
      ...questions.multipleChoice.map(q => ({ ...q, type: 'multipleChoice' }))
    ];
  };

  const generateQuizQuestions = (config) => {
    const allQuestions = getAllQuestions();
    
    // Filter by selected types
    const typeFilteredQuestions = allQuestions.filter(q => 
      config.questionTypes[q.type]
    );
    
    // Filter by selected categories
    const categoryFilteredQuestions = typeFilteredQuestions.filter(q =>
      config.categories[q.category]
    );

    if (categoryFilteredQuestions.length === 0) {
      throw new Error('لا توجد أسئلة تطابق المعايير المحددة');
    }

    // Shuffle and select questions
    const shuffled = [...categoryFilteredQuestions].sort(() => Math.random() - 0.5);
    const selectedQuestions = shuffled.slice(0, Math.min(config.questionCount, shuffled.length));

    return selectedQuestions;
  };

  const handleCreateQuiz = () => {
    if (!newQuiz.title.trim()) {
      showAlert('يرجى إدخال عنوان الاختبار', 'error');
      return;
    }

    if (!Object.values(newQuiz.questionTypes).some(Boolean)) {
      showAlert('يرجى اختيار نوع واحد على الأقل من الأسئلة', 'error');
      return;
    }

    if (!Object.values(newQuiz.categories).some(Boolean)) {
      showAlert('يرجى اختيار موضوع واحد على الأقل', 'error');
      return;
    }

    try {
      const quizQuestions = generateQuizQuestions(newQuiz);
      
      const quiz = {
        id: Date.now().toString(),
        title: newQuiz.title,
        description: newQuiz.description,
        timeLimit: newQuiz.timeLimit,
        questionCount: quizQuestions.length,
        questions: quizQuestions,
        createdAt: new Date().toISOString(),
        config: { ...newQuiz }
      };

      const updatedQuizzes = [...quizzes, quiz];
      setQuizzes(updatedQuizzes);
      localStorage.setItem('customQuizzes', JSON.stringify(updatedQuizzes));

      // Reset form
      setNewQuiz({
        title: '',
        description: '',
        timeLimit: 30,
        questionCount: 20,
        questionTypes: {
          definition: true,
          enumerate: true,
          trueFalse: true,
          multipleChoice: true
        },
        categories: {
          'مقدمة في الكمبيوتر والشبكات': true,
          'الإنترنت': true,
          'أساسيات الأمن السيبراني': true,
          'أنواع الهجمات السيبرانية': true
        },
        difficulty: 'mixed'
      });
      setShowCreateForm(false);
      showAlert('تم إنشاء الاختبار بنجاح');
    } catch (error) {
      showAlert(error.message, 'error');
    }
  };

  const handleDeleteQuiz = (quizId) => {
    const updatedQuizzes = quizzes.filter(q => q.id !== quizId);
    setQuizzes(updatedQuizzes);
    localStorage.setItem('customQuizzes', JSON.stringify(updatedQuizzes));
    showAlert('تم حذف الاختبار بنجاح');
  };

  const handleExportQuiz = (quiz) => {
    const dataStr = JSON.stringify(quiz, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `quiz_${quiz.title.replace(/\s+/g, '_')}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showAlert('تم تصدير الاختبار بنجاح');
  };

  const questionTypeLabels = {
    definition: 'تعريف',
    enumerate: 'عدد',
    trueFalse: 'صح وخطأ',
    multipleChoice: 'اختيارات متعددة'
  };

  const categories = [
    'مقدمة في الكمبيوتر والشبكات',
    'الإنترنت',
    'أساسيات الأمن السيبراني',
    'أنواع الهجمات السيبرانية'
  ];

  return (
    <div className="space-y-6">
      {/* Alert */}
      {alert && (
        <Alert variant={alert.type === 'error' ? 'destructive' : 'default'}>
          {alert.type === 'error' ? (
            <AlertCircle className="h-4 w-4" />
          ) : (
            <CheckCircle className="h-4 w-4" />
          )}
          <AlertDescription className="font-arabic">
            {alert.message}
          </AlertDescription>
        </Alert>
      )}

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold font-arabic">إدارة الاختبارات</h2>
          <p className="text-muted-foreground font-arabic">إنشاء وحذف اختبارات مخصصة</p>
        </div>
        <Button
          onClick={() => setShowCreateForm(true)}
          className="font-arabic"
        >
          <Plus className="w-4 h-4 ml-2" />
          إنشاء اختبار جديد
        </Button>
      </div>

      {/* Create Quiz Form */}
      {showCreateForm && (
        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="font-arabic">إنشاء اختبار جديد</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="font-arabic">عنوان الاختبار</Label>
                <Input
                  value={newQuiz.title}
                  onChange={(e) => setNewQuiz(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="أدخل عنوان الاختبار"
                  className="font-arabic"
                />
              </div>
              <div>
                <Label className="font-arabic">الحد الزمني (بالدقائق)</Label>
                <Input
                  type="number"
                  value={newQuiz.timeLimit}
                  onChange={(e) => setNewQuiz(prev => ({ ...prev, timeLimit: parseInt(e.target.value) || 30 }))}
                  min="5"
                  max="120"
                  className="font-english"
                />
              </div>
            </div>

            <div>
              <Label className="font-arabic">وصف الاختبار (اختياري)</Label>
              <Textarea
                value={newQuiz.description}
                onChange={(e) => setNewQuiz(prev => ({ ...prev, description: e.target.value }))}
                placeholder="أدخل وصف مختصر للاختبار"
                className="font-arabic"
                rows={3}
              />
            </div>

            <div>
              <Label className="font-arabic">عدد الأسئلة</Label>
              <Input
                type="number"
                value={newQuiz.questionCount}
                onChange={(e) => setNewQuiz(prev => ({ ...prev, questionCount: parseInt(e.target.value) || 20 }))}
                min="5"
                max="100"
                className="font-english"
              />
            </div>

            {/* Question Types */}
            <div>
              <Label className="font-arabic mb-3 block">أنواع الأسئلة</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(questionTypeLabels).map(([key, label]) => (
                  <div key={key} className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id={`type-${key}`}
                      checked={newQuiz.questionTypes[key]}
                      onCheckedChange={(checked) => 
                        setNewQuiz(prev => ({
                          ...prev,
                          questionTypes: { ...prev.questionTypes, [key]: checked }
                        }))
                      }
                    />
                    <Label htmlFor={`type-${key}`} className="font-arabic text-sm">
                      {label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <Label className="font-arabic mb-3 block">المواضيع</Label>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id={`category-${category}`}
                      checked={newQuiz.categories[category]}
                      onCheckedChange={(checked) => 
                        setNewQuiz(prev => ({
                          ...prev,
                          categories: { ...prev.categories, [category]: checked }
                        }))
                      }
                    />
                    <Label htmlFor={`category-${category}`} className="font-arabic text-sm">
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2 space-x-reverse">
              <Button
                onClick={handleCreateQuiz}
                className="font-arabic"
              >
                <Save className="w-4 h-4 ml-2" />
                إنشاء الاختبار
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setShowCreateForm(false);
                  setNewQuiz({
                    title: '',
                    description: '',
                    timeLimit: 30,
                    questionCount: 20,
                    questionTypes: {
                      definition: true,
                      enumerate: true,
                      trueFalse: true,
                      multipleChoice: true
                    },
                    categories: {
                      'مقدمة في الكمبيوتر والشبكات': true,
                      'الإنترنت': true,
                      'أساسيات الأمن السيبراني': true,
                      'أنواع الهجمات السيبرانية': true
                    },
                    difficulty: 'mixed'
                  });
                }}
                className="font-arabic"
              >
                <X className="w-4 h-4 ml-2" />
                إلغاء
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quiz Preview Modal */}
      {previewQuiz && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-4xl max-h-[80vh] overflow-y-auto">
            <CardHeader>
              <CardTitle className="font-arabic flex items-center justify-between">
                <span>معاينة الاختبار: {previewQuiz.title}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setPreviewQuiz(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold font-english">{previewQuiz.questionCount}</div>
                  <div className="text-sm text-muted-foreground font-arabic">عدد الأسئلة</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold font-english">{previewQuiz.timeLimit}</div>
                  <div className="text-sm text-muted-foreground font-arabic">دقيقة</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold font-english">
                    {new Date(previewQuiz.createdAt).toLocaleDateString('ar-SA')}
                  </div>
                  <div className="text-sm text-muted-foreground font-arabic">تاريخ الإنشاء</div>
                </div>
              </div>

              <div className="space-y-4">
                {previewQuiz.questions.slice(0, 5).map((question, index) => (
                  <Card key={index} className="bg-muted/50">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-2 space-x-reverse">
                        <Badge variant="secondary" className="font-arabic text-xs">
                          {questionTypeLabels[question.type]}
                        </Badge>
                        <div className="flex-1">
                          <p className="font-arabic text-sm">{question.question}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {previewQuiz.questions.length > 5 && (
                  <p className="text-center text-muted-foreground font-arabic">
                    ... و {previewQuiz.questions.length - 5} أسئلة أخرى
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Quizzes List */}
      <div className="space-y-4">
        {quizzes.length === 0 ? (
          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardContent className="p-12 text-center">
              <div className="text-muted-foreground font-arabic">
                <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">لا توجد اختبارات مخصصة</p>
                <p className="text-sm">ابدأ بإنشاء اختبار جديد</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          quizzes.map((quiz) => (
            <Card key={quiz.id} className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="font-arabic font-bold text-xl">{quiz.title}</h3>
                      {quiz.description && (
                        <p className="text-muted-foreground font-arabic text-sm mt-1">
                          {quiz.description}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="font-arabic">
                        <Clock className="w-3 h-3 ml-1" />
                        {quiz.timeLimit} دقيقة
                      </Badge>
                      <Badge variant="outline" className="font-arabic">
                        <Target className="w-3 h-3 ml-1" />
                        {quiz.questionCount} سؤال
                      </Badge>
                      <Badge variant="outline" className="font-arabic">
                        {new Date(quiz.createdAt).toLocaleDateString('ar-SA')}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {Object.entries(quiz.config.questionTypes)
                        .filter(([_, enabled]) => enabled)
                        .map(([type, _]) => (
                          <Badge key={type} variant="secondary" className="font-arabic text-xs">
                            {questionTypeLabels[type]}
                          </Badge>
                        ))}
                    </div>
                  </div>

                  <div className="flex space-x-2 space-x-reverse">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPreviewQuiz(quiz)}
                      className="font-arabic"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleExportQuiz(quiz)}
                      className="font-arabic"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteQuiz(quiz.id)}
                      className="font-arabic"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default QuizManager;

