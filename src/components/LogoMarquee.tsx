const logos = [
  'Deutsche Bahn',
  'Lufthansa Systems',
  'Daimler TSS',
  'VW Group',
  'Deutsche Börse',
  'IQTIG',
  'Arvato Systems',
  'Groupon',
  'DKB',
  'Strato AG',
  'SUVA',
  'Eficode',
];

export default function LogoMarquee() {
  return (
    <div className="relative overflow-hidden py-8">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-dark to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...logos, ...logos].map((name, i) => (
          <div
            key={i}
            className="inline-flex items-center justify-center mx-8 px-6 py-3 rounded-lg border border-white/5 bg-white/[0.03] backdrop-blur-sm flex-shrink-0"
          >
            <span className="text-sm font-medium text-text-light/70 tracking-wide">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
