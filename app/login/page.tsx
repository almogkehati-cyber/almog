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
    const savedPin = localStorage.getItem('userPin');
    if (savedPin && savedPin === pinToCheck) {
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/');
    } else {
      setError('קוד PIN שגוי');
      setPin('');
    }
  };

  const handleBiometric = () => {
    localStorage.setItem('isLoggedIn', 'true');
    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden relative"
      style={{ backgroundColor: '#0A0A1A', color: '#e3e0f8', fontFamily: 'Manrope, sans-serif' }}>
      
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBC-F3jX6XF8V7N6Q3p-Dk8H7f-9f7P-V2D6_y_K4P-C7_A=s3000')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15, mixBlendMode: 'overlay' }} />
      <div className="fixed inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, rgba(10, 10, 26, 0.5), #0A0A1A)' }} />
      
      {/* Glow Orbs */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] pointer-events-none" style={{ backgroundColor: 'rgba(222, 183, 255, 0.1)' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none" style={{ backgroundColor: 'rgba(97, 7, 186, 0.05)' }} />

      {/* Header / Logo */}
      <header className="relative z-10 flex flex-col items-center pt-12 pb-8">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: 'rgba(123, 47, 190, 0.2)' }}>
          <span className="material-symbols-outlined text-4xl" style={{ color: '#deb7ff' }}>nest_eco_leaf</span>
        </div>
        <h1 className="font-bold text-3xl tracking-tighter" style={{ color: '#deb7ff', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          TESFA
        </h1>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col items-center px-6">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#e3e0f8' }}>
            הזן קוד PIN
          </h2>
          <p className="text-sm" style={{ color: '#cfc2d5' }}>
            השתמש בקוד האישי שלך לגישה מהירה
          </p>
        </div>

        {/* PIN Dots - 4 dots */}
        <div className="flex gap-6 mb-8 items-center justify-center">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full transition-all duration-200"
              style={{
                backgroundColor: index < pin.length ? '#deb7ff' : '#4c4353',
                boxShadow: index < pin.length ? '0 0 12px #deb7ff' : 'none',
              }}
            />
          ))}
        </div>

        {/* Biometric Button */}
        <button
          onClick={handleBiometric}
          className="mb-8 flex items-center gap-3 px-6 py-3 rounded-full transition-all active:scale-95"
          style={{ 
            backgroundColor: '#1C1C2E',
            border: '1px solid rgba(76, 67, 83, 0.3)',
            color: '#deb7ff'
          }}>
          <span className="material-symbols-outlined text-2xl">fingerprint</span>
          <span className="font-medium">התחברות ביומטרית</span>
        </button>

        {/* Forgot PIN */}
        <div className="mb-12">
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" style={{ color: '#deb7ff' }}>
            שכחת את קוד ה-PIN?
          </a>
        </div>

        {/* Error */}
        {error && (
          <div className="text-sm text-center py-3 px-4 rounded-xl mb-4" style={{ backgroundColor: 'rgba(255, 180, 171, 0.1)', color: '#ffb4ab' }}>
            {error}
          </div>
        )}

        {/* Numeric Keypad - with background */}
        <div className="w-full max-w-xs grid grid-cols-3 gap-y-4 gap-x-6 pb-12">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberPress(num.toString())}
              className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl font-semibold transition-all hover:bg-[#1C1C2E] active:scale-90"
              style={{ backgroundColor: '#0F0F1F', fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#e3e0f8' }}>
              {num}
            </button>
          ))}
          
          {/* Bottom Row */}
          <div className="flex items-center justify-center">
            <button className="w-16 h-16 flex items-center justify-center active:scale-90 transition-all" style={{ color: '#cfc2d5' }}>
              <span className="material-symbols-outlined text-2xl">face</span>
            </button>
          </div>
          <button
            onClick={() => handleNumberPress('0')}
            className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl font-semibold transition-all hover:bg-[#1C1C2E] active:scale-90"
            style={{ backgroundColor: '#0F0F1F', fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#e3e0f8' }}>
            0
          </button>
          <div className="flex items-center justify-center">
            <button onClick={handleBackspace} className="w-16 h-16 flex items-center justify-center active:scale-90 transition-all" style={{ color: '#cfc2d5' }}>
              <span className="material-symbols-outlined text-2xl">backspace</span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full py-8 text-center mt-auto">
        <p className="text-sm" style={{ color: '#cfc2d5' }}>
          לא המשתמש שלך?{' '}
          <Link href="/register" className="font-bold mr-1 hover:underline underline-offset-4" style={{ color: '#deb7ff' }}>
            החלף חשבון
          </Link>
        </p>
      </footer>
    </div>
  );
}
