<template>
    <h2> Books</h2>

    <section>
        <books-item v-for="i in booksArray" :key="i"
        :name="booksArray.name"
        :genre="booksArray.genre"
        :author="booksArray.author"
        ></books-item>
    </section>
</template>


<script>
import BooksItem from './BooksItem.vue'

export default {
    name: 'App',
    setup(){},
  components: { 
      BooksItem 
      }

}

</script>

