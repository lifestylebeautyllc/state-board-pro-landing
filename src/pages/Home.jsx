import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import FacilityCard from '../components/FacilityCard';
import FeatureCard from '../components/FeatureCard';

// Founder portrait & Testing facility photos
import founderPortrait from '../assets/life-style-barber-founder.webp';
import yakimaImg from '../assets/yakima-testing-center-prov.webp';
import pascoImg from '../assets/pasco-testing-center-prov.webp';
import spokaneImg from '../assets/spokane-testing-center-prov.webp';

// Feature Preview WebP Screenshots
import previewFlashcards from '../assets/preview-flashcards.webp';
import previewSimulator from '../assets/preview-simulator.webp';
import previewCurriculum from '../assets/preview-curriculum.webp';
import previewExplanation from '../assets/preview-explanation.webp';
import previewServiceSteps from '../assets/preview-service-steps.webp';
import previewRealtimeProctor from '../assets/preview-realtime-proctor.webp';
import previewPrintableLabels from '../assets/preview-printable-labels.webp';
import previewPracticalAi from '../assets/preview-practical-ai.webp';
import previewKitChecker from '../assets/preview-kit-checker.webp';

import {
  Brain,
  Timer,
  BookOpen,
  Sparkles,
  ClipboardCheck,
  Volume2,
  Scissors,
  Printer,
  Bot,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Check,
  ExternalLink,
  MapPin,
  Layers,
  Wrench
} from 'lucide-react';

