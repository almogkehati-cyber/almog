'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const [isConnected, setIsConnected] = useState(false);
  const [user, setUser] = useState<{ fullName?: string } | null>(null);
  const [balance] = useState('1,250.00');
  
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const savedUser = localStorage.getItem('currentUser');
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome') === 'true';
    
    if (isLoggedIn && savedUser) {
      setIsConnected(true);
      setUser(JSON.parse(savedUser));
    } else if (!hasSeenWelcome) {
      router.push('/welcome');
    } else {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/login');
  };

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#121222', color: '#e3e0f8' }}>
        <p>טוען...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24" style={{ backgroundColor: '#121222', color: '#e3e0f8', fontFamily: 'Manrope, sans-serif' }}>
      
      {/* Background Glow */}
      <div className="fixed top-0 right-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ backgroundColor: 'rgba(222, 183, 255, 0.05)' }} />
      <div className="fixed bottom-0 left-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none" style={{ backgroundColor: 'rgba(97, 7, 186, 0.05)' }} />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-row-reverse justify-between items-center px-6 h-16" style={{ backgroundColor: '#121222' }}>
        <span className="text-2xl font-bold tracking-tighter" style={{ color: '#deb7ff', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          TESFA
        </span>
        <button onClick={handleLogout} className="p-2 rounded-full transition-colors hover:opacity-80" style={{ color: '#cfc2d5' }}>
          <span className="material-symbols-outlined">logout</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="pt-24 px-6">
        {/* Welcome */}
        <div className="mb-8 text-right">
          <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#e3e0f8' }}>
            שלום, {user?.fullName || 'משתמש'}! 👋
          </h1>
          <p style={{ color: '#cfc2d5' }}>ברוך הבא למערכת TESFA</p>
        </div>

        {/* Balance Card */}
        <div className="rounded-3xl p-6 mb-6 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #7b2fbe 0%, #6107ba 100%)' }}>
          <p className="text-sm mb-2 opacity-90">היתרה שלך</p>
          <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{balance}</h2>
          <p className="text-sm opacity-75">TESFA</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <button className="flex flex-col items-center justify-center p-4 rounded-2xl transition-all active:scale-95" style={{ backgroundColor: '#29283a' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#7b2fbe' }}>
              <span className="material-symbols-outlined text-white">send</span>
            </div>
            <span className="text-sm" style={{ color: '#e3e0f8' }}>שלח</span>
          </button>

          <button className="flex flex-col items-center justify-center p-4 rounded-2xl transition-all active:scale-95" style={{ backgroundColor: '#29283a' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#7b2fbe' }}>
              <span className="material-symbols-outlined text-white">download</span>
            </div>
            <span className="text-sm" style={{ color: '#e3e0f8' }}>קבל</span>
          </button>

          <button className="flex flex-col items-center justify-center p-4 rounded-2xl transition-all active:scale-95" style={{ backgroundColor: '#29283a' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#4ade80' }}>
              <span className="material-symbols-outlined text-white">payments</span>
            </div>
            <span className="text-sm" style={{ color: '#e3e0f8' }}>UBI</span>
          </button>
        </div>

        {/* Recent Activity */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <Link href="/activity" className="text-sm" style={{ color: '#deb7ff' }}>הצג הכל</Link>
            <h3 className="text-lg font-bold" style={{ color: '#e3e0f8' }}>פעילות אחרונה</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 rounded-2xl" style={{ backgroundColor: '#29283a' }}>
              <div className="text-left">
                <p className="font-bold" style={{ color: '#4ade80' }}>+50 TSF</p>
                <p className="text-xs" style={{ color: '#cfc2d5' }}>לפני שעה</p>
              </div>
              <div className="flex items-center gap-3 flex-row-reverse">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(74, 222, 128, 0.2)' }}>
                  <span style={{ color: '#4ade80' }}>+</span>
                </div>
                <div className="text-right">
                  <p className="font-medium" style={{ color: '#e3e0f8' }}>קיבלת</p>
                  <p className="text-sm" style={{ color: '#cfc2d5' }}>מיוסי כהן</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl" style={{ backgroundColor: '#29283a' }}>
              <div className="text-left">
                <p className="font-bold" style={{ color: '#e3e0f8' }}>-25 TSF</p>
                <p className="text-xs" style={{ color: '#cfc2d5' }}>לפני 3 שעות</p>
              </div>
              <div className="flex items-center gap-3 flex-row-reverse">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(222, 183, 255, 0.2)' }}>
                  <span style={{ color: '#deb7ff' }}>-</span>
                </div>
                <div className="text-right">
                  <p className="font-medium" style={{ color: '#e3e0f8' }}>שלחת</p>
                  <p className="text-sm" style={{ color: '#cfc2d5' }}>לדני לוי</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-20 px-6"
        style={{ backgroundColor: '#1e1e2f', borderTop: '1px solid #333345' }}>
        <Link href="/profile" className="flex flex-col items-center gap-1">
          <span className="material-symbols-outlined" style={{ color: '#cfc2d5' }}>person</span>
          <span className="text-xs" style={{ color: '#cfc2d5' }}>פרופיל</span>
        </Link>

        <Link href="/business" className="flex flex-col items-center gap-1">
          <span className="material-symbols-outlined" style={{ color: '#cfc2d5' }}>store</span>
          <span className="text-xs" style={{ color: '#cfc2d5' }}>עסקים</span>
        </Link>

        <Link href="/activity" className="flex flex-col items-center gap-1">
          <span className="material-symbols-outlined" style={{ color: '#cfc2d5' }}>history</span>
          <span className="text-xs" style={{ color: '#cfc2d5' }}>פעילות</span>
        </Link>

        <Link href="/" className="flex flex-col items-center gap-1">
          <span className="material-symbols-outlined" style={{ color: '#deb7ff', fontVariationSettings: "'FILL' 1" }}>home</span>
          <span className="text-xs" style={{ color: '#deb7ff' }}>בית</span>
        </Link>
      </nav>
    </div>
  );
}
