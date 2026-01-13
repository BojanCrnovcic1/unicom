import Footer from "../components/Footer"
import ContactFinancing from "../components/sections/ContactFinancing"
import CoreCapabilities from "../components/sections/CoreCapabilities"
import CustomerBenefits from "../components/sections/CustomerBenefits"
import Hero from "../components/sections/Hero"
import IndustrialArchitecture from "../components/sections/IndustrialArchitecture"
import MarketGridReadiness from "../components/sections/MarketGridReadiness"
import PlatformPreview from "../components/sections/PlatformPreview"
import UseCases from "../components/sections/UseCases"


const Home = () => {
  return (
    <>
      <Hero />
      <CoreCapabilities />
      <PlatformPreview />
      <UseCases />
      <CustomerBenefits />
      <IndustrialArchitecture />
      <MarketGridReadiness />
      <ContactFinancing />
      <Footer />
    </>
  )
}

export default Home
