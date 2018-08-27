<template>
  <div class="home">
    
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style>
body {
  background-color: #f4f4f4;
  margin: 0;
  height: 100%;
}
</style>

