'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function WelcomePage() {
  useEffect(() => {
    localStorage.setItem('hasSeenWelcome', 'true');
  }, []);

  return (
    <div className="flex flex-col min-h-screen items-center justify-between p-8 text-right relative overflow-hidden"
      style={{ backgroundColor: '#0A0A1A', color: '#e3e0f8', fontFamily: 'Manrope, sans-serif' }}>
      
      {/* Celestial Glow */}
      <div className="absolute inset-0 pointer-events-none" 
        style={{ background: 'radial-gradient(circle at 50% -20%, rgba(123, 47, 190, 0.15) 0%, rgba(10, 10, 26, 0) 60%)' }} />
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 flex-row-reverse bg-transparent">
        <div className="font-bold text-2xl tracking-tighter" style={{ color: '#deb7ff', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          TESFA
        </div>
        <button className="transition-opacity hover:opacity-80 active:scale-90" style={{ color: '#deb7ff' }}>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </header>

      {/* Hero Content */}
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-md z-10 text-center mt-20">
        {/* Floating Card */}
        <div className="relative w-64 h-64 mb-12 flex items-center justify-center">
          <div className="absolute inset-0 opacity-20 blur-[80px] rounded-full" style={{ backgroundColor: '#7b2fbe' }} />
          <div className="relative w-48 h-48 rounded-xl flex items-center justify-center shadow-2xl"
            style={{ backgroundColor: 'rgba(41, 40, 58, 0.6)', backdropFilter: 'blur(24px)', border: '1px solid rgba(76, 67, 83, 0.1)' }}>
            <div className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(to top right, #7b2fbe, #6107ba)', boxShadow: '0 0 40px rgba(123, 47, 190, 0.4)' }}>
              <span className="material-symbols-outlined text-white text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
            </div>
          </div>
          {/* Floating Accessory */}
          <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-lg flex items-center justify-center shadow-lg"
            style={{ backgroundColor: 'rgba(51, 51, 69, 0.8)', backdropFilter: 'blur(24px)', border: '1px solid rgba(76, 67, 83, 0.2)' }}>
            <span className="material-symbols-outlined text-2xl" style={{ color: '#deb7ff' }}>star_half</span>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#e3e0f8' }}>
            TESFA
          </h1>
          <p className="text-lg md:text-xl font-medium" style={{ color: '#cfc2d5' }}>
            המטבע של הקהילה
          </p>
        </div>
      </main>

      {/* Action Section */}
      <footer className="w-full max-w-md space-y-6 z-10 mb-8">
        <div className="flex flex-col gap-4">
          {/* Primary Button: Register */}
          <Link href="/register"
            className="w-full py-5 rounded-full text-white font-bold text-lg text-center transition-all active:scale-[0.98] active:brightness-110"
            style={{ 
              background: 'linear-gradient(to left, #7B2FBE, #9B59F5)',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              boxShadow: '0 8px 30px rgba(123, 47, 190, 0.3)'
            }}>
            הרשמה
          </Link>
          
          {/* Secondary Button: Login */}
          <Link href="/login"
            className="w-full py-5 rounded-full font-bold text-lg text-center transition-all active:scale-[0.98] hover:bg-opacity-5"
            style={{ 
              backgroundColor: 'transparent',
              border: '1px solid rgba(222, 183, 255, 0.4)',
              color: '#deb7ff',
              fontFamily: 'Plus Jakarta Sans, sans-serif'
            }}>
            התחברות
          </Link>
        </div>

        {/* Language Selector */}
        <div className="flex items-center justify-center gap-2 pt-4">
          <button className="flex items-center gap-2 py-2 px-4 rounded-full transition-colors hover:text-primary"
            style={{ backgroundColor: 'rgba(26, 26, 43, 0.5)', backdropFilter: 'blur(24px)', color: '#cfc2d5' }}>
            <span className="material-symbols-outlined text-[20px]">public</span>
            <span className="text-sm font-semibold">עברית</span>
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
          </button>
        </div>
      </footer>

      {/* Background Details */}
      <div className="fixed bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] pointer-events-none" style={{ backgroundColor: 'rgba(97, 7, 186, 0.1)' }} />
      <div className="fixed top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full blur-[100px] pointer-events-none" style={{ backgroundColor: 'rgba(123, 47, 190, 0.05)' }} />
    </div>
  );
}
