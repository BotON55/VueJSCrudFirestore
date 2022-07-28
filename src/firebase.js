import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: 'AIzaSyCd9ppl5mlmh9p2Hlv47Mx8g7xxWtzp-cY',
  authDomain: 'crudbloq.firebaseapp.com',
  projectId: 'crudbloq',
  storageBucket: 'crudbloq.appspot.com',
  messagingSenderId: '402242635145',
  appId: '1:402242635145:web:4ef08665f01f1ec7c6cd58'
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const filmsCollection = db.collection('films')

export const addFilm = film => {
  return filmsCollection.add(film)
}

export const getFilm = async id => {
  const film = await filmsCollection.doc(id).get()
  return film.exists ? film.data() : null
}

export const updateFilm = (id, film) => {
  return filmsCollection.doc(id).update({"name": film})
}

export const deleteFilm = id => {
  return filmsCollection.doc(id).delete()
}

export const useLoadFilms = () => {
  const films = ref([])
  const close = filmsCollection.onSnapshot(snapshot => {
    films.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return films
}
