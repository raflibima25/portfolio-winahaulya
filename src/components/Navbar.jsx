'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Tentang' },
    { href: '#education', label: 'Pendidikan' },
    { href: '#experience', label: 'Pengalaman' },
    { href: '#skills', label: 'Keahlian' },
    { href: '#contact', label: 'Kontak' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-300 ${isScrolled ? 'glass shadow-pink py-4' : ''
      }`}>
      <div className="container flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-[#2D2D2D] hover:text-[#F6B1CE] transition-colors">
          Winah<span className="text-[#F6B1CE]">.</span>
        </a>

        <ul className={`flex items-center gap-8 md:flex ${isMobileMenuOpen
            ? 'fixed top-0 right-0 w-[70%] max-w-[300px] h-screen flex-col justify-center gap-8 glass shadow-pink-lg z-50'
            : 'hidden md:flex'
          }`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="relative font-medium text-[#2D2D2D] hover:text-[#F6B1CE] transition-colors after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#FFE4EF] after:to-[#F6B1CE] after:rounded-full after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`flex flex-col gap-[5px] md:hidden p-1 bg-transparent ${isMobileMenuOpen ? 'z-50' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-[#2D2D2D] rounded transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}></span>
          <span className={`w-6 h-0.5 bg-[#2D2D2D] rounded transition-all ${isMobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
          <span className={`w-6 h-0.5 bg-[#2D2D2D] rounded transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
