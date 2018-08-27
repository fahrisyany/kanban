<template>
  <div id="app">
  <nav>
    <ul>
      <li> <img src="https://i.imgur.com/JQi72l2.png" style="width:8%"> <router-link to="/">Home</router-link> | <router-link to="/kanban">Kanban</router-link></li>
    </ul>
  </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
body {
  background-color: #f4f4f4;
  margin: 0;
  height: 100%;
}



</style>
