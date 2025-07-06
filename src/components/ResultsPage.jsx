import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Trophy, 
  RotateCcw, 
  Home, 
  Target, 
  Clock, 
  CheckCircle, 
  XCircle,
  Star,
  Award,
  TrendingUp,
  Share2
} from 'lucide-react';
import '../App.css';

const ResultsPage = ({ results, onRetakeQuiz, onGoHome }) => {
  const { 
    correctAnswers, 
    totalAnswered, 
    totalQuestions, 
    percentage, 
    timeElapsed,
    questions,
    answers 
  } = results;

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Get performance level and message
  const getPerformanceLevel = () => {
    if (percentage >= 90) {
      return {
        level: 'ممتاز',
        message: 'أداء رائع! أنت تتقن مفاهيم الأمن السيبراني بشكل ممتاز',
        color: 'text-chart-5',
        bgColor: 'bg-chart-5/10',
        icon: Trophy,
        stars: 5
      };
    } else if (percentage >= 80) {
      return {
        level: 'جيد جداً',
        message: 'أداء جيد! لديك فهم قوي لمعظم المفاهيم',
        color: 'text-primary',
        bgColor: 'bg-primary/10',
        icon: Award,
        stars: 4
      };
    } else if (percentage >= 70) {
      return {
        level: 'جيد',
        message: 'أداء مقبول، يمكنك تحسين معرفتك أكثر',
        color: 'text-accent',
        bgColor: 'bg-accent/10',
        icon: Target,
        stars: 3
      };
    } else if (percentage >= 60) {
      return {
        level: 'مقبول',
        message: 'تحتاج لمراجعة المفاهيم الأساسية',
        color: 'text-chart-4',
        bgColor: 'bg-chart-4/10',
        icon: BookOpen,
        stars: 2
      };
    } else {
      return {
        level: 'يحتاج تحسين',
        message: 'ننصحك بمراجعة المقرر والمحاولة مرة أخرى',
        color: 'text-destructive',
        bgColor: 'bg-destructive/10',
        icon: TrendingUp,
        stars: 1
      };
    }
  };

  const performance = getPerformanceLevel();

  // Calculate category performance
  const getCategoryPerformance = () => {
    const categories = {};
    
    questions.forEach(question => {
      if (!categories[question.category]) {
        categories[question.category] = {
          total: 0,
          correct: 0,
          answered: 0
        };
      }
      
      categories[question.category].total++;
      
      const userAnswer = answers[question.id];
      if (userAnswer !== undefined && userAnswer !== null && userAnswer !== '') {
        categories[question.category].answered++;
        
        let isCorrect = false;
        if (question.type === 'multipleChoice') {
          isCorrect = userAnswer === question.correctAnswer;
        } else if (question.type === 'trueFalse') {
          isCorrect = userAnswer === question.answer;
        } else if (question.type === 'definition' || question.type === 'enumerate') {
          isCorrect = userAnswer.trim().length > 10;
        }
        
        if (isCorrect) {
          categories[question.category].correct++;
        }
      }
    });
    
    return Object.entries(categories).map(([name, data]) => ({
      name,
      percentage: data.answered > 0 ? Math.round((data.correct / data.answered) * 100) : 0,
      correct: data.correct,
      total: data.total,
      answered: data.answered
    }));
  };

  const categoryPerformance = getCategoryPerformance();

  // Share results function
  const shareResults = () => {
    const text = `لقد أكملت اختبار الأمن السيبراني في موقع أنيس!\n\nالنتيجة: ${percentage}% (${correctAnswers}/${totalAnswered})\nالمستوى: ${performance.level}\nالوقت المستغرق: ${formatTime(timeElapsed)}\n\nجرب الاختبار بنفسك!`;
    
    if (navigator.share) {
      navigator.share({
        title: 'نتيجة اختبار الأمن السيبراني - أنيس',
        text: text,
        url: window.location.origin
      });
    } else {
      navigator.clipboard.writeText(text);
      alert('تم نسخ النتيجة إلى الحافظة!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-muted py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-4 space-x-reverse mb-4">
            <performance.icon className={`w-12 h-12 ${performance.color} animate-pulse-glow`} />
            <h1 className="text-4xl font-bold font-arabic">نتائج الاختبار</h1>
          </div>
          <p className="text-muted-foreground font-arabic text-lg">
            تهانينا على إكمال اختبار الأمن السيبراني!
          </p>
        </div>

        {/* Main Results Card */}
        <Card className={`mb-8 ${performance.bgColor} border-2 border-current ${performance.color}`}>
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              {/* Performance Level */}
              <div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < performance.stars 
                          ? 'text-chart-4 fill-current' 
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <h2 className="text-3xl font-bold font-arabic mb-2">{performance.level}</h2>
                <p className="text-lg font-arabic">{performance.message}</p>
              </div>

              {/* Score Display */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold font-english mb-2">{percentage}%</div>
                  <div className="text-sm text-muted-foreground font-arabic">النسبة المئوية</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold font-english mb-2">{correctAnswers}/{totalAnswered}</div>
                  <div className="text-sm text-muted-foreground font-arabic">الإجابات الصحيحة</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold font-english mb-2">{formatTime(timeElapsed)}</div>
                  <div className="text-sm text-muted-foreground font-arabic">الوقت المستغرق</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-arabic">
                  <span>التقدم الإجمالي</span>
                  <span>{percentage}%</span>
                </div>
                <Progress value={percentage} className="h-3" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category Performance */}
        <Card className="mb-8 bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="font-arabic text-xl flex items-center">
              <BookOpen className="w-6 h-6 ml-2 text-primary" />
              الأداء حسب المواضيع
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {categoryPerformance.map((category, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-arabic font-semibold text-sm">{category.name}</h4>
                    <Badge variant="outline" className="font-english">
                      {category.correct}/{category.answered}
                    </Badge>
                  </div>
                  <Progress value={category.percentage} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground font-arabic">
                    <span>{category.percentage}% صحيح</span>
                    <span>{category.total} سؤال إجمالي</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold font-english mb-1">{correctAnswers}</div>
              <div className="text-sm text-muted-foreground font-arabic">إجابات صحيحة</div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6 text-center">
              <XCircle className="w-8 h-8 text-destructive mx-auto mb-3" />
              <div className="text-2xl font-bold font-english mb-1">{totalAnswered - correctAnswers}</div>
              <div className="text-sm text-muted-foreground font-arabic">إجابات خاطئة</div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6 text-center">
              <Target className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold font-english mb-1">{totalQuestions - totalAnswered}</div>
              <div className="text-sm text-muted-foreground font-arabic">أسئلة غير مجابة</div>
            </CardContent>
          </Card>
        </div>

        {/* Motivational Message */}
        <Card className="mb-8 bg-cyber-gradient border-primary/20">
          <CardContent className="p-6 text-center text-white">
            <Trophy className="w-12 h-12 mx-auto mb-4 text-chart-4" />
            <h3 className="text-2xl font-bold font-arabic mb-3">
              {percentage >= 80 ? 'تهانينا!' : 'استمر في التعلم!'}
            </h3>
            <p className="font-arabic text-lg leading-relaxed">
              {percentage >= 80 
                ? 'لقد أظهرت فهماً ممتازاً لمفاهيم الأمن السيبراني. استمر في هذا المستوى الرائع!'
                : 'كل محاولة هي خطوة نحو التحسن. راجع المواضيع التي تحتاج تقوية وحاول مرة أخرى!'
              }
            </p>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            onClick={onRetakeQuiz}
            size="lg"
            className="font-arabic text-lg px-8 py-3"
          >
            <RotateCcw className="w-5 h-5 ml-2" />
            إعادة الاختبار
          </Button>

          <Button
            onClick={onGoHome}
            variant="outline"
            size="lg"
            className="font-arabic text-lg px-8 py-3"
          >
            <Home className="w-5 h-5 ml-2" />
            العودة للرئيسية
          </Button>

          <Button
            onClick={shareResults}
            variant="secondary"
            size="lg"
            className="font-arabic text-lg px-8 py-3"
          >
            <Share2 className="w-5 h-5 ml-2" />
            مشاركة النتيجة
          </Button>
        </div>

        {/* Encouragement Footer */}
        <div className="text-center mt-12 space-y-4">
          <div className="flex justify-center space-x-2 space-x-reverse">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-primary rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
          <p className="text-muted-foreground font-arabic">
            شكراً لك على استخدام منصة أنيس التعليمية
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;

