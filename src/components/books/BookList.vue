<template>
   <form>
        <input type="text" v-model="searchBooks" placeholder="Søk etter bøker"/>
        <button @click="resultsBooks" type="button">søk</button>
   </form>
    <section>
        <h3>{{showBooks.name}}</h3>
        <books-item v-for="(booksArray, i) in books" :key="i"
        :name="booksArray.name"
        :image="booksArray.image"
        :genre="booksArray.genre"
        :author="booksArray.author"
        ></books-item>

    </section>
</template>


<script>
import { ref } from 'vue'

import booksService from '../../service/booksService.js'
import BooksItem from '../books/BooksItem.vue'


export default {
    setup() {
        const searchBooks = ref("")
        let showBooks = ref([])

        const resultsBooks = () => {
           console.log(showBooks.value)
        }

        showBooks.value = booksService.getBooksByName(searchBooks.value)
    
        const books = booksService.getAllBooks()
        
        return {
            books, searchBooks, resultsBooks, showBooks,
        }
    },

  components: { 
      BooksItem 
      }

}

</script>

