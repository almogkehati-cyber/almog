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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!fullName || !email || !phone) {
      setError('נא למלא את כל השדות');
      return;
    }

    setIsSubmitting(true);
    localStorage.setItem('currentUser', JSON.stringify({ fullName, email, phone, createdAt: new Date().toISOString() }));
    
    setTimeout(() => {
      router.push('/otp');
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden relative"
      style={{ backgroundColor: '#121222', color: '#e3e0f8', fontFamily: 'Manrope, sans-serif' }}>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-[100px] -z-10" style={{ backgroundColor: 'rgba(123, 47, 190, 0.2)' }} />
      <div className="fixed top-0 right-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ backgroundColor: 'rgba(222, 183, 255, 0.05)' }} />
      <div className="fixed bottom-0 left-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none" style={{ backgroundColor: 'rgba(215, 186, 255, 0.05)' }} />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 flex-row-reverse bg-transparent">
        <div className="font-bold text-2xl tracking-tighter" style={{ color: '#deb7ff', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          TESFA
        </div>
        <Link href="/welcome" className="transition-opacity hover:opacity-80 active:scale-90 p-2" style={{ color: '#deb7ff' }}>
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center px-6 pt-24 pb-12 max-w-md mx-auto w-full">
        {/* Header Text */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#e3e0f8' }}>
            יצירת חשבון
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: '#cfc2d5' }}>
            הצטרף לקהילת TESFA עוד היום
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm mb-2 text-right" style={{ color: '#cfc2d5' }}>שם מלא</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-4 rounded-2xl text-base text-right outline-none transition-all"
              style={{ 
                backgroundColor: '#1e1e2f',
                border: '1px solid transparent',
                color: '#e3e0f8'
              }}
              onFocus={(e) => e.target.style.border = '2px solid #deb7ff'}
              onBlur={(e) => e.target.style.border = '1px solid transparent'}
              placeholder="יוסי כהן"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2 text-right" style={{ color: '#cfc2d5' }}>אימייל</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-4 rounded-2xl text-base outline-none transition-all"
              style={{ 
                backgroundColor: '#1e1e2f',
                border: '1px solid transparent',
                color: '#e3e0f8'
              }}
              dir="ltr"
              onFocus={(e) => e.target.style.border = '2px solid #deb7ff'}
              onBlur={(e) => e.target.style.border = '1px solid transparent'}
              placeholder="example@email.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-2 text-right" style={{ color: '#cfc2d5' }}>מספר טלפון</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-4 rounded-2xl text-base outline-none transition-all"
              style={{ 
                backgroundColor: '#1e1e2f',
                border: '1px solid transparent',
                color: '#e3e0f8'
              }}
              dir="ltr"
              onFocus={(e) => e.target.style.border = '2px solid #deb7ff'}
              onBlur={(e) => e.target.style.border = '1px solid transparent'}
              placeholder="050-1234567"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="text-sm text-center py-3 px-4 rounded-xl" style={{ backgroundColor: 'rgba(255, 180, 171, 0.1)', color: '#ffb4ab' }}>
              {error}
            </div>
          )}

          {/* Submit Button */}
          <div className="relative group pt-4">
            <div className="absolute -inset-0.5 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"
              style={{ background: 'linear-gradient(to right, #7b2fbe, #6107ba)' }} />
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative w-full py-5 rounded-full text-white font-bold text-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50"
              style={{ 
                background: 'linear-gradient(to right, #7b2fbe, #6107ba)',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                boxShadow: '0 8px 30px rgba(123, 47, 190, 0.3)'
              }}>
              <span>{isSubmitting ? 'נרשם...' : 'המשך'}</span>
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="mt-8 text-center">
          <p className="font-medium" style={{ color: '#cfc2d5' }}>
            כבר יש לך חשבון?{' '}
            <Link href="/login" className="font-bold mr-1 hover:underline underline-offset-4" style={{ color: '#deb7ff' }}>
              התחבר
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
