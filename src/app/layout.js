import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Projetinho - Moonie',
  description: 'API com JSONServer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}</body>
    </html>
  )
}
