import { House, KanbanSquare, LogIn, User2 } from 'lucide-react';
export const SIDEBAR_ITEMS = [
    {
        name: 'Home',
        icon: House,
        color: '#14b8a6',
        colorclass: 'text-teal-500',
        path: '/dashboard'
    },
    {
        name: 'Tickets',
        icon: KanbanSquare,
        color: '#3b82f6',
        colorclass: 'text-sky-500',
        path: '/tickets'
    },
    {
        name: 'Profile',
        icon: User2,
        color: '#6366f1',
        colorclass: 'text-indigo-500',
        path: '/profile'
    },
    {
        name: 'Login',
        icon: LogIn,
        color: '#f43f5e',
        colorclass: 'text-red-500',
        path: '/login'
    },
];

export const JOBS = [
    {
        id: 1,
        name: 'Card para evento XXX',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
        responsavel: 'Phillip',
        urlAvatar: 'https://randomuser.me/api/portraits/men/86.jpg',
    },
    {
        id: 2,
        name: 'Placa de inauguração',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
        responsavel: 'Ludwig',
        urlAvatar: 'https://randomuser.me/api/portraits/men/11.jpg',
    },
    {
        id: 3,
        name: 'Campanha Fala AI',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
        responsavel: 'Vlad',
        urlAvatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    },
    {
        id: 4,
        name: 'Card para evento YYYY',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
        responsavel: 'May',
        urlAvatar: 'https://randomuser.me/api/portraits/women/79.jpg',
    },
]