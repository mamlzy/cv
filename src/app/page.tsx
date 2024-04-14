import Image from 'next/image';
import Link from 'next/link';
import { educations, projects, skills, socialMedias, works } from '@/data';
import { GlobeIcon } from 'lucide-react';
import Me from 'public/me.jpeg';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';

export default function Home() {
  return (
    <main className='p-4 md:p-16'>
      <section className='mx-auto max-w-2xl space-y-8'>
        {/* Me */}
        <div className='flex items-center justify-between gap-x-2'>
          <div className='flex-1 space-y-1.5'>
            <h1 className='text-2xl font-bold'>Imam Alfarizi Syahputra</h1>
            <p className='max-w-md text-pretty font-mono text-sm text-muted-foreground'>
              Full Stack Developer with a passion for staying updated with the
              latest technologies
            </p>
            <p className='text-xs text-muted-foreground'>
              <Link
                href='https://www.google.com/maps/place/Depok'
                target='_blank'
                className='flex items-center hover:underline'
              >
                <GlobeIcon className='mr-1 size-3' /> Depok, Jawa Barat,
                Indonesia
              </Link>
            </p>
            <div className='flex items-center gap-x-1 pt-1 text-muted-foreground'>
              {socialMedias.map((social) => (
                <Link
                  key={social.url}
                  href={social.url}
                  target='_blank'
                  className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'size-8 border p-0'
                  )}
                >
                  <social.Icon className='size-4' />
                </Link>
              ))}
            </div>
          </div>
          <Image
            src={Me}
            alt=''
            width='0'
            height='0'
            sizes='100vw'
            placeholder='blur'
            className='size-28 rounded-xl object-cover'
            quality={100}
          />
        </div>

        {/* About */}
        <section className='space-y-3'>
          <h2 className='text-xl font-bold'>About</h2>
          <p className='text-pretty font-mono text-sm text-muted-foreground'>
            I am Full Stack Developer specializing in JavaScript/TypeScript
            technologies. My expertise lies in using modern frameworks like
            Next.js/React for front-end development and Node.js for back-end
            solutions. I am passionate about staying updated with the latest
            technologies to deliver high-quality and innovative web
            applications.
          </p>
        </section>

        {/* Works */}
        <section className='space-y-3'>
          <h2 className='text-xl font-bold'>Work Experience</h2>

          {works.map((work) => (
            <div key={work.company} className='space-y-1.5'>
              <div className='flex items-center justify-between'>
                <h3 className='space-x-1 font-semibold'>
                  <Link
                    href={work.companyUrl}
                    target='_blank'
                    className='hover:underline'
                  >
                    {work.company}
                  </Link>
                  {work.badges.map((badge) => (
                    <Badge key={badge} variant='secondary'>
                      {badge}
                    </Badge>
                  ))}
                </h3>
                <span className='text-sm tabular-nums text-muted-foreground'>
                  {work.start} - {work.end || 'Present'}
                </span>
              </div>
              <h4 className='font-mono text-sm leading-none'>{work.role}</h4>
              <p className='mt-2 text-pretty font-mono text-xs text-muted-foreground'>
                {work.description}
              </p>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className='space-y-3'>
          <h2 className='text-xl font-bold'>Education</h2>
          {educations.map((education) => (
            <div key={education.school} className='space-y-1.5'>
              <div className='flex items-center justify-between'>
                <h3 className='space-x-1 font-semibold'>{education.school}</h3>
                <span className='text-sm tabular-nums text-muted-foreground'>
                  {education.start} - {education.end || 'Present'}
                </span>
              </div>
              <p className='mt-2 text-pretty font-mono text-xs text-muted-foreground'>
                {education.description}
              </p>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className='space-y-3'>
          <h2 className='text-xl font-bold'>Skills</h2>
          <div className='flex flex-wrap items-center gap-1'>
            {skills.map((skill) => (
              <Badge key={skill} className='bg-primary/80 hover:bg-primary/60'>
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className='space-y-3'>
          <h2 className='text-xl font-bold'>Projects</h2>
          <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3'>
            {projects.map((project) => (
              <div
                key={project.title}
                className='rounded-lg border border-muted bg-card p-3 text-card-foreground'
              >
                <div className='space-y-1'>
                  <h3 className='flex items-center gap-1 font-semibold tracking-tight'>
                    {project.url ? (
                      <Link
                        href={project.url}
                        target='_blank'
                        className='inline-flex items-center gap-1 hover:underline'
                      >
                        {project.title}{' '}
                        <span className='size-1 rounded-full bg-green-500' />
                      </Link>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className='font-mono text-xs text-muted-foreground'>
                    {project.description}
                  </p>
                </div>
                <div className='mt-2 flex flex-wrap gap-1'>
                  {project.techtStacks.map((stack) => (
                    <Badge
                      key={stack}
                      variant='secondary'
                      className='px-1 text-[10px]'
                    >
                      {stack}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
