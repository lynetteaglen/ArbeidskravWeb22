<template>
  <div>
      <!-- en @click event som endrer fra et bootstrap ikon til et annet-->
    <button class="btn btn-outline-dark btn-lg" v-bind:class="{ 'bi bi-heart': !favorite, 'bi bi-heart-fill': favorite }" @click="favorite = !favorite"></button>
  </div>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      favorite: false,
    };
  },
};
</script>