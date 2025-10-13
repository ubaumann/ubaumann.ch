import { Data } from '../model';

import profileImg from './img/profileImage.png';
import bannerImg from './img/banner.jpg';
import pythonLogo from './img/technologies/python.png';
import rustLogo from './img/technologies/rust.png';
import dockerLogo from './img/technologies/docker.png';
import kubernetesLogo from './img/technologies/kubernetes.png';
import awsLogo from './img/technologies/aws.png';
import kubenetLogo from './img/technologies/kubenet.png'
import nornirLogo from './img/technologies/nornir.png';
import yangLogo from './img/technologies/yang.png';
import ansibleLogo from './img/technologies/ansible.png'
import opentofuLogo from './img/technologies/opentofu.png'
import defaultImg from './img/default-img.png';
import pydantifyImg from './img/projects/project-pydantify.png'
import ckaImg from './img/certificates/cka.png';
import ccnpEntImg from './img/certificates/ccnp_enterprise.png';
import ccnpDCImg from './img/certificates/ccnp_datacenter.png';
import netacadImg from './img/certificates/netacad.png';
import swinog29Img from './img/appearances/Swinog_29.jpg'
import swinog31Img from './img/appearances/Swinog_31.jpg'
import swinog32Img from './img/appearances/Swinog_32.jpg'
import NetAutoberfest2025Img from './img/appearances/NetAutoberfest2025.jpg'
import DCDConnectLondon2025Img from './img/appearances/dcd-connect-london-2025.png'


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
      name: 'Rust',
      progress: 15,
      img:rustLogo,
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
    {
      name: 'AWS',
      progress: 50,
      img: awsLogo,
    },
    {
      name: 'Kubenet',
      progress: 25,
      img: kubenetLogo,
    },
    {
      name: 'Nornir / NAPALM / Netmiko / Scrapli',
      progress: 90,
      img: nornirLogo,
    },
    {
      name: 'YANG / NETCONF / RESTCONF / gNMI',
      progress: 76,
      img: yangLogo,
    },
    {
      name: 'Ansible / Ansible Automation Platform',
      progress: 76,
      img: ansibleLogo,
    },
    {
      name: 'OpenTofu / Terraform',
      progress: 50,
      img: opentofuLogo,
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
      employer: 'Eastern Switzerland University of Applied Sciences (OST)',
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
      img: pydantifyImg,
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
      img: defaultImg,
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
      img: defaultImg,
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
  appearances: [
    {
      period: "October 2025",
      title: "Pydantify",
      event: "NetAutoberfest 2025 - NetAuto Group RheinMain",
      kind: "Talk",
      img: NetAutoberfest2025Img,
      imgAlt: "Picture of me presenting. Picture taken by Logicalis GmbH",
      appearanceLinks: [
        {
          name: "Slides",
          link: "https://github.com/ubaumann/slides_pydantify_NetAutoberfest2025/blob/main/presentation.pdf",
          awesomeFontIcon: ["fab", "github"]
        }
      ],
      paragraphs: [
        {
          spanItems: [
            {
              text: "How can we bridge the gap between YANG data models and modern Python development? Urs introduces Pydantify, a tool that generates Pydantic models from YANG, making network data easier to validate, manipulate, and integrate into Python workflows.",
              link: null
            }
          ]
        }
      ]
    },
    {
      period: "September 2025",
      title: "AI for networking for AI - The role of AI in network operations",
      event: "DCD Compute | London",
      kind: "Panel",
      img: DCDConnectLondon2025Img,
      appearanceLinks: [
        {
          name: "Event Page",
          link: "https://www.datacenterdynamics.com/en/dcdconnect-compute/london/2025/dcdtalks-ai-for-networking-for-ai-the-role-of-ai-in-network-operations/",
          awesomeFontIcon: ["fas", "external-link-alt"]
        }
      ],
      paragraphs: [
        {
          spanItems: [
            {
              text: "AI is rewriting the rules of network operations, turning chaos into control with smarter automation and predictive power. This session explores how AI can transform enterprise connectivity, making networks faster, more resilient, and efficient.",
              link: null
            },
            {
              text: "Brains Over Brawn: How AI can optimize traffic, spot bottlenecks, and boost performance without drowning in manual tweaks.",
              link: null
            },
            {
              text: "Uptime Unleashed: How AI’s predictive capabilities can prevent outages, enhance security, and maintain smooth operations under pressure.",
              link: null
            },
            {
              text: "Lean and Green: How AI-driven operations can cut costs and energy usage while handling growing data demands, including AI-generated video traffic.",
              link: null
            }
          ]
        }
      ]
    },
    {
      period: 'May 2025',
      title: 'Teaching "old" LLMs new tricks',
      event: 'Autocon 3',
      kind: "Talk",
      img: defaultImg,
      videoUrl: 'https://www.youtube.com/embed/X073YnquOho?si=AiC8bv-Y1h50aPWp',
      appearanceLinks: [
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
              text: "Fine-tuning Large Language Models (LLMs) for network automation tasks requires substantial resources. However, Low-Rank Adaptation (LoRA) provides a lightweight and efficient alternative.",
              link: null
            },
            {
              text: "In this lightning talk, we explore how LoRA fine-tuning can significantly enhance the accuracy of LLMs for specialized automation tasks without requiring extensive computational power.",
              link: null
            },
            {
              text: "The presentation also outlines a practical fine-tuning pipeline, demonstrating how to adapt existing LLMs for network-specific automation challenges.",
              link: null
            }
          ],
        },
      ],
    },
    {
      period: "September 2024",
      title: "OpenGitOps Principles in Networking",
      event: "SwiNOG #39",
      kind: "Talk",
      img: defaultImg,
      videoUrl: "https://www.youtube.com/embed/4TZyIOY2lTo?si=-El4Yut55TgpDkpU",
      appearanceLinks: [
        {
          name: "Slides",
          link: "https://www.swinog.ch/wp-content/uploads/2024/09/OpenGitOps-Principles-in-Networking-Urs-Baumann.pdf",
          awesomeFontIcon: ["fas", "external-link-alt"]
        }
      ],
      paragraphs: [
        {
          spanItems: [
            {
              text: "GitOps is a widely used term, and the CNCF GitOps Working Group has defined four principles: \"Declarative,\" \"Versioned and Immutable,\" \"Pulled Automatically,\" and \"Continuously Reconciled.\"",
              link: null
            },
            {
              text: "This presentation explores how these principles apply to network automation and operations, illustrating what it means to adopt GitOps practices in networking environments.",
              link: null
            },
            {
              text: "Tools like ",
              link: null
            },
            {
              text: "Kubnet",
              link: "https://learn.kubenet.dev"
            },
            {
              text: " and the newly released Infrahub from OpsMill are showcased as examples that simplify building GitOps-based networking solutions.",
              link: null
            }
          ]
        }
      ]
    },
    {
      period: "May 2024",
      title: "How my first Network Automation project failed (and is still in production)",
      event: "AutoCon 1",
      kind: "Talk",
      img: defaultImg,
      videoUrl: "https://www.youtube.com/embed/C2lbhWuD6Mo?si=GaUvWfTyO0cCGKQm",
      appearanceLinks: [
        {
          name: "Slides",
          link: "https://github.com/ubaumann/slides_autocon1_2024/blob/master/presentation.pdf",
          awesomeFontIcon: ["fab", "github"]
        }
      ],
      paragraphs: [
        {
          spanItems: [
            {
              text: "A candid talk about the lessons learned from a real-world network automation project that didn’t go as planned but still ended up running successfully in production.",
              link: null
            },
            {
              text: "The presentation covers common pitfalls, practical takeaways, and insights on building resilient automation workflows even when things don’t go perfectly.",
              link: null
            }
          ]
        }
      ]
    },
    {
      period: "November 2023",
      title: "The State of Network Automation",
      event: "AutoCon 0",
      kind: "Panel",
      img: "defaultImg",
      videoUrl: "https://www.youtube.com/embed/o41VuaI3_R4?si=wnVFrLB0_aGT5d9N",
      appearanceLinks: [],
      paragraphs: [
        {
          spanItems: [
            {
              text: "Mini-Track session moderated by Kirk Byers (Twin Bridges Technology) with speakers Dawn Howell (Equinix, Inc.), Karl Newell (Internet2), Nick Thompson (World Wide Technology), and Urs Baumann (Swisscom).",
              link: null
            },
            {
              text: "The discussion focuses on the current state, challenges, and advancements in network automation across different organizations.",
              link: null
            }
          ]
        }
      ]
    },
    {
      period: "November 2017",
      title: "Network Unit Testing with SaltStack",
      event: "SwiNOG #32",
      kind: "Talk",
      img: swinog32Img,
      imgAlt: "Picture of me presenting. Picture taken by SwiNOG",
      appearanceLinks: [
        {
          name: "Slides",
          link: "https://www.swinog.ch/wp-content/uploads/2018/07/Urs_Baumann_Network_Unit_Testing_with_SaltStack.pdf",
          awesomeFontIcon: ["fas", "external-link-alt"]
        }
      ],
      paragraphs: [
        {
          spanItems: [
            {
              text: "Talk focusing on how to apply unit testing principles to network configurations using SaltStack.",
              link: null
            },
            {
              text: "It demonstrates methods for validating network states, automating configuration checks, and ensuring reliability in network automation workflows.",
              link: null
            }
          ]
        }
      ]
    },
    {
      period: "May 2017",
      title: "Network Automation – Road trip to an automated Network",
      event: "SwiNOG #31",
      kind: "Talk",
      img: swinog31Img,
      imgAlt: "Picture of me presenting. Picture taken by SwiNOG",
      appearanceLinks: [
        {
          name: "Slides",
          link: "https://www.swinog.ch/wp-content/uploads/2018/07/09_Urs_Baumann_Network_Automation_%E2%80%93_Road_trip_to_an_automated_Network.pdf",
          awesomeFontIcon: ["fas", "external-link-alt"]
        }
      ],
      paragraphs: [
        {
          spanItems: [
            {
              text: "Presentation discussing the journey toward network automation, exploring the challenges, tools, and benefits of implementing automated processes in network environments.",
              link: null
            }
          ]
        }
      ]
    },
    {
      period: 'November 2015',
      title: 'Remote LAB',
      event: 'SwiNOG #29',
      kind: "Talk",
      img: swinog29Img,
      imgAlt: "Picture of me presenting. Picture taken by SwiNOG",
      appearanceLinks: [
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
