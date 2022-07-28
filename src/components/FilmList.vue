<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Action</th>
          <th scope="col">New name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, name } in films" :key="id">
          <td>{{ name }}</td>
          <td>
            <button class="btn btn-danger btn-sm" @click="deleteFilm(id)">
              Delete
            </button>
          </td>
          <td>
            <FilmEdit :id="id"/>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import FilmEdit from './FilmEdit.vue'
import { useLoadFilms, deleteFilm } from '@/firebase'

export default {
  components: { FilmEdit },
  setup() {
    const films = useLoadFilms()

    return { films, deleteFilm }
  }
}
</script>
