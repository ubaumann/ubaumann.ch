import { Paragraph } from '.';

export interface Talk {
  period: string;
  title: string;
  event: string;
  img: string;
  imgAlt?: string;
  videoUrl?: string;
  talkLinks: TalkLink[];
  paragraphs: Paragraph[];
}

export interface TalkLink {
  name: string;
  link: string;
  awesomeFontIcon: string[];
}