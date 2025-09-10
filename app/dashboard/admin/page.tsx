'use client';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { 
    LayoutDashboard, 
    CalendarPlus,
    Users, 
    BarChart2,
    Settings, 
    Bell, 
    ChevronDown,
    PlusCircle,
    Search,
    Edit,
    Trash2,
    Eye,
    MoreVertical
} from 'lucide-react';

// --- TYPE DEFINITIONS (FOR ADMIN DASHBOARD) ---

type AdminEvent = {
  id: number;
  title: string;
  date: string;
  location: string;
  category: 'Workshop' | 'Seminar' | 'Sports' | 'Cultural';
  status: 'Upcoming' | 'Completed' | 'Draft';
  registrations: number;
  capacity: number;
};

type SystemUser = {
    id: string;
    name: string;
    studentId: string;
    email: string;
    registeredDate: string;
    avatarUrl: string;
};

type AdminProfile = {
    name: string;
    role: string;
    avatarUrl: string;
};

// --- MOCK DATA FOR THE ADMIN DASHBOARD ---

const adminProfile: AdminProfile = {
    name: 'Dr. Admin',
    role: 'System Administrator',
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop',
};

const allEventsData: AdminEvent[] = [
  { id: 1, title: 'InnovateX 2025 Tech Symposium', date: '2025-10-15', location: 'NSBM Auditorium', category: 'Seminar', status: 'Upcoming', registrations: 189, capacity: 300 },
  { id: 2, title: 'Green Wave Inter-Faculty Games', date: '2025-11-05', location: 'Sports Complex', category: 'Sports', status: 'Upcoming', registrations: 350, capacity: 500 },
  { id: 3, title: 'React Native Mobile Dev Workshop', date: '2025-11-20', location: 'FOC-L001 Lab', category: 'Workshop', status: 'Upcoming', registrations: 45, capacity: 50 },
  { id: 4, title: 'Annual Cultural Fiesta', date: '2025-08-28', location: 'University Grounds', category: 'Cultural', status: 'Completed', registrations: 1200, capacity: 1200 },
  { id: 5, title: 'AI Ethics Debate', date: '2025-12-02', location: 'FOB-L502', category: 'Seminar', status: 'Draft', registrations: 0, capacity: 100 },
  { id: 6, title: 'Photography Club Meetup', date: '2025-09-25', location: 'Library Foyer', category: 'Workshop', status: 'Upcoming', registrations: 22, capacity: 40 },
];

