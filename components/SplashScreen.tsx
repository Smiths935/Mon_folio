'use client'
import { useEffect, useState } from 'react';
import { Code } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [progress, setProgress] = useState(0);

  const { language } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => Math.min(prev + 1, 100));
      } else {
        onComplete();
      }
    }, 20);

    return () => clearTimeout(timer);
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br dark:from-blue-600 dark:to-blue-800 from-gray-900 to-blue-900 flex items-center justify-center z-50">
      <div className="text-center space-y-6">
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 rounded-full border-4 border-blue-200 dark:border-blue-700 animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Code size={48} className="text-white animate-bounce-slow animate-ping" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white tracking-wider animate-fadeIn">
            Yvan FOTSO
          </h1>
          <p className="text-blue-100 dark:text-blue-200 text-lg animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            {
              language === 'en' ? "Full-stack Developer" : "Développeur Full-stack"
            }
          </p>
        </div>

        <div className="w-64 h-2 bg-blue-200 dark:bg-blue-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-blue-100 text-sm animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          {
            language === 'en' ? "Loading your experience..." : "Chargement de l'expérience"
          }
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;