<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleDeleteClick" class="delete">Delete post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
import getPost from '../composables/getPost'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { projectFirestore } from '../firebase/config'

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    const { post, error, load } = getPost(route.params.id)

    load()

    const handleDeleteClick = async () => {
      await projectFirestore.collection('posts')
        .doc(props.id)
        .delete()

      router.push({ name: 'Home' })
    }

    return { post, error, handleDeleteClick }
  }
}
</script>

<style scoped>
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }

  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }

  .pre {
    white-space: pre-wrap;
  }
  
  button.delete {
    margin: 10px auto;
  }
</style>