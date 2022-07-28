<!--
Component that allows you to edit films
It gets as parameter a film id
-->
<template>
    <form @submit.prevent="onSubmit">
    <div class="input-group mb-3">
        <input v-model="form.name" class="form-control" required>
    <div class="input-group-append">
        <button class="btn btn-success" type="submit">Edit Film</button>
    </div>
    </div>
    </form>
</template>

<script>
//Import updateFilm function from firebase.js
import { updateFilm } from '@/firebase'
//Import reactive function from vue
import { reactive } from 'vue'

export default {
  //String that stores the id of the film associated to the component
  props: {id:String},
  setup(props) {
    const form = reactive({ name: '' })

    //Function that updates film names
    const onSubmit = async () => {
      const name = form.name
      form.name = ''
      await updateFilm( props.id, name)
    }

    return { form, onSubmit }
  }
}
</script>