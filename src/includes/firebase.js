import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDq2w59ZBhrhwLDKIoOYsQjFNVpPkhQh3A',
  authDomain: 'music-c3a5e.firebaseapp.com',
  projectId: 'music-c3a5e',
  storageBucket: 'music-c3a5e.appspot.com',
  appId: '1:750230533789:web:289610b7efbe1b257f4674',
  measurementId: 'G-DQQ0YBBB84'
}
firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`)
})
const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')
export { db, auth, usersCollection, storage, songsCollection, commentsCollection }
