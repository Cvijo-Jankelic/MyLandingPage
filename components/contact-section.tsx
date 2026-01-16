"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin, Copy, Check } from "lucide-react"

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const email = "cvijo@example.com"

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Contact</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Info Card */}
          <div className="bg-[#161f2e]/80 border border-[#1f2a3f] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white mb-6">Get in touch</h3>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center justify-between p-4 bg-[#101622] rounded-xl border border-[#1f2a3f]">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#135bec]" />
                  <span className="text-slate-300 text-sm">{email}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyEmail}
                  className="text-slate-400 hover:text-white hover:bg-[#1f2a3f]"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-[#101622] rounded-xl border border-[#1f2a3f] hover:border-[#135bec]/50 transition-colors"
              >
                <Github className="w-5 h-5 text-[#135bec]" />
                <span className="text-slate-300 text-sm">github.com/cvijo</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-[#101622] rounded-xl border border-[#1f2a3f] hover:border-[#135bec]/50 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-[#135bec]" />
                <span className="text-slate-300 text-sm">linkedin.com/in/cvijo</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#161f2e]/80 border border-[#1f2a3f] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white mb-6">Send a message</h3>

            <form className="space-y-4">
              <div>
                <Input
                  placeholder="Your name"
                  className="bg-[#101622] border-[#1f2a3f] text-white placeholder:text-slate-500 focus:border-[#135bec] focus:ring-[#135bec] rounded-xl"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-[#101622] border-[#1f2a3f] text-white placeholder:text-slate-500 focus:border-[#135bec] focus:ring-[#135bec] rounded-xl"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your message"
                  rows={4}
                  className="bg-[#101622] border-[#1f2a3f] text-white placeholder:text-slate-500 focus:border-[#135bec] focus:ring-[#135bec] rounded-xl resize-none"
                />
              </div>
              <Button type="submit" className="w-full bg-[#135bec] hover:bg-[#135bec]/90 text-white rounded-xl">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
