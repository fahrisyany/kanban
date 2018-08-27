<template>
    <div class="board">

<div class="columns is-desktop">



<div class="column">
     <TaskLane id="backLog" title="BackLog" :items="kanban"></TaskLane>
</div>


<div class="column">
    <TaskLane id="todo" title="To-Do" :items="items.todo"></TaskLane>
  </div>
<div class="column">
        <task-lane id="inProgress" title="In progress" :items="items.inProgress"></task-lane>
</div>



<div class="column">
        <task-lane id="done" title="Done" :items="items.doneItems"></task-lane>
</div>


</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import TaskLane from "./TaskLane";

export default {
  name: "KanbanBoard",
  components: {
    TaskLane
  },
  computed: {
    ...mapState([
    'datakanban', 'items', 'kanban'
  //   {
  //   todoBacklog: s => s.items.backLog,
  //   todoItems: s => s.items.todo,
  //   inProgressItems: s => s.items.inProgress,
  //   doneItems: s => s.items.done
  // }
  ])
  },
  created() {
    this.getItemFromDB()
  },
  methods: {
    ...mapActions([
      'getItemFromDB'
    ])
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
