import { Link, useLocation } from "react-router";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";

export function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Servicios", path: "/servicios" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0e1a2b]/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/logo_rlconsultores.png"
              alt="RL Consultores"
              className="h-24 w-auto p-2 transition-transform duration-300 group-hover:scale-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-white font-medium transition-all duration-300 relative group ${
                  isActive(link.path) ? "text-[#BFC5CA]" : "hover:text-[#BFC5CA]"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#BFC5CA] transition-all duration-300 ${
                    isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
            <Button variant="secondary" href="/contacto" className="border-white text-white hover:bg-white hover:text-[#1F3A5F]">
              Contacto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-white font-medium py-2 px-4 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? "bg-white/20 text-[#BFC5CA]"
                      : "hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                variant="secondary"
                href="/contacto"
                className="border-white text-white hover:bg-white hover:text-[#1F3A5F] w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

