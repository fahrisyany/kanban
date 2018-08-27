<template>
    <div class="board">

<div class="columns is-desktop"> 
<div class="column">
    <TaskLane id="todo" title="To-Do" :items="items.todo"></TaskLane>
  </div>


<div class="column">
        <task-lane id="inProgress" title="In progress" :items="items.inProgress"></task-lane>
</div>



<div class="column">
        <task-lane id="done" title="Done" :items="items.done"></task-lane>
</div>


</div>
  </div>
</template>

<script>
import db from "../firebase/firebase.js";
import { mapState, mapActions } from "vuex";
import TaskLane from "./TaskLane";

export default {
  name: "KanbanBoard",
   data() {
    return {
      kanbanTask: "",
      
    };
  },
  components: {
    TaskLane
  },
  computed: {
    ...mapState([
    'datakanban', 'items', 'kanban'

  ])
  },
  created() {
    this.getItemFromDB()
  },
  methods: {
    ...mapActions([
      'getItemFromDB'
    ])
  },
    
  mounted() {
  let self = this
    db.ref("/kanban").on("value", function(snapshot) {
      let data = snapshot.val()
      self.kanbanTask = data;
      console.log(`==>`,self.kanbanTask);
    });

  }
};
</script>

<style>
.board {
  /* text-align: center; */
  /* border: solid purple 3px; */
  display: flex;
  justify-content: space-around;
}
</style>
