'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [pin, setPin] = useState('');

  const handleNumberPress = (num: string) => {
    if (pin.length < 4) {
      const newPin = pin + num;
      setPin(newPin);
      
      if (newPin.length === 4) {
        setTimeout(() => {
          localStorage.setItem('isLoggedIn', 'true');
          router.push('/home');
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
        backgroundColor: '#0A0A1A',
        color: '#e3e0f8',
        fontFamily: 'Manrope, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'linear-gradient(to bottom, transparent, rgba(10, 10, 26, 0.5), #0A0A1A)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '256px',
        height: '256px',
        background: 'rgba(222, 183, 255, 0.1)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        pointerEvents: 'none',
      }} />

      {/* Header / Logo */}
      <header style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '48px',
        paddingBottom: '32px',
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          background: 'rgba(123, 47, 190, 0.2)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '12px',
        }}>
          <svg width="40" height="40" fill="#deb7ff" viewBox="0 0 24 24">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
          </svg>
        </div>
        <h1 style={{
          color: '#deb7ff',
          fontWeight: 700,
          fontSize: '32px',
          letterSpacing: '-0.5px',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
        }}>
          TESFA
        </h1>
      </header>

      {/* Main Content */}
      <main style={{
        position: 'relative',
        zIndex: 10,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 24px',
      }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 700,
            marginBottom: '8px',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
          }}>
            הזן קוד PIN
          </h2>
          <p style={{
            color: '#cfc2d5',
            fontSize: '14px',
          }}>
            השתמש בקוד האישי שלך לגישה מהירה
          </p>
        </div>

        {/* PIN Dots */}
        <div style={{
          display: 'flex',
          gap: '24px',
          marginBottom: '32px',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {[0, 1, 2, 3].map((index) => (
            <div 
              key={index}
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '8px',
                backgroundColor: index < pin.length ? '#deb7ff' : '#4c4353',
                boxShadow: index < pin.length ? '0 0 12px #deb7ff' : 'none',
                transition: 'all 0.2s',
              }}
            />
          ))}
        </div>

        {/* Biometric Button */}
        <button style={{
          marginBottom: '32px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px 24px',
          borderRadius: '999px',
          background: '#1C1C2E',
          border: '1px solid rgba(76, 67, 83, 0.3)',
          color: '#deb7ff',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 500,
        }}>
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28z"/>
          </svg>
          <span>התחברות ביומטרית</span>
        </button>

        {/* Forgot PIN */}
        <a href="#" style={{
          color: '#deb7ff',
          fontSize: '14px',
          fontWeight: 500,
          textDecoration: 'none',
          marginBottom: '48px',
        }}>
          שכחת את קוד ה-PIN?
        </a>

        {/* Numpad */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          maxWidth: '320px',
          margin: '0 auto',
          width: '100%',
          paddingBottom: '48px',
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
              color: '#cfc2d5',
            }}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
            </svg>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        padding: '32px',
        textAlign: 'center',
      }}>
        <p style={{ color: '#cfc2d5', fontSize: '14px' }}>
          לא המשתמש שלך?{' '}
          <Link href="/register" style={{ color: '#deb7ff', fontWeight: 700, textDecoration: 'none' }}>
            החלף חשבון
          </Link>
        </p>
      </footer>
    </div>
  );
}
