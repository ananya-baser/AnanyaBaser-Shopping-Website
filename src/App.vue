<template>
    <MainHeader class="headbar"></MainHeader>
    <!-- <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />
</template>

<script>
    import MainHeader from './components/MainHeader.vue'
    export default {
        name: 'App',
        components: {
            MainHeader
        }
    }
</script>

<style>
#app {
  font-family: 'Montserrat', Helvetica, Arial;
  /* font-family: monospace; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-bottom: 20px; */
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #add8e6;
}

/* a{
    color: white;
} */
/* a:visited{
    color: white;
} */

nav a:hover{
    color: #008b8b;
}

nav a.router-link-exact-active {
  color: #add8e6;
}

hr {
    color: #008b8b;
}
/* .headbar {
    background-color: white;
    position: sticky;
    top:0;
    z-index: 100;
} */
</style>
