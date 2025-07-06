import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Lock, Eye, EyeOff } from 'lucide-react';

const AdminLogin = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate a brief loading delay for better UX
    setTimeout(() => {
      if (password === 'waheeb') {
        onLogin(true);
        localStorage.setItem('adminAuthenticated', 'true');
      } else {
        setError('كلمة المرور غير صحيحة. يرجى المحاولة مرة أخرى.');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-muted flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-4 space-x-reverse mb-4">
            <div className="relative">
              <Shield className="w-12 h-12 text-primary animate-pulse-glow" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
            </div>
            <h1 className="text-3xl font-bold font-arabic bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              لوحة التحكم
            </h1>
          </div>
          <p className="text-muted-foreground font-arabic">
            أدخل كلمة المرور للوصول إلى لوحة إدارة الأسئلة والاختبارات
          </p>
        </div>

        {/* Login Form */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="font-arabic text-xl flex items-center justify-center">
              <Lock className="w-6 h-6 ml-2 text-primary" />
              تسجيل الدخول للإدارة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="password" className="font-arabic">
                  كلمة المرور
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="أدخل كلمة المرور"
                    className="font-arabic pr-12"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription className="font-arabic">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                className="w-full font-arabic text-lg py-6"
                disabled={isLoading || !password}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>جاري التحقق...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Shield className="w-5 h-5" />
                    <span>دخول</span>
                  </div>
                )}
              </Button>
            </form>

            {/* Security Notice */}
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <div className="flex items-start space-x-3 space-x-reverse">
                <Lock className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div className="text-sm text-muted-foreground font-arabic">
                  <p className="font-semibold mb-1">ملاحظة أمنية:</p>
                  <p>
                    هذه المنطقة مخصصة للمدرسين والإداريين فقط. 
                    يرجى عدم مشاركة كلمة المرور مع الطلاب.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground font-arabic">
            منصة أنيس التعليمية - لوحة التحكم الإدارية
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

