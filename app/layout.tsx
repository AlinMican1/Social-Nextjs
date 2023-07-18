import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="App">
        <div className='container-content'>
        <Providers>
        {children}
        </Providers>
        </div>
        </body>
        
    </html>
  )
}
