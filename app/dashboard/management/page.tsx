
'use client';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { 
    LayoutDashboard, 
    CalendarCheck,
    PieChart, 
    Bell, 
    ChevronDown,
    Search,
    Edit,
    Users,
    Mail,
    Download,
    Filter,
    ClipboardList
} from 'lucide-react';

// --- TYPE DEFINITIONS (FOR MANAGER DASHBOARD) ---

type ManagedEvent = {
  id: number;
  title: string;
  date: string;
  status: 'Upcoming' | 'Completed' | 'Pending Approval';
  registrations: number;
  capacity: number;
  attendance?: number; // Optional, only for completed events
};

type Attendee = {
    id: string;
    name:string;
    studentId: string;
    email: string;
    registeredAt: string;
    checkedIn: boolean;
};

type ManagerProfile = {
    name: string;
    department: string;
    avatarUrl: string;
};

// --- MOCK DATA FOR THE MANAGER DASHBOARD ---

const managerProfile: ManagerProfile = {
    name: 'Dr. Chathuranga',
    department: 'Faculty of Computing',
    avatarUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop',
};

// Events specifically assigned to this manager
const managedEvents: ManagedEvent[] = [
  { id: 1, title: 'InnovateX 2025 Tech Symposium', date: '2025-10-15', status: 'Upcoming', registrations: 189, capacity: 300 },
  { id: 3, title: 'React Native Mobile Dev Workshop', date: '2025-11-20', status: 'Upcoming', registrations: 48, capacity: 50 },
  { id: 5, title: 'AI Ethics Debate', date: '2025-12-02', status: 'Pending Approval', registrations: 0, capacity: 100 },
  { id: 7, title: 'Annual FOC CodeFest', date: '2025-07-20', status: 'Completed', registrations: 120, capacity: 120, attendance: 112 },
  { id: 8, title: 'Cybersecurity Capture The Flag', date: '2025-06-15', status: 'Completed', registrations: 80, capacity: 80, attendance: 71 },
];

const eventAttendees: { [eventId: number]: Attendee[] } = {
    7: [ // Attendees for 'Annual FOC CodeFest'
        {id: 'u1', name: 'Jane Doe', studentId: '22.1-12345', email: 'jane.d@nsbm.ac.lk', registeredAt: '2025-07-01T10:00:00Z', checkedIn: true},
        {id: 'u2', name: 'John Smith', studentId: '21.2-54321', email: 'john.s@nsbm.ac.lk', registeredAt: '2025-07-02T11:30:00Z', checkedIn: true},
        {id: 'u4', name: 'Michael Brown', studentId: '20.2-09876', email: 'michael.b@nsbm.ac.lk', registeredAt: '2025-07-03T09:15:00Z', checkedIn: false},
        // ... more attendees
    ],
    1: [ // Attendees for 'InnovateX 2025 Tech Symposium'
        {id: 'u3', name: 'Emily White', studentId: '23.1-67890', email: 'emily.w@nsbm.ac.lk', registeredAt: '2025-09-05T14:00:00Z', checkedIn: false},
        // ... more attendees
    ]
};

// --- SVG ICON COMPONENT ---
const NsbmLogo = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#6dbb45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


// --- MANAGER DASHBOARD UI COMPONENTS ---

