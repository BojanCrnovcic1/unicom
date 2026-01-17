import { Routes, Route } from 'react-router-dom'
import Header from './components/headers/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Products from './pages/Products'
import Platform from './pages/Platform'
import Contact from './pages/Contact'
import Catalogs from './pages/Catalogs'
import About from './pages/About'
import ScrollToTop from './hooks/ScrollToTop'

function App() {
  return (
    <>
    <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/platform' element={<Platform />} />
        <Route path='/catalogs' element={<Catalogs />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
