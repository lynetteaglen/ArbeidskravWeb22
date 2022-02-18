<template>
<!-- legger til en input så bruker kan søke på en bok og en event/button-->
<!--  husk å søke etter bøker med store forbokstaver (likt som overskriftene)-->
<section>
   <form class="d-flex justify-content-center mt-3">
        <input type="text" class="me-2 w-50" v-model="searchBooks" placeholder="Søk etter bøker"/>
        <button @click="resultsBooks" type="button" class="btn btn-outline-dark btn-sm w-15">søk</button>
   </form>
    <div class="row" v-if="showBooks.length === 0">
        <books-item v-for="(booksArray, i) in books" :key="i"
        :name="booksArray.name"
        :image="booksArray.image"
        :genre="booksArray.genre"
        :author="booksArray.author"
        ></books-item></div>

    <div class="row" v-else>
        <books-item v-for="(book,i) in showBooks" :key="i"
        :name="book.name"
        :image="book.image"
        :genre="book.genre"
        :author="book.author"></books-item></div>

    </section>
</template>


<script>
import { ref } from 'vue'

import booksService from '../../service/booksService.js'
import BooksItem from '../books/BooksItem.vue'


export default {
    //Input fra bruker brukes som en value som da skal matche med bøkene vi har i vårt array "booksArray" og returner bok
    setup() {
        let searchBooks = ref("")
        let showBooks = ref([])

        const resultsBooks = () => {  
           let userInput = searchBooks.value
           showBooks.value = booksService.getBooksByName(userInput)
        }

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

