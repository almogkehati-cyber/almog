'use client';

import { useState, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { colors } from '@/lib/colors';
import BackgroundOrbs from '@/components/BackgroundOrbs';

function OTPContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const method = searchParams.get('method') || 'email';
  const destination = searchParams.get('destination') || '';
  
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value[0];
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every(digit => digit !== '') && newOtp.join('').length === 6) {
      setTimeout(() => {
        router.push('/security-setup');
      }, 500);
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
      <BackgroundOrbs />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4">
        <Link href="/register">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: colors.onSurface }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-lg font-bold font-headline" style={{ color: colors.onSurface }}>אימות קוד</h1>
        <div className="w-6" />
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col justify-center px-6 pt-20 pb-12 max-w-md mx-auto w-full">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 font-headline" style={{ color: colors.onSurface }}>
            אימות קוד
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: colors.onSurfaceVariant }}>
            הזן את הקוד בן 6 הספרות שנשלח אל
          </p>
          <p className="text-lg font-bold mt-2" style={{ color: colors.primary }}>
            {destination}
          </p>
        </div>

        <div className="space-y-10">
          {/* OTP Input */}
          <div className="grid grid-cols-6 gap-3" dir="ltr">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => { inputRefs.current[index] = el; }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-full aspect-square text-center text-2xl font-bold rounded-2xl outline-none transition-all"
                style={{
                  backgroundColor: colors.surfaceContainer,
                  color: digit ? colors.primary : colors.onSurfaceVariant,
                  border: `2px solid ${digit ? colors.primary : 'transparent'}`,
                }}
                placeholder="•"
              />
            ))}
          </div>

          {/* Submit Button */}
          <div className="relative group">
            <div 
              className="absolute -inset-0.5 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"
              style={{
                background: `linear-gradient(to right, ${colors.primaryContainer}, ${colors.secondaryContainer})`,
              }}
            />
            <button 
              className="relative w-full py-5 rounded-full font-bold text-lg shadow-xl hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 font-headline"
              style={{
                background: `linear-gradient(to right, ${colors.primaryContainer}, ${colors.secondaryContainer})`,
                color: '#FFFFFF',
              }}
            >
              <span>אמת קוד</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Resend */}
        <div className="mt-12 text-center">
          <p className="font-medium" style={{ color: colors.onSurfaceVariant }}>
            לא קיבלת קוד?{' '}
            <button className="font-bold mr-1 transition-colors underline underline-offset-4" style={{ color: colors.primary }}>
              שלח שוב
            </button>
          </p>
        </div>
      </main>
    </div>
  );
}

export default function OTPPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: colors.background }}>
        <p style={{ color: colors.onSurface }}>טוען...</p>
      </div>
    }>
      <OTPContent />
    </Suspense>
  );
}
