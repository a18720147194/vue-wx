<template>
  <div id="app">
    <router-view/>
    <bar />
  </div>
</template>
<script>
import bar from './components/bar'
export default {
  components: {
    bar
  }
}
</script>

<style lang='scss'>
*{
  margin: 0;
  padding: 0;
}
#app{
  width: 100%
}
a,a:visited{
  text-decoration:none;
  color:black
}
</style>
