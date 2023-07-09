import React from 'react';
import './globals.css';

export const metadata = {
  title: '自作麻雀アプリ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  );
}
