<template>
    <h2>Legg til en bok i leselista</h2>
    <ul>
        <li v-for="book in books" :key="book">{{book.name}}</li>
    </ul>
    <form v-on:submit.prevent="addNewBook">
        <input v-model="book.name" placeholder="Skriv inn en tittel her"/>
        <button type="submit">Legg til</button>
    </form>
</template>

<script>
export default {
    data() {
        return{
        books: [{name:"Dune"}],
        book: {name:"",}
        }
        },

    methods: {
        addNewBook() {
            this.books.push({name: this.book.name})
        }
    }
}

</script>