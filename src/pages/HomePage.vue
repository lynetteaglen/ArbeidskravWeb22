<template>
    <h1>HJEM</h1>
    <section>
    <book-list v-for="item in booksArray" :key="item"> {{item}}</book-list>
    </section>
</template>

<script>
import BookList from '../components/books/BookList.vue'
import booksArray from '../service/booksService'

export default {
    name: 'App', 
    components: {
        BookList

    },

    data(){
        return {
            booksArray
        }

    },
}

</script>

<style>

</style>