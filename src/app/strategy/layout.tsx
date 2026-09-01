import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Strategy',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
