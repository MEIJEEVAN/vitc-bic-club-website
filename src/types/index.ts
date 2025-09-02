export interface Member {
  id: string;
  name: string;
  role: string;
  category: 'core' | 'faculty' | 'events' | 'content' | 'design';
  image: string;
  linkedin?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  isUpcoming: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  event: string;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}