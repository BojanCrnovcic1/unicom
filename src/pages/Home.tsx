import Marque from "../components/Marque"
import ContactFinancing from "../components/sections/ContactFinancing"
import CoreCapabilities from "../components/sections/CoreCapabilities"
import CustomerBenefits from "../components/sections/CustomerBenefits"
import Hero from "../components/sections/Hero"
import IndustrialArchitecture from "../components/sections/IndustrialArchitecture"
import IndustrialCapabilities from "../components/sections/IndustrialCapabilities"
import MarketGridReadiness from "../components/sections/MarketGridReadiness"
import AboutPreview from "../components/sections/AboutPreview"
import ProductsPreview from "../components/sections/ProductsPreview"
import UseCases from "../components/sections/UseCases"


const Home = () => {
  return (
    <>
      <Hero />
      <Marque />
      <CoreCapabilities />
      <AboutPreview />
      <ProductsPreview />
      <IndustrialCapabilities />
      <UseCases />
      <CustomerBenefits />
      <IndustrialArchitecture />
      <MarketGridReadiness />
      <ContactFinancing />
    </>
  )
}

export default Home
