export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#1f2a3f] py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Cvijo Jankelić. All rights reserved.</p>

          {/* Version Tags */}
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-[#161f2e]/80 border border-[#1f2a3f] rounded text-xs text-slate-500 font-mono">
              VER: 2026.1
            </span>
            <span className="px-3 py-1 bg-[#161f2e]/80 border border-[#1f2a3f] rounded text-xs text-slate-500 font-mono">
              SECURE-BUILD
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