const allUsersData: SystemUser[] = [
    { id: 'u1', name: 'Jane Doe', studentId: '22.1-12345', email: 'jane.d@nsbm.ac.lk', registeredDate: '2025-01-15', avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop' },
    { id: 'u2', name: 'John Smith', studentId: '21.2-54321', email: 'john.s@nsbm.ac.lk', registeredDate: '2025-02-20', avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop' },
    { id: 'u3', name: 'Emily White', studentId: '23.1-67890', email: 'emily.w@nsbm.ac.lk', registeredDate: '2025-03-10', avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop' },
    { id: 'u4', name: 'Michael Brown', studentId: '20.2-09876', email: 'michael.b@nsbm.ac.lk', registeredDate: '2025-04-01', avatarUrl: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop' },
];

// --- SVG ICON COMPONENT ---
const NsbmLogo = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#6dbb45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


// --- ADMIN DASHBOARD UI COMPONENTS ---

const AdminSidebar = ({ activeView, setActiveView }: { activeView: string, setActiveView: (view: string) => void }) => {
    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard' },
        { icon: CalendarPlus, label: 'Events' },
        { icon: Users, label: 'Users' },
        { icon: BarChart2, label: 'Analytics' },
        { icon: Settings, label: 'Settings' },
    ];
    return (
        <aside className="w-64 bg-gray-900/60 backdrop-blur-lg p-6 flex-col hidden md:flex border-r border-white/10">
            <div className="flex items-center space-x-3 mb-10">
                <NsbmLogo />
                <span className="text-xl font-bold text-white">Admin Panel</span>
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
        </aside>
    );
};

const AdminHeader = ({ user }: { user: AdminProfile }) => (
    <header className="flex items-center justify-between p-4 bg-gray-900/60 backdrop-blur-lg border-b border-white/10">
        <div className="relative w-full max-w-xs">
            <input type="text" placeholder="Search events, users..." className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6dbb45]"/>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"/>
        </div>
        <div className="flex items-center space-x-6">
            <button className="text-gray-300 hover:text-white relative">
                <Bell className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-3">
                <Image src={user.avatarUrl} alt="Admin Avatar" width={40} height={40} className="rounded-full border-2 border-[#6dbb45]" />
                <div>
                    <h3 className="font-semibold text-white text-sm">{user.name}</h3>
                    <p className="text-xs text-gray-400">{user.role}</p>
                </div>
            </div>
        </div>
    </header>
);

const StatCard = ({ title, value, icon: Icon, change }: { title: string; value: string; icon: React.ElementType, change?: string }) => (
    <div className="bg-white/5 backdrop-blur-lg p-5 rounded-xl border border-white/10">
        <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">{title}</p>
            <Icon className="w-5 h-5 text-gray-500" />
        </div>
        <h3 className="text-3xl font-bold text-white mt-2">{value}</h3>
        {change && <p className="text-xs text-green-400 mt-1">{change}</p>}
    </div>
);

// Placeholder Chart Component
const AnalyticsChart = () => (
    <div className="bg-white/5 p-6 rounded-xl border border-white/10 h-80 flex flex-col">
        <h4 className="font-bold text-white mb-4">Weekly Registrations</h4>
        <div className="flex-grow flex items-end justify-between space-x-2">
            {/* This is a visual simulation of a bar chart. Replace with a real chart library like Recharts. */}
            <div className="w-full bg-gradient-to-t from-[#005a9e]/50 to-[#005a9e]/0 rounded-t-md" style={{height: '40%'}} title="Mon: 85"></div>
            <div className="w-full bg-gradient-to-t from-[#005a9e]/50 to-[#005a9e]/0 rounded-t-md" style={{height: '60%'}} title="Tue: 120"></div>
            <div className="w-full bg-gradient-to-t from-[#005a9e]/50 to-[#005a9e]/0 rounded-t-md" style={{height: '50%'}} title="Wed: 100"></div>
            <div className="w-full bg-gradient-to-t from-[#6dbb45]/70 to-[#6dbb45]/0 rounded-t-md" style={{height: '90%'}} title="Thu: 180"></div>
            <div className="w-full bg-gradient-to-t from-[#6dbb45]/70 to-[#6dbb45]/0 rounded-t-md" style={{height: '75%'}} title="Fri: 150"></div>
            <div className="w-full bg-gradient-to-t from-[#005a9e]/50 to-[#005a9e]/0 rounded-t-md" style={{height: '65%'}} title="Sat: 130"></div>
            <div className="w-full bg-gradient-to-t from-[#005a9e]/50 to-[#005a9e]/0 rounded-t-md" style={{height: '30%'}} title="Sun: 60"></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2 border-t border-white/10 pt-2">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
        </div>
    </div>
);

const EventManagementTable = ({ events }: { events: AdminEvent[] }) => {
    const statusColors: { [key: string]: string } = {
        Upcoming: 'bg-blue-500/20 text-blue-300',
        Completed: 'bg-green-500/20 text-green-300',
        Draft: 'bg-gray-500/20 text-gray-300',
    };
    return (
        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <table className="w-full text-sm text-left text-gray-300">
                <thead className="bg-white/5 text-xs text-gray-400 uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">Event Title</th>
                        <th scope="col" className="px-6 py-3">Date</th>
                        <th scope="col" className="px-6 py-3">Registrations</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                        <th scope="col" className="px-6 py-3 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event) => (
                        <tr key={event.id} className="border-b border-white/10 hover:bg-white/5">
                            <td className="px-6 py-4 font-medium text-white">{event.title}</td>
                            <td className="px-6 py-4">{new Date(event.date).toLocaleDateString('en-GB')}</td>
                            <td className="px-6 py-4">
                                {event.registrations} / {event.capacity}
                                <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1">
                                    <div className="bg-gradient-to-r from-[#005a9e] to-[#6dbb45] h-1.5 rounded-full" style={{ width: `${(event.registrations / event.capacity) * 100}%` }}></div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className={`px-2 py-1 font-semibold text-xs rounded-full ${statusColors[event.status]}`}>{event.status}</span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="p-2 text-gray-400 hover:text-white"><Edit className="w-4 h-4" /></button>
                                <button className="p-2 text-gray-400 hover:text-white"><Eye className="w-4 h-4" /></button>
                                <button className="p-2 text-gray-400 hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const UserManagementTable = ({ users }: { users: SystemUser[] }) => (
     <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
        <table className="w-full text-sm text-left text-gray-300">
            <thead className="bg-white/5 text-xs text-gray-400 uppercase">
                <tr>
                    <th scope="col" className="px-6 py-3">Name</th>
                    <th scope="col" className="px-6 py-3">Student ID</th>
                    <th scope="col" className="px-6 py-3">Email</th>
                    <th scope="col" className="px-6 py-3">Registered On</th>
                    <th scope="col" className="px-6 py-3 text-right">Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id} className="border-b border-white/10 hover:bg-white/5">
                        <td className="px-6 py-4 font-medium text-white flex items-center space-x-3">
                            <Image src={user.avatarUrl} alt={user.name} width={32} height={32} className="rounded-full" />
                            <span>{user.name}</span>
                        </td>
                        <td className="px-6 py-4">{user.studentId}</td>
                        <td className="px-6 py-4">{user.email}</td>
                        <td className="px-6 py-4">{new Date(user.registeredDate).toLocaleDateString('en-GB')}</td>
                        <td className="px-6 py-4 text-right">
                            <button className="p-2 text-gray-400 hover:text-white"><MoreVertical className="w-4 h-4" /></button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)


// --- MAIN ADMIN DASHBOARD PAGE COMPONENT ---
const AdminDashboardPage: NextPage = () => {
    const [activeView, setActiveView] = useState('Dashboard');

    const renderContent = () => {
        switch (activeView) {
            case 'Events':
                return (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h1 className="text-3xl font-bold text-white">Event Management</h1>
                            <button className="flex items-center justify-center px-4 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[#005a9e] to-[#6dbb45] hover:opacity-90 transition-opacity">
                                <PlusCircle className="w-5 h-5 mr-2" />
                                Create New Event
                            </button>
                        </div>
                        <EventManagementTable events={allEventsData} />
                    </div>
                );
            case 'Users':
                 return (
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-white">User Management</h1>
                        <UserManagementTable users={allUsersData} />
                    </div>
                );
            case 'Analytics':
            case 'Settings':
                 return <div className="text-white text-3xl font-bold">{activeView} - Coming Soon</div>;
            case 'Dashboard':
            default:
                return (
                    <div className="space-y-8">
                        <h1 className="text-3xl font-bold text-white">Admin Overview</h1>
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <StatCard title="Total Events" value={allEventsData.length.toString()} icon={CalendarPlus} />
                            <StatCard title="Total Users" value={allUsersData.length.toString()} icon={Users} change="+5 this week" />
                            <StatCard title="Upcoming Events" value={allEventsData.filter(e => e.status === 'Upcoming').length.toString()} icon={LayoutDashboard} />
                            <StatCard title="Total Registrations" value="2,156" icon={BarChart2} change="+12% this month" />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2">
                                <AnalyticsChart />
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                <h4 className="font-bold text-white mb-4">Recent Activity</h4>
                                <div className="space-y-4 text-sm">
                                    {allUsersData.slice(0, 4).map(user => (
                                        <div key={user.id} className="flex items-center">
                                            <Image src={user.avatarUrl} alt={user.name} width={32} height={32} className="rounded-full" />
                                            <p className="ml-3 text-gray-300"><span className="font-semibold text-white">{user.name}</span> just registered.</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="bg-[#0A101A] text-[#E5E7EB] antialiased min-h-screen flex">
            <AdminSidebar activeView={activeView} setActiveView={setActiveView} />
            <div className="flex-1 flex flex-col">
                <AdminHeader user={adminProfile} />
                <main className="flex-1 p-8 overflow-y-auto">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default AdminDashboardPage;