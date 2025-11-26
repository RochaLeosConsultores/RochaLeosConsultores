import { Link, useLocation } from "react-router";
import { Button } from "../ui/button";
import { useState, useEffect, useRef } from "react";

const serviciosLinks = [
  { name: "Contabilidad General", path: "/servicios/contabilidad-general" },
  { name: "Asesoría Fiscal", path: "/servicios/asesoria-fiscal" },
  { name: "Auditoría", path: "/servicios/auditoria" },
  { name: "Asesoría Financiera", path: "/servicios/asesoria-financiera" },
  { name: "Nómina y RH", path: "/servicios/nomina-y-rh" },
  { name: "Compliance Fiscal", path: "/servicios/compliance-fiscal" },
  { name: "Trámites ante Autoridades", path: "/servicios/tramites-ante-autoridades" },
];

export function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServiciosOpen, setIsServiciosOpen] = useState(false);
  const [isMobileServiciosOpen, setIsMobileServiciosOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServiciosOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isServicioActive = () => location.pathname.startsWith("/servicios");

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

            {/* Servicios Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsServiciosOpen(!isServiciosOpen)}
                onMouseEnter={() => setIsServiciosOpen(true)}
                className={`text-white font-medium transition-all duration-300 relative group flex items-center gap-1 ${
                  isServicioActive() ? "text-[#BFC5CA]" : "hover:text-[#BFC5CA]"
                }`}
              >
                Servicios
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isServiciosOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#BFC5CA] transition-all duration-300 ${
                    isServicioActive() ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>

              {/* Dropdown Menu */}
              <div
                onMouseLeave={() => setIsServiciosOpen(false)}
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                  isServiciosOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="bg-[#0e1a2b]/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden min-w-[280px]">
                  <div className="p-2">
                    {serviciosLinks.map((link, index) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsServiciosOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isActive(link.path)
                            ? "bg-[#1F3A5F] text-white"
                            : "text-white/80 hover:bg-white/10 hover:text-white"
                        }`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

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
            <div className="flex flex-col space-y-2">
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

              {/* Mobile Servicios Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileServiciosOpen(!isMobileServiciosOpen)}
                  className={`w-full text-left text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-between ${
                    isServicioActive() ? "bg-white/20 text-[#BFC5CA]" : "hover:bg-white/10"
                  }`}
                >
                  Servicios
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isMobileServiciosOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isMobileServiciosOpen && (
                  <div className="ml-4 mt-2 space-y-1 border-l-2 border-white/20 pl-4">
                    {serviciosLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileServiciosOpen(false);
                        }}
                        className={`block text-sm text-white/80 font-medium py-2 px-3 rounded-lg transition-colors ${
                          isActive(link.path)
                            ? "bg-white/20 text-white"
                            : "hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Button
                variant="secondary"
                href="/contacto"
                className="border-white text-white hover:bg-white hover:text-[#1F3A5F] w-full mt-2"
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
