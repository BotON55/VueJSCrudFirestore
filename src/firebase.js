//Imports neccesary for firebase and firestore to function
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//Imports of the ref and onUnmounted functions from vue
import { ref, onUnmounted } from 'vue'

//Firebase api config
const config = {
  apiKey: 'AIzaSyCd9ppl5mlmh9p2Hlv47Mx8g7xxWtzp-cY',
  authDomain: 'crudbloq.firebaseapp.com',
  projectId: 'crudbloq',
  storageBucket: 'crudbloq.appspot.com',
  messagingSenderId: '402242635145',
  appId: '1:402242635145:web:4ef08665f01f1ec7c6cd58'
}

//Firebase initialization
const firebaseApp = firebase.initializeApp(config)

//Access to firestore within firebase
const db = firebaseApp.firestore()
const filmsCollection = db.collection('films')


//Functions that allow interaction with firestore nosql database

//Function that adds a film to firestore
export const addFilm = film => {
  return filmsCollection.add({"name":film})
}

//Function that recovers a film from firestore using the id
export const getFilm = async id => {
  const film = await filmsCollection.doc(id).get()
  return film.exists ? film.data() : null
}

//Function that updates a film name
export const updateFilm = (id, film) => {
  return filmsCollection.doc(id).update({"name": film})
}

//Function that deletes a film
export const deleteFilm = id => {
  return filmsCollection.doc(id).delete()
}

//Function that constantly updates an array with all the films on firestore
export const useLoadFilms = () => {
  const films = ref([]) //Declares a reactive array
  //Using onSnapshots, constantly updates the 'films' array
  const close = filmsCollection.onSnapshot(snapshot => {
    films.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return films
}
