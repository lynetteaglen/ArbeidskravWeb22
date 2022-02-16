<template>
<the-navigation></the-navigation>
<div class="container">
<div>
  <router-view></router-view>
</div>
</div>

</template>

<script>
import TheNavigation from "./components/shared/TheNavigation.vue"
// import BooksItem from "./components/books/BooksItem.vue"

export default {
  name: 'App', 
  components: {
    TheNavigation,
  }
}

</script>

