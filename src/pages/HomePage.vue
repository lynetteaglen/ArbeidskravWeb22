<template>
    <h1>HJEM</h1>
    <section>
    <book-list></book-list>
    </section>
</template>

<script>
import BookList from '../components/books/BookList.vue'

export default {
    name: 'App', 
    components: {
        BookList
    }
}

</script>

<style>

</style>