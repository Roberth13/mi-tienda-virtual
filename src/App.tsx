import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <ProductGrid />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Rutas adicionales como /productos, /carrito irían aquí */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
