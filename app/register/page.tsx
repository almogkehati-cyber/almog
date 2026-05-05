'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { colors } from '@/lib/colors';
import BackgroundOrbs from '@/components/BackgroundOrbs';

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!fullName || !email || !phone) {
      setError('נא למלא את כל השדות');
      return;
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem('currentUser', JSON.stringify({ fullName, email, phone }));
    }
    
    router.push(`/otp?method=email&destination=${encodeURIComponent(email)}`);
  };

  return (
    <div 
      className="flex flex-col min-h-screen overflow-hidden relative"
      style={{ backgroundColor: colors.background, color: colors.onSurface }}
    >
      <BackgroundOrbs />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4">
        <Link href="/welcome">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: colors.onSurface }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-lg font-bold font-headline" style={{ color: colors.onSurface }}>הרשמה</h1>
        <div className="w-6" />
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col px-6 pt-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 font-headline" style={{ color: colors.onSurface }}>
            צור חשבון חדש
          </h2>
          <p className="text-lg" style={{ color: colors.onSurfaceVariant }}>
            הצטרף לקהילת TESFA
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: colors.onSurfaceVariant }}>
                שם מלא
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-4 rounded-xl outline-none transition-all"
                style={{
                  backgroundColor: colors.surfaceContainer,
                  color: colors.onSurface,
                  border: `2px solid transparent`,
                }}
                onFocus={(e) => e.target.style.borderColor = colors.primary}
                onBlur={(e) => e.target.style.borderColor = 'transparent'}
                placeholder="הזן שם מלא"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: colors.onSurfaceVariant }}>
                אימייל
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 rounded-xl outline-none transition-all"
                style={{
                  backgroundColor: colors.surfaceContainer,
                  color: colors.onSurface,
                  border: `2px solid transparent`,
                }}
                onFocus={(e) => e.target.style.borderColor = colors.primary}
                onBlur={(e) => e.target.style.borderColor = 'transparent'}
                placeholder="example@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: colors.onSurfaceVariant }}>
                טלפון
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-4 rounded-xl outline-none transition-all"
                style={{
                  backgroundColor: colors.surfaceContainer,
                  color: colors.onSurface,
                  border: `2px solid transparent`,
                }}
                onFocus={(e) => e.target.style.borderColor = colors.primary}
                onBlur={(e) => e.target.style.borderColor = 'transparent'}
                placeholder="05X-XXXXXXX"
              />
            </div>
          </div>

          {error && (
            <div 
              className="text-sm text-center py-3 px-4 rounded-xl"
              style={{ 
                backgroundColor: `${colors.error}1A`,
                color: colors.error,
              }}
            >
              {error}
            </div>
          )}

          <div className="mt-auto pt-8 space-y-4">
            <button
              type="submit"
              className="w-full py-5 rounded-full font-bold text-lg transition-all active:scale-[0.98] font-headline"
              style={{
                background: `linear-gradient(to left, ${colors.primaryContainer} 0%, #9B59F5 100%)`,
                color: '#FFFFFF',
                boxShadow: '0 8px 30px rgba(123, 47, 190, 0.3)',
              }}
            >
              המשך
            </button>

            <p className="text-center text-sm" style={{ color: colors.onSurfaceVariant }}>
              כבר יש לך חשבון?{' '}
              <Link href="/login" className="font-bold" style={{ color: colors.primary }}>
                התחבר
              </Link>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}
