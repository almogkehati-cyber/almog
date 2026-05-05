'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PinSetupPage() {
  const router = useRouter();
  const [pin, setPin] = useState('');
  const [step, setStep] = useState<'set' | 'confirm'>('set');
  const [firstPin, setFirstPin] = useState('');

  const handleNumberPress = (num: string) => {
    if (pin.length < 4) {
      const newPin = pin + num;
      setPin(newPin);
      
      if (newPin.length === 4) {
        setTimeout(() => {
          if (step === 'set') {
            setFirstPin(newPin);
            setPin('');
            setStep('confirm');
          } else {
            if (newPin === firstPin) {
              localStorage.setItem('userPin', newPin);
              localStorage.setItem('isLoggedIn', 'true');
              router.push('/home');
            } else {
              setPin('');
              setStep('set');
              setFirstPin('');
            }
          }
        }, 150);
      }
    }
  };

  const handleBackspace = () => {
    setPin(prev => prev.slice(0, -1));
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
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#deb7ff]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#6107ba]/10 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 flex-row-reverse bg-transparent max-w-[430px] mx-auto">
        <div className="flex items-center gap-2">
          <span 
            className="text-[#deb7ff] font-bold text-2xl tracking-tighter"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            TESFA
          </span>
        </div>
        <Link href="/security-setup">
          <button className="text-[#deb7ff] hover:opacity-80 transition-opacity duration-200 active:scale-90">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 pt-24 pb-12 w-full">
        {/* Header Text */}
        <div className="text-center mb-12">
          <h1 
            className="text-3xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            {step === 'set' ? 'יצירת קוד PIN' : 'אימות קוד PIN'}
          </h1>
          <p className="text-[#cfc2d5] text-lg leading-relaxed max-w-[280px] mx-auto">
            {step === 'set' 
              ? 'אבטח את הארנק שלך באמצעות קוד אישי בן 4 ספרות'
              : 'הזן שוב את הקוד לאימות'
            }
          </p>
        </div>

        {/* PIN Indicators */}
        <div className="flex flex-row-reverse justify-center gap-6 mb-16">
          {[0, 1, 2, 3].map((index) => (
            <div 
              key={index}
              className="w-4 h-4 rounded-full transition-all duration-300"
              style={{
                backgroundColor: index < pin.length ? '#deb7ff' : '#333345',
                boxShadow: index < pin.length ? '0 0 15px rgba(222, 183, 255, 0.5)' : 'none',
                border: index >= pin.length ? '1px solid rgba(76, 67, 83, 0.3)' : 'none'
              }}
            />
          ))}
        </div>

        {/* Numpad */}
        <div className="w-full grid grid-cols-3 gap-y-6 gap-x-4 mt-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button 
              key={num}
              onClick={() => handleNumberPress(num.toString())}
              className="flex items-center justify-center py-6 rounded-2xl transition-all active:scale-90 active:bg-[#deb7ff]/10"
            >
              <span 
                className="text-3xl font-semibold"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {num}
              </span>
            </button>
          ))}
          
          {/* Bottom Row */}
          <button className="flex items-center justify-center py-6 rounded-2xl transition-all opacity-40">
            <svg className="w-8 h-8 text-[#cfc2d5]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28z"/>
            </svg>
          </button>
          <button 
            onClick={() => handleNumberPress('0')}
            className="flex items-center justify-center py-6 rounded-2xl transition-all active:scale-90 active:bg-[#deb7ff]/10"
          >
            <span 
              className="text-3xl font-semibold"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              0
            </span>
          </button>
          <button 
            onClick={handleBackspace}
            className="flex items-center justify-center py-6 rounded-2xl transition-all active:scale-90 text-[#ffb4ab]/80"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
            </svg>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-8 flex flex-col items-center gap-4">
        <button className="text-[#deb7ff] text-sm font-semibold tracking-wide hover:underline transition-all">
          שכחתי את הקוד שלי
        </button>
        <div className="w-12 h-1.5 bg-[#333345] rounded-full mt-2" />
      </footer>
    </div>
  );
}
