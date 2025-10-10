import { Data } from '../model';

import profileImg from './img/profileImage.png';
import bannerImg from './img/banner.jpg';
import angularLogo from './img/technologies/angular.png';
import reactLogo from './img/technologies/react.png';
import javaLogo from './img/technologies/java.png';
import pythonLogo from './img/technologies/python.png';
import dockerLogo from './img/technologies/docker.png';
import kubernetesLogo from './img/technologies/kubernetes.png';
import serproImg from './img/projects/project-serpro.png';
import ckaImg from './img/certificates/cka.png';
import ccnpEntImg from './img/certificates/ccnp_enterprise.png';
import ccnpDCImg from './img/certificates/ccnp_datacenter.png';
import netacadImg from './img/certificates/netacad.png';

export const data: Data = {
  title: 'Urs Baumann',
  subtitle: 'Network Automation Expert',
  bannerImg: bannerImg,
  bannerImgAlt: 'Cisco Router Tokenring Card',
  profileImg: profileImg,
  profileImgAlt: 'Urs Baumann',
  aboutMe: {
    paragraphs: [
      {
        spanItems: [
          {
            text: 'Hi, I am Urs, a network automation expert from Switzerland.',
            link: null,
          },
        ],
      },
      {
        spanItems: [
          {
            text: 'I currently work 80% at Swisscom as a Network Automation Engineer on an Infrastructure as Code project for the Swiss Government.',
            link: null,
          },
        ],
      },
      {
        spanItems: [
          {
            text: 'Part-time, I am an external university lecturer at the',
            link: null,
          },
          {
            text: 'Eastern Switzerland University of Applied Sciences',
            link: 'https://www.ost.ch/en/person/urs-baumann-8373',
          },
          {
            text: ', where I teach network fundamentals, network automation, and supervise bachelor theses.',
            link: null,
          },
        ],
      },
    ],
  },
  bio: {
    firstName: 'Urs',
    lastName: 'Baumann',
    description: 'Network Automation Prophet',
    birthday: '1987-10-20',
    email: 'webpage@m.ubaumann.ch',
    degree: 'Master of Science in Artificial Intelligence & Bachelor of Science FHO in Computer Science',
    languages: ['German', 'English', 'Parseltongue'],
  },
  socialIcons: [
    {
      name: 'GitHub',
      link: 'https://github.com/ubaumann',
      awesomeFontIcon: ['fab', 'github'],
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/ubaumannch',
      awesomeFontIcon: ['fab', 'linkedin'],
    },
    {
      name: 'Email',
      link: 'mailto:webpage@m.ubaumann.ch',
      awesomeFontIcon: ['fas', 'envelope'],
    },
  ],
  skills: [
    {
      name: 'Python',
      progress: 80,
      img: pythonLogo,
    },
    {
      name: 'Docker',
      progress: 80,
      img: dockerLogo,
    },
    {
      name: 'Kubernetes',
      progress: 50,
      img: kubernetesLogo,
    },
  ],
  skillLevels: [
    {
      name: 'Novice',
      fromProgress: 0,
      upToProgress: 49,
    },
    {
      name: 'Proficient',
      fromProgress: 50,
      upToProgress: 75,
    },
    {
      name: 'Expert',
      fromProgress: 76,
      upToProgress: 100,
    },
  ],
  certificates: [
    {
      name: 'CKA: Certified Kubernetes Administrator [Expired]',
      img: ckaImg,
      certificateId: 'LF-h2zh0tqhmu',
      digitalBadge:
        'https://www.credly.com/badges/c1d3475e-c25f-4bd6-a874-92a42d30081b',
    },
    {
      name: 'Cisco Certified Network Professional Enterprise',
      img: ccnpEntImg,
      certificateId: 'P6MKK8SEYKVQQWKT',
      digitalBadge:
        'https://www.credly.com/badges/4457b273-193d-4894-add6-419c2cd976a4',
    },
    {
      name: 'Cisco Certified Network Professional Data Center',
      img: ccnpDCImg,
      certificateId: '422414170152FPYN',
      digitalBadge:
        'https://www.credly.com/badges/56c11162-3cf7-45dd-a0c4-37e5260bc082',
    },
    {
      name: 'Networking Academy: Instructor 10 Years of Service',
      img: netacadImg,
      certificateId: '',
      digitalBadge:
        'https://www.credly.com/badges/b5d52972-9cfa-44c3-8477-b4c16a2881bc',
    },
  ],
  experiences: [
    {
      period: 'September 2023 - Present',
      title: 'External University Lecturer',
      employer: 'Swisscom',
      employerLink: 'https://www.ost.ch/',
      employmentRate: '30%',
      paragraphs: [
        {
          spanItems: [
            {
              text: 'External lecturer for the area of network and cloud infrastructures. Teaching and supervising projects.',
              link: null,
            },
          ],
        },
      ],
    },
    {
      period: 'September 2023 - January 2026',
      title: 'Network Automation Engineer / NetDevOps',
      employer: 'Swisscom',
      employerLink: 'https://www.swisscom.ch',
      employmentRate: '80%',
      paragraphs: [
        {
          spanItems: [
            {
              text: 'Creating a next-generation data centre for the Swiss government by automating on-premise, air-gapped cloud infrastructure responsible for Infrastructure as Code, Network Automation, and Linux-as-a-Service.',
              link: null,
            },
          ],
        },
      ],
    },
    {
      period: 'January 2014 - August 2023',
      title: 'Network Automation Research Engineer',
      employer: 'Institute for Network and Security',
      employerLink: 'https://www.ost.ch/ins',
      employmentRate: '100%',
      paragraphs: [
        {
          spanItems: [
            {
              text: 'Supervision Bachelor students, Instructor Cisco Networking Academy, Instructor SDN and network automation Cloud infrastructures, software defined networking, network automation, network unit testing, classic network training, international training in the field of Cisco DNA and Cisco ACI',
              link: null,
            },
          ],
        },
      ],
    },
    {
      period: 'August 2008 - May 2011',
      title: 'Computer and Network Engineer',
      employer: 'xerxes ag',
      employerLink: 'https://xerxes.ch/',
      employmentRate: '100%',
      paragraphs: [
        {
          spanItems: [
            {
              text: 'Support of the clients in all IT questions and responsibility for installation, configuration, commissioning and maintenance of various hardware and software',
              link: null,
            },
          ],
        },
      ],
    },
  ],
  projects: [
    {
      period: '2023 - Present',
      title: 'Pydantify',
      img: serproImg,
      projectLinks: [
        {
          name: 'GitHub',
          link: 'https://github.com/pydantify/pydantify',
          awesomeFontIcon: ['fab', 'github'],
        },
        {
          name: 'Docs',
          link: 'https://pydantify.github.io/pydantify/',
          awesomeFontIcon: ['fas', 'external-link-alt'],
        },
        {
          name: 'Demo',
          link: 'https://youtu.be/j6efvpNy9Yc',
          awesomeFontIcon: ['fab', 'youtube'],
        },
      ],
      paragraphs: [
        {
          spanItems: [
            {
              text: 'Pydantify transforms YANG models into ',
              link: null,
            },
            {
              text: 'Pydantic',
              link: 'https://docs.pydantic.dev/',
            },
            {
              text: ' models. This allows a pytonic way of working with YANG data.',
              link: null,
            },
          ],
        },
      ],
    },
    
    {
      period: '2016 - 2021',
      title: 'Network Automation Stack',
      img: serproImg,
      projectLinks: [
        
      ],
      paragraphs: [
        {
          spanItems: [
            {
              text: 'Started as a staging task automation tool to support zero touch deployment with template engine and software upgrade. Growing up to a full network automation stack with orchestration layer and integration to third-party products. Multiple customers in Switzerland.',
              link: null,
            },
          ],
        },
        {
          spanItems: [
            {
              text: 'Technologies: Python, Django, SaltStack, Jinja2, syslog, dhcp',
              link: null,
            },
          ],
        },
      ],
    },
    {
      period: '2019',
      title: 'MPLS L3 VPN provisioning and operation',
      img: serproImg,
      projectLinks: [
      ],
      paragraphs: [
        {
          spanItems: [
            {
              text: 'Automate the migration from a MPLS L3 network and the operation after the migration. Support deployment of new services, changing MacSec keys on point-to-point links and add new branches.',
              link: null,
            },
          ],
        },
        {
          spanItems: [
            {
              text: 'Technologies: Python, Django, Nornir, Jinja2, Restconf',
              link: null,
            },
          ],
        },
      ],
    },
  ],
  talks: [
    {
      period: 'May 2025',
      title: 'Teaching "old" LLMs new tricks',
      event: 'Autocon 3',
      img: serproImg,
      videoUrl: 'https://www.youtube.com/embed/X073YnquOho?si=AiC8bv-Y1h50aPWp',
      talkLinks: [
        {
          name: 'Slides',
          link: 'https://github.com/ubaumann/slides_autocon3_2025/blob/main/presentation.pdf',
          awesomeFontIcon: ['fab', 'github'],
        },
      ],
      paragraphs: [
        {
          spanItems: [
            {
              text: 'Lightning talk about fine-tuning LLMs with LoRA.',
              link: null,
            },
          ],
        },
      ],
    },
    {
      period: 'November 2015',
      title: 'Remote LAB',
      event: 'SwiNog #29',
      img: serproImg,
      talkLinks: [
        {
          name: 'Slides',
          link: 'https://www.swinog.ch/wp-content/uploads/2018/07/01_Urs_Baumann_Remote_LAB.pdf',
          awesomeFontIcon: ['fas', 'external-link-alt'],
        },
      ],
      paragraphs: [
        {
          spanItems: [
            {
              text: 'This presentation outlines the design and implementation of a Remote Lab environment for network and cloud infrastructure education. ',
              link: null,
            },
            {
              text: 'It explains the architecture, management tools, and OpenStack-based services that enable students to access lab setups remotely, allowing for scalable and practical training in SDN, NFV, CCIE lab, and related fields.',
              link: null,
            },
          ],
        },
      ],
    },
  ]
};
