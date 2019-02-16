import Vue from 'vue'
import VueRouter from 'vue-router'
import Agenda from '../components/Agenda/Agenda'
import NewActivity from '../components/Agenda/NewActivity'
import ClientsDashboard from '../components/Client/ClientsDashboard'
import NewClient from '../components/Client/NewClient'
import ShowClient from '../components/Client/ShowClient'
import CustomersTable from '../components/Client/CustomersTable'
import Register from '../components/Auth/Register'
import Dashboard from '../components/Dashboard'
import Login from '../components/Auth/Login'
import NewBusiness from '../components/Business/NewBusiness'
import ShowBusiness from '../components/Business/ShowBusiness'

Vue.use(VueRouter)

const router = new VueRouter({

    routes: [
        {
            path: '/agenda',
            name: 'Agenda',
            component: Agenda
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/cdashboard',
            name: 'ClientsDashboard',
            component: ClientsDashboard
        },
        {
            path: '/custormers',
            name: 'CustomersTable',
            component: CustomersTable
        },
        {
            path: '/client',
            name: 'NewClient',
            component: NewClient
        },
        {
            path: '/activity',
            name: 'NewActivity',
            component: NewActivity
        },
        {
            name: 'RegisterBroken',
            path: '/register_broker',
            component: Register
        },
        {
            name: 'ShowClient',
            path: '/show_client',
            component: ShowClient,
            props: route => { return { customer: route.params.customer } }
        },
        {
            name: 'Dashboard',
            path: '/dashboard',
            component: Dashboard,
        },
        {
            name: 'RegisterBusiness',
            path: '/register_business',
            component: NewBusiness
        },
        {
            name: 'ShowBusiness',
            path: '/show_business',
            component: ShowBusiness,
            props: route => { return { business: route.params.business } }
        },
    ]
})

export default router
