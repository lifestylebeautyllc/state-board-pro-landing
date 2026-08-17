import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import founderPortrait from '../assets/life-style-barber-founder.jpeg';
import yakimaImg from '../assets/yakima-testing-center-prov.jpg';
import pascoImg from '../assets/pasco-testing-center-prov.jpg';
import spokaneImg from '../assets/spokane-testing-center-prov.jpg';
import {
  Brain,
  Timer,
  ClipboardCheck,
  Volume2,
  Bot,
  Sparkles,
  Award,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Check,
  ExternalLink
} from 'lucide-react';

export default function Home() {
  const { openDemoModal } = useOutletContext();

  return (
    <>
      {/* ========================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================= */}
      <section
        id="hero"
        className="relative bg-brand-violet text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden"
      >
        {/* Subtle decorative background gradient circles */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-brand-periwinkle/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-peach text-xs sm:text-sm font-semibold mb-8 backdrop-blur-md shadow-sm">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>Tailored Specifically for Washington State Board Regulations</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 text-white">
              Build Confidence. <br className="hidden sm:block" />
              <span className="text-brand-gold">Optimize Prep Time.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-100/90 font-normal leading-relaxed mb-10 max-w-3xl mx-auto text-balance">
              The modern study suite built specifically for Washington State. We bring absolute clarity to state board materials so your students test without anxiety and your instructors teach without friction.
            </p>

            {/* Primary CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="hero-book-demo-btn"
                onClick={openDemoModal}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-gold text-brand-violet font-extrabold text-lg hover:brightness-105 active:scale-95 transition-all duration-200 shadow-xl flex items-center justify-center gap-3 group"
              >
                <span>Book a Live Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Indicators / Stats Pill */}
            <div className="mt-14 pt-10 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-black text-brand-gold">100%</div>
                <div className="text-xs sm:text-sm text-brand-peach/90 font-medium mt-1">WA Specific Content</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-black text-brand-gold">Cosmo & Barber</div>
                <div className="text-xs sm:text-sm text-brand-peach/90 font-medium mt-1">Dual Specialty Tracks</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-black text-brand-gold">Written & Practical</div>
                <div className="text-xs sm:text-sm text-brand-peach/90 font-medium mt-1">Complete Exam Coverage</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-black text-brand-gold">Zero Guesswork</div>
                <div className="text-xs sm:text-sm text-brand-peach/90 font-medium mt-1">Direct Proctor Audio Prep</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. AUTHORITY / THE FOUNDER STORY SECTION */}
      {/* ========================================================= */}
      <section
        id="authority"
        className="bg-brand-peach text-brand-violet py-20 lg:py-28 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Credential Card with Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md rounded-2xl bg-white shadow-subtle border-2 border-brand-violet/15 p-6 flex flex-col justify-between relative overflow-hidden group">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-peach/30 via-white to-brand-periwinkle/30 opacity-70" />
                
                {/* Top Bar inside Card */}
                <div className="relative z-10 flex items-center justify-between pb-4 border-b border-brand-violet/10 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-brand-violet/30" />
                    <div className="w-3 h-3 rounded-full bg-brand-gold" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-brand-violet/70 bg-brand-peach px-2.5 py-1 rounded-full border border-brand-violet/20">
                    Verified Washington Credentials
                  </span>
                </div>

                {/* Founder Photo & Badges */}
                <div className="relative z-10 text-center flex flex-col items-center">
                  <img
                    src={founderPortrait}
                    alt="Founder Portrait"
                    className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-inner border border-brand-violet/10 mb-4"
                  />
                  <h3 className="text-xl font-extrabold text-brand-violet">
                    Washington State
                  </h3>
                  <p className="text-sm font-semibold text-brand-violet/80 mt-0.5">
                    Dual-License Practitioner & Founder
                  </p>

                  <div className="mt-3.5 mb-4 flex flex-wrap gap-2 justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-violet/10 text-brand-violet text-xs font-bold">
                      <Check className="w-3.5 h-3.5 text-brand-violet" /> Barbering License
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-violet/10 text-brand-violet text-xs font-bold">
                      <Check className="w-3.5 h-3.5 text-brand-violet" /> Cosmetology License
                    </span>
                  </div>
                </div>

                {/* Bottom stamp */}
                <div className="relative z-10 pt-4 border-t border-brand-violet/10 flex items-center justify-between text-xs text-brand-violet/70">
                  <span className="font-semibold">Washington-Based Business Owner</span>
                  <span className="font-mono font-bold text-brand-violet">WA DOL ALIGNED</span>
                </div>
              </div>
            </div>

            {/* Right Column: Text content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-violet/10 text-brand-violet text-xs font-bold uppercase tracking-wider mb-5">
                <GraduationCap className="w-4 h-4" />
                THE FOUNDER STORY
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-violet tracking-tight leading-tight mb-6">
                Built from the Inside Out by a Washington-Born Dual-Licensee
              </h2>

              <div className="text-base sm:text-lg text-brand-violet/90 leading-relaxed font-normal space-y-4">
                <p>
                  I hold active licenses in both barbering and cosmetology here in Washington State. I’ve sat in those specific testing rooms for both exams. I’ve felt the pressure firsthand, and I’ve watched talented students from all over the state completely freeze up—not because they didn't know how to execute the services, but because the state testing materials lacked absolute clarity. That shared panic on the testing floor is exactly why State Board Pro exists. I built this study suite because I realized our industry didn't need another generic, national textbook. We needed a precise, stress-free roadmap to passing the Washington exams. Because this platform was forged from actual, inside experience in the testing room, it delivers the most effective and valuable test prep on the market today.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-violet/20 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-violet text-brand-gold font-black flex items-center justify-center text-sm">
                    WA
                  </div>
                  <div>
                    <div className="font-bold text-sm text-brand-violet">Real Exam Experience</div>
                    <div className="text-xs text-brand-violet/70">No generic multi-state filler</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* WASHINGTON TESTING FACILITIES */}
      {/* ========================================================= */}
      <section
        id="facilities"
        className="bg-white py-16 lg:py-24 border-y border-slate-100 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Subtle, centered heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-violet tracking-tight">
              Familiar with the testing floors across Washington State.
            </h2>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Yakima Card */}
            <div className="group flex flex-col">
              <div className="overflow-hidden rounded-xl shadow-subtle border border-slate-200/80 bg-slate-100">
                <img
                  src={yakimaImg}
                  alt="Yakima Testing Facility"
                  className="aspect-video object-cover rounded-xl shadow grayscale hover:grayscale-0 transition-all duration-500 w-full"
                />
              </div>
              <p className="mt-3.5 text-center text-sm font-medium text-gray-600">
                Yakima Testing Facility
              </p>
            </div>

            {/* Pasco Card */}
            <div className="group flex flex-col">
              <div className="overflow-hidden rounded-xl shadow-subtle border border-slate-200/80 bg-slate-100">
                <img
                  src={pascoImg}
                  alt="Pasco Testing Facility"
                  className="aspect-video object-cover rounded-xl shadow grayscale hover:grayscale-0 transition-all duration-500 w-full"
                />
              </div>
              <p className="mt-3.5 text-center text-sm font-medium text-gray-600">
                Pasco Testing Facility
              </p>
            </div>

            {/* Spokane Card */}
            <div className="group flex flex-col">
              <div className="overflow-hidden rounded-xl shadow-subtle border border-slate-200/80 bg-slate-100">
                <img
                  src={spokaneImg}
                  alt="Spokane Testing Facility"
                  className="aspect-video object-cover rounded-xl shadow grayscale hover:grayscale-0 transition-all duration-500 w-full"
                />
              </div>
              <p className="mt-3.5 text-center text-sm font-medium text-gray-600">
                Spokane Testing Facility
              </p>
            </div>

          </div>

          {/* Official Testing Resources Info Box */}
          <div className="mt-8 rounded-xl bg-brand-periwinkle/10 border border-brand-periwinkle/30 p-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              {/* Content (Left Side) */}
              <div className="max-w-2xl">
                <h3 className="text-base sm:text-lg font-semibold text-brand-violet mb-1.5">
                  Official NIC Examination Vendor
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Washington State contracts directly with Prov, Inc. for the administration of all theory and practical NIC examinations. State Board Pro aligns entirely with the current Prov Candidate Information guidelines.
                </p>
              </div>

              {/* Action Buttons (Right Side) */}
              <div className="flex flex-col gap-3 items-start lg:items-end flex-shrink-0">
                <a
                  href="https://www.provexam.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-violet hover:text-brand-gold transition-colors"
                >
                  <span>Prov Test Scheduler</span>
                  <ExternalLink size={16} />
                </a>
                <a
                  href="https://provexam.com/wp-content/uploads/2026/08/WA_Prov_Cosmetology_CIB_2026_07.10-2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-violet hover:text-brand-gold transition-colors"
                >
                  <span>WA Candidate Information Bulletin</span>
                  <ExternalLink size={16} />
                </a>
                <Link
                  to="/blog/washington-cosmetology-practical-locations-2026"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-violet hover:text-brand-gold transition-colors"
                >
                  <span>Find a Testing Facility</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. FEATURES SECTION */}
      {/* ========================================================= */}
      <section
        id="features"
        className="bg-brand-periwinkle py-20 lg:py-28 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-violet/10 text-brand-violet text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
              Comprehensive Curriculum Suite
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-violet tracking-tight mb-4">
              Everything Your Students Need. Nothing They Don't.
            </h2>
            <p className="text-base sm:text-lg text-brand-violet/85 font-medium leading-relaxed">
              Separated by Cosmetology and Barbering, State Board Pro attacks both the Written and Practical exams with surgical precision.
            </p>
          </div>

          {/* CSS Grid with crisp white cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Adaptive Learning Logic */}
            <div className="bg-white rounded-2xl p-8 shadow-subtle hover:shadow-premium transition-all duration-300 border border-slate-100 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-xl bg-brand-violet/5 border border-brand-violet/10 flex items-center justify-center mb-6 group-hover:bg-brand-violet transition-colors">
                  <div className="relative">
                    <Brain className="w-7 h-7 text-brand-violet group-hover:text-white transition-colors" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand-gold ring-2 ring-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-violet mb-3">
                  Adaptive Learning Logic
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Over 1,000 domain-specific flashcards that target weak spots.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-brand-violet/80 gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                Spaced Repetition & High-Yield Topics
              </div>
            </div>

            {/* Card 2: True-to-Life Exam Simulator */}
            <div className="bg-white rounded-2xl p-8 shadow-subtle hover:shadow-premium transition-all duration-300 border border-slate-100 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-xl bg-brand-violet/5 border border-brand-violet/10 flex items-center justify-center mb-6 group-hover:bg-brand-violet transition-colors">
                  <div className="relative">
                    <Timer className="w-7 h-7 text-brand-violet group-hover:text-white transition-colors" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand-gold ring-2 ring-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-violet mb-3">
                  True-to-Life Exam Simulator
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Exact time limits and precise topic weights of the real WA state exam.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-brand-violet/80 gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                Timed Mock Exams with Diagnostic Breakdown
              </div>
            </div>

            {/* Card 3: Interactive Kit Checker */}
            <div className="bg-white rounded-2xl p-8 shadow-subtle hover:shadow-premium transition-all duration-300 border border-slate-100 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-xl bg-brand-violet/5 border border-brand-violet/10 flex items-center justify-center mb-6 group-hover:bg-brand-violet transition-colors">
                  <div className="relative">
                    <ClipboardCheck className="w-7 h-7 text-brand-violet group-hover:text-white transition-colors" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand-gold ring-2 ring-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-violet mb-3">
                  Interactive Kit Checker
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Checklist mapped to WA practicals with a built-in label maker.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-brand-violet/80 gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                Eliminate Kit Disqualifications on Exam Day
              </div>
            </div>

            {/* Card 4: Automated Proctor Audio */}
            <div className="bg-white rounded-2xl p-8 shadow-subtle hover:shadow-premium transition-all duration-300 border border-slate-100 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-xl bg-brand-violet/5 border border-brand-violet/10 flex items-center justify-center mb-6 group-hover:bg-brand-violet transition-colors">
                  <div className="relative">
                    <Volume2 className="w-7 h-7 text-brand-violet group-hover:text-white transition-colors" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand-gold ring-2 ring-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-violet mb-3">
                  Automated Proctor Audio
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Practice services with exact proctor scripts for deep familiarity.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-brand-violet/80 gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                Realistic Room Audio & Timed Verbal Cues
              </div>
            </div>

            {/* Card 5: AI Study Buddy & Service Steps */}
            <div className="bg-white rounded-2xl p-8 shadow-subtle hover:shadow-premium transition-all duration-300 border border-slate-100 flex flex-col justify-between group md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-14 h-14 rounded-xl bg-brand-violet/5 border border-brand-violet/10 flex items-center justify-center mb-6 group-hover:bg-brand-violet transition-colors">
                  <div className="relative">
                    <Bot className="w-7 h-7 text-brand-violet group-hover:text-white transition-colors" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand-gold ring-2 ring-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-violet mb-3">
                  AI Study Buddy & Service Steps
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Step-by-step breakdowns and instant answers for late-night panic.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-brand-violet/80 gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                24/7 Question Assistant Trained on WA State Guidelines
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
