export interface VolunteerTask {
  id: string;
  title: string;
  organization: string;
  time: string;
  description: string;
  category: 'sosial' | 'praktisk' | 'kultur';
}

export enum SectionId {
  HERO = 'hero',
  CONCEPT = 'concept',
  JOURNEY = 'journey',
  PROTOTYPE = 'prototype',
  SCALE = 'scale',
  ABOUT = 'about'
}
