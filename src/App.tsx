import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Overview from './pages/Overview'
import Products from './pages/Products'
import Pricing from './pages/Pricing'
import Release from './pages/Release'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/release" element={<Release />} />
        </Routes>
      </Layout>
    </>
  )
}
