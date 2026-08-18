import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  Scissors,
  ArrowRight,
  Video,
  Phone,
  MapPin,
  Calendar,
  X,
  Menu,
  CheckCircle,
  Globe,
  Store,
  Sparkles,
  ChevronRight
} from 'lucide-react';

// Custom Lucide-styled Social SVG Icons
const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TikTokIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const LinkedInIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Layout() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    email: '',
    format: 'Zoom'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const location = useLocation();

  // Close mobile drawer whenever location/route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Lock body scroll when mobile drawer or modal is open
  useEffect(() => {
    if (isMobileMenuOpen || isDemoModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, isDemoModalOpen]);

  // Close drawer/modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsDemoModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: "e87e6312-31ae-4961-9826-6b3d13be2700",
          subject: "New State Board Pro B2B Demo Request",
          name: formData.name,
          school: formData.school,
          email: formData.email,
          format: formData.format
        })
      });

      if (response.status === 200) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Web3Forms submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetModal = () => {
    setIsDemoModalOpen(false);
    setIsSubmitted(false);
    setIsSubmitting(false);
    setFormData({ name: '', school: '', email: '', format: 'Zoom' });
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen w-full max-w-full box-border bg-white flex flex-col font-sans selection:bg-brand-gold selection:text-brand-violet overflow-x-hidden">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-40 w-full max-w-full box-border bg-[#181622]/80 backdrop-blur-xl border-b border-indigo-500/15 text-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between box-border">
          {/* Logo Branding */}
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-3 group flex-shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-indigo-400/25 text-amber-300 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm">
              <Scissors className="w-5 h-5 text-amber-300" />
            </div>
            <div className="flex flex-col justify-center text-left">
              <span className="block text-[10px] tracking-widest uppercase font-semibold text-brand-peach/90 leading-tight">
                LifeStyle Beauty
              </span>
              <span className="text-base sm:text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5 leading-tight">
                STATE BOARD <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-amber-200">PRO</span>
              </span>
              <span className="block text-[10px] tracking-wider uppercase font-semibold text-slate-400 leading-tight">
                Washington Exam Prep
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`transition-colors ${
                location.pathname === '/' && !location.hash
                  ? 'text-indigo-200 font-semibold'
                  : 'text-slate-300 hover:text-indigo-200'
              }`}
            >
              Home
            </Link>
            <a href="/#authority" className="text-slate-300 hover:text-indigo-200 transition-colors">
              Founder Story
            </a>
            <a href="/#facilities" className="text-slate-300 hover:text-indigo-200 transition-colors">
              Testing Facilities
            </a>
            <a href="/#features" className="text-slate-300 hover:text-indigo-200 transition-colors">
              Features
            </a>
            <Link
              to="/blog"
              className={`transition-colors ${
                location.pathname.startsWith('/blog')
                  ? 'text-indigo-200 font-semibold'
                  : 'text-slate-300 hover:text-indigo-200'
              }`}
            >
              Blog
            </Link>
            <a href="/#demo" className="text-slate-300 hover:text-indigo-200 transition-colors">
              Campus Demos
            </a>
          </nav>

          {/* Desktop CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop CTA Button */}
            <a
              href="https://www.lifestyleexamedge.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex min-h-[44px] px-5 py-2.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-200 via-orange-200 to-amber-300 hover:from-amber-300 hover:to-orange-300 shadow-md shadow-amber-500/15 border border-amber-100/60 transition-all items-center gap-2 flex-shrink-0 active:scale-95 text-sm"
            >
              <span>Try App Free</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden min-h-[44px] min-w-[44px] w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 flex items-center justify-center text-white border border-indigo-500/20 transition-all"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-indigo-200" />
              ) : (
                <Menu className="w-6 h-6 text-indigo-200" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================= */}
      {/* MOBILE NAVIGATION DRAWER (z-50) */}
      {/* ========================================================= */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden animate-in fade-in duration-200">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-out Drawer Panel */}
          <div
            className="fixed inset-y-0 right-0 w-[85%] max-w-sm bg-[#181622] text-slate-100 border-l border-indigo-500/15 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300 z-50 box-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-indigo-500/15">
                <Link
                  to="/"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-800/80 border border-indigo-400/25 flex items-center justify-center flex-shrink-0 text-amber-300">
                    <Scissors className="w-4 h-4 text-amber-300" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-black tracking-tight text-white flex items-center gap-1">
                      STATE BOARD <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-amber-200">PRO</span>
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-slate-400">
                      WA Study Suite
                    </span>
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-xl bg-white/5 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-indigo-500/15 active:scale-95"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5 text-indigo-200" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="mt-6 flex flex-col space-y-2">
                <Link
                  to="/"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    handleNavClick();
                  }}
                  className={`min-h-[44px] px-4 py-3 rounded-xl flex items-center justify-between text-base font-semibold transition-all ${
                    location.pathname === '/' && !location.hash
                      ? 'bg-indigo-950/50 text-indigo-200 font-bold border border-indigo-500/20'
                      : 'text-slate-200 hover:bg-white/5 hover:text-indigo-200'
                  }`}
                >
                  <span>Home</span>
                  <ChevronRight className="w-4 h-4 text-indigo-300/60" />
                </Link>

                <a
                  href="/#authority"
                  onClick={handleNavClick}
                  className="min-h-[44px] px-4 py-3 rounded-xl flex items-center justify-between text-base font-semibold text-slate-200 hover:bg-white/5 hover:text-indigo-200 transition-all"
                >
                  <span>Founder Story</span>
                  <ChevronRight className="w-4 h-4 text-indigo-300/60" />
                </a>

                <a
                  href="/#facilities"
                  onClick={handleNavClick}
                  className="min-h-[44px] px-4 py-3 rounded-xl flex items-center justify-between text-base font-semibold text-slate-200 hover:bg-white/5 hover:text-indigo-200 transition-all"
                >
                  <span>Testing Facilities</span>
                  <ChevronRight className="w-4 h-4 text-indigo-300/60" />
                </a>

                <a
                  href="/#features"
                  onClick={handleNavClick}
                  className="min-h-[44px] px-4 py-3 rounded-xl flex items-center justify-between text-base font-semibold text-slate-200 hover:bg-white/5 hover:text-indigo-200 transition-all"
                >
                  <span>Features & Curriculum</span>
                  <ChevronRight className="w-4 h-4 text-indigo-300/60" />
                </a>

                <Link
                  to="/blog"
                  onClick={handleNavClick}
                  className={`min-h-[44px] px-4 py-3 rounded-xl flex items-center justify-between text-base font-semibold transition-all ${
                    location.pathname.startsWith('/blog')
                      ? 'bg-indigo-950/50 text-indigo-200 font-bold border border-indigo-500/20'
                      : 'text-slate-200 hover:bg-white/5 hover:text-indigo-200'
                  }`}
                >
                  <span>Washington Exam Blog</span>
                  <ChevronRight className="w-4 h-4 text-indigo-300/60" />
                </Link>

                <a
                  href="/#demo"
                  onClick={handleNavClick}
                  className="min-h-[44px] px-4 py-3 rounded-xl flex items-center justify-between text-base font-semibold text-slate-200 hover:bg-white/5 hover:text-indigo-200 transition-all"
                >
                  <span>Campus Demos</span>
                  <ChevronRight className="w-4 h-4 text-indigo-300/60" />
                </a>
              </nav>

              {/* Prominent CTA in Drawer */}
              <div className="mt-8 pt-6 border-t border-indigo-500/15">
                <a
                  href="https://www.lifestyleexamedge.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[48px] py-3.5 px-5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-200 via-orange-200 to-amber-300 hover:from-amber-300 hover:to-orange-300 shadow-lg shadow-amber-500/20 active:scale-95 transition-all border border-amber-100/60 flex items-center justify-center gap-2.5 text-center"
                >
                  <span>Launch Free Study Suite</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </a>
              </div>
            </div>

            {/* Drawer Bottom Hub */}
            <div className="mt-8 pt-6 border-t border-indigo-500/15 space-y-4">
              <div className="flex flex-col space-y-2 text-xs">
                <a
                  href="https://www.lifestyleexamedge.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-indigo-200 flex items-center gap-2 py-1 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-indigo-300" />
                  <span>Launch App Suite (Beta)</span>
                </a>
                <a
                  href="https://www.lifestylebarberwa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-indigo-200 flex items-center gap-2 py-1 transition-colors"
                >
                  <Store className="w-3.5 h-3.5 text-indigo-300" />
                  <span>LifeStyle Barber (Walla Walla, WA)</span>
                </a>
              </div>

              {/* Social Icons in Drawer */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.instagram.com/lifestylebarber_wa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="min-h-[44px] min-w-[44px] w-11 h-11 rounded-xl bg-white/5 border border-indigo-500/20 flex items-center justify-center text-indigo-200 hover:bg-white/10 active:scale-95 transition-all"
                >
                  <InstagramIcon className="w-5 h-5 text-indigo-200" />
                </a>
                <a
                  href="https://www.tiktok.com/@lifestyle_barber"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="min-h-[44px] min-w-[44px] w-11 h-11 rounded-xl bg-white/5 border border-indigo-500/20 flex items-center justify-center text-indigo-200 hover:bg-white/10 active:scale-95 transition-all"
                >
                  <TikTokIcon className="w-5 h-5 text-indigo-200" />
                </a>
                <a
                  href="https://www.linkedin.com/in/michael-angelo-273825411/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="min-h-[44px] min-w-[44px] w-11 h-11 rounded-xl bg-white/5 border border-indigo-500/20 flex items-center justify-center text-indigo-200 hover:bg-white/10 active:scale-95 transition-all"
                >
                  <LinkedInIcon className="w-5 h-5 text-indigo-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Outlet */}
      <main className="flex-1 w-full max-w-full box-border">
        <Outlet context={{ openDemoModal: () => setIsDemoModalOpen(true) }} />
      </main>

      {/* Footer */}
      <footer
        id="demo"
        className="w-full max-w-full box-border bg-gradient-to-b from-[#181622] to-[#121019] text-slate-100 pt-16 sm:pt-20 pb-12 sm:pb-16 relative overflow-hidden border-t border-indigo-500/15"
      >
        <div className="absolute top-0 right-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 box-border">
          {/* CTA Box */}
          <div className="bg-indigo-950/20 border border-indigo-500/20 rounded-3xl p-6 sm:p-12 lg:p-16 max-w-4xl mx-auto text-center backdrop-blur-sm mb-16 sm:mb-20 shadow-2xl box-border">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-400/25 bg-indigo-950/50 text-indigo-200 backdrop-blur-md shadow-sm text-xs font-bold uppercase tracking-wider mb-6">
              <Video className="w-3.5 h-3.5 text-amber-400" />
              Educator & Institutional Demos
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              See It In Action.
            </h2>

            <p className="text-sm sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-8">
              Let’s connect. Book a walkthrough of the educator dashboard via Zoom, phone, or an in-person demonstration at your campus.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="footer-book-demo-btn"
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full sm:w-auto min-h-[48px] py-3.5 px-8 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-200 via-orange-200 to-amber-300 hover:from-amber-300 hover:to-orange-300 shadow-lg shadow-amber-500/20 active:scale-95 transition-all border border-amber-100/60 flex items-center justify-center gap-3"
              >
                <span>Book a Live Demo</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </button>
            </div>

            {/* Demo Options */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-indigo-300" />
                <span>Zoom Walkthrough</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-300" />
                <span>Phone Q&A</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-300" />
                <span>On-Campus WA Visit</span>
              </div>
            </div>
          </div>

          {/* Socials & Bottom Branding Hub */}
          <div className="pt-8 sm:pt-10 border-t border-indigo-500/15 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-md">
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center justify-center lg:justify-start gap-3 mb-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-800/80 border border-indigo-400/25 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform text-amber-300">
                  <Scissors className="w-4 h-4 text-amber-300" />
                </div>
                <div className="flex flex-col justify-center text-left">
                  <span className="block text-[10px] tracking-widest uppercase font-semibold text-slate-400 leading-tight">
                    LifeStyle Beauty
                  </span>
                  <span className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-1.5 leading-tight">
                    STATE BOARD <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-amber-200">PRO</span>
                  </span>
                  <span className="block text-[10px] tracking-wider uppercase font-semibold text-slate-400 leading-tight">
                    Washington Exam Prep
                  </span>
                </div>
              </Link>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Follow the development and see how we are changing Washington state board prep from behind the chair.
              </p>
            </div>

            {/* Ecosystem Links + Social Icons Group */}
            <div className="flex flex-col sm:flex-row lg:flex-row items-center gap-6 lg:gap-8">
              {/* Ecosystem Links */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
                <a
                  href="https://www.lifestyleexamedge.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] text-slate-400 hover:text-indigo-200 text-xs font-medium transition-colors flex items-center gap-1.5 underline-offset-4 hover:underline py-2"
                >
                  <Globe size={16} />
                  <span>Launch App Suite (Beta)</span>
                </a>
                <a
                  href="https://www.lifestylebarberwa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] text-slate-400 hover:text-indigo-200 text-xs font-medium transition-colors flex items-center gap-1.5 underline-offset-4 hover:underline py-2"
                >
                  <Store size={16} />
                  <span>LifeStyle Barber (Walla Walla, WA)</span>
                </a>
              </div>

              {/* Subtle Vertical Divider */}
              <div className="hidden sm:block w-px h-8 bg-indigo-500/20" />

              {/* Social Icons */}
              <div className="flex flex-col items-center lg:items-end gap-3">
                <div className="flex items-center gap-3 sm:gap-4">
                  <a
                    href="https://www.instagram.com/lifestylebarber_wa"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="min-h-[44px] min-w-[44px] w-11 h-11 rounded-xl bg-white/5 border border-indigo-500/20 flex items-center justify-center text-indigo-200 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all"
                  >
                    <InstagramIcon className="w-5 h-5 text-indigo-200" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@lifestyle_barber"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="min-h-[44px] min-w-[44px] w-11 h-11 rounded-xl bg-white/5 border border-indigo-500/20 flex items-center justify-center text-indigo-200 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all"
                  >
                    <TikTokIcon className="w-5 h-5 text-indigo-200" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/michael-angelo-273825411/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="min-h-[44px] min-w-[44px] w-11 h-11 rounded-xl bg-white/5 border border-indigo-500/20 flex items-center justify-center text-indigo-200 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all"
                  >
                    <LinkedInIcon className="w-5 h-5 text-indigo-200" />
                  </a>
                </div>
                <span className="text-xs text-slate-500">
                  © {new Date().getFullYear()} State Board Pro. Built for Washington State.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================= */}
      {/* DEMO MODAL / B2B WEB3FORMS TOUCH-OPTIMIZED FORM */}
      {/* ========================================================= */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
          {/* Modal Container */}
          <div
            className="bg-white w-full max-w-lg rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 p-5 sm:p-8 relative overflow-hidden my-auto max-h-[92vh] flex flex-col justify-between overflow-y-auto box-border"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            {/* Modal Close Button (min 44px touch target) */}
            <button
              onClick={resetModal}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 active:scale-95 flex items-center justify-center transition-all border border-slate-200/80 z-20"
              aria-label="Close demo scheduler modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div>
                <div className="flex items-center gap-2 text-brand-violet font-bold text-xs uppercase tracking-wider mb-2">
                  <Calendar className="w-4 h-4 text-amber-500" />
                  Schedule Educator Demo
                </div>
                <h3 id="modal-headline" className="text-xl sm:text-2xl font-extrabold text-brand-violet mb-2 pr-10">
                  Book a Live Demo
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                  Experience how State Board Pro simplifies prep and elevates exam pass rates at your beauty or barber school.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Format Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Format
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, format: 'Zoom' })}
                        className={`min-h-[44px] p-2.5 sm:p-3 rounded-xl text-xs font-bold border flex flex-col items-center justify-center gap-1 transition-all active:scale-95 ${
                          formData.format === 'Zoom'
                            ? 'bg-brand-violet text-white border-brand-violet shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <Video className="w-4 h-4 text-indigo-300" />
                        <span>Zoom</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, format: 'Phone' })}
                        className={`min-h-[44px] p-2.5 sm:p-3 rounded-xl text-xs font-bold border flex flex-col items-center justify-center gap-1 transition-all active:scale-95 ${
                          formData.format === 'Phone'
                            ? 'bg-brand-violet text-white border-brand-violet shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <Phone className="w-4 h-4 text-indigo-300" />
                        <span>Phone</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, format: 'Campus Visit' })}
                        className={`min-h-[44px] p-2.5 sm:p-3 rounded-xl text-xs font-bold border flex flex-col items-center justify-center gap-1 transition-all active:scale-95 ${
                          formData.format === 'Campus Visit'
                            ? 'bg-brand-violet text-white border-brand-violet shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <MapPin className="w-4 h-4 text-indigo-300" />
                        <span>Campus Visit</span>
                      </button>
                    </div>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Sarah Jenkins (Lead Instructor)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="min-h-[44px] w-full p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-violet text-[16px] sm:text-sm leading-normal box-border"
                    />
                  </div>

                  {/* School & Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        School / Academy
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Seattle Beauty Academy"
                        value={formData.school}
                        onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                        className="min-h-[44px] w-full p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-violet text-[16px] sm:text-sm leading-normal box-border"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Work Email
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="sarah@academy.edu"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="min-h-[44px] w-full p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-violet text-[16px] sm:text-sm leading-normal box-border"
                      />
                    </div>
                  </div>

                  {/* Submit Button (min-h-[48px] with p-3.5) */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="min-h-[48px] w-full mt-2 p-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-orange-200 via-amber-200 to-amber-300 hover:from-orange-300 hover:to-amber-400 shadow-md shadow-amber-500/15 active:scale-95 transition-all border border-amber-200/60 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Confirm Demo Request'}</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <CheckCircle className="text-emerald-600 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-brand-violet text-center">
                  Request Received.
                </h3>
                <p className="text-gray-600 text-center mt-2 text-sm sm:text-base leading-relaxed">
                  Thank you. Michael will review your request and reach out via email within 24 hours to coordinate a time that works best for your team.
                </p>
                <button
                  type="button"
                  onClick={resetModal}
                  className="w-full min-h-[44px] mt-6 py-3 px-4 rounded-xl bg-brand-violet text-white font-bold text-sm hover:bg-brand-violet/90 transition-all shadow-md active:scale-95"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
