<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper blue darken-4">
        <div class="brand-logo">My e-store</div>
      </div>
    </nav>
    <div class="container">
      <router-view/>
    </div>    
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  background: #e3f2f0;
  margin: 0;
}
</style>
