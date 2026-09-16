import { Header } from './components/Header/Header'
import { Hero } from './components/sections/Hero'
import { ForWhom } from './components/sections/ForWhom'
import { Program } from './components/sections/Program'
import { Includes } from './components/sections/Includes'
import { Result } from './components/sections/Result'
import { Reviews } from './components/sections/Reviews'
import { CTA } from './components/sections/CTA'
import { Footer } from './components/Footer/Footer'
import { LeadForm } from './components/LeadForm/LeadForm'

function App() {
  return (
    <main>
      <Header />

      <Hero />
      <ForWhom />
      <Program />
      <Includes />
      <Result />
      <Reviews />
      <CTA />

      <section id="lead-form" className="lead-form-section">
        <LeadForm />
      </section>

      <Footer />
    </main>
  )
}

export default App