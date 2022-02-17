<template>
    
    <section>
        <book-list></book-list>
        <add-book><add-book>
    </section>

</template>

<script>
import AddBook from '../components/books/AddBook.vue'
import BookList from '../components/books/BookList.vue'

export default {
    name: 'App', 
    components: {
        BookList,
        AddBook

    }

}

</script>
