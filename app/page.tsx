import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectSection } from "@/components/project-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#101622] text-white relative overflow-hidden">
      {/* Grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(31,42,63,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(31,42,63,0.3)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Soft blue glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#135bec]/10 rounded-full blur-[120px] pointer-events-none" />

      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <TechStackSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
