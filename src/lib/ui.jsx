export const url = (p) => import.meta.env.BASE_URL.replace(/\/$/, '') + p;
export const asset = (p) => import.meta.env.BASE_URL + p;

export function Ik({ id, className = 'h-6 w-6' }) {
  return (
    <svg className={className} aria-hidden="true" focusable="false">
      <use href={asset('icons.svg') + '#' + id} />
    </svg>
  );
}

export function Chip({ kraj, children }) {
  const barwa = kraj === 'es'
    ? 'border-primary/30 bg-primary/10 text-primary'
    : kraj === 'mx'
      ? 'border-secondary/30 bg-secondary/10 text-secondary'
      : 'border-line text-muted';
  return (
    <span className={'inline-block rounded-md border px-3 py-1 text-xs font-bold uppercase tracking-[0.06em] ' + barwa}>
      {children}
    </span>
  );
}

export function NaglowekSekcji({ nr, tytul, slowo, lead }) {
  return (
    <div className="relative mb-6 overflow-hidden">
      <h2 className="relative z-[1] font-display text-h2 font-semibold tracking-tight flex flex-wrap items-baseline gap-3">
        <span className="rounded-full bg-ink px-3 py-1 font-sans text-xs font-bold tracking-widest text-white">{nr}</span>
        {tytul}
      </h2>
      {slowo && (
        <span aria-hidden="true" className="wodny">{slowo}</span>
      )}
      {lead && <p className="mt-1 max-w-[68ch] text-lg text-muted">{lead}</p>}
    </div>
  );
}

export function Przycisk({ do: href, wariant = 'zwykly', className = '', ...props }) {
  const style = {
    zwykly: 'border-2 border-ink bg-card text-ink hover:-translate-y-0.5 hover:shadow-lg',
    pelny: 'bg-ink text-white hover:-translate-y-0.5 hover:shadow-lg border-2 border-ink',
    es: 'bg-primary text-white hover:bg-[#5f0007] border-2 border-primary hover:-translate-y-0.5 hover:shadow-lg',
    mx: 'bg-secondary text-white hover:bg-[#084528] border-2 border-secondary hover:-translate-y-0.5 hover:shadow-lg',
    duch: 'bg-transparent border-2 border-white text-white hover:bg-white/15 hover:-translate-y-0.5',
  }[wariant];
  const cls = 'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[10px] px-5 py-2.5 font-bold transition ' + style + ' ' + className;
  if (href) return <a href={href} className={cls} {...props} />;
  return <button type="button" className={cls} {...props} />;
}
