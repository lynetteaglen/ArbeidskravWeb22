<template>
    <h2> Books</h2>

    <section>
        <books-item v-for="(booksArray, i) in books" :key="i"
        :name="booksArray.name"
        :genre="booksArray.genre"
        :author="booksArray.author"
        ></books-item>
    </section>
</template>


<script>
import booksService from '../../service/booksService.js'
import BooksItem from '../books/BooksItem.vue'

export default {
    name: 'App',
    setup(){

        const books = booksService.getAllBooks(); 
        return { books }

    },
  components: { 
      BooksItem 
      }

}

</script>

