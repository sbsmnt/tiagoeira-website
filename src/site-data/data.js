import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Tiago Eira', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Tiago Eira Software Developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi there! I'm",
  name: 'Tiago Eira',
  subtitle: ' Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: '5115Small.jpg',
  paragraphOne:
    "Hi! I'm Tiago Eira a software developer based in Lisbon, Portugal specialised in developing awesome web applications with a problem solving attitude and focused on delivering the best product for the customer needs.",
  paragraphTwo: 'Also, I love challenges and learning new things.',
  paragraphThree: "We got to stay curious, don't we?! 🕵️‍♂️",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// EXPERIENCE DATA
export const experienceData = [
  {
    id: nanoid(),
    img: 'logo-quinta-digital.png',
    title: 'Quinta Digital',
    time: 'March 2015 - February 2016',
    techStack: [
      { id: nanoid(), name: 'JavaScript' },
      { id: nanoid(), name: 'PHP' },
      { id: nanoid(), name: 'MySQL' },
      { id: nanoid(), name: 'CSS' },
    ],
    description: [
      { id: nanoid(), name: 'Website development and responsive design optimisation.' },
      { id: nanoid(), name: 'Javascript features Development.' },
      { id: nanoid(), name: 'Database optimization' },
      { id: nanoid(), name: 'Wordpress plugin development and theme customisation.' },
    ],
    url: '',
  },
  {
    id: nanoid(),
    img: 'logo-freelance.jpg',
    title: 'Freelancer',
    time: 'February 2016 - August 2016',
    techStack: [
      { id: nanoid(), name: 'PHP' },
      { id: nanoid(), name: 'JavaScript' },
      { id: nanoid(), name: 'MySQL' },
      { id: nanoid(), name: 'CSS' },
      { id: nanoid(), name: 'CodeIgniter' },
      { id: nanoid(), name: 'Laravel' },
    ],
    description: [
      { id: nanoid(), name: 'Website development and responsive design updates.' },
      { id: nanoid(), name: 'Database optimization.' },
      { id: nanoid(), name: 'Website solutions with custom CMS' },
      { id: nanoid(), name: 'Wordpress plugin development and theme customisation.' },
    ],
    url: '',
  },
  {
    id: nanoid(),
    img: 'logo-devbox.png',
    title: 'DevBox',
    time: 'August 2016 - September 2017',
    techStack: [
      { id: nanoid(), name: 'PHP' },
      { id: nanoid(), name: 'JavaScript' },
      { id: nanoid(), name: 'MySQL' },
      { id: nanoid(), name: 'CSS' },
      { id: nanoid(), name: 'CodeIgniter' },
      { id: nanoid(), name: 'REST API' },
      { id: nanoid(), name: 'Angular' },
      { id: nanoid(), name: 'Ionic' },
    ],
    description: [
      { id: nanoid(), name: 'Custom CMS development focused on simple UI so clients could easily update their websites;' },
      { id: nanoid(), name: 'REST API integrations' },
      { id: nanoid(), name: 'Web App development for eCommerce - Remarketing tools' },
    ],
    url: '',
  },
  {
    id: nanoid(),
    img: 'logo-smartlinks.png',
    title: 'Smartlinks',
    time: 'September 2017 - September 2018',
    techStack: [
      { id: nanoid(), name: 'PHP' },
      { id: nanoid(), name: 'JavaScript' },
      { id: nanoid(), name: 'React' },
      { id: nanoid(), name: 'MySQL' },
      { id: nanoid(), name: 'CSS' },
      { id: nanoid(), name: 'REST API' },
    ],
    description: [
      { id: nanoid(), name: 'React web app for internal project management' },
      { id: nanoid(), name: 'Website development focused on speed performance and user UI' },
      { id: nanoid(), name: 'Wordpress Plugin development and theme customisation.' },
      {
        id: nanoid(),
        name:
          'Payment system integration on eCommerce websites (Woocommerce, Opencart, Magento)',
      },
    ],
    url: '',
  },
  {
    id: nanoid(),
    img: 'logo-kcsit.svg',
    title: 'KCS IT',
    time: 'October 2018 - August 2019',
    techStack: [
      { id: nanoid(), name: 'PHP' },
      { id: nanoid(), name: 'JavaScript' },
      { id: nanoid(), name: 'React' },
      { id: nanoid(), name: 'MySQL' },
      { id: nanoid(), name: 'CSS' },
      { id: nanoid(), name: 'REST API' },
      { id: nanoid(), name: 'GCP' },
    ],
    description: [
      {
        id: nanoid(),
        name:
          'Ticketing system development for a private hospital’s customer care center with REST API integration for React Web App.',
      },
      {
        id: nanoid(),
        name: 'Web App development for doctor’s schedule management (days off and Holidays)',
      },
      {
        id: nanoid(),
        name:
          'Project Management with client meetings to make sure all the requirements were fulfilled and keep improving the system',
      },
      {
        id: nanoid(),
        name: 'Google Cloud Platform maintenance (performance, resource management)',
      },
    ],
    url: '',
  },
  {
    id: nanoid(),
    img: 'logo-sv.svg',
    title: 'Saúde Viável',
    time: 'September 2019 - Present',
    techStack: [
      { id: nanoid(), name: 'JS' },
      { id: nanoid(), name: 'React' },
      { id: nanoid(), name: 'NodeJS' },
      { id: nanoid(), name: 'PHP' },
      { id: nanoid(), name: 'MySQL' },
      { id: nanoid(), name: 'REST API' },
      { id: nanoid(), name: 'Android' },
      { id: nanoid(), name: 'iOS' },
      { id: nanoid(), name: 'AWS' },
    ],
    description: [
      {
        id: nanoid(),
        name: 'React JS web app for Customer Care and Commercial teams affiliates program management. Time saved on getting reports and focus on the partners that needed to improve sales.',
      },
      { id: nanoid(), name: 'Mobile App development. Frequent occurring bugs solved and improved user engagement.' },
      
      { id: nanoid(), name: 'Online Appointment schedule system.' },
      { id: nanoid(), name: 'Performance and UI optimisation of websites.' },
    ],
    url: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Interested in working toghether?',
  btn: '',
  email: 'tiago.eira@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sbsmnt',
    },
    {
      id: nanoid(),
      name: 'bitbucket',
      url: 'https://bitbucket.org/tiagoeira',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
