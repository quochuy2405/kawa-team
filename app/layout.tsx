import { Header } from '@/components/client'
import Providers from '@/providers/AppProviders'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import '../styles/globals.css'
import '../styles/space.css'
import { ScrollUI } from '@/components/client/atoms'

const font = Oswald({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin', 'vietnamese']
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <span className="space"></span>
        <AntdRegistry>
          <Providers>
            <Header />
            {children}
            <ScrollUI />
          </Providers>
        </AntdRegistry>
      </body>
    </html>
  )
}
