<template>
  <FilmAdd/>
  <FilmList/>
</template>

<script>
import FilmAdd from './components/FilmAdd.vue'
import FilmList from './components/FilmList.vue'

export default {
  name: 'App',
  components: {
    FilmAdd,
    FilmList
  }
}
</script>