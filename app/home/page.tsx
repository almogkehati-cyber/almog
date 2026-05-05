'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const [user, setUser] = useState<{fullName: string} | null>(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const savedUser = localStorage.getItem('currentUser');
    
    if (!isLoggedIn) {
      router.push('/welcome');
    } else if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      setUser({ fullName: 'משתמש' });
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('hasSeenWelcome');
    router.push('/welcome');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#121222]">
        <p className="text-[#e3e0f8]">טוען...</p>
      </div>
    );
  }

  return (
    <div 
      className="w-full min-h-screen relative overflow-hidden"
      style={{ 
        backgroundColor: '#121222',
        fontFamily: 'Manrope, sans-serif'
      }}
    >
      {/* Background Glow */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-[#deb7ff]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-80 h-80 bg-[#6107ba]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 flex flex-row-reverse justify-between items-center px-6 h-16 mt-4">
        <div className="flex items-center gap-4">
          <span 
            className="text-2xl font-black tracking-tight text-[#deb7ff]"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            TESFA
          </span>
        </div>
        <button 
          onClick={handleLogout}
          className="p-2 rounded-full transition-colors text-[#cfc2d5] hover:text-[#deb7ff]"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 pt-8 pb-32">
        <div className="mb-8">
          <h1 
            className="text-3xl font-bold mb-2 text-[#e3e0f8]"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            שלום, {user.fullName}! 👋
          </h1>
          <p className="text-lg text-[#cfc2d5]">
            ברוך הבא ל-TESFA
          </p>
        </div>

        {/* Balance Card */}
        <div 
          className="p-6 rounded-2xl mb-6 relative overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, rgba(123, 47, 190, 0.2) 0%, rgba(97, 7, 186, 0.2) 100%)',
            border: '1px solid rgba(76, 67, 83, 0.2)',
          }}
        >
          <div className="relative z-10">
            <p className="text-sm mb-2 text-[#cfc2d5]">
              היתרה שלך
            </p>
            <h2 
              className="text-4xl font-bold text-[#deb7ff]"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              2,450.00 TSF
            </h2>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button className="p-6 rounded-2xl transition-all active:scale-95 bg-[#1e1e2f]">
            <div className="text-3xl mb-2">📤</div>
            <p 
              className="font-bold text-[#e3e0f8]"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              שלח
            </p>
          </button>
          <button className="p-6 rounded-2xl transition-all active:scale-95 bg-[#1e1e2f]">
            <div className="text-3xl mb-2">📥</div>
            <p 
              className="font-bold text-[#e3e0f8]"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              קבל
            </p>
          </button>
        </div>
      </main>
    </div>
  );
}
