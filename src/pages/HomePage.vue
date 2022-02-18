<template>
  <h1 class="text-center">Bøker</h1>
  <section>
    <book-list v-for="item in booksArray" :key="item"> {{ item }}</book-list>
  </section>
</template>

<script>
// Importerer filer som skal vises på homepage 
import BookList from "../components/books/BookList.vue";
import booksArray from "../service/booksService";

export default {
  name: "App",
  components: {
    BookList,
  },

  data() {
    return {
      booksArray,
    };
  },
};
</script>

<style>
</style>