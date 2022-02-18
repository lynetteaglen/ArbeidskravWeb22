<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand"
        ><router-link to="/"><p class="text-dark">Bookies</p></router-link></a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page"
            ><router-link to="/"><p class="text-dark">Hjem</p></router-link></a
          >
          <a class="nav-link"
            ><router-link to="/profile"
              ><p class="text-dark">Profil</p></router-link
            ></a
          >
        </div>
      </div>
    </div>
  </nav>
</template>