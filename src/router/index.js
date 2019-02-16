import Vue from 'vue'
import VueRouter from 'vue-router'
import Agenda from '../components/Agenda/Agenda'
import NewActivity from '../components/Agenda/NewActivity'
import ClientsDashboard from '../components/Client/ClientsDashboard'
import NewClient from '../components/Client/NewClient'
import ShowClient from '../components/Client/ShowClient'
import CustormersTable from '../components/Client/CustormersTable'
import Register from '../components/Auth/Register'
import Login from '../components/Auth/Login'

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
            name: 'CustormersTable',
            component: CustormersTable
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
        }
    ]
})

export default router
