<template>

  <article class="col-lg-4 col-sm-6 col-xs-12">

  <div class="card mt-5" style="width: 18rem;">
  <img :src="getBookImg()" class="card-img-top" alt="image of book">  
  <div class="card-body">
    <h5 class="card-title">{{ name }}</h5>
    <p class="card-text">Genre: {{ genre }}</p>
    <p class="card-text">Author: {{ author }}</p>
    <a href="#" class="btn btn-primary">Add to reading list</a>
  </div>
</div>

  </article>

</template>

<script>

export default({

    props: {
        name : String,
        images : String, 
        genre: String, 
        author: String
    }

})
</script>
