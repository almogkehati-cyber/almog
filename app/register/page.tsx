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
        top: 0,
        right: 0,
        width: '384px',
        height: '384px',
        background: 'rgba(222, 183, 255, 0.05)',
        borderRadius: '50%',
        filter: 'blur(120px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '320px',
        height: '320px',
        background: 'rgba(97, 7, 186, 0.05)',
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
        <Link href="/welcome">
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
        padding: '96px 24px 32px',
      }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 700,
            marginBottom: '8px',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
          }}>
            צור חשבון חדש
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#cfc2d5',
          }}>
            הצטרף לקהילת TESFA
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{
          padding: '0',
          maxWidth: '400px',
          margin: '0 auto',
          width: '100%',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '8px',
              color: '#cfc2d5',
            }}>
              שם מלא
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="הזן שם מלא"
              style={{
                width: '100%',
                height: '56px',
                fontSize: '18px',
                padding: '0 16px',
                borderRadius: '28px',
                border: '1px solid rgba(76, 67, 83, 0.5)',
                backgroundColor: '#1e1e2f',
                color: '#e3e0f8',
                outline: 'none',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '8px',
              color: '#cfc2d5',
            }}>
              אימייל
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              style={{
                width: '100%',
                height: '56px',
                fontSize: '18px',
                padding: '0 16px',
                borderRadius: '28px',
                border: '1px solid rgba(76, 67, 83, 0.5)',
                backgroundColor: '#1e1e2f',
                color: '#e3e0f8',
                outline: 'none',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '8px',
              color: '#cfc2d5',
            }}>
              טלפון
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="05X-XXXXXXX"
              style={{
                width: '100%',
                height: '56px',
                fontSize: '18px',
                padding: '0 16px',
                borderRadius: '28px',
                border: '1px solid rgba(76, 67, 83, 0.5)',
                backgroundColor: '#1e1e2f',
                color: '#e3e0f8',
                outline: 'none',
              }}
            />
          </div>

          {error && (
            <div style={{
              fontSize: '14px',
              textAlign: 'center',
              padding: '12px 16px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 180, 171, 0.1)',
              color: '#ffb4ab',
              marginBottom: '20px',
            }}>
              {error}
            </div>
          )}

          <div style={{ marginTop: 'auto', paddingTop: '32px' }}>
            <button
              type="submit"
              style={{
                width: '100%',
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
              }}
            >
              המשך
            </button>

            <p style={{
              textAlign: 'center',
              fontSize: '14px',
              color: '#cfc2d5',
              marginTop: '16px',
            }}>
              כבר יש לך חשבון?{' '}
              <Link href="/login" style={{ color: '#deb7ff', fontWeight: 700, textDecoration: 'none' }}>
                התחבר
              </Link>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}
