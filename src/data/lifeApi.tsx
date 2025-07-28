import { ExternalLink } from '../components/ExternalLink';
import { GitHubIcon } from '../components/icons/GitHubIcon';
import { InstagramIcon } from '../components/icons/InstagramIcon';
import { XIcon } from '../components/icons/XIcon';
import AmbitLogo from '../images/logos/ambit.png';
import BarepapersLogo from '../images/logos/barepapers.svg';
import BimLogo from '../images/logos/bim.png';
import CDGOLogo from '../images/logos/cdgo.png';
import ClevertechLogo from '../images/logos/clevertech.png';
import EvercastLogo from '../images/logos/evercast.svg';
import Howdy from '../images/logos/howdy.png';
import JarockiMeLogo from '../images/logos/jarocki.svg';
import JojoMobileLogo from '../images/logos/jojomobile.png';
import MonitoLogo from '../images/logos/monito.svg';
import Consultly from '../images/logos/consultly.svg';
import MobileVikingsLogo from '../images/logos/mv.png';
import NSNLogo from '../images/logos/nsn.svg';
import ParabolLogo from '../images/logos/parabol.svg';
import TastyCloudLogo from '../images/logos/tastycloud.png';
import YearProgressLogo from '../images/logos/yearprogress.svg';
import Minimal from '../images/logos/minimal.svg';
import FilmIoLogo from '../images/logos/filmio.jpg';
import MotionLogo from '../images/logos/motion.svg';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';
import KiriminAjaLogo from '../images/logos/kalogo.svg';
import PandaAdvis from '../images/logos/pandaadvis.svg';
import NiagahosterLogo from '../images/logos/niagahoster.png';
import SMKN2Purwokerto from '../images/logos/smkn2.png';
import MentariSatria from '../images/logos/mentarisatria.png';
import Webding from '../images/logos/webding.svg';
import Komerce from '../images/logos/komerce.png';
import Komship from '../images/logos/komship.png';
import KomAds from '../images/logos/komads.png';
import RajaOngkir from '../images/logos/rajaongkir.png';
import AoniaAI from '../images/logos/aonia.png';
import PassionJapan from '../images/logos/passionjapan.png';

export const Name = 'Rizqi Sarasajati';

export const About = (
  <>
    {`A Product Manager with 10+ years of hands-on experience across tech, design, and education. I started out as a Back-End Developer, building POS, ERP, and HRIS systems. Later, I switched gears to become a multimedia & game dev teacher, even joining the jury panel for provincial competitions — because why not mix tech with education and impact?`}
    {
      `My journey didn’t stop there — I jumped into the world of UI/UX design, worked on multiple projects, and went full-time at one of Indonesia’s top hosting companies. Eventually, I found my sweet spot in product. Started as an Associate Product Manager, moved up to Technical Product Manager, and led a team of 10+ PMs building stuff like:`
    }{''}<br/>
    {`1. Shipping Aggregator`}<br/> 
    {`2. Warehouse Systems`}<br/>
    {`3. Virtual Debit Cards`}<br/>
    {`4. WhatsApp AI & Ads Automation Tools`}<br/>
    {`5. Talent Management & HR platforms`}<br/>
    {`
    Right now, I’m leading product at a B2B logistics aggregator, focusing on building solid core systems and driving business growth through smart integrations`}<br/>
    {`
    I speak business, design, and tech — and I bridge all three to make sure we’re not just building things right, but building the right things. Let’s build something awesome.`}
    {' '}
    <ExternalLink href="mailto:rizqisarasajati1109@gmail.com">Send me an email.</ExternalLink>
  </>
);
export const AboutExtended = `Currently i live in Yogyakarta, Indonesia now, having grown up in the small town of Banyumas in the Central Java Province. I Have a Bachelor's degree in Informatics from Amikom Purwokerto University. I like programming, designing, traveling, and spending time with my little family. I work as a Product Manager at KiriminAja, where I lead the development of logistics solutions that simplify shipping for businesses. My journey has taken me through various roles in software engineering, UI/UX design, and product management, allowing me to blend technical expertise with a user-centered approach to product development.`;

export type Project = {
  title: string;
  techStack: string[];
  description: string;
  logo: any;
  link?: {
    label: string;
    href: string;
  };
};

export const MyCurrentProjects: Project[] = [
  {
    title: 'KiriminAja',
    techStack: ['Vue', 'Nuxt', 'Firebase', 'Tailwind', 'MongoDB','API', 'Plugin', 'etc...'],
    description: 'is a logistics aggregator platform that offers 15 courier shipping (Regular, Express, and Instant), real-time COD payout or COD Advance, free pick-up service, and online store integration in a single dashboard.',
    logo: KiriminAjaLogo,
    link: {
      label: 'kiriminaja.com',
      href: 'https://kiriminaja.com',
    },
  },
  {
    title: 'Passion Japan',
    techStack: ['Alpine', 'Laravel', 'Livewire','etc...'],
    description: 'is an online platform that offers Japanese language courses, career guidance, and job placement support for Indonesians aiming to study, intern, or work in Japan. Key services include e-learning, interview preparation, and job matching for programs like Tokutei Ginō and internships—all fully online.',
    logo: PassionJapan,
    link: {
      label: 'passionjapan.com',
      href: 'https://passionjapan.com',
    },
  },
];

