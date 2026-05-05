'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function WelcomePage() {
  useEffect(() => {
    localStorage.setItem('hasSeenWelcome', 'true');
  }, []);

  return (
    <div 
      style={{
        width: '100%',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '24px',
        backgroundColor: '#0A0A1A',
        color: '#e3e0f8',
        fontFamily: 'Manrope, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        background: 'radial-gradient(circle at 50% -20%, rgba(123, 47, 190, 0.15) 0%, rgba(10, 10, 26, 0) 60%)',
      }} />
      <div style={{
        position: 'fixed',
        bottom: '-10%',
        left: '-10%',
        width: '50%',
        height: '50%',
        background: 'rgba(97, 7, 186, 0.1)',
        filter: 'blur(120px)',
        borderRadius: '50%',
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
      </header>

      {/* Wallet Card */}
      <div style={{
        marginTop: '100px',
        width: '100%',
        maxWidth: '320px',
        aspectRatio: '1.6',
        borderRadius: '24px',
        background: 'linear-gradient(135deg, rgba(123, 47, 190, 0.3) 0%, rgba(97, 7, 186, 0.2) 100%)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(222, 183, 255, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '24px',
        position: 'relative',
        zIndex: 10,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '20px', fontWeight: 700, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>TESFA</span>
          <div style={{
            width: '40px',
            height: '32px',
            borderRadius: '4px',
            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
          }} />
        </div>
        <div>
          <p style={{ fontSize: '12px', color: '#cfc2d5', marginBottom: '4px' }}>יתרה זמינה</p>
          <p style={{ fontSize: '28px', fontWeight: 700, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>2,450.00 TSF</p>
        </div>
      </div>

      {/* Content */}
      <div style={{
        textAlign: 'center',
        zIndex: 10,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '32px 0',
      }}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: 800,
          marginBottom: '16px',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
        }}>
          ברוכים הבאים ל-TESFA
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#cfc2d5',
          lineHeight: 1.6,
          maxWidth: '300px',
          margin: '0 auto',
        }}>
          המטבע הקהילתי שמעצים את הכלכלה המקומית שלך
        </p>
      </div>

      {/* Buttons */}
      <div style={{
        width: '100%',
        maxWidth: '400px',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        paddingBottom: '32px',
      }}>
        <Link href="/register" style={{ textDecoration: 'none' }}>
          <button style={{
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
          }}>
            צור חשבון חדש
          </button>
        </Link>
        <Link href="/login" style={{ textDecoration: 'none' }}>
          <button style={{
            width: '100%',
            height: '56px',
            fontSize: '18px',
            fontWeight: 600,
            borderRadius: '28px',
            border: '2px solid rgba(222, 183, 255, 0.3)',
            background: 'transparent',
            color: '#deb7ff',
            cursor: 'pointer',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
          }}>
            יש לי חשבון
          </button>
        </Link>
      </div>
    </div>
  );
}
