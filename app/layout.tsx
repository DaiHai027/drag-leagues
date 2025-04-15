import type { Metadata } from 'next'
import './globals.css'
import { TaskBar } from '@/components/task-bar'

export const metadata: Metadata = {
  title: 'Drag & Drop Leagues',
  description: 'Drag & Drop Leagues',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <TaskBar />
      </body>
    </html>
  )
}
