import {
  AboutMe,
  Bio,
  Certificate,
  Experience,
  Project,
  Skill,
  SkillLevel,
  SocialIcon,
  Talk
} from '.';

export interface Data {
  title: string;
  subtitle: string;
  bannerImg: string;
  bannerImgAlt: string;
  profileImg: string;
  profileImgAlt: string;
  aboutMe: AboutMe;
  bio: Bio;
  socialIcons: SocialIcon[];
  skills: Skill[];
  skillLevels: SkillLevel[];
  certificates: Certificate[];
  experiences: Experience[];
  projects: Project[];
  talks: Talk[];
}