const ManagerSidebar = ({ activeView, setActiveView }: { activeView: string, setActiveView: (view: string) => void }) => {
    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard' },
        { icon: CalendarCheck, label: 'My Events' },
        { icon: ClipboardList, label: 'Reports' },
    ];
    return (
        <aside className="w-64 bg-gray-900/60 backdrop-blur-lg p-6 flex-col hidden md:flex border-r border-white/10">
            <div className="flex items-center space-x-3 mb-10">
                <NsbmLogo />
                <span className="text-xl font-bold text-white">Manager View</span>
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

const ManagerHeader = ({ user }: { user: ManagerProfile }) => (
    <header className="flex items-center justify-between p-4 bg-gray-900/60 backdrop-blur-lg border-b border-white/10">
         <h1 className="text-xl font-bold text-white">
            {user.department} Dashboard
        </h1>
        <div className="flex items-center space-x-6">
            <button className="text-gray-300 hover:text-white relative">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3"><span className="relative inline-flex rounded-full h-3 w-3 bg-[#6dbb45]"></span></span>
            </button>
            <div className="flex items-center space-x-3">
                <Image src={user.avatarUrl} alt="Manager Avatar" width={40} height={40} className="rounded-full border-2 border-[#6dbb45]" />
                <div>
                    <h3 className="font-semibold text-white text-sm">{user.name}</h3>
                    <p className="text-xs text-gray-400">Manager</p>
                </div>
            </div>
        </div>
    </header>
);

const StatCard = ({ title, value, icon: Icon }: { title: string; value: string; icon: React.ElementType }) => (
    <div className="bg-white/5 backdrop-blur-lg p-5 rounded-xl border border-white/10">
        <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">{title}</p>
            <Icon className="w-5 h-5 text-gray-500" />
        </div>
        <h3 className="text-3xl font-bold text-white mt-2">{value}</h3>
    </div>
);

const ManagedEventsTable = ({ events }: { events: ManagedEvent[] }) => {
    const statusColors: { [key: string]: string } = {
        Upcoming: 'bg-blue-500/20 text-blue-300',
        Completed: 'bg-green-500/20 text-green-300',
        'Pending Approval': 'bg-yellow-500/20 text-yellow-300',
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
                            <td className="px-6 py-4">{event.registrations} / {event.capacity}</td>
                            <td className="px-6 py-4"><span className={`px-2 py-1 font-semibold text-xs rounded-full ${statusColors[event.status]}`}>{event.status}</span></td>
                            <td className="px-6 py-4 text-right">
                                <button className="p-2 text-gray-400 hover:text-white"><Edit className="w-4 h-4" /></button>
                                <button className="p-2 text-gray-400 hover:text-white"><Users className="w-4 h-4" /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const AttendeeReport = ({ attendees }: { attendees: Attendee[] }) => (
    <div className="bg-white/5 border border-white/10 rounded-xl mt-4">
        <div className="p-4 flex justify-between items-center border-b border-white/10">
            <h3 className="font-bold text-white">Attendee List ({attendees.length})</h3>
            <div className="flex items-center space-x-2">
                <button className="flex items-center text-sm px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20"><Mail className="w-4 h-4 mr-2"/>Email All</button>
                <button className="flex items-center text-sm px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20"><Download className="w-4 h-4 mr-2"/>Export CSV</button>
            </div>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-300">
                <thead className="bg-white/5 text-xs text-gray-400 uppercase">
                    <tr>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Student ID</th>
                        <th className="px-6 py-3">Checked In</th>
                    </tr>
                </thead>
                <tbody>
                    {attendees.map(attendee => (
                        <tr key={attendee.id} className="border-b border-white/10 hover:bg-white/5">
                            <td className="px-6 py-4 text-white">{attendee.name}</td>
                            <td className="px-6 py-4">{attendee.studentId}</td>
                            <td className="px-6 py-4">
                                {attendee.checkedIn ? 
                                    <span className="text-green-400 font-semibold">Yes</span> : 
                                    <span className="text-gray-400">No</span>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);


// --- MAIN MANAGER DASHBOARD PAGE COMPONENT ---
const ManagerDashboardPage: NextPage = () => {
    const [activeView, setActiveView] = useState('Dashboard');
    const [selectedReportEvent, setSelectedReportEvent] = useState<ManagedEvent | null>(managedEvents.find(e => e.status === 'Completed') || null);

    const totalRegistrations = managedEvents.reduce((acc, event) => acc + event.registrations, 0);
    const completedEvents = managedEvents.filter(e => e.status === 'Completed');
    const avgAttendance = completedEvents.length > 0 ? 
        Math.round(completedEvents.reduce((acc, event) => acc + ((event.attendance || 0) / event.capacity), 0) / completedEvents.length * 100) : 0;

    const renderContent = () => {
        switch (activeView) {
            case 'My Events':
                return (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h1 className="text-3xl font-bold text-white">My Events</h1>
                             <button className="flex items-center justify-center px-4 py-2 rounded-lg text-white font-semibold bg-white/10 hover:bg-white/20 transition-colors">
                                Request New Event
                            </button>
                        </div>
                        <ManagedEventsTable events={managedEvents} />
                    </div>
                );
            case 'Reports':
                 return (
                     <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-white">Event Reports</h1>
                        <div>
                            <label htmlFor="event-select" className="text-sm font-medium text-gray-400">Select an event to view its report:</label>
                            <select 
                                id="event-select"
                                className="mt-2 w-full max-w-sm bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#6dbb45]"
                                value={selectedReportEvent?.id}
                                onChange={(e) => setSelectedReportEvent(managedEvents.find(event => event.id === parseInt(e.target.value)) || null)}
                            >
                                {managedEvents.map(event => <option key={event.id} value={event.id}>{event.title}</option>)}
                            </select>
                        </div>
                        {selectedReportEvent && (
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                <h2 className="text-2xl font-bold text-white">{selectedReportEvent.title} - Report</h2>
                                <div className="grid grid-cols-3 gap-4 mt-4 text-center">
                                    <div className="bg-white/5 p-4 rounded-lg"><p className="text-gray-400 text-sm">Status</p><p className="font-bold text-lg">{selectedReportEvent.status}</p></div>
                                    <div className="bg-white/5 p-4 rounded-lg"><p className="text-gray-400 text-sm">Registrations</p><p className="font-bold text-lg">{selectedReportEvent.registrations} / {selectedReportEvent.capacity}</p></div>
                                    <div className="bg-white/5 p-4 rounded-lg"><p className="text-gray-400 text-sm">Attendance</p><p className="font-bold text-lg">{selectedReportEvent.attendance ? `${selectedReportEvent.attendance} (${Math.round(selectedReportEvent.attendance / selectedReportEvent.registrations * 100)}%)` : 'N/A'}</p></div>
                                </div>
                                <AttendeeReport attendees={eventAttendees[selectedReportEvent.id] || []} />
                            </div>
                        )}
                     </div>
                 );
            case 'Dashboard':
            default:
                return (
                    <div className="space-y-8">
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <StatCard title="My Active Events" value={managedEvents.filter(e => e.status === 'Upcoming').length.toString()} icon={CalendarCheck} />
                            <StatCard title="Total Registrations" value={totalRegistrations.toLocaleString()} icon={Users} />
                            <StatCard title="Avg. Attendance Rate" value={`${avgAttendance}%`} icon={PieChart} />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                            <div className="lg:col-span-3">
                                <h3 className="text-xl font-bold text-white mb-4">Upcoming Events</h3>
                                <ManagedEventsTable events={managedEvents.filter(e => e.status !== 'Completed')} />
                            </div>
                            <div className="lg:col-span-2 bg-white/5 p-6 rounded-xl border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-4">Action Items</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start"><span className="text-yellow-400 mr-3 mt-1">&#9632;</span>Approve event plan for 'AI Ethics Debate'.</li>
                                    <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1">&#9632;</span>Finalize volunteer list for 'InnovateX 2025'.</li>
                                    <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1">&#9632;</span>Send reminder email for 'React Native Workshop'.</li>
                                    <li className="flex items-start"><span className="text-green-400 mr-3 mt-1">&#9632;</span>Submit post-event report for 'CodeFest'.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="bg-[#0A101A] text-[#E5E7EB] antialiased min-h-screen flex">
            <ManagerSidebar activeView={activeView} setActiveView={setActiveView} />
            <div className="flex-1 flex flex-col">
                <ManagerHeader user={managerProfile} />
                <main className="flex-1 p-8 overflow-y-auto">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default ManagerDashboardPage;