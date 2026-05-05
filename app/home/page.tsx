'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { colors } from '@/lib/colors';
import BackgroundOrbs from '@/components/BackgroundOrbs';

export default function HomePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const savedUser = localStorage.getItem('currentUser');
      
      if (!isLoggedIn) {
        router.push('/welcome');
      } else if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    }
  }, [router]);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('hasSeenWelcome');
    }
    router.push('/welcome');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: colors.background }}>
        <p style={{ color: colors.onSurface }}>טוען...</p>
      </div>
    );
  }

  return (
    <div 
      className="max-w-[430px] mx-auto relative overflow-hidden min-h-screen"
      style={{ backgroundColor: colors.background }}
    >
      <BackgroundOrbs />

      {/* Header */}
      <header 
        className="relative z-10 flex flex-row-reverse justify-between items-center px-6 h-16 mt-4"
      >
        <div className="flex items-center gap-4">
          <span 
            className="text-2xl font-black tracking-tight font-headline"
            style={{ color: colors.primary }}
          >
            TESFA
          </span>
        </div>
        <button 
          onClick={handleLogout}
          className="p-2 rounded-full transition-colors hover:bg-opacity-10"
          style={{ color: colors.onSurfaceVariant }}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 pt-8 pb-32">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 font-headline" style={{ color: colors.onSurface }}>
            שלום, {user.fullName}! 👋
          </h1>
          <p className="text-lg" style={{ color: colors.onSurfaceVariant }}>
            ברוך הבא ל-TESFA
          </p>
        </div>

        {/* Balance Card */}
        <div 
          className="p-6 rounded-2xl mb-6 relative overflow-hidden"
          style={{ 
            background: `linear-gradient(135deg, ${colors.primaryContainer}33 0%, ${colors.secondaryContainer}33 100%)`,
            border: `1px solid ${colors.outlineVariant}33`,
          }}
        >
          <div className="relative z-10">
            <p className="text-sm mb-2" style={{ color: colors.onSurfaceVariant }}>
              היתרה שלך
            </p>
            <h2 className="text-4xl font-bold font-headline" style={{ color: colors.primary }}>
              2,450.00 TSF
            </h2>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button 
            className="p-6 rounded-2xl transition-all active:scale-95"
            style={{ backgroundColor: colors.surfaceContainer }}
          >
            <div className="text-3xl mb-2">📤</div>
            <p className="font-bold font-headline" style={{ color: colors.onSurface }}>שלח</p>
          </button>
          <button 
            className="p-6 rounded-2xl transition-all active:scale-95"
            style={{ backgroundColor: colors.surfaceContainer }}
          >
            <div className="text-3xl mb-2">📥</div>
            <p className="font-bold font-headline" style={{ color: colors.onSurface }}>קבל</p>
          </button>
        </div>
      </main>
    </div>
  );
}
