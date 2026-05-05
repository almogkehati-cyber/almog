'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function OTPPage() {
  const router = useRouter();
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
      className="w-full min-h-screen flex flex-col overflow-hidden relative"
      style={{ 
        backgroundColor: '#121222', 
        color: '#e3e0f8',
        fontFamily: 'Manrope, sans-serif',
        minHeight: 'max(884px, 100dvh)'
      }}
    >
      {/* Background Glow */}
      <div className="w-48 h-48 rounded-full bg-[#7b2fbe] blur-[100px] absolute -z-10 bottom-0 right-0 translate-x-1/2 translate-y-1/2 opacity-20 pointer-events-none" />
      <div className="w-48 h-48 rounded-full bg-[#d7baff] blur-[100px] absolute -z-10 top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 flex-row-reverse bg-transparent">
        <div className="flex items-center gap-2">
          <span 
            className="text-[#deb7ff] font-bold text-2xl tracking-tighter"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            TESFA
          </span>
        </div>
        <Link href="/register">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#333345] hover:opacity-80 transition-opacity active:scale-90 duration-200">
            <svg className="w-6 h-6 text-[#deb7ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center px-6 pt-20 pb-12 w-full">
        <div className="mb-12 text-center">
          <h1 
            className="font-bold text-3xl mb-4 text-[#e3e0f8] tracking-tight"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            אימות קוד
          </h1>
          <p className="text-[#cfc2d5] text-lg leading-relaxed">
            הזן את הקוד בן 6 הספרות שנשלח אליך
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
                className="w-full aspect-square text-center text-2xl font-bold bg-[#1e1e2f] rounded-2xl outline-none transition-all focus:ring-2 focus:ring-[#deb7ff] focus:bg-[#29283a]"
                style={{ color: digit ? '#deb7ff' : '#cfc2d5' }}
                placeholder="•"
              />
            ))}
          </div>

          {/* Submit Button */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7b2fbe] to-[#6107ba] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 group-active:duration-200" />
            <button 
              onClick={() => router.push('/security-setup')}
              className="relative w-full py-5 rounded-full bg-gradient-to-r from-[#7b2fbe] to-[#6107ba] text-white font-bold text-lg shadow-xl hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
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
          <p className="text-[#cfc2d5] font-medium">
            לא קיבלת קוד?{' '}
            <button className="text-[#deb7ff] hover:text-[#d7baff] font-bold mr-1 transition-colors underline underline-offset-4 decoration-[#deb7ff]/30">
              שלח שוב
            </button>
          </p>
        </div>
      </main>

      {/* SMS Notification */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-4/5 max-w-xs pointer-events-none">
        <div 
          className="p-4 rounded-2xl border-r-4 border-[#deb7ff] shadow-2xl flex items-center gap-4 animate-pulse"
          style={{ 
            background: 'rgba(30, 30, 47, 0.6)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)'
          }}
        >
          <div className="w-10 h-10 rounded-full bg-[#7b2fbe]/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-[#deb7ff]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-xs text-[#cfc2d5] uppercase tracking-wider">SMS נשלח</p>
            <p className="text-sm font-bold text-[#e3e0f8]">בודק הודעות נכנסות...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
