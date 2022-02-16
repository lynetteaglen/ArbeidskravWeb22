<template>

<article>
    <h3> {{ name }}</h3>
</article>
    
</template>

<script>

export default({

    props: {
        name : String,
        genre: String, 
        author: String
    }

})
</script>
