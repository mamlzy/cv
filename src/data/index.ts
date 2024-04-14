import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { MailIcon } from 'lucide-react';
import { FaGitlab, FaInstagram, FaXTwitter } from 'react-icons/fa6';

export const socialMedias = [
  {
    Icon: MailIcon,
    url: 'mailto:imam.alfarizi.777@gmail.com',
  },
  {
    Icon: GitHubLogoIcon,
    url: 'https://github.com/mamlzy',
  },
  {
    Icon: FaGitlab,
    url: 'https://gitlab.com/mamlzy',
  },
  {
    Icon: LinkedInLogoIcon,
    url: 'https://www.linkedin.com/in/mamlzy',
  },
  {
    Icon: FaXTwitter,
    url: 'https://twitter.com/mamlzy',
  },
  {
    Icon: FaInstagram,
    url: 'https://www.instagram.com/mamlzy',
  },
];

export const works = [
  {
    company: 'Sarana Mulya Logistik',
    companyUrl: 'https://www.saranamulyalogisticscorp.com',
    role: 'Full Stack Developer',
    badges: [],
    start: '2022',
    end: null,
    description:
      'Designed and implemented scalable and efficient web applications from concept to production using Next.js/React.js for front-end and Node.js for back-end.',
  },
  {
    company: 'Automate.id',
    companyUrl: 'https://www.linkedin.com/company/automateid',
    role: 'Front End Developer',
    badges: ['Internship'],
    start: '2020',
    end: '2021',
    description:
      'I focused on front-end development tasks and gained practical experience creating projects using Vue.js',
  },
];

export const educations = [
  {
    school: 'Indraprasta PGRI University',
    start: '2022',
    end: null,
    description: "Bachelor's degree in Informatics Engineering",
  },
  {
    school: 'SMK Taruna Bhakti',
    start: '2018',
    end: '2021',
    description:
      'Studied software engineering with a focus on programming and software development',
  },
];

export const skills = [
  'Javascript',
  'Typescript',
  'React.js/Next.js',
  'Node.js',
  'SQL',
];

export const projects = [
  {
    title: 'Inspiry',
    url: 'https://www.inspiryconsultant.com',
    description:
      'A business consultant company website included a tracking certification feature',
    techtStacks: ['Full Stack Developer', 'Typescript', 'Next.js', 'Node.js'],
  },
  {
    title: 'WMS',
    url: 'https://wms.neelo.id',
    description:
      'A warehouse management system for efficient inventory tracking, orders, and logistics',
    techtStacks: ['Frontend Developer', 'Typescript', 'Next.js', 'Node.js'],
  },
  {
    title: 'Trello Clone',
    url: null,
    description:
      'A Trello-inspired web app for streamlined task management and collaboration',
    techtStacks: ['Side Project', 'Typescript', 'Next.js'],
  },
];
