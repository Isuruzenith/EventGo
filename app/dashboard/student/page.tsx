'use client';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { 
    LayoutDashboard, 
    Ticket, 
    History, 
    User, 
    Settings, 
    Bell, 
    ChevronDown,
    Calendar,
    MapPin,
    QrCode,
    X,
    Search
} from 'lucide-react';

// --- TYPE DEFINITIONS (EXTENDED FOR DASHBOARD) ---

type RegisteredEvent = {
  id: number;
  title: string;
  date: string;
  location: string;
  category: 'Workshop' | 'Seminar' | 'Sports' | 'Cultural';
  imageUrl: string;
  status: 'Upcoming' | 'Completed';
};

type UserProfile = {
    name: string;
    studentId: string;
    avatarUrl: string;
};

// --- MOCK DATA FOR THE DASHBOARD ---

const userProfile: UserProfile = {
    name: 'Jane Doe',
    studentId: '22.1-12345',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
};

const registeredEvents: RegisteredEvent[] = [
  {
    id: 1,
    title: 'InnovateX 2025 Tech Symposium',
    date: 'October 15, 2025',
    location: 'NSBM Auditorium',
    category: 'Seminar',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    status: 'Upcoming',
  },
  {
    id: 3,
    title: 'React Native Mobile Dev Workshop',
    date: 'November 20, 2025',
    location: 'FOC-L001 Lab',
    category: 'Workshop',
    imageUrl: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop',
    status: 'Upcoming',
  },
  {
    id: 4,
    title: 'Annual Cultural Fiesta',
    date: 'August 28, 2025',
    location: 'University Grounds',
    category: 'Cultural',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop',
    status: 'Completed',
  },
   {
    id: 2,
    title: 'Green Wave Inter-Faculty Games',
    date: 'September 5-7, 2025',
    location: 'University Sports Complex',
    category: 'Sports',
    imageUrl: 'https://images.unsplash.com/photo-1579952516518-6c21a43a3631?q=80&w=1964&auto=format&fit=crop',
    status: 'Completed',
  },
];


// --- SVG ICON COMPONENTS ---
const NsbmLogo = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#6dbb45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


// --- DASHBOARD UI COMPONENTS ---

const DashboardSidebar = ({ activeView, setActiveView }: { activeView: string, setActiveView: (view: string) => void }) => {
    const navItems = [
        { icon: LayoutDashboard, label: 'Overview' },
        { icon: Ticket, label: 'My Tickets' },
        { icon: History, label: 'Event History' },
        { icon: User, label: 'Profile' },
        { icon: Settings, label: 'Settings' },
    ];
    return (
        <aside className="w-64 bg-gray-900/60 backdrop-blur-lg p-6 flex-col hidden md:flex">
            <div className="flex items-center space-x-3 mb-10">
                <NsbmLogo />
                <span className="text-xl font-bold text-white">EventHub</span>
            </div>
            <nav className="flex flex-col space-y-2">
                {navItems.map(item => (
                    <button 
                        key={item.label} 
                        onClick={() => setActiveView(item.label)}
                        className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                            activeView === item.label 
                            ? 'bg-gradient-to-r from-[#005a9e] to-[#6dbb45] text-white shadow-lg' 
                            : 'text-gray-300 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                        <item.icon className="w-5 h-5 mr-3" />
                        <span>{item.label}</span>
                    </button>
                ))}
            </nav>
            <div className="mt-auto p-4 rounded-lg bg-white/5 text-center">
                 <h4 className="font-semibold text-white mb-2">Need Help?</h4>
                 <p className="text-xs text-gray-400 mb-4">Contact our support team for any questions.</p>
                 <button className="w-full px-4 py-2 rounded-md text-sm text-white font-semibold bg-[#005a9e]/80 hover:bg-[#005a9e] transition-colors duration-300">
                    Contact Support
                </button>
            </div>
        </aside>
    );
};

