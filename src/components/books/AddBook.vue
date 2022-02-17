<template>


    
</template>

<script>

import {ref} from 'vue'

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