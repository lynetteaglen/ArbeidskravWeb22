<template>
    <b-form-rating v-model="value" variant="warning" class="mb-2"></b-form-rating>
    <p class="mt-2"> Value: {{value}}</p>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            value: null
        }
    }
}
</script>