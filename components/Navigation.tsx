"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import GetStartedButton from "./GetStartedButton";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "#services" },
    { label: "Pricing", path: "#pricing" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
      <div className="max-w-6xl w-full mx-6 transition-all duration-300 rounded-full bg-white/10 backdrop-blur-xl shadow-lg border border-white/20">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">
              HyperScale
            </span>
          </Link>

          {/* Navigation Menu - Desktop */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className="font-medium text-gray-300 hover:transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:transition-transform after:origin-left after:scale-x-0 hover:after:scale-x-100"
                style={{
                  '--hover-color': '#ff6e40'
                } as React.CSSProperties & { '--hover-color': string }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ff6e40'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex">
              <GetStartedButton size="small" />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white transition-colors"
              aria-label="Toggle menu"
              onMouseEnter={(e) => e.currentTarget.style.color = '#ff6e40'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl overflow-hidden">
            <div className="flex flex-col py-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-3 text-left font-medium text-gray-300 hover:bg-white/10 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ff6e40'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-6 py-3">
                <GetStartedButton size="small" className="w-full justify-center" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
