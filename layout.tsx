import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header style={{
          backgroundColor:"magenta",
          padding:"4rem",
        }}>
          <h1>Header</h1>  
        </header>
        {children}
          <footer style={{background: "magenta",
        padding:"4rem" }}>
          <p>Footer</p>
        </footer>
          </body>
    </html>
  )
}