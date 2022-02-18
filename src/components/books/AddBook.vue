<template>
<!-- Lager en input som tar i mot titler fra bruker-->
<section>
  <h1 class="text-center">Legg til en bok i leselista</h1>
  <form class="d-flex justify-content-center mt-3" v-on:submit.prevent="addNewBook">
    <input class="me-2 w-50" v-model="book.name" placeholder="Skriv inn en tittel her" />
    <button class="btn btn-outline-dark btn-sm w-15" type="submit">Legg til</button>
  </form>
</section>
<section>
  <h2>Din leseliste</h2>
   <ul>
    <li v-for="book in books" :key="book">{{ book.name }}</li>
  </ul>
  </section>
</template>

<script>
export default {
  //Har en liste med et objekt, tar input fra brukeren og legger inn i listen.
  data() {
    return {
      books: [{ name: "Dune" }],
      book: { name: "" },
    };
  },

//her pusher jeg input inn i listen
  methods: {
    addNewBook() {
      this.books.push({ name: this.book.name });
    },
  },
};
</script>