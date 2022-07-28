<template>
  <!-- Adds 2 components to the app template -->
  <FilmAdd/>
  <FilmList/>
</template>

<script>
//Imports of the main component of the app
import FilmAdd from './components/FilmAdd.vue'
import FilmList from './components/FilmList.vue'

//Export of the app to be imported by main.js
export default {
  name: 'App',
  components: {
    FilmAdd,
    FilmList
  }
}
</script>