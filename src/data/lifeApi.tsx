import { ExternalLink } from '../components/ExternalLink';
import { GitHubIcon } from '../components/icons/GitHubIcon';
import { InstagramIcon } from '../components/icons/InstagramIcon';
import { XIcon } from '../components/icons/XIcon';
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
    {`I'm a bit confused... all I know is how to code, design, and manage products 😅 If that’s what you’re looking for, don’t be shy — just hit me up!.`}
    <ExternalLink href="mailto:rizqisarasajati1109@gmail.com"> Send me an email.</ExternalLink>
  </>
);
export const AboutExtended = (
<>
  {
    `Hi! I’m currently living in Yogyakarta, Indonesia — but my roots trace back to the cozy little town of Banyumas in Central Java 🌿`
  },<br/>
  {
    `I hold a Bachelor's degree in Informatics from Amikom University Purwokerto, and I’ve always been passionate about building things — whether that’s through code, design, or product strategy.`
  },<br/>
  {
    `Right now, I lead product development at KiriminAja, where I’m focused on creating smart logistics solutions that make shipping easier for businesses across Indonesia.`
  },<br/>
  {
    `Over the years, I’ve worn multiple hats — from back-end software engineer and UI/UX designer to technical and associate product manager. This journey helped me shape a product mindset that blends tech know-how with empathy for users.`
  },<br/>
  {
    `Outside of work, you’ll probably find me writing code for fun, sketching out design ideas, planning a quick getaway, or just enjoying precious moments with my little family ❤️`
  }
</>

);

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
    description: 'It’s a one-stop logistics aggregator that hooks you up with 15 courier options — from Regular to Express to Instant. You also get real-time COD payouts (or even advances!), free pick-up service, and smooth online store integration — all from one simple dashboard.',
    logo: KiriminAjaLogo,
    link: {
      label: 'kiriminaja.com',
      href: 'https://kiriminaja.com',
    },
  },
  {
    title: 'Passion Japan',
    techStack: ['Alpine', 'Laravel', 'Livewire','etc...'],
    description: 'This online platform helps Indonesians learn Japanese, get career tips, and land internships or jobs in Japan — all without leaving your home! From interactive e-learning and interview prep to job matching for Tokutei Ginō and other cool programs, everything’s just a click away. Your Japan journey starts here! ✨',
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
    description: 'A smart shipping API for Indonesia that lets you check shipping costs from multiple couriers, track packages in real-time, and handle both COD and non-COD deliveries. It’s built to help businesses simplify logistics by plugging courier services right into their apps or platforms — no more manual hassle!',
    logo: RajaOngkir,
    link: {
      label: 'rajaongkir.com',
      href: 'https://rajaongkir.com/api',
    },
  },
  {
    title: 'Aonia AI',
    techStack: ['VueJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'OpenAI', 'Xendit', 'etc...'],
    description: 'It’s your all-in-one AI-powered customer service buddy on WhatsApp! From taking orders and processing payments to booking deliveries with regular, express, or instant couriers — everything’s fully automated. Orders go in, packages go out — all handled by smart AI agents through one seamless dashboard. No hassle, just flow. ✨',
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
      'This all-in-one logistics platform helps you handle COD & non-COD orders like a pro — with daily COD payouts, real-time tracking, shipping discounts, free pickups, and an easy ticket system for any delivery issues. Just ship it and chill 😎',
    logo: Komship,
    link: {
      label: 'komship.id',
      href: 'https://komship.id',
    },
  },
  {
    title: 'Komads',
    techStack: ['VueJS', 'OpenAI', 'Golang', 'etc...'],
    description: 'This tool makes it super easy to launch Click-to-WhatsApp ads — no credit card needed. With AI-powered optimization and a dashboard to track results and ad spend, its your shortcut to better leads, faster chats, and smarter campaigns.',
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
        'Whether I’m working from a office, coffee shop, hopping on a quick freelance project, or just escaping my desk—this little beast handles all my work tools like a pro. No lags, no drama. Just pure productivity magic.',
      href: 'https://tk.tokopedia.com/ZSSjX1ST3/',
    },
    {
      title: 'MSI Modern 14 C12M (12th Gen Intel Core i3, 8/512 GB SSD)',
      description:
        'This laptop’s my daily driver when I’m working from home. Why not a PC, you ask? Well… my wallet and the electricity bill had a serious talk 🥹 So yeah, laptop it is — powerful enough to get the job done, without turning my house into a mini power plant.',
      href: 'https://tk.tokopedia.com/ZSSjCnVAq/',
    },
    {
      title: ' AOC 27B2HM2 (27-inch, 100Hz)',
      description:
        'This screen’s my ride-or-die for multitasking at home. The wide display and juicy color accuracy? Total game-changer. High resolution keeps things crisp, my eyes happy, and my brain laser-focused (well, most of the time 😄).',
      href: 'https://tk.tokopedia.com/ZSSjCW6cV/',
    },
    {
      title: 'Rexus Daxa M71 Classic Non Wirelless Mechanical Keyboard',
      description:
      'This mechanical keyboard is loud—like, really loud. But that’s exactly why I love it. Every click feels like a mini celebration of getting things done. That satisfying clack clack clack keeps my fingers dancing and my brain locked in. 🤣💥',
      href: 'https://tk.tokopedia.com/ZSSjXm6sf/',
    },
    {
      title: 'S Tech HV.9 Wired Mouse',
      description: "Honestly, this mouse has been my sidekick for over 7 years—and it’s still going strong! As long as I’m working from home, this little legend isn’t going anywhere. Why fix what’s not broken, right? ☺️🧡",
      href: 'https://tk.tokopedia.com/ZSSjXxTtB/',
    },
    {
      title: 'KZ ZSN Pro X In-Ear Monitor',
      description:
        'This in-ear monitor has been riding with me for almost 8 years—and still punches way above its price tag! As long as nothing better shows up, this trusty pair stays in my ears (and my heart). 🫶🔥',
      href: 'https://tk.tokopedia.com/ZSSjXMV19/',
    },
    {
      title: 'KZ AZ09 Pro In-Ear Monitor',
      description:
      'To squeeze the most out of my KZ ZSN Pro, I added a Bluetooth module—so now I can go wireless anytime I’m out and about. No more tangled mess, just pure audio bliss on the move! 🎶✨',
      href: 'https://tk.tokopedia.com/ZSSjXaVue/',
    },
  ],
  Software: [
    {
      title: 'Azure DevOps',
      description: `I use this software to manage the products I’m currently handling. It may look simple on the surface, but don’t let that fool you—it’s a beast when it comes to handling the entire Software Development Life Cycle (SDLC) from start to finish. Perfect for keeping everything on track and making life easier! 🚀📋`,
      href: 'https://azure.microsoft.com/en-us/products/devops',
    },
    {
      title: 'ClickUp',
      description: `Wow, this is the tool I rely on for managing my freelance or side hustle projects. It’s super intuitive and packed with features—perfect for keeping everything organized without making your head spin. Even if you're new to project management, this tool makes you feel like a pro! 💼✨🧩`,
      href: 'https://clickup.com/',
    },
    {
      title: 'Visual Studio Code',
      description: `They're like the holy grail of getting things done—reliable, powerful, and somehow comforting (yes, even the occasional bugs feel familiar). If you know, you know. 😎💻⚙️`,
      href: 'https://code.visualstudio.com/',
    },
    {
      title: 'Figma',
      description: `Maybe some people use a bunch of different tools for research, brainstorming, design, and everything in between. But me? I keep it simple. Just this one tool, and I can do it all—research, ideation, validation, you name it. One tool to rule them all! 😎🛠️✨`,
      href: 'https://www.figma.com/',
    },
    {
      title: 'Eraser.io',
      description: `When I’m feeling lazy or just not in the mood to think too hard (yup, it happens 😅), I open up this tool. It helps me break down development requirements or systems like a pro—so I can look productive even when my brain’s still on standby mode. 😴⚙️🚀`,
      href: 'https://www.eraser.io/',
    },
    {
      title: 'Notion',
      description: `Right now, this tool is like my second brain 🧠—I use it as a database for my website and also as a space to jot down anything I need for a project. It's simple, clean, and keeps my chaos organized. 😋📚💻`,
      href: 'https://www.notion.so/',
    },
    {
      title: 'Adobe Illustrator',
      description: `I still love doing graphic design, no matter how chaotic things get! 🎨🔥 It’s my little escape and creative playground—can't stop, won’t stop! 😤✨`,
      href: 'https://www.adobe.com/id_en/products/illustrator.html',
    },
    {
      title: 'ChatGPT',
      description: `This tool keeps me sane when presenting data for development 😌📊 Every sentence, every flow—yup, it’s got my back. And hey, don’t assume folks who use AI are just being lazy! AI is here to assist, not replace us. Work smarter, not harder! 💪🤖`,
      href: 'https://chatgpt.com/',
    },
  ],
} as const;
