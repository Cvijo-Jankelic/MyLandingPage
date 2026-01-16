import { Code2, Zap, Target, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Content */}
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm a passionate Java developer with expertise in building secure, scalable applications. 
              I focus on creating robust backend systems and desktop applications that solve real-world problems.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed">
              With experience in authentication, cryptography, database design, and concurrent systems, 
              I'm dedicated to writing clean, maintainable code that prioritizes security and performance.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed">
              When I'm not coding, I enjoy learning new technologies, contributing to open-source projects, 
              and staying updated with the latest industry trends.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#161f2e]/80 border border-[#1f2a3f] rounded-2xl p-6 hover:border-[#135bec]/50 transition-colors">
              <div className="w-12 h-12 bg-[#135bec]/20 rounded-xl flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-[#135bec]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Clean Code</h3>
              <p className="text-sm text-slate-400">
                Writing maintainable, scalable code with proper design patterns.
              </p>
            </div>

            <div className="bg-[#161f2e]/80 border border-[#1f2a3f] rounded-2xl p-6 hover:border-[#135bec]/50 transition-colors">
              <div className="w-12 h-12 bg-[#135bec]/20 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#135bec]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Performance</h3>
              <p className="text-sm text-slate-400">
                Optimizing applications for speed and efficiency.
              </p>
            </div>

            <div className="bg-[#161f2e]/80 border border-[#1f2a3f] rounded-2xl p-6 hover:border-[#135bec]/50 transition-colors">
              <div className="w-12 h-12 bg-[#135bec]/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#135bec]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Security</h3>
              <p className="text-sm text-slate-400">
                Building secure systems with proper authentication and encryption.
              </p>
            </div>

            <div className="bg-[#161f2e]/80 border border-[#1f2a3f] rounded-2xl p-6 hover:border-[#135bec]/50 transition-colors">
              <div className="w-12 h-12 bg-[#135bec]/20 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#135bec]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Collaboration</h3>
              <p className="text-sm text-slate-400">
                Working effectively with teams and contributing to projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
