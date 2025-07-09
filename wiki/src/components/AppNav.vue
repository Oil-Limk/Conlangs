<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">Conlangs' Wiki</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
          aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">{{ $t("nav.home") }}</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">
                ConLangs
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Pricing</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">
                {{ $t("nav.about", { site_name : $t("site_name") }) }}
              </RouterLink>
            </li>
          </ul>
          <div class="d-flex">
            <input class="form-control me-sm-2" type="search" placeholder="Search">
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
