<template>

  <article class="col-lg-4 col-sm-6 col-xs-12">
    <div class="card mt-5" style="width: 20rem">
      <img :src="getImage()" class="card-img-top" alt="image of book" />
      <div class="card-body">
        <h5 class="card-title text-center">{{ name }}</h5>
        <p class="card-text">Genre: {{ genre }}</p>
        <p class="card-text">Author: {{ author }}</p>
      </div>

      <div class="mx-auto">
        <books-rating></books-rating>
      </div>
    </div>
  </article>

</template>

<script>
import BooksRating from "../books/BooksRating.vue";

// Her er det brukt en try - catch statement for å finne path til bildet slik at det dukker opp på HomePage

export default {
  props: {
    name: String,
    image: String,
    genre: String,
    author: String,
  },

  setup(props) {
    const getImage = () => {
      let image;
      try {
        image = require(`@/assets/images/${props.image}`);
      } catch {
        image = "";
      }
      return image;
    };

    return { getImage };
  },

  components: {
    BooksRating,
  },
};
</script>
