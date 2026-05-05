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
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    if (otp.every(digit => digit !== '')) {
      router.push('/security-setup');
    }
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
        position: 'absolute',
        bottom: 0,
        right: 0,
        transform: 'translate(50%, 50%)',
        width: '192px',
        height: '192px',
        background: '#7b2fbe',
        filter: 'blur(100px)',
        opacity: 0.2,
        borderRadius: '50%',
        zIndex: -1,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        transform: 'translate(-50%, -50%)',
        width: '192px',
        height: '192px',
        background: '#d7baff',
        filter: 'blur(100px)',
        opacity: 0.2,
        borderRadius: '50%',
        zIndex: -1,
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
        <Link href="/register">
          <button style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            background: '#333345',
            border: 'none',
            cursor: 'pointer',
          }}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#deb7ff" strokeWidth={2}>
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
      }}>
        {/* SMS Icon */}
        <div style={{
          width: '80px',
          height: '80px',
          background: 'rgba(123, 47, 190, 0.2)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '32px',
        }}>
          <svg width="40" height="40" fill="#deb7ff" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
          </svg>
        </div>

        <h1 style={{
          fontSize: '28px',
          fontWeight: 700,
          marginBottom: '12px',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
        }}>
          אימות מספר טלפון
        </h1>
        <p style={{
          color: '#cfc2d5',
          fontSize: '16px',
          marginBottom: '48px',
          textAlign: 'center',
        }}>
          שלחנו קוד בן 6 ספרות לטלפון שלך
        </p>

        {/* OTP Input */}
        <div style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          gap: '12px',
          marginBottom: '48px',
        }}>
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
              style={{
                width: '48px',
                height: '56px',
                borderRadius: '12px',
                border: digit ? '2px solid #7b2fbe' : '2px solid #333345',
                background: '#1e1e2f',
                color: '#e3e0f8',
                fontSize: '24px',
                fontWeight: 700,
                textAlign: 'center',
                outline: 'none',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}
            />
          ))}
        </div>

        {/* Verify Button */}
        <button 
          onClick={handleSubmit}
          style={{
            width: '100%',
            maxWidth: '320px',
            height: '56px',
            fontSize: '18px',
            fontWeight: 700,
            borderRadius: '28px',
            border: 'none',
            background: 'linear-gradient(to left, #7B2FBE, #9B59F5)',
            color: '#FFFFFF',
            cursor: 'pointer',
            boxShadow: '0 8px 30px rgba(123, 47, 190, 0.3)',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            marginBottom: '24px',
          }}
        >
          אמת קוד
        </button>

        <p style={{ color: '#cfc2d5', fontSize: '14px' }}>
          לא קיבלת קוד?{' '}
          <button style={{
            color: '#deb7ff',
            fontWeight: 600,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
          }}>
            שלח שוב
          </button>
        </p>
      </main>
    </div>
  );
}
