'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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

    localStorage.setItem('currentUser', JSON.stringify({ fullName, email, phone }));
    router.push('/otp');
  };

  return (
    <div 
      className="w-full max-w-[430px] mx-auto min-h-screen flex flex-col overflow-hidden relative"
      style={{ 
        backgroundColor: '#121222', 
        color: '#e3e0f8',
        fontFamily: 'Manrope, sans-serif',
        minHeight: 'max(884px, 100dvh)'
      }}
    >
      {/* Background Glow */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-[#deb7ff]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-80 h-80 bg-[#6107ba]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 flex-row-reverse bg-transparent max-w-[430px] mx-auto">
        <div 
          className="text-[#deb7ff] font-bold text-2xl tracking-tighter"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          TESFA
        </div>
        <Link href="/welcome">
          <button className="text-[#deb7ff] hover:opacity-80 transition-opacity duration-200 active:scale-90">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col px-6 pt-24 pb-8">
        <div className="mb-8">
          <h1 
            className="text-3xl font-bold mb-2 text-[#e3e0f8]"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            צור חשבון חדש
          </h1>
          <p className="text-lg text-[#cfc2d5]">
            הצטרף לקהילת TESFA
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#cfc2d5]">
                שם מלא
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-4 rounded-xl outline-none transition-all bg-[#1e1e2f] text-[#e3e0f8] border-2 border-transparent focus:border-[#deb7ff]"
                placeholder="הזן שם מלא"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#cfc2d5]">
                אימייל
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 rounded-xl outline-none transition-all bg-[#1e1e2f] text-[#e3e0f8] border-2 border-transparent focus:border-[#deb7ff]"
                placeholder="example@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#cfc2d5]">
                טלפון
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-4 rounded-xl outline-none transition-all bg-[#1e1e2f] text-[#e3e0f8] border-2 border-transparent focus:border-[#deb7ff]"
                placeholder="05X-XXXXXXX"
              />
            </div>
          </div>

          {error && (
            <div className="text-sm text-center py-3 px-4 rounded-xl bg-[#ffb4ab]/10 text-[#ffb4ab]">
              {error}
            </div>
          )}

          <div className="mt-auto pt-8 space-y-4">
            <button
              type="submit"
              className="w-full py-5 rounded-full font-bold text-lg transition-all active:scale-[0.98] bg-gradient-to-l from-[#7B2FBE] to-[#9B59F5] text-white shadow-[0_8px_30px_rgba(123,47,190,0.3)]"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              המשך
            </button>

            <p className="text-center text-sm text-[#cfc2d5]">
              כבר יש לך חשבון?{' '}
              <Link href="/login" className="font-bold text-[#deb7ff]">
                התחבר
              </Link>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}
