'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const [user, setUser] = useState<{fullName: string} | null>(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const savedUser = localStorage.getItem('currentUser');
    
    if (!isLoggedIn) {
      router.push('/welcome');
    } else if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      setUser({ fullName: 'משתמש' });
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('hasSeenWelcome');
    router.push('/welcome');
  };

  if (!user) {
    return (
      <div style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#121222',
        color: '#e3e0f8',
      }}>
        <p>טוען...</p>
      </div>
    );
  }

  return (
    <div 
      style={{
        width: '100%',
        minHeight: '100dvh',
        backgroundColor: '#121222',
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
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 24px',
        marginTop: '16px',
      }}>
        <span style={{
          fontSize: '24px',
          fontWeight: 800,
          color: '#deb7ff',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
        }}>
          TESFA
        </span>
        <button 
          onClick={handleLogout}
          style={{
            padding: '8px',
            borderRadius: '50%',
            background: 'none',
            border: 'none',
            color: '#cfc2d5',
            cursor: 'pointer',
          }}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </header>

      {/* Main Content */}
      <main style={{
        position: 'relative',
        zIndex: 10,
        padding: '32px 24px 128px',
      }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 700,
            marginBottom: '8px',
            color: '#e3e0f8',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
          }}>
            שלום, {user.fullName}! 👋
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#cfc2d5',
          }}>
            ברוך הבא ל-TESFA
          </p>
        </div>

        {/* Balance Card */}
        <div style={{
          padding: '24px',
          borderRadius: '24px',
          marginBottom: '24px',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(123, 47, 190, 0.2) 0%, rgba(97, 7, 186, 0.2) 100%)',
          border: '1px solid rgba(76, 67, 83, 0.2)',
        }}>
          <p style={{
            fontSize: '14px',
            marginBottom: '8px',
            color: '#cfc2d5',
          }}>
            היתרה שלך
          </p>
          <h2 style={{
            fontSize: '40px',
            fontWeight: 700,
            color: '#deb7ff',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
          }}>
            2,450.00 TSF
          </h2>
        </div>

        {/* Quick Actions */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
        }}>
          <button style={{
            padding: '24px',
            borderRadius: '24px',
            background: '#1e1e2f',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>📤</div>
            <p style={{
              fontWeight: 700,
              color: '#e3e0f8',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}>
              שלח
            </p>
          </button>
          <button style={{
            padding: '24px',
            borderRadius: '24px',
            background: '#1e1e2f',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>📥</div>
            <p style={{
              fontWeight: 700,
              color: '#e3e0f8',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}>
              קבל
            </p>
          </button>
        </div>
      </main>
    </div>
  );
}
