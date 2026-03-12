import { LinkCard } from './ui/LinkCard';

const projects = [
  {
    title: 'VW Group',
    description: 'Ongoing support and further development of the Atlassian platform across enterprise-scale environments.',
    imageUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=320&q=75&auto=format',
    href: 'https://www.volkswagen-group.com/',
  },
  {
    title: 'Deutsche Börse',
    description: 'Migration of Atlassian toolchain including platform consolidation and user directory restructuring.',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=320&q=75&auto=format',
    href: 'https://www.deutsche-boerse.com/',
  },
  {
    title: 'IQTIG',
    description: "Atlassian operations, maintenance and support for Germany's federal institute for quality assurance in healthcare.",
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=320&q=75&auto=format',
    href: 'https://iqtig.org/',
  },
];

export default function ProjectCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <LinkCard
          key={project.title}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          href={project.href}
        />
      ))}
    </div>
  );
}
