'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PinSetupPage() {
  const router = useRouter();
  const [pin, setPin] = useState('');

  const handleNumberPress = (num: string) => {
    if (pin.length < 4) {
      const newPin = pin + num;
      setPin(newPin);
      
      if (newPin.length === 4) {
        setTimeout(() => {
          localStorage.setItem('userPin', newPin);
          localStorage.setItem('isLoggedIn', 'true');
          router.push('/');
        }, 300);
      }
    }
  };

  const handleBackspace = () => {
    setPin(prev => prev.slice(0, -1));
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: '#121222', color: '#e3e0f8', fontFamily: 'Manrope, sans-serif' }}>
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 flex-row-reverse bg-transparent">
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl tracking-tighter" style={{ color: '#deb7ff', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>TESFA</span>
        </div>
        <Link href="/otp" className="transition-opacity hover:opacity-80 active:scale-90" style={{ color: '#deb7ff' }}>
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </header>

      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full blur-[100px]" style={{ backgroundColor: 'rgba(222, 183, 255, 0.1)' }} />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full blur-[100px]" style={{ backgroundColor: 'rgba(97, 7, 186, 0.1)' }} />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 pt-24 pb-12 w-full max-w-md mx-auto">
        {/* Header Text */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#e3e0f8' }}>
            יצירת קוד PIN
          </h1>
          <p className="text-lg leading-relaxed max-w-[280px] mx-auto" style={{ color: '#cfc2d5' }}>
            אבטח את הארנק שלך באמצעות קוד אישי בן 4 ספרות
          </p>
        </div>

        {/* PIN Indicators - 4 dots RTL */}
        <div className="flex flex-row-reverse justify-center gap-6 mb-16">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full transition-all duration-300"
              style={{
                backgroundColor: index < pin.length ? '#deb7ff' : '#333345',
                border: index >= pin.length ? '1px solid rgba(76, 67, 83, 0.3)' : 'none',
                boxShadow: index < pin.length ? '0 0 15px rgba(222, 183, 255, 0.5)' : 'none',
              }}
            />
          ))}
        </div>

        {/* Numpad Grid - transparent buttons */}
        <div className="w-full grid grid-cols-3 gap-y-6 gap-x-4 mt-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberPress(num.toString())}
              className="flex items-center justify-center py-6 rounded-2xl transition-all active:scale-90 active:bg-[rgba(222,183,255,0.1)]"
              style={{ color: '#e3e0f8' }}>
              <span className="text-3xl font-semibold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{num}</span>
            </button>
          ))}
          
          {/* Bottom Row */}
          <button className="flex items-center justify-center py-6 rounded-2xl transition-all opacity-40">
            <span className="material-symbols-outlined text-3xl" style={{ color: '#e3e0f8' }}>fingerprint</span>
          </button>
          <button
            onClick={() => handleNumberPress('0')}
            className="flex items-center justify-center py-6 rounded-2xl transition-all active:scale-90 active:bg-[rgba(222,183,255,0.1)]"
            style={{ color: '#e3e0f8' }}>
            <span className="text-3xl font-semibold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>0</span>
          </button>
          <button
            onClick={handleBackspace}
            className="flex items-center justify-center py-6 rounded-2xl transition-all active:scale-90"
            style={{ color: 'rgba(255, 180, 171, 0.8)' }}>
            <span className="material-symbols-outlined text-3xl">backspace</span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-8 flex flex-col items-center gap-4">
        <button className="text-sm font-semibold tracking-wide hover:underline transition-all" style={{ color: '#deb7ff' }}>
          שכחתי את הקוד שלי
        </button>
        <div className="w-12 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#333345' }} />
      </footer>
    </div>
  );
}
