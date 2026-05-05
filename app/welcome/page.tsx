'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function WelcomePage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('hasSeenWelcome', 'true');
    }
  }, []);

  return (
    <div 
      className="w-full max-w-[430px] mx-auto min-h-screen flex flex-col items-center justify-between p-8 text-right relative overflow-hidden"
      style={{ 
        backgroundColor: '#0A0A1A', 
        color: '#e3e0f8',
        fontFamily: 'Manrope, sans-serif',
        minHeight: 'max(884px, 100dvh)'
      }}
    >
      {/* Celestial Glow */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle at 50% -20%, rgba(123, 47, 190, 0.15) 0%, rgba(10, 10, 26, 0) 60%)' 
        }} 
      />
      
      {/* Background Details */}
      <div className="fixed bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#6107ba]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed top-[20%] right-[-5%] w-[30%] h-[30%] bg-[#7b2fbe]/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 flex-row-reverse bg-transparent max-w-[430px] mx-auto">
        <div 
          className="text-[#deb7ff] font-bold text-2xl tracking-tighter"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          TESFA
        </div>
        <button className="text-[#deb7ff] hover:opacity-80 transition-opacity duration-200 active:scale-90">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </header>

      {/* Hero Content */}
      <main className="flex-1 flex flex-col items-center justify-center w-full z-10 text-center mt-20">
        {/* Visual Anchor: Floating Card */}
        <div className="relative w-64 h-64 mb-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#7b2fbe] opacity-20 blur-[80px] rounded-full" />
          <div 
            className="relative w-48 h-48 rounded-xl bg-[#29283a]/60 flex items-center justify-center shadow-2xl border border-[#4c4353]/10"
            style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#7b2fbe] to-[#6107ba] flex items-center justify-center shadow-[0_0_40px_rgba(123,47,190,0.4)]">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
              </svg>
            </div>
          </div>
          {/* Floating Accessory */}
          <div 
            className="absolute -bottom-4 -right-4 w-16 h-16 rounded-lg bg-[#333345]/80 flex items-center justify-center border border-[#4c4353]/20 shadow-lg"
            style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
          >
            <svg className="w-6 h-6 text-[#deb7ff]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z" />
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          <h1 
            className="text-4xl font-extrabold tracking-tight text-[#e3e0f8]"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            TESFA
          </h1>
          <p className="text-lg font-medium text-[#cfc2d5]">
            המטבע של הקהילה
          </p>
        </div>
      </main>

      {/* Action Section */}
      <footer className="w-full space-y-6 z-10 mb-8">
        <div className="flex flex-col gap-4">
          {/* Primary Button */}
          <Link href="/register" className="w-full">
            <button 
              className="w-full py-5 rounded-full bg-gradient-to-l from-[#7B2FBE] to-[#9B59F5] text-white font-bold text-lg shadow-[0_8px_30px_rgba(123,47,190,0.3)] transition-all active:scale-[0.98] active:brightness-110"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              הרשמה
            </button>
          </Link>
          
          {/* Secondary Button */}
          <Link href="/login" className="w-full">
            <button 
              className="w-full py-5 rounded-full bg-transparent border border-[#deb7ff]/40 text-[#deb7ff] font-bold text-lg hover:bg-[#deb7ff]/5 transition-all active:scale-[0.98]"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              התחברות
            </button>
          </Link>
        </div>

        {/* Language Selector */}
        <div className="flex items-center justify-center gap-2 pt-4">
          <button 
            className="flex items-center gap-2 text-[#cfc2d5] hover:text-[#deb7ff] transition-colors py-2 px-4 rounded-full bg-[#1a1a2b]/50"
            style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-semibold">עברית</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
}
