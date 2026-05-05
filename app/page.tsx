'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome') === 'true';
    
    if (isLoggedIn) {
      router.push('/home');
    } else if (!hasSeenWelcome) {
      router.push('/welcome');
    } else {
      router.push('/login');
    }
  }, [router]);

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
