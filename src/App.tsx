import { Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from  './components/Features'
import Benefits from './components/Benefits'
import Testimonials from './components/Testmonials'
import FAQ from './components/FAQS'
import Pricing from './components/Pricing'
import Footer from './components/Footers'
import Page from './components/DemoPage'
import Dashboard from './components/Dashboard'




function MainPage() {
  return (
    <main className="min-h-screen bg-medibill-dark">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
      from-medibill-blue/10 via-transparent to-transparent pointer-events-none" />
      <Header />
      <Hero/>
      <Features/>
      <Benefits />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Footer />
    </main>
    
  )
}



function DemoPage() {
  return (
    <div className=' overflow-auto bg-blue-500'>
      {/* <Header /> */}
        <Page />
    </div>

  )
}

function DashboardPage() {
  return (
    <div className=''>
      <Dashboard />
    </div>
  )
}

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/DemoPage" element={<DemoPage />} />
        <Route path="/DashboardPage" element={<DashboardPage />} />
      </Routes>
    )
}

export default App