import { Button } from "@/components/ui/button"
import { Github, ImageIcon, Shield, Lock, Database, Layers } from "lucide-react"

export function ProjectSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Flagship Project</h2>

        {/* Project Card */}
        <div className="bg-[#161f2e]/80 border border-[#1f2a3f] rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Project Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#135bec]/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#135bec]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">CyberShield</h3>
                  <p className="text-sm text-slate-400">Intrusion Detection System (Desktop)</p>
                </div>
              </div>

              <p className="text-slate-400 mb-6 leading-relaxed">
                JavaFX desktop app for monitoring and managing security events with a modern UI and secure
                authentication.
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Layers className="w-5 h-5 text-[#135bec] mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">JavaFX (FXML + CSS), dashboard navigation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-[#135bec] mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Secure password hashing (PBKDF2), validation, roles</span>
                </li>
                <li className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-[#135bec] mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">JDBC repository layer, structured logging</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#135bec] mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Designed for future extensions (reports, analytics)</span>
                </li>
              </ul>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button className="bg-[#135bec] hover:bg-[#135bec]/90 text-white rounded-xl" asChild>
                  <a href="https://github.com/Cvijo-Jankelic/MyLandingPage" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#1f2a3f] bg-transparent text-slate-300 hover:bg-[#1f2a3f] hover:text-white rounded-xl"
                >
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Screenshots
                </Button>
              </div>
            </div>

            {/* Screenshot Thumbnails */}
            <div className="lg:w-80 flex flex-col gap-3">
              <div className="aspect-video bg-gradient-to-br from-[#135bec]/20 to-[#1f2a3f] rounded-xl border border-[#1f2a3f] flex items-center justify-center">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-[#135bec]/50 mx-auto mb-2" />
                  <span className="text-xs text-slate-500">Dashboard View</span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-1 aspect-video bg-gradient-to-br from-[#1f2a3f] to-[#135bec]/10 rounded-xl border border-[#1f2a3f] flex items-center justify-center">
                  <span className="text-xs text-slate-500">Login</span>
                </div>
                <div className="flex-1 aspect-video bg-gradient-to-br from-[#135bec]/10 to-[#1f2a3f] rounded-xl border border-[#1f2a3f] flex items-center justify-center">
                  <span className="text-xs text-slate-500">Events</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
