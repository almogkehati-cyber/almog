'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SecuritySetupPage() {
  const router = useRouter();

  return (
    <div 
      className="w-full min-h-screen flex flex-col items-center relative overflow-hidden"
      style={{ 
        backgroundColor: '#121222', 
        color: '#e3e0f8',
        fontFamily: 'Manrope, sans-serif',
        minHeight: 'max(884px, 100dvh)'
      }}
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#7b2fbe]/20 blur-[100px] rounded-full -z-10" />
      <div className="fixed top-0 right-0 w-96 h-96 bg-[#deb7ff]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-80 h-80 bg-[#d7baff]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 flex-row-reverse bg-transparent">
        <div 
          className="text-[#deb7ff] font-bold text-2xl tracking-tighter"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          TESFA
        </div>
        <Link href="/otp">
          <button className="text-[#deb7ff] hover:opacity-80 transition-opacity duration-200 active:scale-90 flex items-center justify-center p-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </Link>
      </nav>

      {/* Main Content */}
      <main className="w-full px-6 pt-24 pb-12 flex flex-col flex-grow items-center justify-center text-right">
        {/* Header Section */}
        <header className="w-full mb-12">
          <h1 
            className="font-bold text-4xl text-[#e3e0f8] mb-4 leading-tight"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            הגדרות אבטחה
          </h1>
          <p className="text-[#cfc2d5] text-lg">
            בחר כיצד תרצה לאבטח את הארנק שלך
          </p>
        </header>

        {/* Security Options */}
        <div className="w-full grid grid-cols-1 gap-6 mb-12">
          {/* Biometric Option */}
          <button 
            onClick={() => {
              localStorage.setItem('isLoggedIn', 'true');
              router.push('/home');
            }}
            className="w-full p-6 rounded-2xl text-right group flex items-center justify-between transition-all duration-300 active:scale-95 border border-[#4c4353]/10 hover:border-[#deb7ff]/40"
            style={{ 
              background: 'rgba(30, 30, 47, 0.6)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)'
            }}
          >
            <div className="flex flex-col">
              <h3 
                className="font-bold text-xl text-[#e3e0f8] mb-1"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                זיהוי ביומטרי
              </h3>
              <p className="text-sm text-[#cfc2d5]">
                שימוש בטביעת אצבע או זיהוי פנים
              </p>
            </div>
            <div className="w-14 h-14 rounded-full bg-[#7b2fbe]/30 flex items-center justify-center text-[#deb7ff] group-hover:bg-[#7b2fbe] transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"/>
              </svg>
            </div>
          </button>

          {/* PIN Option */}
          <button 
            onClick={() => router.push('/pin-setup')}
            className="w-full p-6 rounded-2xl text-right group flex items-center justify-between transition-all duration-300 active:scale-95 border border-[#4c4353]/10 hover:border-[#deb7ff]/40"
            style={{ 
              background: 'rgba(30, 30, 47, 0.6)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)'
            }}
          >
            <div className="flex flex-col">
              <h3 
                className="font-bold text-xl text-[#e3e0f8] mb-1"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                קוד PIN
              </h3>
              <p className="text-sm text-[#cfc2d5]">
                הגדרת קוד גישה אישי מאובטח
              </p>
            </div>
            <div className="w-14 h-14 rounded-full bg-[#333345] flex items-center justify-center text-[#cfc2d5] group-hover:bg-[#7b2fbe]/50 group-hover:text-[#deb7ff] transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"/>
              </svg>
            </div>
          </button>
        </div>

        {/* Footer Actions */}
        <footer className="w-full mt-auto flex flex-col items-center gap-6">
          <button 
            onClick={() => router.push('/home')}
            className="font-semibold text-[#deb7ff]/80 hover:text-[#deb7ff] transition-colors py-2 px-8 active:scale-95 duration-200"
          >
            דלג לעת עתה
          </button>
          <div className="flex gap-1.5">
            <div className="w-12 h-1 rounded-full bg-[#deb7ff]" />
            <div className="w-2 h-1 rounded-full bg-[#333345]" />
            <div className="w-2 h-1 rounded-full bg-[#333345]" />
          </div>
        </footer>
      </main>
    </div>
  );
}
