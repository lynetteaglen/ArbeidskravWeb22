<template>
   <form>
        <input type="search" v-model="searchBooks" placeholder="Søk etter bøker"/>
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
import { reactive } from '@vue/reactivity'

import booksService from '../../service/booksService.js'
import BooksItem from '../books/BooksItem.vue'


export default {
    setup() {
        let searchBooks = ref("")
        let resultsBooks = ref([""])

        const check = reactive({
          clicked: false,
        })

        const books = booksService.getAllBooks()
        
        const showBooks = () => {
        check.clicked = true
        console.log(searchBooks.value)
        let yes = books[searchBooks.value]
        return resultsBooks.value = yes
        }

        return {
            books, searchBooks, resultsBooks, showBooks, check,
        }
    },

  components: { 
      BooksItem 
      }

}

</script>

