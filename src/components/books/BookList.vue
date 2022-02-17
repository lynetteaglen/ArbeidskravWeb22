<template>
   <form>
        <input type="text" v-model="searchBooks" placeholder="Søk etter bøker"/>
        <button @click="resultsBooks" type="button">søk</button>
   </form>
    <section>
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
        const searchBooks = ref("");
        const resultsBooks = ref("");

        const books = booksService.getAllBooks()
        
        const showBooks = () => {
            let chosenSearch = parseInt(searchBooks.value)

            if( chosenSearch >= 0 && chosenSearch > books.length){
                chosenSearch.value = books[searchBooks.value];
                searchBooks.value="";
            } else {
                books.value="";
            }
       
        }

        return {
            books, showBooks, searchBooks, resultsBooks,
        }
    },

  components: { 
      BooksItem 
      }

}

</script>

