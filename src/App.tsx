import { Routes, Route } from 'react-router-dom'
import Header from './components/headers/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Products from './pages/Products'
import Platform from './pages/Platform'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/platform' element={<Platform />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
