<template>
    <div id="app">
    <b-form-rating v-model="value" variant="warning" show-value show-clear class="mb-2"></b-form-rating>
    <p class="mt-2"> Value: {{value}}</p>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            value: 3
        }
    }
}
</script>