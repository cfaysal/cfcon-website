'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { LinkedinIcon, MailIcon, ExternalLinkIcon } from 'lucide-react';

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  external?: boolean;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Product',
    links: [
      { title: 'Apps', href: '/apps' },
      { title: 'Insights', href: '/insights' },
      { title: 'Atlassian Marketplace', href: 'https://marketplace.atlassian.com/vendors/69072148', external: true },
    ],
  },
  {
    label: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    label: 'Legal',
    links: [
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'EULA', href: '/eula' },
      { title: 'Imprint', href: '/imprint' },
    ],
  },
  {
    label: 'Connect',
    links: [
      { title: 'support@cfcon.org', href: 'mailto:support@cfcon.org', icon: MailIcon },
      { title: 'LinkedIn', href: 'https://www.linkedin.com/in/cfaysal/', icon: LinkedinIcon, external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-3xl md:rounded-t-[3rem] border-t border-white/[0.06] bg-[radial-gradient(35%_128px_at_50%_0%,rgba(212,32,39,0.08),transparent)] px-6 py-12 lg:py-16">
      <div className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <img src="/logo.png" alt="CFCON" className="h-10 drop-shadow-lg" />
          <p className="text-[#9A9A9A] text-sm leading-relaxed">
            Atlassian Consulting & Marketplace Apps. We help teams optimize their workflows and get the most out of the Atlassian ecosystem.
          </p>
          <p className="text-[#9A9A9A] mt-8 text-sm md:mt-0">
            © {new Date().getFullYear()} CFCON. All rights reserved.
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs font-semibold tracking-widest uppercase text-[#E8E8E8]">{section.label}</h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="text-[#9A9A9A] hover:text-[#D42027] inline-flex items-center gap-1.5 transition-all duration-300"
                      >
                        {link.icon && <link.icon className="size-4" />}
                        {link.title}
                        {link.external && !link.icon && <ExternalLinkIcon className="size-3 opacity-50" />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