export const MyPastProjects: Project[] = [
  {
    title: 'RajaOngkir',
    techStack: ['VueJS', 'Angular', 'Golang', 'MongoDB', 'Xendit', 'Courier APIs', 'etc...'],
    description: 'is a shipping API for Indonesia that enables cost estimation from multiple couriers, real-time package tracking, and support for both COD and non-COD deliveries. It helps businesses automate logistics processes by integrating courier services into their apps or platforms.',
    logo: RajaOngkir,
    link: {
      label: 'rajaongkir.com',
      href: 'https://rajaongkir.com/api',
    },
  },
  {
    title: 'Aonia AI',
    techStack: ['VueJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'OpenAI', 'Xendit', 'etc...'],
    description: 'is an end-to-end AI customer service platform that automates order taking, payment processing, and shipping via WhatsApp. AI agents record orders, accept payments, and handle delivery through an integrated dashboard with regular, express, and instant courier options—all in one seamless flow.',
    logo: AoniaAI,
    link: {
      label: 'aonia.ai',
      href: 'https://aonia.ai',
    },
  },
  {
    title: 'Komship',
    techStack: ['VueJS', 'Mysql', 'Typescript', 'Kotlin', 'PHP', 'GraphQL', 'TailwindCSS', 'etc...'],
    description:
      'is a logistics aggregator that helps online sellers manage COD and non-COD shipments with features like daily COD payout, shipping discounts, free pickup, real-time tracking, and ticket-based issue handling—all from one platform.',
    logo: Komship,
    link: {
      label: 'komship.id',
      href: 'https://komship.id',
    },
  },
  {
    title: 'Komads',
    techStack: ['VueJS', 'OpenAI', 'Golang', 'etc...'],
    description: 'is a tool that lets businesses run Facebook ads that lead directly to WhatsApp. It offers AI-powered ad optimization, easy setup without a credit card, and a dashboard to track Click-to-WhatsApp performance and ad spend.',
    logo: KomAds,
    link: {
      label: 'komads.id',
      href: 'https://komads.id/whatsapp',
    },
  },
];

export const SocialMedia = [
  { name: 'Twitter', link: 'https://x.com/sirizqi11', icon: XIcon },
  { name: 'Instagram', link: 'https://www.instagram.com/sirizqi_/', icon: InstagramIcon },
  { name: 'Github', link: 'https://github.com/sirizqi', icon: GitHubIcon },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/rizqis/', icon: LinkedInIcon },
] as const;

export const Work = [
  {
    company: 'KiriminAja',
    title: 'Core System Product Manager',
    logo: KiriminAjaLogo,
    start: 'Jun 2025',
    end: 'Present',
  },
  {
    company: 'PT. Panda Advis (Koda)',
    title: 'Product Manager',
    logo: PandaAdvis,
    start: 'Nov 2024',
    end: 'Jun 2025',
  },
  {
    company: 'Komerce',
    title: 'Associate Product Manager → Technical Product Manager (Lead PM)',
    logo: Komerce,
    start: 'Jun 2023',
    end: 'Jun 2025',
  },
  {
    company: 'Niagahoster',
    title: 'UIX Designer',
    logo: NiagahosterLogo,
    start: '2015',
    end: '2021',
  },
  {
    company: 'Webding',
    title: 'Product Management',
    logo: Webding,
    start: 'Jan 2021',
    end: 'Mar 2023',
  },
  {
    company: 'VHS 2 Purwokerto',
    title: 'Multimedia Teacher',
    logo: SMKN2Purwokerto,
    start: 'Sep 2019',
    end: 'Jan 2021',
  },
  {
    company: 'Mentari Satria',
    title: 'Software Engineer (BackEnd)',
    logo: MentariSatria,
    start: 'Jan 2014',
    end: 'Sep 2019',
  },
] as const;

export const CompaniesLinks = [
  {
    name: 'VisionMedia',
    link: 'https://www.visionmedia.com/',
  },
  {
    name: 'DKMS',
    link: 'https://www.dkms.org/en',
  },
  {
    name: 'AAA',
    link: 'https://www.aaa.com/',
  },
  {
    name: 'PolskaPress',
    link: 'https://polskapress.pl/pl',
  },
  {
    name: 'Canal Digital',
    link: 'https://www.canaldigital.no/',
  },
] as const;

export const Books = [
  {
    name: 'PMBOK Guide',
    link: 'https://www.pmi.org/standards/pmbok',
  },
  {
    name: 'Atomic Design by Brad Frost',
    link: 'https://atomicdesign.bradfrost.com/',
  },
  {
    name: 'Discover Products that Create Customer Value and Business Value',
    link: 'https://www.amazon.com/Continuous-Discovery-Habits-Discover-Products/dp/1736633309',
  },
  {
    name: 'SPRINT',
    link: 'https://www.thesprintbook.com/',
  },
  {
    name: 'Agile Practice Guide',
    link: 'https://www.pmi.org/standards/agile',
  },
  {
    name: 'Agile Retrospectives: Making Good Teams Great',
    link: 'https://www.amazon.com/Agile-Retrospectives-Making-Teams-Great/dp/0977616649',
  },
] as const;

export const VideosWorthWatching = [
  {
    name: 'Converence Figma 2025',
    link: 'https://www.youtube.com/watch?v=5q8YAUTYAyk&list=PLXDU_eVOJTx6rKQR1JEIktXodeHUawC_T',
  },
] as const;

export const Podcasts = [
  {
    name: '#StoriesWorthTelling',
    link: 'https://open.spotify.com/show/4Rq3P0X5ftGU9cMki8LgIi?si=ae2a133fa44f4d00',
  },
  {
    name: 'Purwadhika',
    link: 'https://www.youtube.com/watch?v=8CPGhxxtb2E&list=PLBrBG_q3HLPLJ3Kf9NVA91e0uMvT0JDn5',
  },
  {
    name: 'KasiSolusi',
    link: 'https://www.youtube.com/@kasisolusi',
  },
  {
    name: 'Programmer Zaman Now',
    link: 'https://www.youtube.com/@ProgrammerZamanNow',
  },
] as const;

export const PeopleWorthFollowingOnTwitter = [
  {
    name: 'Andrew Wilkinson',
    link: 'https://twitter.com/awilkinson',
  },
  {
    name: 'Oliur',
    link: 'https://twitter.com/UltraLinx',
  },
  {
    name: 'Jack Butcher',
    link: 'https://twitter.com/jackbutcher',
  },
  {
    name: 'Sahil Lavingia',
    link: 'https://twitter.com/shl',
  },
  {
    name: 'James Clear',
    link: 'https://twitter.com/JamesClear',
  },
  {
    name: 'Naval',
    link: 'https://twitter.com/naval',
  },
  {
    name: 'Paul Graham',
    link: 'https://twitter.com/paulg',
  },
  {
    name: "John O'Nolan",
    link: 'https://twitter.com/JohnONolan',
  },
  {
    name: 'Jon Yongfook',
    link: 'https://twitter.com/yongfook',
  },
  {
    name: 'Joel Gascoigne',
    link: 'https://twitter.com/joelgascoigne',
  },
  {
    name: 'Pieter Levels',
    link: 'https://twitter.com/levelsio',
  },
] as const;

export const Blogs = [
  {
    name: 'SVPG',
    link: 'https://www.svpg.com/',
  },
  {
    name: 'The Product Folk',
    link: 'https://www.theproductfolks.com/product-management-blog',
  },
  {
    name: 'Roman Pichler',
    link: 'https://www.romanpichler.com/blog/',
  },
  {
    name: 'Product Focus',
    link: 'https://www.productfocus.com/',
  },
  {
    name: 'UX Cam',
    link: 'https://uxcam.com/blog/',
  },
  {
    name: 'Clever PM',
    link: 'https://cleverpm.com/',
  },
] as const;

export const Quotes = [
  {
    content: 'We have two lives, and the second begins when we realize we only have one.',
    author: '― Confucius',
  },
  {
    content: 'The man who moves a mountain begins by carrying away small stones.',
    author: '― Confucius',
  },
  {
    content:
      'The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.',
    author: '― Confucius',
  },
  {
    content:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did so. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    author: '― Mark Twain',
  },
  {
    content:
      "You have no responsibility to live up to what other people think you ought to accomplish. I have no responsibility to be like they expect me to be. It's their mistake, not my failing.",
    author: '― Mark Twain',
  },
  {
    content:
      'Watch your thoughts, they become your words; watch your words, they become your actions; watch your actions, they become your habits; watch your habits, they become your character; watch your character, it becomes your destiny.',
    author: '― Laozi',
  },
  {
    content: 'If you are going through hell, keep going.',
    author: '― Winston S. Churchill',
  },
  {
    content: 'Attitude is a little thing that makes a big difference.',
    author: '― Winston S. Churchill',
  },
  {
    content:
      'To think is easy. To act is hard. But the hardest thing in the world is to act in accordance with your thinking.',
    author: '― Johann Wolfgang von Goethe',
  },
  {
    content: 'It is not death that a man should fear, but he should fear never beginning to live.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'If it is not right do not do it; if it is not true do not say it.',
    author: '― Marcus Aurelius',
  },
  {
    content:
      'You have power over your mind - not outside events. Realize this, and you will find strength.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'The happiness of your life depends upon the quality of your thoughts.',
    author: '― Marcus Aurelius',
  },
  {
    content:
      'If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'There is no easy way from the earth to the stars',
    author: '― Seneca',
  },
  {
    content: 'We suffer more often in imagination than in reality',
    author: '― Seneca',
  },
] as const;

export const Tools = {
  Workstation: [
    {
      title: 'Macbook Air M1 (13-inch, 2020), 8/256 GB SSD',
      description:
        'I use this device for my regular job or freelance work when I am away from home. This device is capable of running all the tools related to my work to the fullest.',
      href: 'https://amzn.to/3XkWxhF',
    },
    {
      title: 'MSI Modern 14 C12M (12th Gen Intel Core i3, 8/512 GB SSD)',
      description:
        'This laptop is my workstation when Im doing any work at home. Why do I use a laptop instead of a PC? Because, of course, using a PC would be too risky in terms of electricity costs 🥹',
      href: 'https://amzn.to/3XkWxhF',
    },
    {
      title: 'AOC 27G2U5 (27-inch, 75Hz)',
      description:
        'I use this screen for multitasking at home. The wider screen and high color correction help me work to my full potential, and the high resolution helps me stay focused and comfortable.',
      href: 'https://amzn.to/3NnMlAu',
    },
    {
      title: 'Rexus Daxa M71 Classic Non Wirelless Mechanical Keyboard',
      description:
      'This keyboard is a mechanical keyboard with a high noise level, which excites me and keeps me working with a clicky sound that keeps me focused. 🤣',
      href: 'https://amzn.to/3qSUNQS',
    },
    {
      title: 'S Tech HV.9 Wired Mouse',
      description: "Honestly, this mouse has been with me for more than 7 years, and I am still comfortable with it. Since I only use a mouse at home for work, I won't be replacing this mouse anytime soon. ☺️",
      href: 'https://amzn.to/3qXIvXl',
    },
    {
      title: 'KZ ZSN Pro X In-Ear Monitor',
      description:
        'This in-ear monitor has been with me for about 8 years, and it has proven to be unbeatable in its price range. Therefore, I will continue to use it for the foreseeable future until something better comes along.',
      href: 'https://amzn.to/3pgETza',
    },
    {
      title: 'KZ AZ09 Pro In-Ear Monitor',
      description:
      'To maximize the use of my KZ ZSN Pro, I added a Bluetooth module that I can use without having to use cables, which is perfect for me to use outside the house.',
      href: 'https://amzn.to/43UuA30',
    },
  ],
  Software: [
    {
      title: 'Azure DevOps',
      description: `I use this software for managing the products I currently handle. It looks simple, but it turns out that this software has maximum capabilities that can be used by companies to plan or carry out the Software Development Life Cycle from start to finish.`,
      href: 'https://azure.microsoft.com/en-us/products/devops',
    },
    {
      title: 'ClickUp',
      description: `Wow, this is the tool I use for projects outside of my full-time job. With its comprehensive features, it can be used as an easy-to-use and highly informative project management tool that even those new to project management can easily utilize.`,
      href: 'https://clickup.com/',
    },
    {
      title: 'Visual Studio Code',
      description: `Every developer understands why these tools are always used. 🤣`,
      href: 'https://code.visualstudio.com/',
    },
    {
      title: 'Figma',
      description: `Perhaps there are others out there who use several tools for research, brainstorming, design, and other things related to development discovery. However, I only use this one tool, and I can utilize all of its features for the development discovery that I will be doing.`,
      href: 'https://www.figma.com/',
    },
    {
      title: 'Eraser.io',
      description: `When I'm feeling lazy or unmotivated, I usually use this tool to help me break down development requirements or systems that need to be developed.`,
      href: 'https://www.eraser.io/',
    },
    {
      title: 'Notion',
      description: `For now, I use this tool as a database for my website, and for writing whatever I need for a project. 😋`,
      href: 'https://www.notion.so/',
    },
    {
      title: 'Adobe Illustrator',
      description: `I still love doing graphic design! 🥵`,
      href: 'https://www.adobe.com/id_en/products/illustrator.html',
    },
    {
      title: 'ChatGPT',
      description: `This tool helps me be more consistent in presenting data for development. Every sentence and every flow is assisted by this tool. Don't assume that people who use AI assistance are lazy! Hey, AI is there to help, not to replace us! 😇`,
      href: 'https://chatgpt.com/',
    },
  ],
} as const;
