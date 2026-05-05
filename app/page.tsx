'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasSeenWelcome = localStorage.getItem('hasSeenWelcome') === 'true';
      
      if (!hasSeenWelcome) {
        router.push('/welcome');
      } else {
        router.push('/login');
      }
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121222] text-[#e3e0f8]">
      <p>טוען...</p>
    </div>
  );
}
