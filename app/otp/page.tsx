'use client';

export const dynamic = 'force-dynamic';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const colors = {
  primary: '#deb7ff',
  primaryContainer: '#7b2fbe',
  secondaryContainer: '#6107ba',
  surfaceContainerHigh: '#1C1C2E',
  surfaceContainerLow: '#0F0F1F',
  onSurface: '#e3e0f8',
  onSurfaceVariant: '#cfc2d5',
  outlineVariant: '#4c4353',
  background: '#0A0A1A',
  error: '#f87171',
  success: '#4ade80',
};

export default function OtpPage() {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every(digit => digit !== '')) {
      setTimeout(() => router.push('/pin-setup'), 500);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div 
      className="flex flex-col min-h-screen overflow-hidden relative"
      style={{ backgroundColor: colors.background, color: colors.onSurface }}
    >
      {/* Background Glow */}
      <div 
        className="absolute top-0 right-0 w-[256px] h-[256px] rounded-full pointer-events-none"
        style={{ 
          backgroundColor: `${colors.primary}1A`,
          filter: 'blur(100px)',
        }}
      />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 h-16 mt-4">
        <Link href="/register">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: colors.onSurface }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-lg font-bold" style={{ color: colors.onSurface }}>אימות OTP</h1>
        <div className="w-6" />
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6">
        {/* Icon */}
        <div 
          className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: `${colors.primaryContainer}33` }}
        >
          <span className="text-4xl">📱</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-2" style={{ color: colors.onSurface }}>
          הזן את הקוד
        </h2>
        <p className="text-sm text-center mb-8" style={{ color: colors.onSurfaceVariant }}>
          שלחנו קוד בן 6 ספרות לטלפון שלך
        </p>

        {/* Mock Mode Notice */}
        <div 
          className="w-full max-w-[400px] text-center py-3 px-4 rounded-xl mb-6"
          style={{ 
            backgroundColor: `${colors.success}1A`,
            color: colors.success,
          }}
        >
          🎭 מצב דמה - הזן כל 6 ספרות
        </div>

        {/* OTP Input */}
        <div className="flex gap-3 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={el => { inputRefs.current[index] = el; }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-14 rounded-xl text-center text-2xl font-bold outline-none transition-all"
              style={{
                backgroundColor: colors.surfaceContainerLow,
                border: digit ? `2px solid ${colors.primary}` : `1px solid ${colors.outlineVariant}`,
                color: colors.onSurface,
              }}
            />
          ))}
        </div>

        {/* Resend */}
        <p className="text-sm" style={{ color: colors.onSurfaceVariant }}>
          לא קיבלת קוד?{' '}
          <button className="font-bold" style={{ color: colors.primary }}>
            שלח שוב
          </button>
        </p>
      </main>
    </div>
  );
}
