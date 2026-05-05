import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TESFA - המטבע של הקהילה",
  description: "מערכת כלכלית חברתית",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "TESFA",
  },
};

export const viewport: Viewport = {
  themeColor: "#7B2FBE",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Manrope:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body style={{ backgroundColor: '#121222', color: '#e3e0f8', fontFamily: 'Manrope, sans-serif', minHeight: '100dvh' }}>
        {children}
      </body>
    </html>
  );
}
