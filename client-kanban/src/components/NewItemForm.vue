<template>
    <div class="add-item">
        <form action="#" method="post" @submit.prevent="submitForm">
        <legend>Task:</legend>
            <input type="text" v-model="itemText" placeholder="Add something to the backlog">
            <br>
             <legend>Description:</legend>
            <input type="text" v-model="itemDescription" placeholder="Add something to the backlog">
            <br>
             <legend>Assigned To:</legend>
            <input type="text" v-model="itemAssignedTo" placeholder="Add something to the backlog">
         
            <button class="button" type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import db from "../firebase/firebase.js";

export default {
  name: "NewItemForm",
  data() {
    return {
      itemText: "",
      itemDescription: "",
      itemAssignedTo: ""
    };
  },
  methods: {
    submitForm() {
      this.$router.go("/board");
      if (this.itemText) {
        db.ref("kanban").push({
          textTitle: this.itemText,
          textDesc: this.itemDescription,
          textAssigned: this.itemAssignedTo,
          status: 1
        });

      }
      this.itemText = "";
      this.itemDescription = "";
      this.itemAssignedTo = "";
    }
  }
};
</script>


<style>
/* .add-item input {
  outline: none;
  border: 0;
  border-bottom: 1px solid black;
  width: 100%;
  transition: all 0.25s;
  background: inherit;
  color: black;
} */
.add-item input:focus {
  border-bottom-color: rgba(255, 255, 255, 1);
}
button {
  border: 1px solid lightgray;
  outline: 0;
}
</style>