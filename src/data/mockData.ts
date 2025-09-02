import { Member, Event, GalleryItem } from '../types';

export const members: Member[] = [
  // Core Team
  {
    id: '1',
    name: 'Arjun Sharma',
    role: 'Chairperson',
    category: 'core',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: 'https://linkedin.com/in/arjun-sharma'
  },
  {
    id: '2',
    name: 'Priya Patel',
    role: 'Vice Chairperson',
    category: 'core',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: 'https://linkedin.com/in/priya-patel'
  },
  {
    id: '3',
    name: 'Rohit Kumar',
    role: 'Treasurer',
    category: 'core',
    image: 'https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: 'https://linkedin.com/in/rohit-kumar'
  },
  {
    id: '4',
    name: 'Sneha Reddy',
    role: 'General Secretary',
    category: 'core',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: 'https://linkedin.com/in/sneha-reddy'
  },
  // Faculty Coordinators
  {
    id: '5',
    name: 'Dr. Rajesh Gupta',
    role: 'Faculty Coordinator',
    category: 'faculty',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: 'https://linkedin.com/in/rajesh-gupta'
  },
  {
    id: '6',
    name: 'Dr. Meera Singh',
    role: 'Faculty Coordinator',
    category: 'faculty',
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: 'https://linkedin.com/in/meera-singh'
  },
  // Department Leads
  {
    id: '7',
    name: 'Aadhya Verma',
    role: 'Events & Outreach Lead',
    category: 'events',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: 'https://linkedin.com/in/aadhya-verma'
  },
  {
    id: '8',
    name: 'Vikash Jain',
    role: 'Content & Social Media Lead',
    category: 'content',
    image: 'https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: 'https://linkedin.com/in/vikash-jain'
  },
  {
    id: '9',
    name: 'Ananya Das',
    role: 'Design Lead',
    category: 'design',
    image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: 'https://linkedin.com/in/ananya-das'
  }
];

export const events: Event[] = [
  {
    id: '1',
    title: 'Defy Hackathon 2024',
    date: '2024-10-15',
    description: 'The biggest hackathon at VIT Chennai, bringing together innovative minds to solve real-world problems.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    isUpcoming: false
  },
  {
    id: '2',
    title: 'Business Model Workshop',
    date: '2024-09-20',
    description: 'Learn the fundamentals of creating sustainable business models for startups.',
    image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    isUpcoming: false
  },
  {
    id: '3',
    title: 'Design Thinking Session',
    date: '2024-08-25',
    description: 'Interactive workshop on human-centered design methodology.',
    image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    isUpcoming: false
  },
  {
    id: '4',
    title: 'Pitch Perfect Competition',
    date: '2024-11-30',
    description: 'Showcase your startup ideas to industry experts and investors.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    isUpcoming: false
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Defy Hackathon Opening Ceremony',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    event: 'Defy Hackathon 2024'
  },
  {
    id: '2',
    title: 'Team Collaboration Session',
    image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    event: 'Design Thinking Workshop'
  },
  {
    id: '3',
    title: 'Business Workshop',
    image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    event: 'Business Model Workshop'
  },
  {
    id: '4',
    title: 'Innovation Awards',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    event: 'Pitch Perfect Competition'
  },
  {
    id: '5',
    title: 'Group Discussion',
    image: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    event: 'Weekly Meetup'
  },
  {
    id: '6',
    title: 'Networking Session',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    event: 'Alumni Connect'
  }
];