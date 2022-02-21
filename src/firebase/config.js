import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA_HoaLxwRj_FeTkoJp4j6OR1If-5UEWyU",
  authDomain: "vue-dojo-blog-ed8b2.firebaseapp.com",
  projectId: "vue-dojo-blog-ed8b2",
  storageBucket: "vue-dojo-blog-ed8b2.appspot.com",
  messagingSenderId: "1052911837647",
  appId: "1:1052911837647:web:554afe21e0c1b7c85b72ba"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore
const projectFirestore = firebase.firestore()

export { projectFirestore }
