<template>
    <div >
        <button  v-bind:class="{'bi bi-heart': !favorite, 'bi bi-heart-fill': favorite}" @click="favorite = !favorite"></button>
    </div>
    <div></div>
</template>

<script>
export default {
    data() {
        return{
            favorite: false
        }
    },
  
}
</script>