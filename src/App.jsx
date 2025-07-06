import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import ResultsPage from './components/ResultsPage';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [quizResults, setQuizResults] = useState(null);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  useEffect(() => {
    // Check if admin is already authenticated
    const adminAuth = localStorage.getItem('adminAuthenticated');
    if (adminAuth === 'true') {
      setIsAdminAuthenticated(true);
    }
  }, []);

  const handleStartQuiz = () => {
    setCurrentPage('quiz');
  };

  const handleQuizComplete = (results) => {
    setQuizResults(results);
    setCurrentPage('results');
  };

  const handleRetakeQuiz = () => {
    setQuizResults(null);
    setCurrentPage('quiz');
  };

  const handleGoHome = () => {
    setQuizResults(null);
    setCurrentPage('home');
  };

  const handleAdminLogin = (authenticated) => {
    setIsAdminAuthenticated(authenticated);
    if (authenticated) {
      setCurrentPage('admin');
    }
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    setCurrentPage('home');
  };

  const handleShowAdmin = () => {
    if (isAdminAuthenticated) {
      setCurrentPage('admin');
    } else {
      setCurrentPage('adminLogin');
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onStartQuiz={handleStartQuiz} />;
      case 'quiz':
        return <QuizPage onQuizComplete={handleQuizComplete} />;
      case 'results':
        return (
          <ResultsPage 
            results={quizResults} 
            onRetakeQuiz={handleRetakeQuiz}
            onGoHome={handleGoHome}
          />
        );
      case 'adminLogin':
        return <AdminLogin onLogin={handleAdminLogin} />;
      case 'admin':
        return <AdminDashboard onLogout={handleAdminLogout} />;
      default:
        return <HomePage onStartQuiz={handleStartQuiz} />;
    }
  };

  return (
    <div className="App">
      {/* Admin Access Button - Only show on home page */}
      {currentPage === 'home' && (
        <div className="fixed top-4 left-4 z-50">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleShowAdmin}
            className="bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card/90"
          >
            <Shield className="w-4 h-4 ml-2" />
            <span className="font-arabic text-xs">لوحة التحكم</span>
          </Button>
        </div>
      )}
      
      {renderCurrentPage()}
    </div>
  );
}

export default App;
