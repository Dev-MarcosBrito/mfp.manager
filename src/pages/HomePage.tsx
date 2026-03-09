import About from "../components/sections/About"
import AssetsSection from "../components/sections/AssetsSection"
import Benefits from "../components/sections/Benefits"
import CTA from "../components/sections/CTA"
import Features from "../components/sections/Features"
import Hero from "../components/sections/Hero"

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      <About />
      <AssetsSection />
      <CTA />
    </>
  )
}

export default HomePage
