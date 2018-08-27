import Vue from "vue";
import Vuex from "vuex";
import db from "./firebase/firebase";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "Group Chat:",
    links: [],
    items: {
      // backLog: [],
      todo: [],
      inProgress: [],
      done: []
    },
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

      if (item.status === 1) {
        state.items.todo.push(item, { id: state.nextId });
      }
      if (item.status === 2) {
        state.items.inProgress.push(item, { id: state.nextId });
      }
      if (item.status === 3) {
        state.items.done.push(item, { id: state.nextId });
      }
    },
    UPDATE_ITEM(state, { items, id }) {

      // db.ref("kanban"+items).set({status:id})

      // db.ref(`/kanban/${items.kanban.status}/${id}`).remove(items)

      state.items[id] = items;

      console.log(`=++++++`,items);
      
 
    },

    REMOVE_ALL_ITEM: state => {
      state.items.backLog = [];
      state.items.todo = [];
      state.items.inProgress = [];
      state.items.done = [];
      state.nextId = 1;
      db.ref(`/kanban/`).remove();

    },
    kanbanDatabase(state, payload) {
      state.kanban = payload;
      payload.forEach(element => {
        if (element.status) {
          if (element.status == 1) {
            state.items.todo.push(element);
            console.log(`pppp`, state.items.todo);
          }
          if (element.status == 2) {
            state.items.inProgress.push(element);
          }
          if (element.status == 3) {
            state.items.done.push(element);
          }
        }
        console.log(`----->`, element.status);
      });
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

    getItemFromDB({ commit }) {
      db.ref("kanban").on("value", function(snapshot) {
        let data = snapshot.val();
        let dataArr = [];
        for (let keys in data) {
          dataArr.push(data[keys]);
        }
        commit("kanbanDatabase", dataArr);
      });
    }
  }
});
