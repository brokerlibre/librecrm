const ADD_CLIENT = 'ADD_CLIENT'
const ADD_CLIENT_WITH_SALE = 'ADD_CLIENT_WITH_SALE'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        clients: [
            {
                name: "Matheus",
                sales: [{ price: 1 }]
            },
            {
                name: "Lucas",
                sales: [{ price: 3 }]
            }],
    },
    mutations: {
        [ADD_CLIENT](state, client) {
            state.clients.add(client)
        },
        [ADD_CLIENT_WITH_SALE](state, client, sale) {
            if (client.sales == undefined) {
                client
            }
            client.sales.add(sale)
            state.clients.add(client)
        }

    },

    actions: {
        addClient({ commit }, client) {
            commit(ADD_CLIENT, client)
        },
        addSale({ commit }, { client, sale }) {
            commit(ADD_CLIENT_WITH_SALE, client, sale)
        }
    }

})

export default store