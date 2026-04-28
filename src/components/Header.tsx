import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    // Check on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg py-2 mt-3" : "py-3 mt-6"
      }`}
      style={{
        background: scrolled
          ? "rgba(255, 255, 255, 0.7)"
          : "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: scrolled
          ? "0 8px 32px rgba(0, 0, 0, 0.1)"
          : "0 8px 32px rgba(0, 0, 0, 0.06)",
        borderRadius: "20px",
        width: "calc(100% - 32px)",
        maxWidth: "1200px",
      }}
    >
      <nav className="px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between relative">
        {/* Logo links */}
        <a href="/" className="block p-0 mr-6 whitespace-nowrap">
          <img
            src="/marius-wagner-logo-transparent-background.webp"
            alt="Marius Wagner Logo"
            width={180}
            height={60}
            className={`object-contain w-auto transition-all duration-300 ${scrolled ? "h-10" : "h-12"}`}
            style={{ display: "block" }}
            loading="eager"
          />
        </a>

        {/* Desktop Navigation exakt mittig */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <nav className="flex gap-8 items-center">
            <a
              href="/#projects"
              className="text-gray-700 hover:text-blue-600 transition text-base md:text-lg"
            >
              Projects
            </a>
            <a
              href="/#skills"
              className="text-gray-700 hover:text-blue-600 transition text-base md:text-lg"
            >
              Skills
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition text-base md:text-lg"
            >
              About
            </a>
          </nav>
        </div>

        {/* Desktop Kontakt rechts */}
        <div className="hidden md:flex items-center ml-6">
          <a
            href="mailto:marius-wagner-contact@mailbox.org"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-base whitespace-nowrap"
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger rechts */}
        <div className="md:hidden flex items-center ml-auto">
          <button
            className="p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menü öffnen"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <a
              href="/#projects"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
            >
              Projects
            </a>
            <a
              href="/#skills"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
            >
              Skills
            </a>
            <a
              href="/about"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
            >
              About
            </a>
            <a
              href="mailto:marius-wagner-contact@mailbox.org"
              className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
