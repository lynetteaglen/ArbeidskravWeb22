<template>
    <input type="text" v-model="search" placeholder="søk etter bøker">
    <h2 v-for="name in filteredBooks" :key="name">{{ name }}</h2>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            books: [
                'Call me by your name',
                'Dune',
                'Eleanor and Park',
                'Harry Potter',
            ],
            search:""
        }
    },

    computed: {
        filteredBooks: function() {
            return this.books.filter ((books) => {
                return books.match(this.search);
            });
        }
    }
}
</script>