const navLinks = ['About', 'Experience', 'Skills', 'Projects', 'Contact']

export default function Footer() {
  return (
    <footer className="border-t border-white/7 pt-16 pb-8 px-6 bg-[#060606]">
      <div className="max-w-[1200px] mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-14">

          {/* Brand */}
          <div>
            <img src="/logo.png" alt="Logo" className="w-[42px] h-[42px] rounded-lg object-contain mb-5" />
            <p className="text-sm text-gray-500 leading-[1.75] max-w-[300px] m-0">
              Professional <span className="text-ink">Full Stack Developer</span> dedicated to crafting immersive, high-performance digital experiences with cutting-edge technology.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] font-semibold text-gray-600 uppercase tracking-[0.1em] mb-5 mt-0">Navigation</p>
            <ul className="list-none m-0 p-0 flex flex-col gap-3">
              {navLinks.map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-sm text-gray-500 font-medium transition-colors duration-200 hover:text-ink">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[11px] font-semibold text-gray-600 uppercase tracking-[0.1em] mb-5 mt-0">Connect</p>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:ahsinsabir465@gmail.com" className="text-sm text-gray-500 transition-colors duration-200 hover:text-ruby">
                ahsinsabir465@gmail.com
              </a>
              <a href="tel:+923097208805" className="text-sm text-gray-500 transition-colors duration-200 hover:text-ruby">
                0309 7208805
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-7 flex justify-between items-center flex-wrap gap-3">
          <span className="text-[13px] text-gray-700">© 2026 Ahsin Sabir. All rights reserved.</span>
          <span className="text-[13px] text-gray-700 flex items-center gap-1">
            Made with <span className="text-ruby">♥</span> in Pakistan
          </span>
        </div>

      </div>
    </footer>
  )
}
