<template>
  <div id="app">
    <MyLotter />
  </div>

</template>

<script>
import MyLotter from './components/lotter/MyLotter.vue'

export default {
  name: 'app',
  components: {
    MyLotter
  },
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
