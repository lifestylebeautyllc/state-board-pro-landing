import React from 'react';
import {
  MapPin,
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function FacilityCard({
  name,
  locationName,
  address,
  image,
  examTypes = ['NIC Practical', 'Written Theory', '30"x30" Station'],
  directionsUrl
}) {
  return (
    <div className="w-full max-w-full box-border rounded-2xl bg-white border border-slate-200/90 shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      {/* Top Image Container */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

        {/* Badge overlay on top of image */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-violet/90 backdrop-blur-md text-brand-gold text-[11px] font-bold tracking-wide shadow-sm border border-brand-gold/20">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
          <span>Prov Combo Site</span>
        </div>

        {/* Location tag on bottom of image */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white">
          <span className="text-xs font-semibold text-brand-peach flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
            {locationName}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-brand-violet leading-snug">
            {name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            {address}
          </p>

          {/* Feature pills */}
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {examTypes.map((type, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-periwinkle/30 text-brand-violet text-xs font-semibold"
              >
                <CheckCircle2 className="w-3 h-3 text-brand-violet" />
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer with Directions Link */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-500">
            WA DOL Approved
          </span>
          <a
            href={directionsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} ${address}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-bold text-brand-violet hover:text-brand-gold transition-colors py-2 px-2.5 rounded-lg hover:bg-brand-violet/5 active:scale-95"
            aria-label={`Get directions to ${name}`}
          >
            <span>Get Directions</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
