"use client"

import { Instagram } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#2D2D2D] text-white px-4 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-xl">miauzly.ch</h3>
            </div>
            <p className="text-gray-400">{t.footer.tagline}</p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-sm opacity-60">{t.footer.legal}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#impressum" className="text-gray-400 hover:text-[#4ECDC4] transition-colors">
                  {t.footer.links.impressum}
                </a>
              </li>
              <li>
                <a href="#datenschutz" className="text-gray-400 hover:text-[#4ECDC4] transition-colors">
                  {t.footer.links.datenschutz}
                </a>
              </li>
              <li>
                <a href="mailto:hello@miauzly.ch" className="text-gray-400 hover:text-[#4ECDC4] transition-colors">
                  hello@miauzly.ch
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-sm opacity-60">{t.footer.social}</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#4ECDC4] flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://threads.net"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#4ECDC4] flex items-center justify-center transition-all hover:scale-110"
                aria-label="Threads"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.186 3.998c-.61.015-1.304.06-2.055.18-2.833.45-5.004 1.798-6.288 3.905-.904 1.483-1.326 3.195-1.271 5.156.048 1.726.48 3.248 1.296 4.574.763 1.24 1.8 2.208 3.117 2.908 1.29.684 2.742 1.026 4.364 1.026 1.626 0 3.08-.343 4.374-1.03 1.32-.7 2.359-1.672 3.123-2.917.816-1.33 1.248-2.855 1.296-4.586.055-1.965-.369-3.68-1.275-5.165-1.287-2.11-3.462-3.46-6.302-3.91-.754-.12-1.449-.165-2.06-.18zm-.002 1.66c.537.013 1.146.054 1.806.162 2.346.371 4.066 1.423 5.142 3.145.742 1.19 1.09 2.605 1.045 4.255-.04 1.465-.398 2.757-1.076 3.877-.639 1.047-1.512 1.86-2.623 2.443-1.092.575-2.327.863-3.71.863-1.378 0-2.61-.287-3.698-.861-1.108-.582-1.98-1.393-2.617-2.437-.677-1.118-1.035-2.408-1.075-3.87-.045-1.646.301-3.058 1.04-4.244 1.073-1.719 2.787-2.77 5.126-3.141.66-.108 1.27-.149 1.808-.162z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#4ECDC4] flex items-center justify-center transition-all hover:scale-110"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">{t.footer.copyright}</p>
          <p className="text-gray-400 text-sm">{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  )
}
