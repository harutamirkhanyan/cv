import { createStore } from 'vuex'
import { useSubmitForm } from '@/store/modules/submitForm';


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
  actions: {
  },
  modules: {
    useSubmitForm,
  }

})