export default function Home() {
  const { openDemoModal } = useOutletContext();
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'written' | 'practical'
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // 1. Written Exam Prep Engine Card Data
  const writtenFeatures = [
    {
      id: 'written-flashcards',
      title: 'Adaptive Flashcards',
      description: 'Over 1,000 domain-specific flashcards targeting weak spots with spaced repetition.',
      badge: 'Spaced Repetition',
      asset: previewFlashcards,
      icon: Brain
    },
    {
      id: 'written-simulator',
      title: 'Timed Exam Simulator',
      description: 'True-to-life timed mock exams built to exact Washington NIC domain weights with live countdowns.',
      badge: 'NIC Weighted Timer',
      asset: previewSimulator,
      icon: Timer
    },
    {
      id: 'written-curriculum',
      title: 'WA Domain Breakdown',
      description: 'Comprehensive topic mastery tracking across all theoretical subjects (Cutting, Chemistry, Infection Control).',
      badge: '100% WA Aligned',
      asset: previewCurriculum,
      icon: BookOpen
    },
    {
      id: 'written-explanation',
      title: 'Smart Diagnostic Explanations',
      description: 'Real-time answer rationales and step-by-step concept reinforcement for missed questions.',
      badge: 'Instant Feedback',
      asset: previewExplanation,
      icon: Sparkles
    }
  ];

  // 2. Hands-On Practical Toolkit Card Data
  const practicalFeatures = [
    {
      id: 'practical-kit-checker',
      title: 'Interactive Kit Checker',
      description: 'Smart itemized packing list enforcing 30x30 footprint regulations, clean/soiled segregation, and EPA mandates.',
      badge: '30x30 Station Rule',
      asset: previewKitChecker,
      icon: ClipboardCheck
    },
    {
      id: 'practical-audio-proctor',
      title: 'Real-Time Audio Proctor',
      description: 'Proctor-paced verbal cue simulation matching official exam scripts, time calls, and cadence.',
      badge: 'Verbal Pacing Cues',
      asset: previewRealtimeProctor,
      icon: Volume2
    },
    {
      id: 'practical-service-steps',
      title: 'Procedure Visualizer',
      description: 'Chronological service steps covering universal setups, haircutting, and shaving protocols.',
      badge: 'Milestone Checkpoints',
      asset: previewServiceSteps,
      icon: Scissors
    },
    {
      id: 'practical-printable-labels',
      title: 'Mandated Container Labels',
      description: 'Ready-to-print consumable and container labeling compliant with state board sanitation standards.',
      badge: 'Print Ready Sheet',
      asset: previewPrintableLabels,
      icon: Printer
    },
    {
      id: 'practical-ai-buddy',
      title: '24/7 Practical AI Buddy',
      description: 'Dedicated AI conversational agent ready to answer sanitation protocols, timing constraints, and rubric questions.',
      badge: 'Instant AI Tutor',
      asset: previewPracticalAi,
      icon: Bot
    }
  ];

  return (
    <div className="w-full max-w-full box-border overflow-x-hidden">
      {/* ========================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================= */}
      <section
        id="hero"
        className="w-full max-w-full box-border min-h-[600px] sm:min-h-[700px] lg:min-h-screen bg-gradient-to-b from-[#181622] via-[#1f1c2e] to-[#14121d] text-slate-100 relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 flex flex-col justify-center"
      >
        {/* Soft ambient radial highlights to illuminate the upper viewport */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-tr from-indigo-500/15 via-purple-400/10 to-orange-300/10 blur-[130px] pointer-events-none -z-10 rounded-full" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 box-border">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-indigo-400/25 bg-indigo-950/50 text-indigo-200 backdrop-blur-md shadow-sm text-xs sm:text-sm font-semibold mb-6 sm:mb-8">
              <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Tailored Specifically for Washington State Board Regulations</span>
            </div>

            {/* Headline - Adaptive typography across breakpoints */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.15] mb-6 text-white text-balance">
              Build Confidence. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-amber-200">
                Optimize Prep Time.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto text-balance">
              The modern study suite built specifically for Washington State. We bring absolute clarity to state board materials so your students test without anxiety and your instructors teach without friction.
            </p>

            {/* Primary CTA Button (Live Study Suite Link) */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <a
                  id="hero-launch-suite-btn"
                  href="https://www.lifestyleexamedge.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-200 via-orange-200 to-amber-300 hover:from-amber-300 hover:to-orange-300 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-200 border border-amber-100/60 w-full sm:w-auto text-base sm:text-lg active:scale-95"
                >
                  <span>Launch Free Study Suite</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-slate-950" />
                </a>

                <button
                  type="button"
                  onClick={openDemoModal}
                  className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm sm:text-base flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Book Campus Demo</span>
                </button>
              </div>

              {/* Instant Access Sub-Label */}
              <p className="mt-3.5 text-xs sm:text-sm text-slate-400 font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Instant Access • No Card Required</span>
              </p>
            </div>

            {/* Trust Indicators / Stats Pill */}
            <div className="mt-12 sm:mt-14 pt-8 sm:pt-10 border-t border-indigo-500/15 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
              <div className="p-2 sm:p-3">
                <div className="text-2xl sm:text-3xl font-black text-indigo-200">100%</div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">WA Specific Content</div>
              </div>
              <div className="p-2 sm:p-3">
                <div className="text-2xl sm:text-3xl font-black text-indigo-200">Cosmo & Barber</div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Dual Specialty Tracks</div>
              </div>
              <div className="p-2 sm:p-3">
                <div className="text-2xl sm:text-3xl font-black text-indigo-200">Written & Practical</div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Complete Exam Coverage</div>
              </div>
              <div className="p-2 sm:p-3">
                <div className="text-2xl sm:text-3xl font-black text-indigo-200">Zero Guesswork</div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Direct Proctor Audio Prep</div>
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
        className="w-full max-w-full box-border bg-brand-peach text-brand-violet py-16 sm:py-20 lg:py-28 relative overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 box-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Credential Card with Portrait */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="w-full max-w-md rounded-2xl bg-white shadow-subtle border-2 border-brand-violet/15 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group box-border">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-peach/30 via-white to-brand-periwinkle/30 opacity-70 pointer-events-none" />
                
                {/* Top Bar inside Card */}
                <div className="relative z-10 flex items-center justify-between pb-3 sm:pb-4 border-b border-brand-violet/10 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-brand-violet/30" />
                    <div className="w-3 h-3 rounded-full bg-brand-gold" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-brand-violet/70 bg-brand-peach px-2.5 py-1 rounded-full border border-brand-violet/20">
                    Verified WA Credentials
                  </span>
                </div>

                {/* Founder Photo & Badges */}
                <div className="relative z-10 text-center flex flex-col items-center">
                  <img
                    src={founderPortrait}
                    alt="Founder Portrait"
                    className="w-full h-56 sm:h-72 object-cover rounded-2xl shadow-inner border border-brand-violet/10 mb-4"
                  />
                  <h3 className="text-lg sm:text-xl font-extrabold text-brand-violet">
                    Washington State
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-brand-violet/80 mt-0.5">
                    Dual-License Practitioner & Founder
                  </p>

                  <div className="mt-3 sm:mt-3.5 mb-4 flex flex-wrap gap-2 justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-violet/10 text-brand-violet text-xs font-bold">
                      <Check className="w-3.5 h-3.5 text-brand-violet" /> Barbering License
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-violet/10 text-brand-violet text-xs font-bold">
                      <Check className="w-3.5 h-3.5 text-brand-violet" /> Cosmetology License
                    </span>
                  </div>
                </div>

                {/* Bottom stamp */}
                <div className="relative z-10 pt-3 sm:pt-4 border-t border-brand-violet/10 flex items-center justify-between text-xs text-brand-violet/70">
                  <span className="font-semibold">WA Business Owner</span>
                  <span className="font-mono font-bold text-brand-violet">WA DOL ALIGNED</span>
                </div>
              </div>
            </div>

            {/* Right Column: Text content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-violet/10 text-brand-violet text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5">
                <GraduationCap className="w-4 h-4" />
                THE FOUNDER STORY
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-brand-violet tracking-tight leading-tight mb-4 sm:mb-6">
                Built from the Inside Out by a Washington-Born Dual-Licensee
              </h2>

              <div className="text-base sm:text-lg text-brand-violet/90 leading-relaxed font-normal space-y-4">
                <p>
                  I hold active licenses in both barbering and cosmetology here in Washington State. I’ve sat in those specific testing rooms for both exams. I’ve felt the pressure firsthand, and I’ve watched talented students from all over the state completely freeze up—not because they didn't know how to execute the services, but because the state testing materials lacked absolute clarity.
                </p>
                <p>
                  That shared panic on the testing floor is exactly why State Board Pro exists. I built this study suite because I realized our industry didn't need another generic, national textbook. We needed a precise, stress-free roadmap to passing the Washington exams. Because this platform was forged from actual, inside experience in the testing room, it delivers the most effective and valuable test prep on the market today.
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-6 border-t border-brand-violet/20 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-violet text-brand-gold font-black flex items-center justify-center text-sm flex-shrink-0">
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
      {/* WASHINGTON TESTING FACILITIES (CLEAN STATIC SECTION) */}
      {/* ========================================================= */}
      <section
        id="facilities"
        className="w-full max-w-full box-border bg-white py-16 sm:py-20 lg:py-24 border-y border-slate-100 relative"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 box-border">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-violet/10 text-brand-violet text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              Washington Testing Facilities
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-violet tracking-tight">
              Familiar with the testing floors across Washington State.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2.5">
              Verified Prov testing centers equipped for practical examinations with strict 30”x30” kit workstations.
            </p>
          </div>

          {/* 3-Column Responsive Grid (Single-column on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Yakima Card */}
            <FacilityCard
              name="Yakima Testing Facility"
              locationName="Epstein Union Gap"
              address="2402 S 1st Street, Yakima, WA 98903"
              image={yakimaImg}
              examTypes={['Combo Practical & Written', '30"x30" Station', 'Prov Certified']}
              directionsUrl="https://www.google.com/maps/search/?api=1&query=2402+S+1st+Street+Yakima+WA+98903"
            />

            {/* Pasco Card */}
            <FacilityCard
              name="Pasco Testing Facility"
              locationName="Prime Court Retail"
              address="2735 W Court Street, Pasco, WA 99301"
              image={pascoImg}
              examTypes={['Combo Practical & Written', '30"x30" Station', 'Prov Certified']}
              directionsUrl="https://www.google.com/maps/search/?api=1&query=2735+W+Court+Street+Pasco+WA+99301"
            />

            {/* Spokane Card */}
            <FacilityCard
              name="Spokane Testing Facility"
              locationName="Crosspointe Plaza"
              address="10414 W Hwy 2, Spokane, WA 99224"
              image={spokaneImg}
              examTypes={['Combo Practical & Written', '30"x30" Station', 'Prov Certified']}
              directionsUrl="https://www.google.com/maps/search/?api=1&query=10414+W+Hwy+2+Spokane+WA+99224"
            />
          </div>

          {/* Official Testing Resources Info Box */}
          <div className="mt-10 sm:mt-12 rounded-2xl bg-brand-periwinkle/10 border border-brand-periwinkle/30 p-6 sm:p-8 box-border">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              {/* Content (Left Side) */}
              <div className="max-w-2xl">
                <h3 className="text-base sm:text-lg font-bold text-brand-violet mb-1.5">
                  Official NIC Examination Vendor
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Washington State contracts directly with Prov, Inc. for the administration of all theory and practical NIC examinations. State Board Pro aligns entirely with the current Prov Candidate Information guidelines.
                </p>
              </div>

              {/* Action Buttons (Right Side) */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 items-start sm:items-center lg:items-end flex-shrink-0">
                <a
                  href="https://www.provexam.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-violet hover:text-brand-gold transition-colors py-2 px-3 rounded-lg hover:bg-brand-violet/5"
                >
                  <span>Prov Test Scheduler</span>
                  <ExternalLink size={16} />
                </a>
                <a
                  href="https://provexam.com/wp-content/uploads/2026/08/WA_Prov_Cosmetology_CIB_2026_07.10-2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-violet hover:text-brand-gold transition-colors py-2 px-3 rounded-lg hover:bg-brand-violet/5"
                >
                  <span>WA Candidate Information Bulletin</span>
                  <ExternalLink size={16} />
                </a>
                <Link
                  to="/blog/washington-cosmetology-practical-locations-2026"
                  className="min-h-[44px] inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-violet hover:text-brand-gold transition-colors py-2 px-3 rounded-lg bg-brand-gold/20 hover:bg-brand-gold/30"
                >
                  <span>View All 8 Testing Facilities</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. FEATURES & CURRICULUM SECTION (INTERACTIVE 3D FLIP CARDS) */}
      {/* ========================================================= */}
      <section
        id="features"
        className="w-full max-w-full box-border bg-[#0c0a17] text-slate-100 py-16 sm:py-20 lg:py-28 relative overflow-hidden border-t border-indigo-500/10"
      >
        {/* Ambient glow backgrounds */}
        <div className="absolute top-10 -left-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 box-border">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-indigo-400/25 bg-indigo-950/50 text-indigo-200 backdrop-blur-md shadow-sm text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Complete Exam Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Interactive 3D Study Suite
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed">
              Separated by Written and Practical exam requirements. <span className="text-indigo-200 font-semibold">Click or tap any card below</span> to interact with true-to-life 3D interface previews.
            </p>

            {/* Segmented Track Controls (Tabs) */}
            <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl max-w-full overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`min-h-[44px] px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap active:scale-95 ${
                  activeTab === 'all'
                    ? 'bg-gradient-to-r from-indigo-300 via-indigo-200 to-indigo-400 text-slate-950 shadow-md font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>All Study Tools</span>
                <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-black/20 font-mono">
                  {writtenFeatures.length + practicalFeatures.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('written')}
                className={`min-h-[44px] px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap active:scale-95 ${
                  activeTab === 'written'
                    ? 'bg-gradient-to-r from-indigo-300 via-indigo-200 to-indigo-400 text-slate-950 shadow-md font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Written Exam Prep</span>
                <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-black/20 font-mono">
                  {writtenFeatures.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('practical')}
                className={`min-h-[44px] px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap active:scale-95 ${
                  activeTab === 'practical'
                    ? 'bg-gradient-to-r from-indigo-300 via-indigo-200 to-indigo-400 text-slate-950 shadow-md font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Wrench className="w-4 h-4" />
                <span>Hands-On Practical</span>
                <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-black/20 font-mono">
                  {practicalFeatures.length}
                </span>
              </button>
            </div>
          </div>

          {/* ========================================================= */}
          {/* SUB-SECTION 1: WRITTEN EXAM PREP ENGINE */}
          {/* ========================================================= */}
          {(activeTab === 'all' || activeTab === 'written') && (
            <div className="mb-14 sm:mb-16">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Written Exam Prep Engine
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    High-yield theoretical mastery, simulated NIC timing, and instant diagnostic feedback.
                  </p>
                </div>
              </div>

              {/* 3D Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {writtenFeatures.map((feat) => (
                  <FeatureCard
                    key={feat.id}
                    id={feat.id}
                    title={feat.title}
                    description={feat.description}
                    badge={feat.badge}
                    asset={feat.asset}
                    icon={feat.icon}
                    isFlipped={!!flippedCards[feat.id]}
                    onToggle={toggleCard}
                  />
                ))}
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* SUB-SECTION 2: HANDS-ON PRACTICAL TOOLKIT */}
          {/* ========================================================= */}
          {(activeTab === 'all' || activeTab === 'practical') && (
            <div>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Hands-On Practical Toolkit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    WA DOL practical compliance, audio proctor cues, 30x30 station checklists, and printable labels.
                  </p>
                </div>
              </div>

              {/* 3D Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {practicalFeatures.map((feat) => (
                  <FeatureCard
                    key={feat.id}
                    id={feat.id}
                    title={feat.title}
                    description={feat.description}
                    badge={feat.badge}
                    asset={feat.asset}
                    icon={feat.icon}
                    isFlipped={!!flippedCards[feat.id]}
                    onToggle={toggleCard}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