const DashboardHeader = ({ user }: { user: UserProfile }) => (
    <header className="flex items-center justify-between p-6 bg-gray-900/60 backdrop-blur-lg border-b border-white/10">
        <div>
            <h1 className="text-2xl font-bold text-white">Welcome back, {user.name.split(' ')[0]}!</h1>
            <p className="text-sm text-gray-400">Here's what's happening on campus today.</p>
        </div>
        <div className="flex items-center space-x-6">
            <button className="text-gray-300 hover:text-white relative">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6dbb45] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#6dbb45]"></span>
                </span>
            </button>
            <div className="flex items-center space-x-3">
                <Image src={user.avatarUrl} alt="User Avatar" width={40} height={40} className="rounded-full border-2 border-[#6dbb45]" />
                <div>
                    <h3 className="font-semibold text-white text-sm">{user.name}</h3>
                    <p className="text-xs text-gray-400">{user.studentId}</p>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400" />
            </div>
        </div>
    </header>
);

const StatCard = ({ title, value, icon: Icon }: { title: string; value: string; icon: React.ElementType }) => (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl flex items-center space-x-4 border border-white/10">
        <div className="p-3 bg-gradient-to-br from-[#005a9e] to-[#6dbb45] rounded-lg">
            <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
            <p className="text-sm text-gray-400">{title}</p>
            <h3 className="text-2xl font-bold text-white">{value}</h3>
        </div>
    </div>
);

const UpcomingEventTicket = ({ event, onShowTicket }: { event: RegisteredEvent, onShowTicket: (event: RegisteredEvent) => void }) => {
    const categoryColors = {
        Workshop: 'border-blue-500', Seminar: 'border-purple-500',
        Sports: 'border-green-500', Cultural: 'border-red-500',
    };
    return (
        <div className={`bg-white/10 backdrop-blur-lg rounded-xl p-5 flex flex-col sm:flex-row items-center gap-5 border-l-4 ${categoryColors[event.category]}`}>
            <Image src={event.imageUrl} alt={event.title} width={150} height={100} className="rounded-lg object-cover w-full sm:w-36 h-32 sm:h-24" />
            <div className="flex-grow text-center sm:text-left">
                <h3 className="text-lg font-bold text-white">{event.title}</h3>
                <div className="flex items-center justify-center sm:justify-start text-gray-400 text-sm mt-1">
                    <Calendar className="w-4 h-4 mr-2 text-[#6dbb45]" />
                    <span>{event.date}</span>
                    <span className="mx-2">|</span>
                    <MapPin className="w-4 h-4 mr-2 text-[#6dbb45]" />
                    <span>{event.location}</span>
                </div>
            </div>
            <button 
                onClick={() => onShowTicket(event)}
                className="w-full sm:w-auto mt-4 sm:mt-0 flex-shrink-0 flex items-center justify-center px-5 py-2.5 rounded-md text-white font-semibold bg-[#005a9e]/80 hover:bg-gradient-to-r hover:from-[#005a9e] hover:to-[#6dbb45] transition-all duration-300 transform hover:scale-105"
            >
                <Ticket className="w-5 h-5 mr-2" />
                View Ticket
            </button>
        </div>
    );
};

const EventHistoryItem = ({ event }: { event: RegisteredEvent }) => (
    <div className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200">
        <Image src={event.imageUrl} alt={event.title} width={64} height={64} className="rounded-md object-cover w-16 h-16"/>
        <div className="ml-4 flex-grow">
            <p className="font-bold text-white">{event.title}</p>
            <p className="text-sm text-gray-400">{event.date}</p>
        </div>
        <span className="text-xs font-semibold bg-green-500/30 text-green-300 px-3 py-1 rounded-full">Attended</span>
    </div>
)

