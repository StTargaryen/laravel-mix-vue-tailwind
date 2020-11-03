<template>
  <div id="app">
    <Cards/>
  </div>
</template>

<script>
import Cards from './components/Cards'
export default {
  name: 'App',
  components: {
    Cards
  }
};
</script>
<style>
#app {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>