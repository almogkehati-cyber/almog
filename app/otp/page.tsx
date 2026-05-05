'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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
    <div className="min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: '#121222', color: '#e3e0f8', fontFamily: 'Manrope, sans-serif' }}>
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 flex-row-reverse bg-transparent">
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl tracking-tighter" style={{ color: '#deb7ff', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>TESFA</span>
        </div>
        <Link href="/register" className="w-10 h-10 flex items-center justify-center rounded-full transition-opacity hover:opacity-80 active:scale-90">
          <span className="material-symbols-outlined" style={{ color: '#deb7ff' }}>arrow_forward</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center px-6 pt-20 pb-12 max-w-md mx-auto w-full">
        {/* Header Text */}
        <div className="mb-12 text-center">
          <h1 className="font-bold text-3xl mb-4 tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#e3e0f8' }}>
            אימות קוד
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: '#cfc2d5' }}>
            הזן את הקוד בן 6 הספרות שנשלח אליך
          </p>
        </div>

        <div className="space-y-10">
          {/* OTP Input Grid */}
          <div className="grid grid-cols-6 gap-3" dir="ltr">
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
                className="w-full aspect-square text-center text-2xl font-bold rounded-2xl outline-none transition-all"
                style={{ 
                  backgroundColor: '#1e1e2f',
                  border: digit ? '2px solid #deb7ff' : '1px solid transparent',
                  color: '#deb7ff'
                }}
                placeholder="•"
              />
            ))}
          </div>

          {/* Submit Button */}
          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"
              style={{ background: 'linear-gradient(to right, #7b2fbe, #6107ba)' }} />
            <button 
              onClick={() => router.push('/pin-setup')}
              className="relative w-full py-5 rounded-full text-white font-bold text-lg transition-all hover:opacity-90 active:scale-[0.98] flex items-center justify-center gap-2"
              style={{ 
                background: 'linear-gradient(to right, #7b2fbe, #6107ba)',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                boxShadow: '0 8px 30px rgba(123, 47, 190, 0.3)'
              }}>
              <span>אמת קוד</span>
              <span className="material-symbols-outlined">verified_user</span>
            </button>
          </div>
        </div>

        {/* Resend */}
        <div className="mt-12 text-center">
          <p className="font-medium" style={{ color: '#cfc2d5' }}>
            לא קיבלת קוד?{' '}
            <button className="font-bold mr-1 hover:underline underline-offset-4 transition-colors" style={{ color: '#deb7ff' }}>
              שלח שוב
            </button>
          </p>
        </div>

        {/* Background Glow */}
        <div className="mt-auto pt-10 flex justify-center opacity-20 pointer-events-none">
          <div className="w-48 h-48 rounded-full blur-[100px] absolute -z-10 bottom-0 right-0 translate-x-1/2 translate-y-1/2" style={{ backgroundColor: '#7b2fbe' }} />
          <div className="w-48 h-48 rounded-full blur-[100px] absolute -z-10 top-0 left-0 -translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: '#d7baff' }} />
        </div>
      </main>

      {/* SMS Notification */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-4/5 max-w-xs pointer-events-none">
        <div className="p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-pulse"
          style={{ 
            background: 'rgba(30, 30, 47, 0.6)',
            backdropFilter: 'blur(24px)',
            borderRight: '4px solid #deb7ff'
          }}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(123, 47, 190, 0.2)' }}>
            <span className="material-symbols-outlined" style={{ color: '#deb7ff' }}>sms</span>
          </div>
          <div className="flex-1">
            <p className="text-xs uppercase tracking-wider" style={{ color: '#cfc2d5' }}>SMS נשלח</p>
            <p className="text-sm font-bold" style={{ color: '#e3e0f8' }}>בודק הודעות נכנסות...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
