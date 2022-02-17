<template>

<section class="container">
    <h2>Legg til en bok i leselista</h2>
    <div class="col-lg-12 col-sm-6 col-xs-12">
        <form>
        <input type="text" v-model="searchBooks" placeholder="Søk etter en bok"/>
        <button @click="books">Søk</button>
        </form>

    </div>
</section>

</template>

<script>

import { ref } from 'vue'

export default({
    setup(){

const books = ref([
      `Call me by your name`, 
      `Find me`, 
      `The Untethered Soul`,
      `The Power of Now`
])

const newBook = ref(``) 

const removeBook = (book) => {
    books.value = books.value.filter((item) => {
        return book != item
    }) 
}

const addBook = () => {
    if(!books.value.includes(newBook.value)){
        books.value.push(newBook.value)
    }
    newBook.value = ``
}

return {
    books, 
    newBook, 
    addBook, 
    removeBook
}

    }

})

</script>