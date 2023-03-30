import { ReactNode } from 'react'

export const metadata = {
  title: 'Dashboard Route',
}

interface AuthLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      {children}
    </div>
  )
}
