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

export default {
  name: 'App', 
  components: {
    TheNavigation
  }
}

</script>
