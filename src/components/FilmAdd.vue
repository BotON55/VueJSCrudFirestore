<!--
Component that allows you to add new films to firestore
-->
<template>
  <div class="card card-body">
    <!-- Form that allows you to add new films to firestore -->
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Name</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <button type="submit" class="btn btn-success mt-3">
        Add Film
      </button>
    </form>
  </div>
</template>

<script>
//Import of the firebase functionality developed in firebase.js
import { addFilm } from '@/firebase'
//Import of the reactive function from vue
import { reactive } from 'vue'

export default {
  setup() {
    const form = reactive({ name: '' })

    //Function that submits new film to firestore through the addFilm function in firebase.js
    const onSubmit = async () => {
      const name = form.name
      form.name = ''
      await addFilm(name)
    }

    return { form, onSubmit }
  }
}
</script>
