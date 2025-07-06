import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { 
  ChevronRight, 
  ChevronLeft, 
  Clock, 
  CheckCircle, 
  XCircle, 
  BookOpen,
  Target,
  Award
} from 'lucide-react';
import { createMixedQuiz } from '../data/questions';
import { 
  AchievementNotification, 
  ProgressCelebration, 
  StreakCounter, 
  EncouragementMessage,
  achievements 
} from './MotivationalElements';
import '../App.css';

const QuizPage = ({ onQuizComplete }) => {
  const [questions] = useState(() => createMixedQuiz(20));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  
  // Motivational elements state
  const [streak, setStreak] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [newAchievement, setNewAchievement] = useState(null);
  const [celebrationMessage, setCelebrationMessage] = useState(null);
  const [encouragementMessage, setEncouragementMessage] = useState(null);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle answer selection with motivational feedback
  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: answer
    };
    setAnswers(newAnswers);
    
    // Check if this is a new answer
    if (answers[currentQuestion.id] === undefined) {
      setTotalAnswered(prev => prev + 1);
      
      // Check if answer is correct
      let isCorrect = false;
      if (currentQuestion.type === 'multipleChoice') {
        isCorrect = answer === currentQuestion.correctAnswer;
      } else if (currentQuestion.type === 'trueFalse') {
        isCorrect = answer === currentQuestion.answer;
      }
      
      if (isCorrect) {
        setCorrectAnswers(prev => prev + 1);
        setStreak(prev => prev + 1);
        setEncouragementMessage('correct');
        
        // Check for streak celebrations
        if ((streak + 1) % 3 === 0) {
          setCelebrationMessage(`رائع! ${streak + 1} إجابات صحيحة متتالية!`);
        }
      } else {
        setStreak(0);
        setEncouragementMessage('incorrect');
      }
      
      // Check for new achievements
      checkAchievements({
        answered: totalAnswered + 1,
        correct: isCorrect ? correctAnswers + 1 : correctAnswers,
        streak: isCorrect ? streak + 1 : 0,
        percentage: ((isCorrect ? correctAnswers + 1 : correctAnswers) / (totalAnswered + 1)) * 100,
        timeElapsed
      });
    }
  };

  // Handle text input for definition and enumerate questions
  const handleTextAnswer = (text) => {
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: text
    };
    setAnswers(newAnswers);
    
    // Check if this is a new substantial answer
    if (answers[currentQuestion.id] === undefined && text.trim().length > 10) {
      setTotalAnswered(prev => prev + 1);
      setCorrectAnswers(prev => prev + 1); // Give credit for text answers
      setEncouragementMessage('correct');
      
      checkAchievements({
        answered: totalAnswered + 1,
        correct: correctAnswers + 1,
        streak: streak + 1,
        percentage: ((correctAnswers + 1) / (totalAnswered + 1)) * 100,
        timeElapsed
      });
    }
  };

  // Check for achievements
  const checkAchievements = (stats) => {
    achievements.forEach(achievement => {
      if (achievement.requirement(stats)) {
        // Check if this achievement is new
        const existingAchievements = JSON.parse(localStorage.getItem('achievements') || '[]');
        if (!existingAchievements.includes(achievement.id)) {
          setNewAchievement(achievement);
          existingAchievements.push(achievement.id);
          localStorage.setItem('achievements', JSON.stringify(existingAchievements));
        }
      }
    });
  };

  // Navigate to next question
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(answers[questions[currentQuestionIndex + 1]?.id] || null);
      setShowResult(false);
    } else {
      // Quiz completed
      completeQuiz();
    }
  };

  // Navigate to previous question
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(answers[questions[currentQuestionIndex - 1]?.id] || null);
      setShowResult(false);
    }
  };

  // Show answer for current question
  const handleShowAnswer = () => {
    setShowResult(true);
  };

  // Complete quiz and calculate results
  const completeQuiz = () => {
    const results = calculateResults();
    onQuizComplete({
      answers,
      questions,
      timeElapsed,
      ...results
    });
  };

  // Calculate quiz results
  const calculateResults = () => {
    let correctAnswers = 0;
    let totalAnswered = 0;

    questions.forEach(question => {
      const userAnswer = answers[question.id];
      if (userAnswer !== undefined && userAnswer !== null && userAnswer !== '') {
        totalAnswered++;
        
        if (question.type === 'multipleChoice') {
          if (userAnswer === question.correctAnswer) {
            correctAnswers++;
          }
        } else if (question.type === 'trueFalse') {
          if (userAnswer === question.answer) {
            correctAnswers++;
          }
        } else if (question.type === 'definition' || question.type === 'enumerate') {
          // For text answers, we'll give credit if they provided an answer
          // In a real implementation, you might want more sophisticated checking
          if (userAnswer.trim().length > 10) {
            correctAnswers++;
          }
        }
      }
    });

    const percentage = totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0;
    
    return {
      correctAnswers,
      totalAnswered,
      totalQuestions: questions.length,
      percentage
    };
  };

  // Render question based on type
  const renderQuestion = () => {
    const userAnswer = answers[currentQuestion.id];

    switch (currentQuestion.type) {
      case 'multipleChoice':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold font-arabic mb-6 leading-relaxed">
              {currentQuestion.question}
            </h3>
            <div className="grid gap-3">
              {currentQuestion.options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedAnswer === index ? "default" : "outline"}
                  className={`answer-btn p-4 h-auto text-right justify-start font-arabic text-base leading-relaxed ${
                    showResult 
                      ? index === currentQuestion.correctAnswer 
                        ? 'correct' 
                        : selectedAnswer === index 
                          ? 'incorrect' 
                          : ''
                      : ''
                  }`}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                >
                  <span className="font-english ml-2">{String.fromCharCode(65 + index)})</span>
                  {option}
                </Button>
              ))}
            </div>
          </div>
        );

      case 'trueFalse':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold font-arabic mb-6 leading-relaxed">
              {currentQuestion.question}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant={selectedAnswer === true ? "default" : "outline"}
                className={`answer-btn p-6 font-arabic text-lg ${
                  showResult 
                    ? currentQuestion.answer === true 
                      ? 'correct' 
                      : selectedAnswer === true 
                        ? 'incorrect' 
                        : ''
                    : ''
                }`}
                onClick={() => handleAnswerSelect(true)}
                disabled={showResult}
              >
                <CheckCircle className="w-5 h-5 ml-2" />
                صح
              </Button>
              <Button
                variant={selectedAnswer === false ? "default" : "outline"}
                className={`answer-btn p-6 font-arabic text-lg ${
                  showResult 
                    ? currentQuestion.answer === false 
                      ? 'correct' 
                      : selectedAnswer === false 
                        ? 'incorrect' 
                        : ''
                    : ''
                }`}
                onClick={() => handleAnswerSelect(false)}
                disabled={showResult}
              >
                <XCircle className="w-5 h-5 ml-2" />
                خطأ
              </Button>
            </div>
          </div>
        );

      case 'definition':
      case 'enumerate':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold font-arabic mb-6 leading-relaxed">
              {currentQuestion.question}
            </h3>
            <Textarea
              placeholder="اكتب إجابتك هنا..."
              value={userAnswer || ''}
              onChange={(e) => handleTextAnswer(e.target.value)}
              className="min-h-32 font-arabic text-base"
              disabled={showResult}
            />
            {showResult && (
              <Card className="bg-primary/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary font-arabic text-lg">الإجابة النموذجية:</CardTitle>
                </CardHeader>
                <CardContent>
                  {Array.isArray(currentQuestion.answer) ? (
                    <ul className="space-y-2 font-arabic">
                      {currentQuestion.answer.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary ml-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="font-arabic leading-relaxed">{currentQuestion.answer}</p>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-muted py-8 px-4">
      {/* Motivational Elements */}
      {newAchievement && (
        <AchievementNotification 
          achievement={newAchievement} 
          onClose={() => setNewAchievement(null)} 
        />
      )}
      
      {celebrationMessage && (
        <ProgressCelebration 
          message={celebrationMessage} 
          type="success"
          onClose={() => setCelebrationMessage(null)}
        />
      )}
      
      {encouragementMessage && (
        <EncouragementMessage 
          type={encouragementMessage} 
          onClose={() => setEncouragementMessage(null)} 
        />
      )}
      
      <StreakCounter streak={streak} />

      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-4 space-x-reverse">
              <BookOpen className="w-6 h-6 text-primary" />
              <h1 className="text-2xl font-bold font-arabic">اختبار الأمن السيبراني</h1>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse text-sm">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="font-english">{formatTime(timeElapsed)}</span>
              </div>
              <Badge variant="outline" className="font-arabic">
                السؤال {currentQuestionIndex + 1} من {questions.length}
              </Badge>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground font-arabic">
              <span>التقدم</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Question Card */}
        <Card className="question-card bg-card/80 backdrop-blur-sm border-border/50 mb-8">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <Badge variant="secondary" className="font-arabic">
                  {currentQuestion.category}
                </Badge>
                <Badge variant="outline" className="font-arabic">
                  {currentQuestion.type === 'multipleChoice' && 'اختيارات متعددة'}
                  {currentQuestion.type === 'trueFalse' && 'صح وخطأ'}
                  {currentQuestion.type === 'definition' && 'تعريف'}
                  {currentQuestion.type === 'enumerate' && 'عدد'}
                </Badge>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Target className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground font-english">
                  {currentQuestionIndex + 1}/{questions.length}
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {renderQuestion()}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="font-arabic"
          >
            <ChevronRight className="w-4 h-4 ml-2" />
            السابق
          </Button>

          <div className="flex space-x-4 space-x-reverse">
            {!showResult && answers[currentQuestion.id] !== undefined && (
              <Button
                variant="secondary"
                onClick={handleShowAnswer}
                className="font-arabic"
              >
                <Award className="w-4 h-4 ml-2" />
                عرض الإجابة
              </Button>
            )}
            
            <Button
              onClick={handleNext}
              disabled={!answers[currentQuestion.id] && answers[currentQuestion.id] !== false}
              className="font-arabic"
            >
              {currentQuestionIndex === questions.length - 1 ? 'إنهاء الاختبار' : 'التالي'}
              <ChevronLeft className="w-4 h-4 mr-2" />
            </Button>
          </div>
        </div>

        {/* Question Navigation */}
        <Card className="mt-8 bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="font-arabic text-lg">التنقل السريع</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-10 gap-2">
              {questions.map((_, index) => (
                <Button
                  key={index}
                  variant={index === currentQuestionIndex ? "default" : "outline"}
                  size="sm"
                  className={`aspect-square p-0 font-english ${
                    answers[questions[index].id] !== undefined ? 'bg-primary/20' : ''
                  }`}
                  onClick={() => {
                    setCurrentQuestionIndex(index);
                    setSelectedAnswer(answers[questions[index].id] || null);
                    setShowResult(false);
                  }}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuizPage;

