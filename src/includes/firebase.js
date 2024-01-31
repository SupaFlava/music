import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDq2w59ZBhrhwLDKIoOYsQjFNVpPkhQh3A',
  authDomain: 'music-c3a5e.firebaseapp.com',
  projectId: 'music-c3a5e',
  storageBucket: 'music-c3a5e.appspot.com',
  appId: '1:750230533789:web:289610b7efbe1b257f4674',
  measurementId: 'G-DQQ0YBBB84'
}

export default firebase.initializeApp(firebaseConfig)
