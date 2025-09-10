
'use client';
import type { NextPage } from 'next';
import { useState, useMemo } from 'react';
import { 
    QrCode,
    UserCheck,
    ListTodo,
    Send,
    Users,
    Bell,
    Search,
    Clock,
    UserPlus,
    BarChart3
} from 'lucide-react';

// --- TYPE DEFINITIONS (FOR ORGANIZER DASHBOARD) ---

type Attendee = {
    id: string;
    name: string;
    studentId: string;
    ticketId: string;
    checkedIn: boolean;
    avatarUrl: string;
};

type OrganizerProfile = {
    name: string;
    role: string;
    avatarUrl: string;
};

type OrganizedEvent = {
  id: number;
  title: string;
  date: string;
  startTime: string;
  location: string;
  capacity: number;
};

type OrganizerTask = {
    id: number;
    text: string;
    completed: boolean;
};

// --- MOCK DATA FOR THE ORGANIZER DASHBOARD ---

const organizerProfile: OrganizerProfile = {
    name: 'Kasun Perera',
    role: 'Lead Organizer',
    avatarUrl: 'https://images.unsplash.com/photo-1610088444634-9a2ad7a4f940?q=80&w=1887&auto=format&fit=crop',
};

// The specific event this organizer is managing
const organizedEvent: OrganizedEvent = {
  id: 1,
  title: 'InnovateX 2025 Tech Symposium',
  date: 'October 15, 2025',
  startTime: '09:00 AM',
  location: 'NSBM Auditorium',
  capacity: 300,
};

