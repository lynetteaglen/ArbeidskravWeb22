<template>
  <section class="container">
    <h2>Legg til en bok i leselista</h2>
    <div class="col-lg-12 col-sm-6 col-xs-12">
      <form>
        <input
          type="text"
          v-model="listInput"
          @input="$emit('update:inputText', $event.target.value)"
          placeholder="Søk etter navn på bok"
        />
        <button @click="addBook">Legg til</button>
      </form>

      <h2>Din leseliste</h2>
      <ul>
        <li v-for="(book, index) in titleArray" :key="index">{{ book }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {

     props: {
            inputText: {
                type: String 
            }
        }, 

  setup() {

    let listInput = ref("");

    let titleArray = ref([
      `Call me by your name`,
      `Find me`,
      `The Untethered Soul`,
      `The Power of Now`,
    ]);

    const addBook = () => {
      let userInput = listInput.value;
      // console.log(userInput)
      userInput.value.push(titleArray);
      // titleArray.value.push(userInput)
      // console.log(userInput)
      // userInput.push(booksArray.value)
      // titleArray.value.add(userInput)
      console.log(userInput);
    };

    return {
      titleArray,
      addBook,
      listInput,
    };
  },
};
</script>