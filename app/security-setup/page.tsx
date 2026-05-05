'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { colors } from '@/lib/colors';
import BackgroundOrbs from '@/components/BackgroundOrbs';

export default function SecuritySetupPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<'pin' | 'biometric' | null>(null);

  const handleContinue = () => {
    if (selected === 'pin') {
      router.push('/pin-setup');
    } else if (selected === 'biometric') {
      if (typeof window !== 'undefined') {
        localStorage.setItem('isLoggedIn', 'true');
      }
      router.push('/home');
    }
  };

  return (
    <div 
      className="flex flex-col min-h-screen overflow-hidden relative"
      style={{ backgroundColor: colors.background, color: colors.onSurface }}
    >
      <BackgroundOrbs />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4">
        <Link href="/otp">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: colors.onSurface }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-lg font-bold font-headline" style={{ color: colors.onSurface }}>הגדרת אבטחה</h1>
        <div className="w-6" />
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col px-6 pt-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 font-headline" style={{ color: colors.onSurface }}>
            בחר שיטת אבטחה
          </h2>
          <p className="text-lg" style={{ color: colors.onSurfaceVariant }}>
            כיצד תרצה לאבטח את החשבון שלך?
          </p>
        </div>

        <div className="space-y-4 flex-grow">
          {/* PIN Option */}
          <button
            onClick={() => setSelected('pin')}
            className="w-full p-6 rounded-2xl transition-all text-right"
            style={{
              backgroundColor: selected === 'pin' ? `${colors.primaryContainer}33` : colors.surfaceContainer,
              border: `2px solid ${selected === 'pin' ? colors.primary : 'transparent'}`,
            }}
          >
            <div className="flex items-center gap-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${colors.primaryContainer}33` }}
              >
                <span className="text-3xl">🔐</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-1 font-headline" style={{ color: colors.onSurface }}>
                  קוד PIN
                </h3>
                <p className="text-sm" style={{ color: colors.onSurfaceVariant }}>
                  הגדר קוד בן 6 ספרות
                </p>
              </div>
              {selected === 'pin' && (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: colors.primary }}>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              )}
            </div>
          </button>

          {/* Biometric Option */}
          <button
            onClick={() => setSelected('biometric')}
            className="w-full p-6 rounded-2xl transition-all text-right"
            style={{
              backgroundColor: selected === 'biometric' ? `${colors.primaryContainer}33` : colors.surfaceContainer,
              border: `2px solid ${selected === 'biometric' ? colors.primary : 'transparent'}`,
            }}
          >
            <div className="flex items-center gap-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${colors.primaryContainer}33` }}
              >
                <span className="text-3xl">👆</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-1 font-headline" style={{ color: colors.onSurface }}>
                  ביומטרי
                </h3>
                <p className="text-sm" style={{ color: colors.onSurfaceVariant }}>
                  השתמש בטביעת אצבע או זיהוי פנים
                </p>
              </div>
              {selected === 'biometric' && (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: colors.primary }}>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              )}
            </div>
          </button>
        </div>

        <div className="mt-auto pt-8 space-y-4">
          <button
            onClick={handleContinue}
            disabled={!selected}
            className="w-full py-5 rounded-full font-bold text-lg transition-all active:scale-[0.98] font-headline disabled:opacity-50"
            style={{
              background: selected ? `linear-gradient(to left, ${colors.primaryContainer} 0%, #9B59F5 100%)` : colors.surfaceContainerHigh,
              color: '#FFFFFF',
              boxShadow: selected ? '0 8px 30px rgba(123, 47, 190, 0.3)' : 'none',
            }}
          >
            המשך
          </button>

          <button
            onClick={() => router.push('/home')}
            className="w-full py-4 rounded-full border font-semibold text-base transition-colors"
            style={{
              borderColor: `${colors.primary}40`,
              color: colors.primary,
            }}
          >
            דלג לעכשיו
          </button>
        </div>
      </main>
    </div>
  );
}
