import { type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation()
  return (
    <>
      <Navbar />
      <main key={location.pathname}>{children}</main>
      <Footer />
    </>
  )
}
