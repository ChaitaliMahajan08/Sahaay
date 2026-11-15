import type { Metadata, Viewport } from 'next';
import './globals.css';
import SwRegister from './sw-register';

export const metadata: Metadata = {
  title: 'Sahaay — opportunity starts with finding it',
  description: 'Find government welfare schemes, understand the requirements, and take your next step. In your language.',
  manifest: '/manifest.webmanifest',
  icons: { icon: '/icon.svg' },
  appleWebApp: { capable: true, statusBarStyle: 'default', title: 'Sahaay' },
};
export const viewport: Viewport = { themeColor: '#173e33', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SwRegister />
        {children}
      </body>
    </html>
  );
}
