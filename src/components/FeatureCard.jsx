import React from 'react';
import { Sparkles, RotateCcw } from 'lucide-react';

export default function FeatureCard({
  id,
  title,
  description,
  badge,
  asset,
  icon: Icon,
  isFlipped = false,
  onToggle
}) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle?.(id);
    }
  };

  return (
    <div
      className="relative w-full min-h-[340px] sm:min-h-[360px] cursor-pointer select-none [perspective:1000px]"
      onClick={() => onToggle?.(id)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`${title}, ${
        isFlipped
          ? 'showing screenshot preview. Click or tap to flip back.'
          : 'click or tap to preview interactive 3D screenshot.'
      }`}
    >
      {/* Inner Card Wrapper with 3D Flip */}
      <div
        className={`relative w-full h-full duration-500 [transform-style:preserve-3d] transition-transform ease-in-out ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* ========================================================= */}
        {/* FRONT FACE */}
        {/* ========================================================= */}
        <div className="absolute inset-0 w-full h-full rounded-2xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between [backface-visibility:hidden] shadow-xl hover:border-amber-500/40 transition-colors box-border">
          <div>
            {/* Header: Icon + Tap to Preview Indicator */}
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shadow-sm">
                {Icon && <Icon className="w-6 h-6 text-amber-400" />}
              </div>

              <span className="text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Tap to Preview
              </span>
            </div>

            {/* Title & Description */}
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
              {title}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Footer Badge & Flip Hint */}
          <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-amber-300/90 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
              {badge}
            </span>

            <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1 hover:text-amber-300 transition-colors">
              <span>3D Flip</span>
              <RotateCcw className="w-3 h-3 text-amber-400" />
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* BACK FACE (HIGH-RES SCREENSHOT PREVIEW) */}
        {/* ========================================================= */}
        <div className="absolute inset-0 w-full h-full rounded-2xl bg-slate-950 border border-amber-500/30 p-3 flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-2xl overflow-hidden box-border">
          {/* Image Frame */}
          <div className="relative flex-1 w-full rounded-xl overflow-hidden bg-slate-900/90 border border-white/10 flex items-center justify-center">
            <img
              src={asset}
              alt={title}
              className="w-full h-full object-contain md:object-cover object-center rounded-lg p-1 md:p-0"
              loading="lazy"
            />
          </div>

          {/* Bottom Floating Ribbon */}
          <div className="pt-2 pb-1 text-center flex items-center justify-center">
            <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/5 border border-white/10">
              <RotateCcw className="w-3 h-3 text-amber-400" />
              <span>Tap to flip back</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
