import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { Accessories } from "@/components/accessories"
import { Bikes } from "@/components/bikes"
import { ServiceSection } from "@/components/service-section"
import { Differentiators } from "@/components/differentiators"
import { HowToBuy } from "@/components/how-to-buy"
import { CtaFinal } from "@/components/cta-final"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Accessories />
        <Bikes />
        <ServiceSection />
        <Differentiators />
        <HowToBuy />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
