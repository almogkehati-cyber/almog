'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { colors } from '@/lib/colors';
import BackgroundOrbs from '@/components/BackgroundOrbs';

export default function LoginPage() {
  const router = useRouter();
  const [pin, setPin] = useState('');

  const handleNumberPress = (num: string) => {
    if (pin.length < 6) {
      const newPin = pin + num;
      setPin(newPin);
      
      if (newPin.length === 6) {
        setTimeout(() => {
          if (typeof window !== 'undefined') {
            localStorage.setItem('isLoggedIn', 'true');
          }
          router.push('/home');
        }, 100);
      }
    }
  };

  const handleBackspace = () => {
    setPin(prev => prev.slice(0, -1));
  };

  return (
    <div 
      className="flex flex-col min-h-screen overflow-hidden relative"
      style={{ backgroundColor: colors.background, color: colors.onSurface }}
    >
      <BackgroundOrbs />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 h-16 mt-4">
        <Link href="/welcome">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: colors.onSurface }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-lg font-bold font-headline" style={{ color: colors.onSurface }}>התחברות</h1>
        <div className="w-6" />
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6">
        <div 
          className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: `${colors.primaryContainer}33` }}
        >
          <span className="text-4xl">🔐</span>
        </div>

        <h2 className="text-2xl font-bold mb-2 font-headline" style={{ color: colors.onSurface }}>
          הזן קוד PIN
        </h2>
        <p className="text-sm text-center mb-8" style={{ color: colors.onSurfaceVariant }}>
          הזן את קוד ה-PIN שלך להתחברות
        </p>

        {/* Mock Mode Notice */}
        <div 
          className="w-full max-w-[400px] text-center py-3 px-4 rounded-xl mb-6"
          style={{ 
            backgroundColor: `${colors.success}1A`,
            color: colors.success,
          }}
        >
          🎭 מצב דמה - כל קוד יתקבל
        </div>

        {/* PIN Display */}
        <div className="flex justify-center gap-3 mb-8">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full transition-all"
              style={{
                backgroundColor: index < pin.length ? colors.primary : colors.surfaceContainerHigh,
                boxShadow: index < pin.length ? `0 0 12px ${colors.primary}80` : 'none',
              }}
            />
          ))}
        </div>

        {/* Numeric Keypad */}
        <div className="w-full max-w-[320px] grid grid-cols-3 gap-4 mb-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberPress(num.toString())}
              className="aspect-square rounded-full text-2xl font-bold transition-all active:scale-95 font-headline"
              style={{
                backgroundColor: colors.surfaceContainerHigh,
                color: colors.onSurface,
              }}
            >
              {num}
            </button>
          ))}
          <div />
          <button
            onClick={() => handleNumberPress('0')}
            className="aspect-square rounded-full text-2xl font-bold transition-all active:scale-95 font-headline"
            style={{
              backgroundColor: colors.surfaceContainerHigh,
              color: colors.onSurface,
            }}
          >
            0
          </button>
          <button
            onClick={handleBackspace}
            className="aspect-square rounded-full flex items-center justify-center transition-all active:scale-95"
            style={{
              backgroundColor: colors.surfaceContainerHigh,
              color: colors.onSurfaceVariant,
            }}
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
            </svg>
          </button>
        </div>

        <p className="text-center text-sm mt-4" style={{ color: colors.onSurfaceVariant }}>
          אין לך חשבון?{' '}
          <Link href="/register" className="font-bold" style={{ color: colors.primary }}>
            הירשם
          </Link>
        </p>
      </main>
    </div>
  );
}
