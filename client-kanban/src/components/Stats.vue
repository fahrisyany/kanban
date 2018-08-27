<template>
  <div class="Stats">
<h1></h1>
<p>there are {{countLinks}} number of Chat</p>
<button v-on:click="removeAllLinks">Delete All Chat</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Stats",
  data() {
    return {
      // msg:""
    };
  },
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(["countLinks"])
  },
  methods:{
    ...mapMutations(['REMOVE_ALL']),
    ...mapActions(['removeAll']),
    removeAllLinks(){
      this.removeAll().then(()=>{
        // this.msg='Delete all Chat Success!'
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
    padding: 10px;
    margin-top: 30px;
    width: 100%;
    background: none;
    border: 1px solid lightgray;
    outline: 0;
    cursor: pointer;
}

.stats{
  text-align: center;
}
</style>
