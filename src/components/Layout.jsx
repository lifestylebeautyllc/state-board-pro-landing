import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  Scissors,
  ArrowRight,
  Video,
  Phone,
  MapPin,
  Calendar,
  X,
  CheckCircle,
  Globe,
  Store
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
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    email: '',
    format: 'Zoom'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const location = useLocation();

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

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-brand-gold selection:text-brand-violet">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-40 bg-brand-violet/95 backdrop-blur-md border-b border-white/10 text-white transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-gold flex items-center justify-center shadow-gold-glow flex-shrink-0 group-hover:scale-105 transition-transform">
              <Scissors className="w-5 h-5 text-brand-violet" />
            </div>
            <div className="flex flex-col justify-center text-left">
              <span className="block text-[10px] tracking-widest uppercase font-semibold text-brand-peach/90 leading-tight">
                LifeStyle Beauty
              </span>
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5 leading-tight">
                STATE BOARD <span className="text-brand-gold">PRO</span>
              </span>
              <span className="block text-[10px] tracking-wider uppercase font-semibold text-brand-peach/80 leading-tight">
                Washington Exam Prep
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className={`transition-colors ${
                location.pathname === '/'
                  ? 'text-brand-gold font-semibold'
                  : 'text-white/80 hover:text-brand-gold'
              }`}
            >
              Home
            </Link>
            <a href="/#authority" className="text-white/80 hover:text-brand-gold transition-colors">
              Founder Story
            </a>
            <a href="/#facilities" className="text-white/80 hover:text-brand-gold transition-colors">
              Testing Facilities
            </a>
            <a href="/#features" className="text-white/80 hover:text-brand-gold transition-colors">
              Features
            </a>
            <Link
              to="/blog"
              className={`transition-colors ${
                location.pathname.startsWith('/blog')
                  ? 'text-brand-gold font-semibold'
                  : 'text-white/80 hover:text-brand-gold'
              }`}
            >
              Blog
            </Link>
            <a href="/#demo" className="text-white/80 hover:text-brand-gold transition-colors">
              Campus Demos
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="px-5 py-2.5 rounded-lg bg-brand-gold text-brand-violet font-bold text-sm hover:brightness-105 active:scale-95 transition-all shadow-md flex items-center gap-2"
            >
              <span>Book a Live Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Outlet */}
      <main className="flex-1">
        <Outlet context={{ openDemoModal: () => setIsDemoModalOpen(true) }} />
      </main>

      {/* Footer */}
      <footer
        id="demo"
        className="bg-brand-violet text-white pt-20 pb-16 relative overflow-hidden"
      >
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* CTA Box */}
          <div className="bg-white/5 border border-white/15 rounded-3xl p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto text-center backdrop-blur-sm mb-20 shadow-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-wider mb-6">
              <Video className="w-3.5 h-3.5" />
              Educator & Institutional Demos
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              See It In Action.
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto mb-8">
              Let’s connect. Book a walkthrough of the educator dashboard via Zoom, phone, or an in-person demonstration at your campus.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="footer-book-demo-btn"
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-gold text-brand-violet font-extrabold text-lg hover:brightness-105 active:scale-95 transition-all duration-200 shadow-xl flex items-center justify-center gap-3"
              >
                <span>Book a Live Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Demo Options */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-brand-gold" />
                <span>Zoom Walkthrough</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>Phone Q&A</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span>On-Campus WA Visit</span>
              </div>
            </div>
          </div>

          {/* Socials & Bottom Branding Hub */}
          <div className="pt-10 border-t border-white/15 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-md">
              <Link
                to="/"
                onClick={() => window.scrollTo(0, 0)}
                className="flex items-center justify-center lg:justify-start gap-3 mb-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-gold flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Scissors className="w-4 h-4 text-brand-violet" />
                </div>
                <div className="flex flex-col justify-center text-left">
                  <span className="block text-[10px] tracking-widest uppercase font-semibold text-brand-peach/90 leading-tight">
                    LifeStyle Beauty
                  </span>
                  <span className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-1.5 leading-tight">
                    STATE BOARD <span className="text-brand-gold">PRO</span>
                  </span>
                  <span className="block text-[10px] tracking-wider uppercase font-semibold text-brand-peach/80 leading-tight">
                    Washington Exam Prep
                  </span>
                </div>
              </Link>
              <p className="text-sm text-slate-300 leading-relaxed">
                Follow the development and see how we are changing Washington state board prep from behind the chair.
              </p>
            </div>

            {/* Ecosystem Links + Social Icons Group */}
            <div className="flex flex-col sm:flex-row lg:flex-row items-center gap-6 lg:gap-8">
              {/* Ecosystem Links */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <a
                  href="https://www.lifestyleexamedge.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-peach/80 hover:text-brand-gold text-xs font-medium transition-colors flex items-center gap-1.5 underline-offset-4 hover:underline"
                >
                  <Globe size={16} />
                  <span>Launch App Suite (Beta)</span>
                </a>
                <a
                  href="https://www.lifestylebarberwa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-peach/80 hover:text-brand-gold text-xs font-medium transition-colors flex items-center gap-1.5 underline-offset-4 hover:underline"
                >
                  <Store size={16} />
                  <span>LifeStyle Barber (Walla Walla, WA)</span>
                </a>
              </div>

              {/* Subtle Vertical Divider */}
              <div className="hidden sm:block w-px h-8 bg-white/20" />

              {/* Social Icons */}
              <div className="flex flex-col items-center lg:items-end gap-3">
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/lifestylebarber_wa"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-brand-gold hover:bg-white/20 hover:scale-105 transition-all"
                  >
                    <InstagramIcon className="w-5 h-5 text-brand-gold" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@lifestyle_barber"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-brand-gold hover:bg-white/20 hover:scale-105 transition-all"
                  >
                    <TikTokIcon className="w-5 h-5 text-brand-gold" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/michael-angelo-273825411/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-brand-gold hover:bg-white/20 hover:scale-105 transition-all"
                  >
                    <LinkedInIcon className="w-5 h-5 text-brand-gold" />
                  </a>
                </div>
                <span className="text-xs text-slate-400">
                  © {new Date().getFullYear()} State Board Pro. Built for Washington State.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Demo Modal / Lead Capture Form */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={resetModal}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div>
                <div className="flex items-center gap-2 text-brand-violet font-bold text-xs uppercase tracking-wider mb-2">
                  <Calendar className="w-4 h-4 text-brand-gold" />
                  Schedule Educator Demo
                </div>
                <h3 className="text-2xl font-extrabold text-brand-violet mb-2">
                  Book a Live Demo
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Experience how State Board Pro simplifies prep and elevates exam pass rates at your beauty or barber school.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Format
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, format: 'Zoom' })}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold border flex flex-col items-center gap-1 transition-all ${
                          formData.format === 'Zoom'
                            ? 'bg-brand-violet text-white border-brand-violet shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <Video className="w-4 h-4" />
                        <span>Zoom</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, format: 'Phone' })}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold border flex flex-col items-center gap-1 transition-all ${
                          formData.format === 'Phone'
                            ? 'bg-brand-violet text-white border-brand-violet shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <Phone className="w-4 h-4" />
                        <span>Phone</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, format: 'Campus Visit' })}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold border flex flex-col items-center gap-1 transition-all ${
                          formData.format === 'Campus Visit'
                            ? 'bg-brand-violet text-white border-brand-violet shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <MapPin className="w-4 h-4" />
                        <span>Campus Visit</span>
                      </button>
                    </div>
                  </div>

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
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-violet text-sm"
                    />
                  </div>

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
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-violet text-sm"
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
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-violet text-sm"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3.5 rounded-xl bg-brand-gold text-brand-violet font-extrabold text-base hover:brightness-105 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Confirm Demo Request'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <CheckCircle className="text-brand-violet mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-brand-violet text-center">
                  Request Received.
                </h3>
                <p className="text-gray-600 text-center mt-2 text-sm sm:text-base leading-relaxed">
                  Thank you. Michael will review your request and reach out via email within 24 hours to coordinate a time that works best for your team.
                </p>
                <button
                  type="button"
                  onClick={resetModal}
                  className="w-full mt-6 py-3 rounded-xl bg-brand-violet text-white font-bold text-sm hover:bg-brand-violet/90 transition-all shadow-md"
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