const TicketModal = ({ event, onClose }: { event: RegisteredEvent | null, onClose: () => void }) => {
    if (!event) return null;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
            <div className="bg-gray-900 border border-white/20 rounded-2xl w-full max-w-md m-4 relative shadow-2xl shadow-black/50">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                    <X className="w-6 h-6"/>
                </button>
                <div className="p-8">
                    <div className="text-center mb-6">
                        <p className="text-[#6dbb45] font-bold">EVENT TICKET</p>
                        <h2 className="text-2xl font-bold text-white mt-1">{event.title}</h2>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg flex items-center justify-center mb-6">
                       {/* Placeholder for actual QR Code generation library */}
                       <QrCode className="w-40 h-40 text-black" />
                    </div>

                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-400">Name</span>
                            <span className="font-semibold text-white">{userProfile.name}</span>
                        </div>
                         <div className="flex justify-between">
                            <span className="text-gray-400">Student ID</span>
                            <span className="font-semibold text-white">{userProfile.studentId}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">Date</span>
                            <span className="font-semibold text-white">{event.date}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">Location</span>
                            <span className="font-semibold text-white">{event.location}</span>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-6 text-center">Present this QR code at the event entrance for scanning.</p>
                </div>
            </div>
        </div>
    );
};

// --- MAIN DASHBOARD PAGE COMPONENT ---
const StudentDashboardPage: NextPage = () => {
    const [activeView, setActiveView] = useState('Overview');
    const [selectedTicket, setSelectedTicket] = useState<RegisteredEvent | null>(null);

    const upcomingEvents = registeredEvents.filter(e => e.status === 'Upcoming');
    const completedEvents = registeredEvents.filter(e => e.status === 'Completed');

    const handleShowTicket = (event: RegisteredEvent) => {
        setSelectedTicket(event);
    };

    const handleCloseModal = () => {
        setSelectedTicket(null);
    };
    
    const renderContent = () => {
        switch (activeView) {
            case 'My Tickets':
                return (
                     <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white">My Upcoming Event Tickets</h2>
                        {upcomingEvents.length > 0 ? (
                            upcomingEvents.map(event => <UpcomingEventTicket key={event.id} event={event} onShowTicket={handleShowTicket} />)
                        ) : (
                            <p className="text-gray-400">You have no upcoming registered events.</p>
                        )}
                    </div>
                );
            case 'Event History':
                 return (
                     <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">My Past Events</h2>
                        {completedEvents.length > 0 ? (
                            completedEvents.map(event => <EventHistoryItem key={event.id} event={event} />)
                        ) : (
                             <p className="text-gray-400">You haven't attended any events yet.</p>
                        )}
                    </div>
                );
            case 'Profile':
            case 'Settings':
                 return <div className="text-white text-2xl font-bold">{activeView} - Coming Soon</div>;
            case 'Overview':
            default:
                return (
                    <div className="space-y-8">
                        {/* Stats Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <StatCard title="Upcoming Events" value={upcomingEvents.length.toString()} icon={Ticket} />
                            <StatCard title="Events Attended" value={completedEvents.length.toString()} icon={History} />
                            <StatCard title="Points Earned" value="1,250" icon={User} />
                        </div>

                        {/* Upcoming Events Section */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Your Next Event</h2>
                            {upcomingEvents.length > 0 ? (
                                <UpcomingEventTicket event={upcomingEvents[0]} onShowTicket={handleShowTicket} />
                            ) : (
                                <div className="bg-white/10 p-6 rounded-lg text-center text-gray-400">
                                    No upcoming events. Why not <a href="#" className="text-[#6dbb45] font-semibold hover:underline">explore some</a>?
                                </div>
                            )}
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="bg-[#0A101A] text-[#E5E7EB] antialiased min-h-screen flex">
            <DashboardSidebar activeView={activeView} setActiveView={setActiveView} />
            <main className="flex-1 flex flex-col">
                <DashboardHeader user={userProfile} />
                <div className="flex-1 p-8 overflow-y-auto">
                   {renderContent()}
                </div>
            </main>
            <TicketModal event={selectedTicket} onClose={handleCloseModal} />
        </div>
    );
};

export default StudentDashboardPage;