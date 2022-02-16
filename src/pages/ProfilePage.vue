<template>
    
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