// Initial list of attendees for the event
const initialAttendees: Attendee[] = [
    {id: 'u1', name: 'Jane Doe', studentId: '22.1-12345', ticketId: 'TICK-INVX-001', checkedIn: true, avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop'},
    {id: 'u2', name: 'John Smith', studentId: '21.2-54321', ticketId: 'TICK-INVX-002', checkedIn: false, avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop'},
    {id: 'u3', name: 'Emily White', studentId: '23.1-67890', ticketId: 'TICK-INVX-003', checkedIn: false, avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop'},
    {id: 'u4', name: 'Michael Brown', studentId: '20.2-09876', ticketId: 'TICK-INVX-004', checkedIn: true, avatarUrl: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop'},
    {id: 'u5', name: 'Sarah Wilson', studentId: '22.2-11223', ticketId: 'TICK-INVX-005', checkedIn: false, avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop' },
];

const initialTasks: OrganizerTask[] = [
    { id: 1, text: 'Set up registration desk & banners', completed: true },
    { id: 2, text: 'Check AV equipment with tech team', completed: false },
    { id: 3, text: 'Brief volunteers on their roles', completed: false },
    { id: 4, text: 'Prepare speaker welcome kits', completed: true },
    { id: 5, text: 'Coordinate lunch catering delivery', completed: false },
];

// --- ORGANIZER DASHBOARD UI COMPONENTS ---

const OrganizerHeader = ({ user, event }: { user: OrganizerProfile, event: OrganizedEvent }) => (
    <header className="flex items-center justify-between p-4 bg-[#0A101A] border-b border-white/10">
        <div>
            <h1 className="text-xl font-bold text-white">{event.title}</h1>
            <p className="text-sm text-[#6dbb45] font-semibold">Organizer Control Panel</p>
        </div>
        <div className="flex items-center space-x-6">
            <button className="text-gray-300 hover:text-white"><Bell className="w-6 h-6" /></button>
            <div className="flex items-center space-x-3">
                <img src={user.avatarUrl} alt="Organizer Avatar" className="w-10 h-10 rounded-full border-2 border-[#6dbb45]" />
                <div>
                    <h3 className="font-semibold text-white text-sm">{user.name}</h3>
                    <p className="text-xs text-gray-400">{user.role}</p>
                </div>
            </div>
        </div>
    </header>
);

const LiveStatCard = ({ title, value, icon: Icon }: { title: string; value: string | React.ReactNode; icon: React.ElementType }) => (
    <div className="bg-white/5 backdrop-blur-lg p-5 rounded-xl border border-white/10 flex items-center space-x-4">
        <div className="p-3 bg-gradient-to-br from-[#005a9e] to-[#6dbb45] rounded-lg">
            <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
            <p className="text-sm text-gray-400">{title}</p>
            <div className="text-2xl font-bold text-white">{value}</div>
        </div>
    </div>
);

const TaskChecklist = () => {
    const [tasks, setTasks] = useState(initialTasks);

    const toggleTask = (id: number) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    return (
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 h-full">
            <h3 className="font-bold text-white mb-4">Event Day Checklist</h3>
            <div className="space-y-3">
                {tasks.map(task => (
                    <div key={task.id} onClick={() => toggleTask(task.id)} className="flex items-center cursor-pointer group">
                        <div className={`w-5 h-5 rounded-sm border-2 flex items-center justify-center transition-all duration-200 ${task.completed ? 'bg-[#6dbb45] border-[#6dbb45]' : 'border-gray-500 group-hover:border-[#6dbb45]'}`}>
                            {task.completed && <UserCheck className="w-3 h-3 text-white" />}
                        </div>
                        <span className={`ml-3 text-sm ${task.completed ? 'line-through text-gray-500' : 'text-gray-200'}`}>{task.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const AttendeeManager = ({ attendees, setAttendees }: { attendees: Attendee[], setAttendees: (attendees: Attendee[]) => void }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleCheckIn = (id: string) => {
        setAttendees(attendees.map(a => a.id === id ? { ...a, checkedIn: true } : a));
    };

    const filteredAttendees = useMemo(() => 
        attendees.filter(a => 
            a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            a.studentId.includes(searchQuery)
        ), [attendees, searchQuery]);

    return (
        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-white">Manage Attendees</h3>
                <div className="relative w-full max-w-sm">
                    <input type="text" placeholder="Search by name or ID..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#6dbb45]"/>
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"/>
                </div>
            </div>
            <div className="max-h-96 overflow-y-auto">
                <ul className="divide-y divide-white/10">
                    {filteredAttendees.map(attendee => (
                        <li key={attendee.id} className="flex items-center justify-between p-3">
                            <div className="flex items-center space-x-3">
                                <img src={attendee.avatarUrl} alt={attendee.name} className="w-10 h-10 rounded-full" />
                                <div>
                                    <p className="font-semibold text-white">{attendee.name}</p>
                                    <p className="text-xs text-gray-400">{attendee.studentId}</p>
                                </div>
                            </div>
                            {attendee.checkedIn ? (
                                <span className="flex items-center text-sm font-semibold text-green-400">
                                    <UserCheck className="w-4 h-4 mr-2"/> Checked In
                                </span>
                            ) : (
                                <button onClick={() => handleCheckIn(attendee.id)} className="px-3 py-1.5 text-xs font-semibold rounded-md text-white bg-[#005a9e] hover:bg-[#004a8e] transition-colors">
                                    Manual Check-in
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const BroadcastTool = () => (
    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
        <h3 className="font-bold text-white mb-4">Broadcast Announcement</h3>
        <p className="text-sm text-gray-400 mb-4">Send a short message to all registered attendees' mobile app.</p>
        <div className="space-y-4">
            <input type="text" placeholder="Announcement Title" className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white focus:outline-none focus:ring-1 focus:ring-[#6dbb45]" />
            <textarea placeholder="Your message..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white focus:outline-none focus:ring-1 focus:ring-[#6dbb45]"></textarea>
            <button className="w-full flex items-center justify-center px-4 py-2.5 rounded-lg text-white font-semibold bg-gradient-to-r from-[#005a9e] to-[#6dbb45] hover:opacity-90">
                <Send className="w-4 h-4 mr-2"/>Send Broadcast
            </button>
        </div>
    </div>
);


// --- MAIN ORGANIZER DASHBOARD PAGE COMPONENT ---
const OrganizerDashboardPage: NextPage = () => {
    const [attendees, setAttendees] = useState(initialAttendees);
    const checkedInCount = useMemo(() => attendees.filter(a => a.checkedIn).length, [attendees]);
    const totalRegistered = attendees.length;

    return (
        <div className="bg-[#0A101A] text-[#E5E7EB] antialiased min-h-screen flex flex-col">
            <OrganizerHeader user={organizerProfile} event={organizedEvent} />
            <main className="flex-1 p-6 space-y-6">
                {/* Live Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <LiveStatCard title="Check-ins" icon={UserCheck} value={
                        <>
                            {checkedInCount} <span className="text-lg text-gray-400">/ {totalRegistered}</span>
                        </>
                    }/>
                    <LiveStatCard title="Capacity" icon={Users} value={
                         <>
                            {totalRegistered} <span className="text-lg text-gray-400">/ {organizedEvent.capacity}</span>
                        </>
                    }/>
                    <LiveStatCard title="Event Status" icon={Clock} value={
                        <span className="text-green-400">Live</span>
                    }/>
                     <LiveStatCard title="On-site Registration" icon={UserPlus} value={
                        <button className="text-lg font-semibold text-white bg-white/10 px-4 py-1 rounded-md hover:bg-white/20">Register Walk-in</button>
                    }/>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <AttendeeManager attendees={attendees} setAttendees={setAttendees} />
                    </div>
                    <div className="space-y-6">
                        <TaskChecklist />
                        <BroadcastTool />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default OrganizerDashboardPage;
