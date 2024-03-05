import type { Metadata } from 'next';
import { Battambang } from 'next/font/google';
import './globals.css';

const battambang = Battambang({
    subsets: ['khmer'],
    weight: ['400']
});

export const metadata: Metadata = {
    title: 'Sabay News'
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={battambang.className} suppressHydrationWarning={true}>{children}</body>
        </html>
    );
}
