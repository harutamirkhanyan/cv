import { createStore } from 'vuex'

export default createStore({
  state: {
    sidebar: false
  },
  mutations: {
    openSidebar(state) {
      state.sidebar = true
    },
    closeSidebar(state) {
      state.sidebar = false
    }
  },

})
