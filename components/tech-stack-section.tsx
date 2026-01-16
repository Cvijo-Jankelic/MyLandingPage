import { Server, Monitor, ShieldCheck, Wrench } from "lucide-react"

const stacks = [
  {
    icon: Server,
    title: "Backend",
    description: "Java 17+, JDBC, Spring Boot, REST APIs, JUnit, Docker, CI/CD",
  },
  {
    icon: Monitor,
    title: "Desktop",
    description: "JavaFX, Scene Builder, CSS",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description: "PBKDF2/BCrypt, Spring Security, auth flows, JWT,",
  },
  {
    icon: Wrench,
    title: "Dev Practices",
    description: "Maven, logging, clean layering, SOLID principles, design patterns",
  },
]

export function TechStackSection() {
  return (
    <section id="stack" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Tech Stack</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stacks.map((stack) => (
            <div
              key={stack.title}
              className="bg-[#161f2e]/80 border border-[#1f2a3f] rounded-2xl p-6 hover:border-[#135bec]/50 transition-colors"
            >
              <div className="w-12 h-12 bg-[#135bec]/20 rounded-xl flex items-center justify-center mb-4">
                <stack.icon className="w-6 h-6 text-[#135bec]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{stack.title}</h3>
              <p className="text-sm text-slate-400">{stack.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
