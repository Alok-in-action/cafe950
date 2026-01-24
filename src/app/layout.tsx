import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Menu Magic',
  description: 'Cafe 9:50',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@200;300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans text-[#4a3b32] antialiased selection:bg-[#8A4B2B] selection:text-[#F3E2C9] pb-32">
        {children}
      </body>
    </html>
  );
}
