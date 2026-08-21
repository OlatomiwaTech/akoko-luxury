import type { Metadata } from 'next';
import { CartProvider } from '@/Context/CartContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'AKÓKÒ Luxury',
  description: 'African heritage meets Swiss precision.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}