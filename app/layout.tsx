import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gokul portfolio',
  description: 'UI UX Portfolio @bala.abq',
  generator: 'me ofc',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
