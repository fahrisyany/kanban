import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Backlog from "./components/Backlog.vue";
import KanbanBoard from "./components/KanbanBoard";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      name: "home",
      component: Home
    },
    {
      path: "/kanban",
      name: "kanban",

      component: () =>
        import("./views/About.vue"),
      children: [
        {
          path: "/backlog",
          component: Backlog
        },
        {
          path: "/board",
          component: KanbanBoard
        }
      ]
    }
  ]
});
