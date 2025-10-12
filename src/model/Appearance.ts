import { Paragraph } from '.';

export interface Appearance {
  period: string;
  title: string;
  event: string;
  kind: string;
  img: string;
  imgAlt?: string;
  videoUrl?: string;
  appearanceLinks: AppearanceLink[];
  paragraphs: Paragraph[];
}

export interface AppearanceLink {
  name: string;
  link: string;
  awesomeFontIcon: string[];
}