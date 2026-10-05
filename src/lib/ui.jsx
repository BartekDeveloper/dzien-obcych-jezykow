import { useId } from 'react';

export const url = (p) => import.meta.env.BASE_URL.replace(/\/$/, '') + p;
export const asset = (p) => import.meta.env.BASE_URL + p;

export function Ik({ name, className = 'h-5 w-5', ...props }) {
  return (
    <span className={`inline-flex ${className} material-symbols-outlined`} {...props}>
      {name}
    </span>
  );
}

export function Chip({ country, children, className = '' }) {
  const base = 'inline-flex items-center px-3 py-1 rounded-md text-xs font-bold uppercase tracking-[0.06em] border';
  const variants = {
    es: 'bg-primary/10 text-primary border-primary/30',
    mx: 'bg-secondary/10 text-secondary border-secondary/30',
    neutral: 'bg-surface text-muted border-linesoft',
  };
  return (
    <span className={`${base} ${variants[country] || variants.neutral} ${className}`}>
      {children}
    </span>
  );
}

export function SectionHeader({ number, title, lead, id, align = 'center', className = '' }) {
  const alignClasses = {
    center: 'mx-auto max-w-3xl text-center',
    left: 'max-w-3xl',
  };
  return (
    <div className={`${alignClasses[align]} mb-[2.5rem] ${className}`}>
      {number && (
        <span className="block text-label-sm font-bold uppercase tracking-[0.06em] text-tertiary mb-[0.5rem]">
          {number}
        </span>
      )}
      <h2 id={id} className="font-display text-headline-xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
      {lead && (
        <p className="mt-[0.75rem] text-body-md text-muted">{lead}</p>
      )}
    </div>
  );
}

export function Pattern({ variant = 'azulejos', className = '' }) {
  const uid = useId();
  if (variant === 'azulejos') {
    return (
      <div aria-hidden="true" className={`pointer-events-none absolute inset-0 opacity-35 ${className}`}>
        <svg className="h-full w-full text-surface-container-highest" fill="none" preserveAspectRatio="none" viewBox="0 0 1200 800">
          <defs>
            <pattern id={uid} width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeDasharray="2,6" strokeWidth="0.75" />
              <circle cx="40" cy="40" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${uid})`} />
        </svg>
      </div>
    );
  }
  if (variant === 'papel-picado') {
    return (
      <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-4 bg-repeat-x opacity-90 overflow-hidden flex ${className}`}>
        <svg className="w-full h-4 text-secondary shrink-0" fill="currentColor" preserveAspectRatio="none" viewBox="0 0 1200 16">
          <path d="M0,0 L20,16 L40,0 L60,16 L80,0 L100,16 L120,0 L140,16 L160,0 L180,16 L200,0 L220,16 L240,0 L260,16 L280,0 L300,16 L320,0 L340,16 L360,0 L380,16 L400,0 L420,16 L440,0 L460,16 L480,0 L500,16 L520,0 L540,16 L560,0 L580,16 L600,0 L620,16 L640,0 L660,16 L680,0 L700,16 L720,0 L740,16 L760,0 L780,16 L800,0 L820,16 L840,0 L860,16 L880,0 L900,16 L920,0 L940,16 L960,0 L980,16 L1000,0 L1020,16 L1040,0 L1060,16 L1080,0 L1100,16 L1120,0 L1140,16 L1160,0 L1180,16 L1200,0 Z" />
        </svg>
      </div>
    );
  }
  return null;
}

export function Button({ href, variant = 'default', className = '', children, ...props }) {
  const variants = {
    default: 'border-2 border-ink bg-card text-ink hover:-translate-y-0.5 hover:shadow-lg',
    solid: 'bg-ink text-white hover:-translate-y-0.5 hover:shadow-lg border-2 border-ink',
    primary: 'bg-primary text-white hover:bg-primarydeep border-2 border-primary hover:-translate-y-0.5 hover:shadow-lg',
    secondary: 'bg-secondary text-white hover:bg-[#084528] border-2 border-secondary hover:-translate-y-0.5 hover:shadow-lg',
    tertiary: 'bg-tertiary text-white hover:bg-[#124a73] border-2 border-tertiary hover:-translate-y-0.5 hover:shadow-lg',
    ghost: 'bg-transparent border-2 border-white text-white hover:bg-white/15 hover:-translate-y-0.5',
    outline: 'border-2 border-line bg-transparent text-ink hover:bg-sand hover:border-primary',
  };
  const cls = `inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg px-6 py-3 text-label-md font-bold shadow-sm transition ${variants[variant]} ${className}`;
  if (href) return <a href={href} className={cls} {...props} />;
  return <button type="button" className={cls} {...props} />;
}

export function Flag({ country, className = 'h-6 w-8' }) {
  const flags = {
    es: (
      <svg viewBox="0 0 24 16" className={className} aria-hidden="true" fill="currentColor">
        <path d="M0 0h24v5H0zM0 5h24v6H0zM0 11h24v5H0z" fill="#AA151B" />
        <path d="M0 5h24v6H0z" fill="#F1BF00" />
      </svg>
    ),
    mx: (
      <svg viewBox="0 0 24 16" className={className} aria-hidden="true" fill="currentColor">
        <path d="M0 0h24v16H0z" fill="#006847" />
        <path d="M8 0h8v16H8z" fill="#FFFFFF" />
        <path d="M16 0h8v16H16z" fill="#CE1126" />
        <circle cx="12" cy="8" r="3.5" fill="#006847" />
      </svg>
    ),
  };
  return flags[country] || null;
}

export function CulturalBar({ country, className = '' }) {
  const colors = {
    es: 'bg-primary',
    mx: 'bg-secondary',
  };
  return <div aria-hidden="true" className={`h-[3px] w-full ${colors[country] || ''} ${className}`} />;
}

export function Card({ children, culturalBar, padding = 'desktop', className = '', ...props }) {
  const paddings = {
    mobile: 'p-6',
    desktop: 'md:p-8 p-6',
  };
  return (
    <article className={`bg-card rounded-2xl shadow-sm border border-linesoft overflow-hidden transition hover:-translate-y-1 hover:shadow-lg ${className}`} {...props}>
      {culturalBar && <CulturalBar country={culturalBar} />}
      <div className={paddings[padding]}>{children}</div>
    </article>
  );
}

export function FactCard({ label, value, description, barColor = 'primary', className = '' }) {
  return (
    <article className={`relative overflow-hidden rounded-xl bg-card p-6 md:p-8 shadow-sm ${className}`}>
      <div aria-hidden="true" className={`absolute left-0 top-0 h-full w-1.5 bg-${barColor}`} />
      <span className="block text-label-sm font-bold uppercase tracking-[0.06em] text-primary mb-[0.5rem]">{label}</span>
      <span className="block font-display text-headline-xl font-bold mb-1">{value}</span>
      <p className="text-body-sm leading-snug text-muted">{description}</p>
    </article>
  );
}