import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface LinkCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

const LinkCard = React.forwardRef<HTMLAnchorElement, LinkCardProps>(
  ({ className, title, description, imageUrl, href, ...props }, ref) => {
    const cardVariants = {
      initial: { scale: 1, y: 0 },
      hover: {
        scale: 1.03,
        y: -5,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 15,
        },
      },
    };

    return (
      <motion.a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group relative flex h-80 w-full flex-col justify-between overflow-hidden',
          'rounded-2xl border border-white/[0.06] bg-[rgba(51,51,51,0.5)] backdrop-blur-xl p-6 shadow-sm',
          'transition-[border-color,box-shadow] duration-400',
          'hover:border-[rgba(212,32,39,0.3)] hover:shadow-[0_0_30px_rgba(212,32,39,0.08),0_0_80px_rgba(212,32,39,0.04),0_8px_32px_rgba(0,0,0,0.3)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D42027] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]',
          className
        )}
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        aria-label={`Link to ${title}`}
        {...props}
      >
        {/* Text content */}
        <div className="z-10">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-[#E8E8E8]" style={{ fontFamily: "'Sora', sans-serif" }}>
            {title}
          </h3>
          <p className="max-w-[80%] text-sm leading-relaxed text-[#9A9A9A]">
            {description}
          </p>
        </div>

        {/* Image container */}
        <div className="absolute bottom-0 right-0 h-48 w-48 translate-x-1/4 translate-y-1/4 transform">
          <motion.img
            src={imageUrl}
            alt={`${title} illustration`}
            className="h-full w-full object-contain opacity-60 transition-all duration-300 ease-out group-hover:scale-110 group-hover:opacity-80"
          />
        </div>
      </motion.a>
    );
  }
);

LinkCard.displayName = 'LinkCard';

export { LinkCard };
