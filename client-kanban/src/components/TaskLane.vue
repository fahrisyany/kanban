<template>

     <div class="card">
      <h3 class="card-header">
        <h4 class="title is-4">
        {{title}}
        </h4>
        </h3>
      <div class="card-body">
          <draggable v-model="draggables" :options="{ group: 'default' }" >
          <div v-for="(item) in items" :key="item.id">
              <item :item="item">
              </item>
         {{item.status}}
          </div>
        </Draggable>
      </div>
   

  </div>
</template>


<script>
import TaskLaneItem from "./TaskLaneItem";
import Draggable from "vuedraggable";


export default {
  name: "TaskLane",
  props: ["items", "title", "id"],
  components: {
    item: TaskLaneItem,
    Draggable
  },
  computed: {
 
    draggables: {
      get() {
        return Object.values(this.items)
        console.log(`===>`,Object.values(this.items));
        
      },
      set(items) {
        this.$store.commit("UPDATE_ITEM", {

          items,
          // items.status
          id: this.id
        });
      }
    },

  }
};
</script>


<style>
.card {
  /* margin-top: 55px; */
}
.card-header {
  padding: 10px;
  text-align: center;
}

.card-footer {
  padding: 10px;
}
.card-body > * {
  min-height: 40px;
}
</style>
