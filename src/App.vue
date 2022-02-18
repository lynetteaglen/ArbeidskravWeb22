<template>
  <the-navigation></the-navigation>
  <div class="container">
      <router-view></router-view>
  </div>
</template>

<script>
// Navigasjonsbaren er lagt til i denne filen fordi den er felles for alle filene
import TheNavigation from "./components/shared/TheNavigation.vue";

export default {
  name: "App",
  components: {
    TheNavigation,
  },
};
</script>

