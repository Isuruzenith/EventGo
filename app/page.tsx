import type { NextPage } from 'next';
import Image from 'next/image';
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
const NsbmLogo = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#6dbb45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


// --- UI COMPONENTS ---

const Header = () => {
  const navLinks = ["Home", "Events", "Dashboard", "Contact"];
  return (
    <header className="sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 bg-white/10 backdrop-blur-lg border-b border-white/10 rounded-b-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <NsbmLogo />
            <span className="text-xl font-bold text-[#E5E7EB]">EventHub</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-[#E5E7EB] hover:text-[#6dbb45] transition-colors duration-300">
                {link}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-[#E5E7EB] px-4 py-2 rounded-md hover:bg-white/10 transition-colors duration-300">
              Login
            </button>
            <button className="px-4 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-[#005a9e] to-[#6dbb45] hover:from-[#6dbb45] hover:to-[#4b8b24] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#6dbb45]/30">
              Sign Up
            </button>
          </div>
          {/* Mobile Menu Button - can be implemented with state */}
          <div className="md:hidden">
            <button className="text-[#E5E7EB]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-center text-white animate-fade-in">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://www.nsbm.ac.lk/wp-content/uploads/2021/11/nsbm_main-auditorium-scaled.jpg')"}}></div>
      <div className="absolute inset-0 bg-[#0A101A]/70"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">
          Welcome to <span className="text-[#6dbb45]">NSBM EventHub</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8 animate-fade-in-up">
          Your central portal for all university events. Discover, register, and engage with the vibrant campus life at NSBM.
        </p>
        <button className="group inline-flex items-center justify-center px-6 py-3 rounded-md text-white font-semibold bg-gradient-to-r from-[#005a9e] to-[#6dbb45] hover:from-[#6dbb45] hover:to-[#4b8b24] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#6dbb45]/30">
          Explore Events
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

const EventCard = ({ event }: { event: Event }) => {
  const categoryColors = {
    Workshop: 'bg-blue-500/80',
    Seminar: 'bg-purple-500/80',
    Sports: 'bg-green-500/80',
    Cultural: 'bg-red-500/80',
  };

  return (
    <div className="group rounded-xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#6dbb45]/20">
      <div className="relative">
        <Image src={event.imageUrl} alt={event.title} width={400} height={250} className="w-full h-48 object-cover" />
        <div className={`absolute top-2 right-2 px-3 py-1 text-xs font-semibold text-white rounded-full ${categoryColors[event.category]}`}>
          {event.category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-[#E5E7EB] mb-2">{event.title}</h3>
        <div className="flex items-center text-gray-400 text-sm mb-3">
          <Calendar className="w-4 h-4 mr-2 text-[#6dbb45]" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-gray-400 text-sm mb-4">
          <MapPin className="w-4 h-4 mr-2 text-[#6dbb45]" />
          <span>{event.location}</span>
        </div>
        <p className="text-gray-300 text-sm mb-5 line-clamp-2">{event.description}</p>
        <button className="w-full flex items-center justify-center px-4 py-2 rounded-md text-white font-semibold bg-[#005a9e]/80 group-hover:bg-gradient-to-r group-hover:from-[#005a9e] group-hover:to-[#6dbb45] transition-all duration-300">
          <Ticket className="w-4 h-4 mr-2" />
          Register Now
        </button>
      </div>
    </div>
  );
};

const FeaturedEventsSection = () => {
  return (
    <section className="py-20 bg-[#0A101A]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB]">Featured Events</h2>
          <p className="text-gray-400 mt-2">Check out some of our most popular upcoming events.</p>
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
    <section className="py-20 bg-gray-900/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB]">How It Works</h2>
          <p className="text-gray-400 mt-2">Register for any event in just 3 simple steps.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-xs">
              <div className="bg-gradient-to-br from-[#005a9e] to-[#6dbb45] p-5 rounded-full mb-4">
                <step.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#E5E7EB] mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
  ];
  const footerLinks = ["About NSBM", "Privacy Policy", "Terms of Service"];

  return (
    <footer className="bg-[#0A101A] border-t border-white/10 pt-10 pb-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start space-x-4 mb-2">
              <NsbmLogo />
              <span className="text-2xl font-bold text-[#E5E7EB]">NSBM EventHub</span>
            </div>
            <p className="text-gray-500">The official event portal for NSBM Green University.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex space-x-6">
              {footerLinks.map(link => (
                <a key={link} href="#" className="text-gray-400 hover:text-[#6dbb45] transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-gray-400 hover:text-[#6dbb45] transition-colors duration-300">
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© 2025 NSBM Green University. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// --- MAIN PAGE COMPONENT ---
const HomePage: NextPage = () => {
  return (
    <main className="bg-[#0A101A] text-[#E5E7EB] antialiased">
      <Header />
      <HeroSection />
      <FeaturedEventsSection />
      <HowItWorksSection />
      <Footer />
    </main>
  );
};

export default HomePage;