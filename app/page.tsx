import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Search,
  ClipboardCheck,
  QrCode,
  Facebook,
  Twitter,
  Linkedin,
  Calendar,
  MapPin,
  Ticket
} from 'lucide-react';

// --- TYPE DEFINITIONS ---
type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  category: 'Workshop' | 'Seminar' | 'Sports' | 'Cultural';
  imageUrl: string;
};

// --- MOCK DATA ---
const featuredEvents: Event[] = [
  {
    id: 1,
    title: 'InnovateX 2025 Tech Symposium',
    date: 'October 15, 2025',
    location: 'NSBM Auditorium',
    description: 'A full-day event exploring the future of AI and machine learning with industry experts.',
    category: 'Seminar',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Green Wave Inter-Faculty Games',
    date: 'November 5-7, 2025',
    location: 'University Sports Complex',
    description: 'Witness the thrill of competition as faculties battle for the championship trophy.',
    category: 'Sports',
    imageUrl: 'https://images.unsplash.com/photo-1579952516518-6c21a43a3631?q=80&w=1964&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'React Native Mobile Dev Workshop',
    date: 'November 20, 2025',
    location: 'FOC-L001 Lab',
    description: 'A hands-on workshop for beginners to build their first cross-platform mobile application.',
    category: 'Workshop',
    imageUrl: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop',
  },
];

// --- SVG ICON COMPONENTS ---
const NsbmLogo = ({ color = '#2D3748' }: { color?: string }) => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


// --- UI COMPONENTS ---


const HeroSection = () => {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop')"}}></div>
      <div className="absolute inset-0 bg-[#1A202C]/70"></div>
      <div className="relative z-10 px-4 animate-fade-in-up">
        <h1 className="text-5xl font-extrabold text-white mb-4">
          Welcome to <span className="text-white">NSBM EventHub</span>
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-300 mb-8">
          Your central portal for all university events. Discover, register, and engage with the vibrant campus life at NSBM.
        </p>
        <button className="group inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-semibold bg-[#0D9488] hover:bg-[#0F766E] transition-all duration-300 transform hover:scale-105">
          Explore Events
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

const EventCard = ({ event }: { event: Event }) => {
  const categoryColors = {
    Workshop: 'bg-sky-600',
    Seminar: 'bg-indigo-600',
    Sports: 'bg-emerald-600',
    Cultural: 'bg-rose-600',
  };

  return (
    <div className="group rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-[#0D9488]/20">
      <div className="relative mb-4">
        <Image src={event.imageUrl} alt={event.title} width={400} height={250} className="w-full h-48 object-cover rounded-lg" />
        <div className={`absolute top-2 right-2 px-3 py-1 text-xs font-semibold text-white rounded-full ${categoryColors[event.category]}`}>
          {event.category}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-[#2D3748] mb-2">{event.title}</h3>
        <div className="flex items-center text-[#718096] text-sm mb-3">
          <Calendar className="w-4 h-4 mr-2 text-[#0D9488]" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-[#718096] text-sm mb-4">
          <MapPin className="w-4 h-4 mr-2 text-[#0D9488]" />
          <span>{event.location}</span>
        </div>
        <p className="text-[#718096] text-sm mb-5 line-clamp-2">{event.description}</p>
        <button className="w-full flex items-center justify-center px-5 py-2.5 rounded-lg text-white font-semibold bg-[#0D9488] hover:bg-[#0F766E] transition-all duration-300 transform hover:scale-105">
          <Ticket className="w-4 h-4 mr-2" />
          Register Now
        </button>
      </div>
    </div>
  );
};

const FeaturedEventsSection = () => {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2D3748]">Featured Events</h2>
          <p className="text-[#718096] mt-2">Check out some of our most popular upcoming events.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  const steps = [
    { icon: Search, title: "Discover Events", description: "Browse our comprehensive list of upcoming events." },
    { icon: ClipboardCheck, title: "Register Online", description: "Secure your spot with a few simple clicks." },
    { icon: QrCode, title: "Scan & Attend", description: "Use your unique QR code for seamless check-in." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2D3748]">How It Works</h2>
          <p className="text-[#718096] mt-2">Register for any event in just 3 simple steps.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-xs">
              <div className="bg-[#CCFBF1] p-5 rounded-full mb-4">
                <step.icon className="w-10 h-10 text-[#0D9488]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2D3748] mb-2">{step.title}</h3>
              <p className="text-[#718096]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- MAIN PAGE COMPONENT ---
const HomePage: NextPage = () => {
  return (
    <main className="bg-[#F5F5F5] text-[#2D3748] antialiased">
      <HeroSection />
      <FeaturedEventsSection />
      <HowItWorksSection />
    </main>
  );
};

export default HomePage;