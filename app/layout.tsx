import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TESFA - המטבע של הקהילה",
  description: "מטבע קהילתי מבוסס UBI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
