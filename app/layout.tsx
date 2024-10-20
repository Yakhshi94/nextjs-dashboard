import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';
import { StrictMode } from 'react';
export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html>
      <body className={`${inter.className} antialiased`}>
        <StrictMode>
          {children}
        </StrictMode>
      </body>
    </html>
  )
}