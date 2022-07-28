<!--
Component that lists all the films in firestore
It has a nested component FilmEdit that allows you to edit a film name
-->
<template>
  <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Action</th>
          <th scope="col">New name</th>
        </tr>
      </thead>
      <tbody>
        <!-- For loop that displays all the films -->
        <tr v-for="{ id, name } in films" :key="id">
          <td>{{ name }}</td>
          <td>
            <button class="btn btn-danger btn-sm" @click="deleteFilm(id)">
              Delete
            </button>
          </td>
          <td>
            <!-- Nested component that allows you to edit film names
                Gets a film id as parameter -->
            <FilmEdit :id="id"/>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
//Import of the nested component FilmEdit
import FilmEdit from './FilmEdit.vue'
//Import of useLoadFilms and deleteFilm functions from firebase.js
import { useLoadFilms, deleteFilm } from '@/firebase'

export default {
  components: { FilmEdit },
  setup() {
    const films = useLoadFilms()

    return { films, deleteFilm }
  }
}
</script>
