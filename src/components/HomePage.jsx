import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Brain, Trophy, Users, BookOpen, Target } from 'lucide-react';
import '../App.css';

const HomePage = ({ onStartQuiz }) => {
  const stats = [
    { icon: BookOpen, label: 'سؤال متنوع', value: '50+', color: 'text-primary' },
    { icon: Target, label: 'موضوع مغطى', value: '4', color: 'text-accent' },
    { icon: Users, label: 'طالب مشارك', value: '1000+', color: 'text-chart-4' },
    { icon: Trophy, label: 'معدل النجاح', value: '85%', color: 'text-chart-5' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'أمان المعلومات',
      description: 'تعلم أساسيات حماية البيانات والأنظمة من التهديدات السيبرانية',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: Brain,
      title: 'تعلم تفاعلي',
      description: 'أسئلة متنوعة تشمل التعريفات والعدد وصح وخطأ والاختيارات المتعددة',
      color: 'bg-accent/10 text-accent'
    },
    {
      icon: Trophy,
      title: 'نظام التحفيز',
      description: 'احصل على نقاط وشارات إنجاز مع كل إجابة صحيحة وتقدم في المستوى',
      color: 'bg-chart-4/10 text-chart-4'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-muted">
      {/* Floating particles background */}
      <div className="particles-bg">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            {/* Logo/Brand */}
            <div className="flex justify-center items-center space-x-4 space-x-reverse">
              <div className="relative">
                <Shield className="w-16 h-16 text-primary animate-pulse-glow" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
              </div>
              <h1 className="text-6xl font-bold font-arabic bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                أنيس
              </h1>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-arabic leading-tight">
                مرحباً بك في رحلتك لإتقان
                <span className="block text-primary animate-float">الأمن السيبراني</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-arabic">
                منصة تفاعلية مصممة خصيصاً لطلاب مقرر الأمن السيبراني. اختبر معرفتك واكتشف نقاط قوتك 
                من خلال أسئلة شاملة ومتنوعة مع تجربة تعليمية ممتعة ومحفزة.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button
                onClick={onStartQuiz}
                size="lg"
                className="text-xl px-12 py-6 font-arabic font-semibold animate-pulse-glow hover:scale-105 transition-all duration-300"
              >
                <Target className="w-6 h-6 ml-2" />
                ابدأ الاختبار الآن
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardContent className="pt-6">
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-3xl font-bold font-english mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-arabic">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-arabic mb-4">لماذا تختار أنيس؟</h3>
            <p className="text-muted-foreground font-arabic max-w-2xl mx-auto">
              نوفر لك تجربة تعليمية متكاملة تجمع بين المتعة والفائدة العلمية
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="question-card bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${feature.color}`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="font-arabic text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center font-arabic text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-arabic mb-4">المواضيع المغطاة</h3>
            <p className="text-muted-foreground font-arabic">
              اختبر معرفتك في جميع جوانب الأمن السيبراني
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'مقدمة في الكمبيوتر والشبكات', icon: '💻', questions: '15 سؤال' },
              { title: 'الإنترنت', icon: '🌐', questions: '12 سؤال' },
              { title: 'أساسيات الأمن السيبراني', icon: '🔒', questions: '18 سؤال' },
              { title: 'أنواع الهجمات السيبرانية', icon: '⚠️', questions: '20 سؤال' }
            ].map((topic, index) => (
              <Card key={index} className="text-center bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/50 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">{topic.icon}</div>
                  <h4 className="font-arabic font-semibold mb-2 text-sm leading-relaxed">{topic.title}</h4>
                  <p className="text-xs text-muted-foreground font-arabic">{topic.questions}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="bg-cyber-gradient border-primary/20 p-8">
            <CardContent className="space-y-6">
              <h3 className="text-3xl font-bold font-arabic text-white">
                هل أنت مستعد للتحدي؟
              </h3>
              <p className="text-lg text-white/90 font-arabic">
                ابدأ رحلتك الآن واكتشف مدى إتقانك لمفاهيم الأمن السيبراني
              </p>
              <Button
                onClick={onStartQuiz}
                size="lg"
                variant="secondary"
                className="text-xl px-12 py-6 font-arabic font-semibold hover:scale-105 transition-all duration-300"
              >
                <Shield className="w-6 h-6 ml-2" />
                ابدأ الاختبار
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

