import Header from './components/Header'
import Hero from './components/Hero'
import Features from  './components/Features'
import Benefits from './components/Benefits'
import Testimonials from './components/Testmonials'
import FAQ from './components/FAQS'
import Pricing from './components/Pricing'
import Footer from './components/Footers'


function App() {
  return (
    <main className="min-h-screen bg-medibill-dark">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
      from-medibill-blue/10 via-transparent to-transparent pointer-events-none" />
      <Header />
      <Hero />
      <Features/>
      <Benefits />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Footer />
    </main>
    
  )
}


export default App
