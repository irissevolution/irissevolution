<template>
  <div class="flex justify-between" id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/d_web">Desarrollo Web</router-link> |
    <router-link to="/chatbot">Chatbot</router-link> |
    <router-link to="/robotica">Robótica</router-link> |
    <router-link to="/contacto">Contacto</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
