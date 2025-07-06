import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Search,
  Filter,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { questionsData as initialQuestions } from '../data/questions';

const QuestionManager = ({ onStatsUpdate }) => {
  const [questions, setQuestions] = useState(initialQuestions);
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [alert, setAlert] = useState(null);

  const [newQuestion, setNewQuestion] = useState({
    type: 'multipleChoice',
    category: 'مقدمة في الكمبيوتر والشبكات',
    question: '',
    answer: '',
    options: ['', '', '', ''],
    correctAnswer: 0
  });

  useEffect(() => {
    if (onStatsUpdate) {
      onStatsUpdate();
    }
  }, [questions, onStatsUpdate]);

  const questionTypes = {
    'definition': 'تعريف',
    'enumerate': 'عدد',
    'trueFalse': 'صح وخطأ',
    'multipleChoice': 'اختيارات متعددة'
  };

  const categories = [
    'مقدمة في الكمبيوتر والشبكات',
    'الإنترنت',
    'أساسيات الأمن السيبراني',
    'أنواع الهجمات السيبرانية'
  ];

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

  const getFilteredQuestions = () => {
    let filtered = getAllQuestions();

    if (selectedType !== 'all') {
      filtered = filtered.filter(q => q.type === selectedType);
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(q => q.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (typeof q.answer === 'string' && q.answer.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return filtered;
  };

  const handleAddQuestion = () => {
    if (!newQuestion.question.trim()) {
      showAlert('يرجى إدخال نص السؤال', 'error');
      return;
    }

    if (!newQuestion.answer && newQuestion.type !== 'multipleChoice') {
      showAlert('يرجى إدخال الإجابة', 'error');
      return;
    }

    if (newQuestion.type === 'multipleChoice' && newQuestion.options.some(opt => !opt.trim())) {
      showAlert('يرجى إدخال جميع الخيارات', 'error');
      return;
    }

    const questionToAdd = {
      id: Date.now().toString(),
      category: newQuestion.category,
      question: newQuestion.question,
      ...(newQuestion.type === 'multipleChoice' 
        ? { 
            options: newQuestion.options,
            correctAnswer: newQuestion.correctAnswer
          }
        : newQuestion.type === 'trueFalse'
        ? { answer: newQuestion.answer === 'true' }
        : newQuestion.type === 'enumerate'
        ? { answer: newQuestion.answer.split('\n').filter(line => line.trim()) }
        : { answer: newQuestion.answer }
      )
    };

    const updatedQuestions = { ...questions };
    const typeKey = newQuestion.type === 'definition' ? 'definitions' : 
                   newQuestion.type === 'enumerate' ? 'enumerations' :
                   newQuestion.type === 'trueFalse' ? 'trueFalse' : 'multipleChoice';
    
    updatedQuestions[typeKey] = [...updatedQuestions[typeKey], questionToAdd];
    setQuestions(updatedQuestions);

    // Reset form
    setNewQuestion({
      type: 'multipleChoice',
      category: 'مقدمة في الكمبيوتر والشبكات',
      question: '',
      answer: '',
      options: ['', '', '', ''],
      correctAnswer: 0
    });
    setShowAddForm(false);
    showAlert('تم إضافة السؤال بنجاح');
  };

  const handleDeleteQuestion = (questionToDelete) => {
    const updatedQuestions = { ...questions };
    const typeKey = questionToDelete.type === 'definition' ? 'definitions' : 
                   questionToDelete.type === 'enumerate' ? 'enumerations' :
                   questionToDelete.type === 'trueFalse' ? 'trueFalse' : 'multipleChoice';
    
    updatedQuestions[typeKey] = updatedQuestions[typeKey].filter(q => q.id !== questionToDelete.id);
    setQuestions(updatedQuestions);
    showAlert('تم حذف السؤال بنجاح');
  };

  const handleEditQuestion = (question) => {
    setEditingQuestion({
      ...question,
      originalType: question.type,
      options: question.options || ['', '', '', ''],
      correctAnswer: question.correctAnswer || 0
    });
  };

  const handleSaveEdit = () => {
    if (!editingQuestion.question.trim()) {
      showAlert('يرجى إدخال نص السؤال', 'error');
      return;
    }

    const updatedQuestions = { ...questions };
    
    // Remove from original type
    const originalTypeKey = editingQuestion.originalType === 'definition' ? 'definitions' : 
                           editingQuestion.originalType === 'enumerate' ? 'enumerations' :
                           editingQuestion.originalType === 'trueFalse' ? 'trueFalse' : 'multipleChoice';
    
    updatedQuestions[originalTypeKey] = updatedQuestions[originalTypeKey].filter(q => q.id !== editingQuestion.id);
    
    // Add to new type
    const newTypeKey = editingQuestion.type === 'definition' ? 'definitions' : 
                      editingQuestion.type === 'enumerate' ? 'enumerations' :
                      editingQuestion.type === 'trueFalse' ? 'trueFalse' : 'multipleChoice';
    
    const updatedQuestion = {
      id: editingQuestion.id,
      category: editingQuestion.category,
      question: editingQuestion.question,
      ...(editingQuestion.type === 'multipleChoice' 
        ? { 
            options: editingQuestion.options,
            correctAnswer: editingQuestion.correctAnswer
          }
        : editingQuestion.type === 'trueFalse'
        ? { answer: editingQuestion.answer === 'true' || editingQuestion.answer === true }
        : editingQuestion.type === 'enumerate'
        ? { answer: typeof editingQuestion.answer === 'string' 
            ? editingQuestion.answer.split('\n').filter(line => line.trim())
            : editingQuestion.answer }
        : { answer: editingQuestion.answer }
      )
    };
    
    updatedQuestions[newTypeKey] = [...updatedQuestions[newTypeKey], updatedQuestion];
    setQuestions(updatedQuestions);
    setEditingQuestion(null);
    showAlert('تم تحديث السؤال بنجاح');
  };

  const renderQuestionForm = (question, isEditing = false) => {
    const currentQuestion = isEditing ? editingQuestion : newQuestion;
    const setCurrentQuestion = isEditing ? setEditingQuestion : setNewQuestion;

    return (
      <Card className="bg-card/80 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle className="font-arabic">
            {isEditing ? 'تعديل السؤال' : 'إضافة سؤال جديد'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="font-arabic">نوع السؤال</Label>
              <Select
                value={currentQuestion.type}
                onValueChange={(value) => setCurrentQuestion(prev => ({ ...prev, type: value }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(questionTypes).map(([key, label]) => (
                    <SelectItem key={key} value={key} className="font-arabic">
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="font-arabic">الموضوع</Label>
              <Select
                value={currentQuestion.category}
                onValueChange={(value) => setCurrentQuestion(prev => ({ ...prev, category: value }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category} className="font-arabic">
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label className="font-arabic">نص السؤال</Label>
            <Textarea
              value={currentQuestion.question}
              onChange={(e) => setCurrentQuestion(prev => ({ ...prev, question: e.target.value }))}
              placeholder="أدخل نص السؤال هنا..."
              className="font-arabic"
              rows={3}
            />
          </div>

          {currentQuestion.type === 'multipleChoice' ? (
            <div className="space-y-4">
              <Label className="font-arabic">الخيارات</Label>
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 space-x-reverse">
                  <Input
                    value={option}
                    onChange={(e) => {
                      const newOptions = [...currentQuestion.options];
                      newOptions[index] = e.target.value;
                      setCurrentQuestion(prev => ({ ...prev, options: newOptions }));
                    }}
                    placeholder={`الخيار ${String.fromCharCode(65 + index)}`}
                    className="font-arabic"
                  />
                  <Button
                    type="button"
                    variant={currentQuestion.correctAnswer === index ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentQuestion(prev => ({ ...prev, correctAnswer: index }))}
                    className="font-arabic"
                  >
                    {currentQuestion.correctAnswer === index ? 'صحيح' : 'اختر'}
                  </Button>
                </div>
              ))}
            </div>
          ) : currentQuestion.type === 'trueFalse' ? (
            <div>
              <Label className="font-arabic">الإجابة الصحيحة</Label>
              <Select
                value={currentQuestion.answer?.toString() || 'true'}
                onValueChange={(value) => setCurrentQuestion(prev => ({ ...prev, answer: value }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true" className="font-arabic">صح</SelectItem>
                  <SelectItem value="false" className="font-arabic">خطأ</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ) : (
            <div>
              <Label className="font-arabic">
                {currentQuestion.type === 'enumerate' ? 'الإجابة (كل نقطة في سطر منفصل)' : 'الإجابة'}
              </Label>
              <Textarea
                value={Array.isArray(currentQuestion.answer) 
                  ? currentQuestion.answer.join('\n') 
                  : currentQuestion.answer || ''}
                onChange={(e) => setCurrentQuestion(prev => ({ ...prev, answer: e.target.value }))}
                placeholder={currentQuestion.type === 'enumerate' 
                  ? 'أدخل كل نقطة في سطر منفصل...' 
                  : 'أدخل الإجابة هنا...'}
                className="font-arabic"
                rows={currentQuestion.type === 'enumerate' ? 5 : 3}
              />
            </div>
          )}

          <div className="flex space-x-2 space-x-reverse">
            <Button
              onClick={isEditing ? handleSaveEdit : handleAddQuestion}
              className="font-arabic"
            >
              <Save className="w-4 h-4 ml-2" />
              {isEditing ? 'حفظ التعديل' : 'إضافة السؤال'}
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                if (isEditing) {
                  setEditingQuestion(null);
                } else {
                  setShowAddForm(false);
                  setNewQuestion({
                    type: 'multipleChoice',
                    category: 'مقدمة في الكمبيوتر والشبكات',
                    question: '',
                    answer: '',
                    options: ['', '', '', ''],
                    correctAnswer: 0
                  });
                }
              }}
              className="font-arabic"
            >
              <X className="w-4 h-4 ml-2" />
              إلغاء
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

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

      {/* Controls */}
      <Card className="bg-card/80 backdrop-blur-sm border-border/50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Search className="w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="البحث في الأسئلة..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 font-arabic"
                />
              </div>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all" className="font-arabic">جميع الأنواع</SelectItem>
                  {Object.entries(questionTypes).map(([key, label]) => (
                    <SelectItem key={key} value={key} className="font-arabic">
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-64">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all" className="font-arabic">جميع المواضيع</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category} className="font-arabic">
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={() => setShowAddForm(true)}
              className="font-arabic"
            >
              <Plus className="w-4 h-4 ml-2" />
              إضافة سؤال جديد
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Add Question Form */}
      {showAddForm && renderQuestionForm()}

      {/* Edit Question Form */}
      {editingQuestion && renderQuestionForm(editingQuestion, true)}

      {/* Questions List */}
      <div className="space-y-4">
        {getFilteredQuestions().map((question, index) => (
          <Card key={question.id || index} className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex justify-between items-start space-x-4 space-x-reverse">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Badge variant="secondary" className="font-arabic">
                      {questionTypes[question.type]}
                    </Badge>
                    <Badge variant="outline" className="font-arabic text-xs">
                      {question.category}
                    </Badge>
                  </div>
                  
                  <h3 className="font-arabic font-semibold text-lg leading-relaxed">
                    {question.question}
                  </h3>
                  
                  <div className="text-sm text-muted-foreground font-arabic">
                    {question.type === 'multipleChoice' ? (
                      <div className="space-y-1">
                        {question.options?.map((option, idx) => (
                          <div key={idx} className={`${idx === question.correctAnswer ? 'text-primary font-semibold' : ''}`}>
                            {String.fromCharCode(65 + idx)}) {option}
                          </div>
                        ))}
                      </div>
                    ) : question.type === 'trueFalse' ? (
                      <span className="text-primary font-semibold">
                        {question.answer ? 'صح' : 'خطأ'}
                      </span>
                    ) : Array.isArray(question.answer) ? (
                      <ul className="list-disc list-inside space-y-1">
                        {question.answer.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{question.answer}</p>
                    )}
                  </div>
                </div>

                <div className="flex space-x-2 space-x-reverse">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditQuestion(question)}
                    className="font-arabic"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteQuestion(question)}
                    className="font-arabic"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {getFilteredQuestions().length === 0 && (
          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardContent className="p-12 text-center">
              <div className="text-muted-foreground font-arabic">
                <Filter className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">لا توجد أسئلة تطابق المعايير المحددة</p>
                <p className="text-sm">جرب تغيير فلاتر البحث أو إضافة أسئلة جديدة</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default QuestionManager;

