import { Link, useLocation } from "react-router";
import { Button } from "../ui/button";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll cuando el menu móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServiciosOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Cerrar menu móvil al navegar
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isServicioActive = () => location.pathname.startsWith("/servicios");

  return (
    <>
    <nav
      ref={navRef}
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
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Abrir menú"
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

      </div>
    </nav>

    {/* Mobile Drawer */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="md:hidden fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Panel lateral */}
          <motion.aside
            key="mobile-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
            className="md:hidden fixed top-0 right-0 bottom-0 z-[70] w-80 max-w-[85vw] bg-[#0e1a2b] border-l border-white/10 shadow-2xl flex flex-col"
          >
            {/* Header del drawer */}
            <div className="flex items-center justify-between px-5 h-24 border-b border-white/10">
              <img
                src="/logo_rlconsultores.png"
                alt="RL Consultores"
                className="h-16 w-auto"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Cerrar menú"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.1 + index * 0.06, ease: "easeOut" }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-white font-medium py-3 px-4 rounded-xl transition-colors ${
                        isActive(link.path)
                          ? "bg-white/10 text-[#BFC5CA]"
                          : "hover:bg-white/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Servicios Accordion */}
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.1 + navLinks.length * 0.06, ease: "easeOut" }}
                >
                  <button
                    onClick={() => setIsMobileServiciosOpen(!isMobileServiciosOpen)}
                    className={`w-full text-left text-white font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-between ${
                      isServicioActive() ? "bg-white/10 text-[#BFC5CA]" : "hover:bg-white/5"
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

                  <AnimatePresence>
                    {isMobileServiciosOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 mt-1 mb-2 space-y-1 border-l border-white/15 pl-3">
                          {serviciosLinks.map((link) => (
                            <Link
                              key={link.path}
                              to={link.path}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsMobileServiciosOpen(false);
                              }}
                              className={`block text-sm text-white/70 font-medium py-2.5 px-3 rounded-lg transition-colors ${
                                isActive(link.path)
                                  ? "bg-white/10 text-white"
                                  : "hover:bg-white/5 hover:text-white"
                              }`}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>

            {/* CTA fijo abajo */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.25, ease: "easeOut" }}
              className="px-4 pb-6 pt-4 border-t border-white/10"
            >
              <Link
                to="/contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-4 py-3 rounded-xl border border-white text-white text-center font-medium transition-colors duration-200 hover:bg-white hover:text-[#1F3A5F]"
              >
                Contacto
              </Link>
            </motion.div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
    </>
  );
}
