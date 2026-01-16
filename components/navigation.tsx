"use client"

import { useState } from "react"
import { Menu, X, Github, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { scrollToHash } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToHash(sectionId)
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#101622]/80 backdrop-blur-md border-b border-[#1f2a3f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-white font-semibold text-lg tracking-tight">
            Cvijo Jankelić
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className="text-slate-400 hover:text-white transition-colors text-sm cursor-pointer"
            >
              About
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick(e, 'projects')}
              className="text-slate-400 hover:text-white transition-colors text-sm cursor-pointer"
            >
              Projects
            </a>
            <a 
              href="#stack" 
              onClick={(e) => handleNavClick(e, 'stack')}
              className="text-slate-400 hover:text-white transition-colors text-sm cursor-pointer"
            >
              Stack
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-slate-400 hover:text-white transition-colors text-sm cursor-pointer"
            >
              Contact
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-[#1f2a3f] bg-transparent text-slate-300 hover:bg-[#1f2a3f] hover:text-white"
              asChild
            >
              <a href="https://github.com/Cvijo-Jankelic" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button size="sm" className="bg-[#135bec] hover:bg-[#135bec]/90 text-white">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#1f2a3f]">
            <div className="flex flex-col gap-4">
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, 'about')}
                className="text-slate-400 hover:text-white transition-colors text-sm cursor-pointer"
              >
                About
              </a>
              <a 
                href="#projects" 
                onClick={(e) => handleNavClick(e, 'projects')}
                className="text-slate-400 hover:text-white transition-colors text-sm cursor-pointer"
              >
                Projects
              </a>
              <a 
                href="#stack" 
                onClick={(e) => handleNavClick(e, 'stack')}
                className="text-slate-400 hover:text-white transition-colors text-sm cursor-pointer"
              >
                Stack
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="text-slate-400 hover:text-white transition-colors text-sm cursor-pointer"
              >
                Contact
              </a>
              <div className="flex gap-3 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#1f2a3f] bg-transparent text-slate-300 hover:bg-[#1f2a3f] hover:text-white flex-1"
                  asChild
                >
                  <a href="https://github.com/Cvijo-Jankelic" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button size="sm" className="bg-[#135bec] hover:bg-[#135bec]/90 text-white flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  CV
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
