import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const res = projectFirestore.collection('posts')
        .orderBy('createdAt')
        .get()
      posts.value = (await res).docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })

    /*
    // Old local json file storage
      let data = await fetch('http://localhost:3000/posts')
      if (!data.ok) {
        throw Error('no data available')
      }
      posts.value = await data.json()
    */
    }
    catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return { posts, error, load }
}

export default getPosts
