export default {
    namespaced: true,

    state: {
        count: 0
    },

    getters: {
        getCount(state, getters, rootState, rootGetters){
            return state.count;
        }
    },

    mutations: {
        setCount(state, payload){
            state.count += payload;
        }
    },

    actions: {
        addAction(context, payload) {
            context.commit("setCount", payload);
        }
    }
}