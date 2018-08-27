import Vue from "vue";
import Vuex from "vuex";
import db from './firebase/firebase';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "Group Chat:",
    links: [],
    items: {
      backLog: [],
      todo: [],
      inProgress: [],
      done: []
    },
    nextId: 1,
    kanban: null
  },

  getters: {
    countLinks: state => {
      return state.links.length;
    }
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link);
    },
    REMOVE_LINK: (state, link) => {
      state.links.splice(link, 1);
    },
    REMOVE_ALL: state => {
      state.links = [];
    },
    ADD_ITEM(state, item) {
      
      state.items.backLog.push(Object.assign(item, { id: state.nextId }));
      state.nextId++;
    },
    REMOVE_ALL_ITEM: state => {
      state.items.backLog = [];
      state.items.todo = [];
      state.items.inProgress = [];
      state.items.done = [];
      state.nextId = 1;
    },
    UPDATE_ITEM(state, { items, id }) {
      state.items[id] = items;
    },
    kanbanDatabase (state, payload) {
      state.kanban = payload
    }
  },
  actions: {
    removeLink: (context, link) => {
      context.commit("REMOVE_LINK", link);
    },
    removeAllItem({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit("REMOVE_ALL_ITEM"), resolve();
        }, 100);
      });
    },

    removeAll({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit("REMOVE_ALL"), resolve();
        }, 100);
      });
    },

    getItemFromDB ({ commit }) {
      db.ref('kanban').on('value', function(snapshot) {
        let data = snapshot.val()
        let dataArr = [];
        for (let keys in data) {
          dataArr.push(data[keys])
        }
        commit('kanbanDatabase', dataArr)
      })
    }
  }
});
