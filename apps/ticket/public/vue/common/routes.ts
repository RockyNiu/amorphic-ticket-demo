// import App from '../App';
import Login from '../components/Login';
import Registration from '../components/Registration';
import TicketsComponent from '../components/TicketsComponent';
import TicketComponent from '../components/TicketComponent';
import ProjectsComponent from '../components/ProjectsComponent';
import ProjectComponent from '../components/ProjectComponent';

const routes = [
    // {path: '/', component: App},
    {path: '/login', name: 'login', component: Login},
    {path: '/registration', component: Registration},
    {path: '/tickets', component: TicketsComponent},
    {path: '/ticket', component: TicketComponent},
    {path: '/projects', component: ProjectsComponent},
    {path: '/project', component: ProjectComponent},
];

export default routes