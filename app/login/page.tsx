'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleNumberPress = (num: string) => {
    if (pin.length < 4) {
      const newPin = pin + num;
      setPin(newPin);
      
      if (newPin.length === 4) {
        setTimeout(() => handlePinSubmit(newPin), 100);
      }
    }
  };

  const handleBackspace = () => {
    setPin(prev => prev.slice(0, -1));
    setError('');
  };

  const handlePinSubmit = (pinToCheck: string) => {
    if (typeof window !== 'undefined') {
      const savedPin = localStorage.getItem('userPin');
      if (savedPin && savedPin === pinToCheck) {
        localStorage.setItem('isLoggedIn', 'true');
        router.push('/');
      } else {
        setError('קוד PIN שגוי');
        setPin('');
      }
    }
  };

  const handleBiometric = () => {
    localStorage.setItem('isLoggedIn', 'true');
    router.push('/');
  };

  return (
    <div 
      className="flex flex-col min-h-screen overflow-hidden relative"
      style={{ backgroundColor: '#0A0A1A', color: '#e3e0f8' }}
    >
      {/* Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, rgba(123, 47, 190, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* Header / Logo */}
      <header className="relative z-10 flex flex-col items-center pt-12 pb-6">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
          style={{ backgroundColor: 'rgba(123, 47, 190, 0.3)' }}
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#deb7ff" strokeWidth={1.5}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeLinecap="round"/>
            <path d="M12 6v12M8 10l4-4 4 4M8 14l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 
          className="font-bold text-2xl tracking-tight"
          style={{ color: '#deb7ff' }}
        >
          TESFA
        </h1>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col items-center px-6">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold mb-2" style={{ color: '#e3e0f8' }}>
            הזן קוד PIN
          </h2>
          <p className="text-sm" style={{ color: '#9ca3af' }}>
            השתמש בקוד האישי שלך לגישה מהירה
          </p>
        </div>

        {/* PIN Dots - 4 dots */}
        <div className="flex justify-center gap-4 mb-8">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className="w-3.5 h-3.5 rounded-full transition-all duration-200"
              style={{
                backgroundColor: index < pin.length ? '#deb7ff' : '#4b5563',
                boxShadow: index < pin.length ? '0 0 10px rgba(222, 183, 255, 0.5)' : 'none',
              }}
            />
          ))}
        </div>

        {/* Biometric Button */}
        <button
          onClick={handleBiometric}
          className="w-full max-w-[280px] flex items-center justify-center gap-3 py-4 rounded-full mb-6 transition-all active:scale-95"
          style={{ 
            backgroundColor: 'rgba(75, 85, 99, 0.3)',
            border: '1px solid rgba(75, 85, 99, 0.5)',
          }}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#deb7ff" strokeWidth={1.5}>
            <path d="M12 11c0 1.66-1.34 3-3 3s-3-1.34-3-3c0-.55.45-1 1-1s1 .45 1 1c0 .55.45 1 1 1s1-.45 1-1c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .55-.45 1-1 1s-1-.45-1-1c0-.55-.45-1-1-1s-1 .45-1 1z"/>
            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5"/>
            <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2"/>
            <path d="M7 3.34C4.69 4.84 3 7.73 3 11"/>
          </svg>
          <span style={{ color: '#e3e0f8' }}>התחברות ביומטרית</span>
        </button>

        {/* Forgot PIN */}
        <p className="text-sm mb-6" style={{ color: '#9ca3af' }}>
          שכחת את קוד ה-PIN?
        </p>

        {/* Error Message */}
        {error && (
          <div 
            className="text-sm text-center py-3 px-4 rounded-xl mb-4 w-full max-w-[280px]"
            style={{ 
              backgroundColor: 'rgba(248, 113, 113, 0.1)',
              color: '#f87171',
            }}
          >
            {error}
          </div>
        )}

        {/* Numeric Keypad - transparent buttons */}
        <div className="w-full max-w-[280px] grid grid-cols-3 gap-y-6 gap-x-12 mb-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberPress(num.toString())}
              className="w-16 h-16 mx-auto flex items-center justify-center text-3xl font-light transition-all active:scale-90 active:opacity-70"
              style={{ color: '#e3e0f8' }}
            >
              {num}
            </button>
          ))}
          <button
            onClick={handleBackspace}
            className="w-16 h-16 mx-auto flex items-center justify-center transition-all active:scale-90"
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#9ca3af" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
            </svg>
          </button>
          <button
            onClick={() => handleNumberPress('0')}
            className="w-16 h-16 mx-auto flex items-center justify-center text-3xl font-light transition-all active:scale-90 active:opacity-70"
            style={{ color: '#e3e0f8' }}
          >
            0
          </button>
          <button
            className="w-16 h-16 mx-auto flex items-center justify-center transition-all active:scale-90"
          >
            <span className="text-2xl">😊</span>
          </button>
        </div>

        {/* Switch Account */}
        <div className="mt-auto pb-8 text-center">
          <p className="text-sm" style={{ color: '#9ca3af' }}>
            לא המשתמש שלך?{' '}
            <Link 
              href="/register"
              className="font-medium"
              style={{ color: '#deb7ff' }}
            >
              החלף חשבון
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
