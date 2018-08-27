<template>
<div class="TaskLaneItem">
    <div class="card">
  <header class="card-header">
    <p class="card-header-title">
#{{item.id}}  {{item.textTitle}}  
</p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>
  <div class="card-content">
    <div class="content">
      <p> Desc: {{item.textDesc}}</P>
    </div>
    <br>
  </div>
  <footer class="card-footer">
      <p>  Assigned To: {{item.textAssigned}}    </p>
  </footer>
</div>
</div>
</template>

<script>

export default {
  name: "TaskLaneItem",
  props: ["item"]
};
// console.log(this.item);

</script>

<style>

.card {
  /* border:solid red 3px; */
  width: 300px;

}
</style>