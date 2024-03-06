import type { Metadata } from 'next'
import { inter, battambang } from './font'
import './globals.css'

export const metadata: Metadata = {
    title: 'Sabay News',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${battambang.className} ${inter.className}`}
                suppressHydrationWarning={true}
            >
                {children}
            </body>
        </html>
    )
}
