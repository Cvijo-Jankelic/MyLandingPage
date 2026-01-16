import { Button } from "@/components/ui/button"
import { Shield, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* Left Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight text-balance">
              Java Developer 
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 mb-8 leading-relaxed">
              Secure desktop & backend systems: auth, crypto, DB, concurrency.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" className="bg-[#135bec] hover:bg-[#135bec]/90 text-white rounded-xl" asChild>
                <a href="#projects">
                  <Shield className="w-5 h-5 mr-2" />
                  View CyberShield
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#1f2a3f] bg-transparent text-slate-300 hover:bg-[#1f2a3f] hover:text-white rounded-xl"
                asChild
              >
                <a href="#contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact
                </a>
              </Button>
            </div>

            {/* Highlight Chips */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#161f2e]/80 border border-[#1f2a3f] rounded-lg text-sm text-slate-300">
                Java Spring Applications
              </span>
               <span className="px-4 py-2 bg-[#161f2e]/80 border border-[#1f2a3f] rounded-lg text-sm text-slate-300">
                Docker & Kubernetes
              </span>
              <span className="px-4 py-2 bg-[#161f2e]/80 border border-[#1f2a3f] rounded-lg text-sm text-slate-300">
                CI/CD & DevOps
              </span>
              <span className="px-4 py-2 bg-[#161f2e]/80 border border-[#1f2a3f] rounded-lg text-sm text-slate-300">
                Clean Architecture (Service/Repository)
              </span>
              <span className="px-4 py-2 bg-[#161f2e]/80 border border-[#1f2a3f] rounded-lg text-sm text-slate-300">
                FullStack Development
              </span>
            </div>
          </div>

          {/* Right Content - Status Pill */}
          <div className="lg:pt-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#161f2e]/80 border border-[#1f2a3f] rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm text-slate-300">Available for projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
