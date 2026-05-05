'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SecuritySetupPage() {
  const router = useRouter();

  return (
    <div 
      style={{
        width: '100%',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '288px',
        height: '288px',
        background: 'rgba(123, 47, 190, 0.2)',
        filter: 'blur(100px)',
        borderRadius: '50%',
        zIndex: -1,
      }} />

      {/* Header */}
      <nav style={{
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
        <Link href="/otp">
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
      </nav>

      {/* Main Content */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '96px 24px 48px',
        width: '100%',
        maxWidth: '400px',
      }}>
        {/* Lock Icon */}
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
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
          </svg>
        </div>

        <h1 style={{
          fontSize: '28px',
          fontWeight: 700,
          marginBottom: '12px',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          textAlign: 'center',
        }}>
          הגדרת אבטחה
        </h1>
        <p style={{
          color: '#cfc2d5',
          fontSize: '16px',
          marginBottom: '48px',
          textAlign: 'center',
          lineHeight: 1.6,
        }}>
          בחר את שיטת האימות המועדפת עליך
        </p>

        {/* Options */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          width: '100%',
          marginBottom: '48px',
        }}>
          {/* Biometric Option */}
          <button
            onClick={() => router.push('/home')}
            style={{
              width: '100%',
              padding: '20px 24px',
              borderRadius: '16px',
              background: 'rgba(30, 30, 46, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(76, 67, 83, 0.3)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              textAlign: 'right',
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              background: 'rgba(123, 47, 190, 0.2)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="24" height="24" fill="#deb7ff" viewBox="0 0 24 24">
                <path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28z"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#e3e0f8', fontSize: '18px', fontWeight: 600, marginBottom: '4px' }}>
                ביומטרי
              </p>
              <p style={{ color: '#cfc2d5', fontSize: '14px' }}>
                Face ID או טביעת אצבע
              </p>
            </div>
          </button>

          {/* PIN Option */}
          <button
            onClick={() => router.push('/pin-setup')}
            style={{
              width: '100%',
              padding: '20px 24px',
              borderRadius: '16px',
              background: 'rgba(30, 30, 46, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #7b2fbe',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              textAlign: 'right',
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              background: 'rgba(123, 47, 190, 0.2)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="24" height="24" fill="#deb7ff" viewBox="0 0 24 24">
                <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#e3e0f8', fontSize: '18px', fontWeight: 600, marginBottom: '4px' }}>
                קוד PIN
              </p>
              <p style={{ color: '#cfc2d5', fontSize: '14px' }}>
                קוד אישי בן 4 ספרות
              </p>
            </div>
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '12px',
              background: '#7b2fbe',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </div>
          </button>
        </div>

        <p style={{
          color: '#cfc2d5',
          fontSize: '12px',
          textAlign: 'center',
          lineHeight: 1.6,
        }}>
          תוכל לשנות את הגדרות האבטחה בכל עת דרך ההגדרות
        </p>
      </main>
    </div>
  );
}
