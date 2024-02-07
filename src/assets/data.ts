import { Data } from '../model';

import profileImg from './img/profileImage.jpg';
import bannerImg from './img/banner.jpg';
import typescriptLogo from './img/technologies/typescript.png';
import angularLogo from './img/technologies/angular.png';
import reactLogo from './img/technologies/react.png';
import javaLogo from './img/technologies/java.png';
import pythonLogo from './img/technologies/python.png';
import dockerLogo from './img/technologies/docker.png';
import kubernetesLogo from './img/technologies/kubernetes.png';
import gradleLogo from './img/technologies/gradle.png';
import postgresLogo from './img/technologies/postgres.png';
import springLogo from './img/technologies/spring.png';
import jagwImg from './img/projects/project-jagw.png';
import serproImg from './img/projects/project-serpro.png';
import lspLqaImg from './img/projects/project-lsp-lqa.png';
import ckaImg from './img/certificates/cka.png';

export const data: Data = {
  title: 'Michel Bongard',
  subtitle: 'Software Engineer',
  bannerImg: bannerImg,
  bannerImgAlt: 'Bridge in Rapperswil-Jona',
  profileImg: profileImg,
  profileImgAlt: 'Michel Bongard',
  aboutMe: {
    paragraphs: [
      {
        spanItems: [
          {
            text: 'Hi, I am Michel, a full-stack software engineer from Rapperswil-Jona, Switzerland.',
            link: null,
          },
        ],
      },
      {
        spanItems: [
          {
            text: 'I am currently working at ',
            link: null,
          },
          {
            text: 'Hostpoint AG',
            link: 'https://www.hostpoint.ch/',
          },
          {
            text: ', where I am employed as a full-stack software engineer working with Angular and Java.',
            link: null,
          },
        ],
      },
      {
        spanItems: [
          {
            text: 'I am also a Co-Founder of ',
            link: null,
          },
          {
            text: 'rappicode GmbH',
            link: 'https://rappicode.com/',
          },
          {
            text: ', where we specialize on the development of Atlassian apps. The apps can be installed directly from the ',
            link: null,
          },
          {
            text: 'Atlassian marketplace',
            link: 'https://marketplace.atlassian.com/vendors/1224179/rappicode',
          },
          {
            text: '.',
            link: null,
          },
        ],
      },
    ],
  },
  bio: {
    firstName: 'Michel',
    lastName: 'Bongard',
    description: 'Software Engineer',
    birthday: '1994-01-09',
    email: 'mail@michelbongard.ch',
    degree: 'Bachelor of Science FHO in Computer Science',
    languages: ['German', 'English', 'Portuguese'],
  },
  socialIcons: [
    {
      name: 'GitHub',
      link: 'https://github.com/mbongard',
      awesomeFontIcon: ['fab', 'github'],
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/michel-bongard',
      awesomeFontIcon: ['fab', 'linkedin'],
    },
    {
      name: 'Email',
      link: 'mailto:mail@michelbongard.ch',
      awesomeFontIcon: ['fas', 'envelope'],
    },
  ],
  skills: [
    {
      name: 'Typescript',
      progress: 90,
      img: typescriptLogo,
    },
    {
      name: 'Angular',
      progress: 80,
      img: angularLogo,
    },
    {
      name: 'React',
      progress: 80,
      img: reactLogo,
    },
    {
      name: 'Java',
      progress: 80,
      img: javaLogo,
    },
    {
      name: 'Spring',
      progress: 60,
      img: springLogo,
    },
    {
      name: 'Gradle',
      progress: 70,
      img: gradleLogo,
    },
    {
      name: 'PostgreSQL',
      progress: 70,
      img: postgresLogo,
    },
    {
      name: 'Python',
      progress: 30,
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
      upToProgress: 50,
    },
    {
      name: 'Proficient',
      fromProgress: 50,
      upToProgress: 75,
    },
    {
      name: 'Expert',
      fromProgress: 75,
      upToProgress: 100,
    },
  ],
  certificates: [
    {
      name: 'CKA: Certified Kubernetes Administrator',
      img: ckaImg,
      certificateId: 'LF-043zxk8x7s',
      digitalBadge:
        'https://www.credly.com/badges/24b03699-38a4-41f4-8cd5-a7165dd8292a',
    },
  ],
  experiences: [
    {
      period: 'August 2023 - Today',
      title: 'CEO & Co-Founder',
      employer: 'rappicode GmbH',
      employerLink: 'https://www.rappicode.com/',
      employmentRate: '-',
      paragraphs: [
        {
          spanItems: [
            {
              text: 'In 2023 I co-founded rappicode GmbH which specializes in the development of Atlassian apps.',
              link: null,
            },
          ],
        },
        {
          spanItems: [
            {
              text: 'Our apps can be installed directly from the ',
              link: null,
            },
            {
              text: 'Atlassian marketplace',
              link: 'https://marketplace.atlassian.com/vendors/1224179/rappicode',
            },
            {
              text: '.',
              link: null,
            },
          ],
        },
      ],
    },
    {
      period: 'April 2022 - Today',
      title: 'Software Engineer',
      employer: 'Hostpoint AG',
      employerLink: 'https://www.hostpoint.ch/',
      employmentRate: '100%',
      paragraphs: [
        {
          spanItems: [
            {
              text: 'Full-stack software engineer (Java, Angular).',
              link: null,
            },
          ],
        },
      ],
    },
    {
      period: 'April 2021 - March 2022',
      title: 'Assistant, Software Engineer',
      employer: 'INS Institute for Networked Solutions',
      employerLink: 'https://www.ins.hsr.ch/',
      employmentRate: '100%',
      paragraphs: [
        {
          spanItems: [
            {
              text: 'Assistant to the professors in the field of computer networks and full-stack software engineer for network applications (mostly in Segment Routing in collaboration with Cisco Systems, Inc.).',
              link: null,
            },
          ],
        },
      ],
    },
  ],
  projects: [
    {
      period: '2021 - 2022',
      title: 'Jalapeño API Gateway',
      img: jagwImg,
      projectLinks: [
        {
          name: 'Project',
          link: 'https://www.ost.ch/de/forschung-und-dienstleistungen/informatik/ins-institut-fuer-netzwerke-und-sicherheit/forschungsprojekte/jalapeno-api-gateway',
          awesomeFontIcon: ['fas', 'external-link-alt'],
        },
      ],
      paragraphs: [
        {
          spanItems: [
            {
              text: 'Jalapeño is a cloud-native application developed by ',
              link: null,
            },
            {
              text: 'Cisco Systems',
              link: 'https://www.cisco.com/',
            },
            {
              text: ' that captures network topology and performance data made available through the Segment Routing technology.',
              link: null,
            },
          ],
        },
        {
          spanItems: [
            {
              text: 'With the help of Dominique Illi and Julian Klaiber I am developing an API Gateway in collaboration with Cisco for the use of future SR-Apps.',
              link: null,
            },
          ],
        },
      ],
    },
    {
      period: '2021',
      title: 'SR-App: Service Programming (Frontend)',
      img: serproImg,
      projectLinks: [
        {
          name: 'Project',
          link: 'https://www.ost.ch/de/forschung-und-dienstleistungen/informatik/ins-institut-fuer-netzwerke-und-sicherheit/angebot/workshop/service-programming',
          awesomeFontIcon: ['fas', 'external-link-alt'],
        },
        {
          name: 'Demo',
          link: 'https://www.youtube.com/watch?v=tMnpGJwYCNU',
          awesomeFontIcon: ['fab', 'youtube'],
        },
      ],
      paragraphs: [
        {
          spanItems: [
            {
              text: 'The SR-App SerPro allows a user to program so-called steering policies in a Segment Routing network.',
              link: null,
            },
          ],
        },
        {
          spanItems: [
            {
              text: 'The backend was developed by Julian Klaiber and Severin Dellsperger. With assistance from William Wakelin I developed the frontend (React) for this SR-App.',
              link: null,
            },
          ],
        },
      ],
    },
    {
      period: '2020',
      title: 'SR-App: Link Saturation Prediction',
      img: lspLqaImg,
      projectLinks: [
        {
          name: 'Thesis',
          link: 'https://eprints.ost.ch/id/eprint/909/1/HS%202020%202021-BA-EP-Bongard-Illi-SR-App%20Analytics.pdf',
          awesomeFontIcon: ['fas', 'external-link-alt'],
        },
        {
          name: 'Project',
          link: 'https://www.ost.ch/de/forschung-und-dienstleistungen/informatik/ins-institut-fuer-netzwerke-und-sicherheit/angebot/workshop/network-analytics',
          awesomeFontIcon: ['fas', 'external-link-alt'],
        },
        {
          name: 'Demo',
          link: 'https://www.youtube.com/watch?v=SouxeTTXx1E',
          awesomeFontIcon: ['fab', 'youtube'],
        },
      ],
      paragraphs: [
        {
          spanItems: [
            {
              text: 'As part of our Bachelor Thesis, Dominique Illi and I developed the SR-App Link Saturation Prediction.',
              link: null,
            },
          ],
        },
        {
          spanItems: [
            {
              text: 'This SR-App makes use of the Segment Routing Traffic Matrix to allow a network operator to make large scale simulations on a topology.',
              link: null,
            },
          ],
        },
      ],
    },
  ],
};
