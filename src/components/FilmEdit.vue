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
import { updateFilm } from '@/firebase'
import { reactive } from 'vue'

export default {
  props: {id:String},
  setup(props) {
    const form = reactive({ name: '' })

    const onSubmit = async () => {
      const name = form.name
      form.name = ''
      await updateFilm( props.id, name)
    }

    return { form, onSubmit }
  }
}
</script>