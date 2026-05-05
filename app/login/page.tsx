'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [pin, setPin] = useState('');

  const handleNumberPress = (num: string) => {
    if (pin.length < 4) {
      const newPin = pin + num;
      setPin(newPin);
      
      if (newPin.length === 4) {
        setTimeout(() => {
          localStorage.setItem('isLoggedIn', 'true');
          router.push('/home');
        }, 150);
      }
    }
  };

  const handleBackspace = () => {
    setPin(prev => prev.slice(0, -1));
  };

  return (
    <div 
      className="w-full min-h-screen flex flex-col overflow-hidden relative"
      style={{ 
        backgroundColor: '#0A0A1A', 
        color: '#e3e0f8',
        fontFamily: 'Manrope, sans-serif'
      }}
    >
      {/* Background Layers */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-[#0A0A1A]/50 to-[#0A0A1A] pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#deb7ff]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#6107ba]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header / Logo */}
      <header className="relative z-10 flex flex-col items-center pt-12 pb-8">
        <div className="w-16 h-16 bg-[#7b2fbe]/20 rounded-full flex items-center justify-center mb-3">
          <svg className="w-10 h-10 text-[#deb7ff]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
          </svg>
        </div>
        <h1 
          className="text-[#deb7ff] font-bold text-3xl tracking-tighter"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          TESFA
        </h1>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col items-center px-6">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 
            className="text-2xl font-bold text-[#e3e0f8] mb-2"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            הזן קוד PIN
          </h2>
          <p className="text-[#cfc2d5] text-sm">
            השתמש בקוד האישי שלך לגישה מהירה
          </p>
        </div>

        {/* PIN Dots Display */}
        <div className="flex gap-6 mb-8 items-center justify-center">
          {[0, 1, 2, 3].map((index) => (
            <div 
              key={index}
              className="w-4 h-4 rounded-full transition-all duration-200"
              style={{
                backgroundColor: index < pin.length ? '#deb7ff' : '#4c4353',
                boxShadow: index < pin.length ? '0 0 12px #deb7ff' : 'none'
              }}
            />
          ))}
        </div>

        {/* Biometric Button */}
        <button className="mb-8 flex items-center gap-3 px-6 py-3 rounded-full bg-[#1C1C2E] border border-[#4c4353]/30 text-[#deb7ff] transition-all active:scale-95">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28z"/>
          </svg>
          <span className="font-medium">התחברות ביומטרית</span>
        </button>

        {/* Forgot PIN Link */}
        <div className="mb-12">
          <a className="text-[#deb7ff] text-sm font-medium hover:underline decoration-1 underline-offset-4" href="#">
            שכחת את קוד ה-PIN?
          </a>
        </div>

        {/* Numeric Keypad */}
        <div className="w-full max-w-xs grid grid-cols-3 gap-y-4 gap-x-6 pb-12">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button 
              key={num}
              onClick={() => handleNumberPress(num.toString())}
              className="w-16 h-16 mx-auto rounded-full bg-[#1e1e2f] flex items-center justify-center text-2xl font-semibold text-[#e3e0f8] hover:bg-[#29283a] active:scale-90 transition-all"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              {num}
            </button>
          ))}
          
          {/* Bottom Row */}
          <div className="flex items-center justify-center">
            <button className="w-16 h-16 flex items-center justify-center text-[#cfc2d5] active:scale-90 transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/>
              </svg>
            </button>
          </div>
          <button 
            onClick={() => handleNumberPress('0')}
            className="w-16 h-16 mx-auto rounded-full bg-[#1e1e2f] flex items-center justify-center text-2xl font-semibold text-[#e3e0f8] hover:bg-[#29283a] active:scale-90 transition-all"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            0
          </button>
          <div className="flex items-center justify-center">
            <button 
              onClick={handleBackspace}
              className="w-16 h-16 flex items-center justify-center text-[#cfc2d5] active:scale-90 transition-all"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
              </svg>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full py-8 text-center mt-auto">
        <p className="text-[#cfc2d5] text-sm">
          לא המשתמש שלך?{' '}
          <Link href="/register" className="text-[#deb7ff] font-bold mr-1 hover:underline decoration-2 underline-offset-4">
            החלף חשבון
          </Link>
        </p>
      </footer>
    </div>
  );
}
