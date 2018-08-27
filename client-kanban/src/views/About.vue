<template>
  <div class="kanban">
    <ul>
      <li><router-link to="/backlog">Backlog</router-link> |  <router-link to="/board">Board</router-link> |  <a v-on:click="refresh">Refresh</a></li>

    </ul>
<router-view></router-view>


  </div>
</template>


<script>
import { mapMutations, mapActions } from "vuex";

export default {
  methods: {
    ...mapMutations(["REMOVE_ALL_ITEM"]),
    ...mapActions(["removeAllItem"]),
    refresh() {
      this.removeAllItem().then(() => {
        // this.msg='Delete all Chat Success!'
      });
    }
  }
};
</script>

<style>
body {
  background-color: #f4f4f4;
  margin: 0;
  height: 100%;
}
</style>