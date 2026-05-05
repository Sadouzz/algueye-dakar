import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import Collections from './pages/Collections'
import Product from './pages/Product'
import Events from './pages/Events'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="app" lang="fr" data-i18n="fr">
      <ScrollProgress />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:category" element={<Collections />} />
          <Route path="/produit/:id" element={<Product />} />
          <Route path="/evenements" element={<Events />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
