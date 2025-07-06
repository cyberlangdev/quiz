import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  LogOut, 
  Plus, 
  Edit, 
  Trash2, 
  BookOpen, 
  FileText, 
  BarChart3,
  Users,
  Target,
  Clock
} from 'lucide-react';
import QuestionManager from './QuestionManager';
import QuizManager from './QuizManager';
import { questionsData as questions } from '../data/questions';

const AdminDashboard = ({ onLogout }) => {
  const [stats, setStats] = useState({
    totalQuestions: 0,
    questionsByType: {},
    questionsByCategory: {}
  });

  useEffect(() => {
    calculateStats();
  }, []);

  const calculateStats = () => {
    const allQuestions = [
      ...questions.definitions,
      ...questions.enumerations,
      ...questions.trueFalse,
      ...questions.multipleChoice
    ];

    const questionsByType = {
      'تعريف': questions.definitions.length,
      'عدد': questions.enumerations.length,
      'صح وخطأ': questions.trueFalse.length,
      'اختيارات متعددة': questions.multipleChoice.length
    };

    const questionsByCategory = {};
    allQuestions.forEach(q => {
      questionsByCategory[q.category] = (questionsByCategory[q.category] || 0) + 1;
    });

    setStats({
      totalQuestions: allQuestions.length,
      questionsByType,
      questionsByCategory
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    onLogout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-muted py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="relative">
              <Shield className="w-10 h-10 text-primary animate-pulse-glow" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
            </div>
            <div>
              <h1 className="text-3xl font-bold font-arabic">لوحة التحكم الإدارية</h1>
              <p className="text-muted-foreground font-arabic">إدارة الأسئلة والاختبارات - منصة أنيس</p>
            </div>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="font-arabic"
          >
            <LogOut className="w-4 h-4 ml-2" />
            تسجيل الخروج
          </Button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-arabic text-muted-foreground">إجمالي الأسئلة</p>
                  <p className="text-3xl font-bold font-english">{stats.totalQuestions}</p>
                </div>
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-arabic text-muted-foreground">أنواع الأسئلة</p>
                  <p className="text-3xl font-bold font-english">{Object.keys(stats.questionsByType).length}</p>
                </div>
                <FileText className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-arabic text-muted-foreground">المواضيع</p>
                  <p className="text-3xl font-bold font-english">{Object.keys(stats.questionsByCategory).length}</p>
                </div>
                <Target className="w-8 h-8 text-chart-4" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-arabic text-muted-foreground">آخر تحديث</p>
                  <p className="text-sm font-arabic">{new Date().toLocaleDateString('ar-SA')}</p>
                </div>
                <Clock className="w-8 h-8 text-chart-5" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Question Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="font-arabic">توزيع الأسئلة حسب النوع</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(stats.questionsByType).map(([type, count]) => (
                  <div key={type} className="flex justify-between items-center">
                    <span className="font-arabic">{type}</span>
                    <Badge variant="secondary" className="font-english">{count}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="font-arabic">توزيع الأسئلة حسب الموضوع</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(stats.questionsByCategory).map(([category, count]) => (
                  <div key={category} className="flex justify-between items-center">
                    <span className="font-arabic text-sm">{category}</span>
                    <Badge variant="outline" className="font-english">{count}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="questions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="questions" className="font-arabic">
              <BookOpen className="w-4 h-4 ml-2" />
              إدارة الأسئلة
            </TabsTrigger>
            <TabsTrigger value="quizzes" className="font-arabic">
              <FileText className="w-4 h-4 ml-2" />
              إدارة الاختبارات
            </TabsTrigger>
          </TabsList>

          <TabsContent value="questions">
            <QuestionManager onStatsUpdate={calculateStats} />
          </TabsContent>

          <TabsContent value="quizzes">
            <QuizManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;

