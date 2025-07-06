import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy, 
  Star, 
  Target, 
  Zap, 
  Award, 
  Crown,
  Flame,
  Heart,
  ThumbsUp,
  Sparkles
} from 'lucide-react';

// Achievement system
export const achievements = [
  {
    id: 'first_question',
    title: 'البداية الجيدة',
    description: 'أجبت على أول سؤال',
    icon: Target,
    color: 'text-primary',
    requirement: (stats) => stats.answered >= 1
  },
  {
    id: 'five_correct',
    title: 'متعلم نشط',
    description: 'أجبت على 5 أسئلة بشكل صحيح',
    icon: Star,
    color: 'text-chart-4',
    requirement: (stats) => stats.correct >= 5
  },
  {
    id: 'ten_questions',
    title: 'مثابر',
    description: 'أجبت على 10 أسئلة',
    icon: Zap,
    color: 'text-accent',
    requirement: (stats) => stats.answered >= 10
  },
  {
    id: 'perfect_streak',
    title: 'متميز',
    description: 'أجبت على 5 أسئلة متتالية بشكل صحيح',
    icon: Flame,
    color: 'text-destructive',
    requirement: (stats) => stats.streak >= 5
  },
  {
    id: 'quiz_master',
    title: 'خبير الأمن السيبراني',
    description: 'حصلت على 90% أو أكثر',
    icon: Crown,
    color: 'text-chart-5',
    requirement: (stats) => stats.percentage >= 90
  }
];

// Motivational messages
export const motivationalMessages = {
  correct: [
    'ممتاز! إجابة صحيحة 🎉',
    'رائع! أنت على الطريق الصحيح ⭐',
    'أحسنت! معرفتك قوية 💪',
    'عظيم! استمر هكذا 🚀',
    'بارك الله فيك! إجابة مثالية ✨',
    'ممتاز جداً! أنت تتقدم بشكل رائع 🌟'
  ],
  incorrect: [
    'لا بأس، التعلم من الأخطاء مهم 📚',
    'محاولة جيدة، راجع المفهوم مرة أخرى 🔄',
    'لا تيأس، كل خطأ درس جديد 💡',
    'استمر في المحاولة، أنت تتحسن 📈',
    'الأخطاء جزء من التعلم، واصل 🎯',
    'لا تقلق، المهم أن تتعلم شيئاً جديداً 🌱'
  ],
  encouragement: [
    'أنت تقوم بعمل رائع! 👏',
    'معرفتك في الأمن السيبراني تتطور 🛡️',
    'استمر في هذا الأداء المميز 🏆',
    'أنت على بعد خطوات من إتقان المادة 🎓',
    'كل سؤال يجعلك أقوى في المجال 💪',
    'أداؤك يحسن من مستواك باستمرار 📊'
  ]
};

// Achievement notification component
export const AchievementNotification = ({ achievement, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-500">
      <Card className="bg-gradient-to-r from-primary to-accent border-primary/20 shadow-2xl">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="bg-white/20 rounded-full p-3">
              <achievement.icon className="w-8 h-8 text-white" />
            </div>
            <div className="text-white">
              <div className="font-bold font-arabic text-lg">🎉 إنجاز جديد!</div>
              <div className="font-arabic font-semibold">{achievement.title}</div>
              <div className="text-sm opacity-90 font-arabic">{achievement.description}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Progress celebration component
export const ProgressCelebration = ({ message, type = 'success' }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const bgColor = type === 'success' ? 'bg-success-gradient' : 'bg-accent/10';
  const textColor = type === 'success' ? 'text-white' : 'text-foreground';

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-in zoom-in duration-300">
      <Card className={`${bgColor} border-none shadow-2xl`}>
        <CardContent className="p-6 text-center">
          <div className={`text-2xl font-bold font-arabic ${textColor} mb-2`}>
            {message}
          </div>
          {type === 'success' && (
            <div className="flex justify-center space-x-1 space-x-reverse">
              {[...Array(3)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-chart-4 fill-current animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

// Score display with animations
export const AnimatedScore = ({ score, maxScore, className = '' }) => {
  const [displayScore, setDisplayScore] = useState(0);
  const percentage = Math.round((score / maxScore) * 100);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayScore(prev => {
        if (prev < score) {
          return prev + 1;
        }
        clearInterval(timer);
        return score;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [score]);

  return (
    <div className={`text-center ${className}`}>
      <div className="text-6xl font-bold font-english mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {displayScore}/{maxScore}
      </div>
      <div className="text-2xl font-bold font-english text-muted-foreground">
        {percentage}%
      </div>
    </div>
  );
};

// Streak counter component
export const StreakCounter = ({ streak }) => {
  if (streak < 2) return null;

  return (
    <div className="fixed top-20 right-4 z-40">
      <Badge variant="secondary" className="bg-gradient-to-r from-chart-4 to-chart-5 text-white font-arabic text-lg px-4 py-2 animate-pulse-glow">
        <Flame className="w-5 h-5 ml-2" />
        {streak} متتالية
      </Badge>
    </div>
  );
};

// Encouragement messages component
export const EncouragementMessage = ({ type, onClose }) => {
  const [message] = useState(() => {
    const messages = motivationalMessages[type] || motivationalMessages.encouragement;
    return messages[Math.floor(Math.random() * messages.length)];
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 animate-in slide-in-from-bottom duration-300">
      <Card className="bg-card/90 backdrop-blur-sm border-border/50">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3 space-x-reverse">
            {type === 'correct' ? (
              <ThumbsUp className="w-6 h-6 text-primary" />
            ) : type === 'incorrect' ? (
              <Heart className="w-6 h-6 text-destructive" />
            ) : (
              <Sparkles className="w-6 h-6 text-accent" />
            )}
            <span className="font-arabic text-lg">{message}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Achievement progress bar
export const AchievementProgress = ({ userStats }) => {
  const earnedAchievements = achievements.filter(achievement => 
    achievement.requirement(userStats)
  );

  const progress = (earnedAchievements.length / achievements.length) * 100;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-arabic font-semibold">الإنجازات</h4>
        <Badge variant="outline" className="font-english">
          {earnedAchievements.length}/{achievements.length}
        </Badge>
      </div>
      
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="grid grid-cols-3 gap-2">
        {achievements.map((achievement) => {
          const isEarned = achievement.requirement(userStats);
          return (
            <div
              key={achievement.id}
              className={`p-2 rounded-lg border text-center transition-all duration-300 ${
                isEarned 
                  ? 'bg-primary/10 border-primary/20 scale-105' 
                  : 'bg-muted/50 border-border/50 opacity-50'
              }`}
            >
              <achievement.icon 
                className={`w-6 h-6 mx-auto mb-1 ${
                  isEarned ? achievement.color : 'text-muted-foreground'
                }`} 
              />
              <div className="text-xs font-arabic font-semibold">
                {achievement.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default {
  AchievementNotification,
  ProgressCelebration,
  AnimatedScore,
  StreakCounter,
  EncouragementMessage,
  AchievementProgress,
  achievements,
  motivationalMessages
};

