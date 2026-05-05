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
      style={{
        width: '100%',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#121222',
        color: '#e3e0f8',
        fontFamily: 'Manrope, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Glow */}
      <div style={{
        position: 'fixed',
        top: '25%',
        right: '-80px',
        width: '320px',
        height: '320px',
        background: 'rgba(222, 183, 255, 0.1)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'fixed',
        bottom: '25%',
        left: '-80px',
        width: '320px',
        height: '320px',
        background: 'rgba(97, 7, 186, 0.1)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 24px',
        flexDirection: 'row-reverse',
      }}>
        <span style={{
          color: '#deb7ff',
          fontWeight: 700,
          fontSize: '24px',
          letterSpacing: '-0.5px',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
        }}>
          TESFA
        </span>
        <Link href="/security-setup">
          <button style={{
            color: '#deb7ff',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
          }}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </Link>
      </header>

      {/* Main Content */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '96px 24px 48px',
        width: '100%',
      }}>
        {/* Header Text */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 700,
            marginBottom: '16px',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
          }}>
            {step === 'set' ? 'יצירת קוד PIN' : 'אימות קוד PIN'}
          </h1>
          <p style={{
            color: '#cfc2d5',
            fontSize: '18px',
            lineHeight: 1.6,
            maxWidth: '280px',
            margin: '0 auto',
          }}>
            {step === 'set' 
              ? 'אבטח את הארנק שלך באמצעות קוד אישי בן 4 ספרות'
              : 'הזן שוב את הקוד לאימות'
            }
          </p>
        </div>

        {/* PIN Dots */}
        <div style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '48px',
        }}>
          {[0, 1, 2, 3].map((index) => (
            <div 
              key={index}
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '8px',
                backgroundColor: index < pin.length ? '#7B2FBE' : '#8B8FA8',
                boxShadow: index < pin.length ? '0 0 15px rgba(123, 47, 190, 0.5)' : 'none',
                transition: 'all 0.3s',
              }}
            />
          ))}
        </div>

        {/* Numpad */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          maxWidth: '320px',
          margin: '0 auto',
          width: '100%',
        }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button 
              key={num}
              onClick={() => handleNumberPress(num.toString())}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '40px',
                background: '#1E1E2E',
                border: 'none',
                fontSize: '28px',
                fontWeight: 600,
                color: '#e3e0f8',
                cursor: 'pointer',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {num}
            </button>
          ))}
          
          {/* Bottom Row */}
          <div style={{ width: '80px', height: '80px', margin: '0 auto' }} />
          <button 
            onClick={() => handleNumberPress('0')}
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '40px',
              background: '#1E1E2E',
              border: 'none',
              fontSize: '28px',
              fontWeight: 600,
              color: '#e3e0f8',
              cursor: 'pointer',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            0
          </button>
          <button 
            onClick={handleBackspace}
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '40px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffb4ab',
            }}
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
            </svg>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
      }}>
        <button style={{
          color: '#deb7ff',
          fontSize: '14px',
          fontWeight: 600,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}>
          שכחתי את הקוד שלי
        </button>
      </footer>
    </div>
  );
}
