import Vue from 'vue'
import VueRouter from 'vue-router'
import Agenda from '../components/Agenda/Agenda'
import NewActivity from '../components/Agenda/NewActivity'
import ClientsDashboard from '../components/Client/ClientsDashboard'
import NewClient from '../components/Client/NewClient'
import ShowClient from '../components/Client/ShowClient'
import Register from '../components/Auth/Register'
import Dashboard from '../components/Dashboard'
Vue.use(VueRouter)

const router = new VueRouter({

    routes: [
        {
            path: '/agenda',
            name: 'Agenda',
            component: Agenda
        },
        {
            path: '/cdashboard',
            name: 'ClientsDashboard',
            component: ClientsDashboard
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
            name: 'RegisterClient',
            path: '/register',
            component: Register
        },
        {
            name: 'ShowClient',
            path: '/show_client',
            component: ShowClient,
            props: route => { return { client: route.params.client } }
        },
        {
            name: 'Dashboard',
            path: '/dashboard',
            component: Dashboard
        }
    ]
})

export default router