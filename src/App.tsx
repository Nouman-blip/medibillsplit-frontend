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
import SignUpPage from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'


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
      <Footer />
    </main>
    
  )
}



function DemoPage() {
  return (
    <div className='flex flex-col gap-16'>
      <div>
        <Header />
      </div>

      <div>
        <Page />
      </div>
      
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



function LoginPage() {
  return (
    <div>
      <SignIn />
    </div>
  )
}

function SignUp() {
  return (
    <div>
      <SignUpPage />
    </div>
  )
}

function PricingPage() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <Header />
      </div>
      <div>
        <Pricing />
      </div>
    </div>
  );
}


function App() {
  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    )
}

export default App