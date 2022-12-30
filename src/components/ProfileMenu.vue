<template>
  <div class="menuWrapper">
    <div v-if="isLoggedIn">
      <div class="msg">
        Hello, &nbsp;{{getUser().name}} :)
      </div>
      <hr/>
      <div class="logout">
        <router-link to="/" @click="logout" replace>Logout</router-link> 
      </div>
    </div>
    <div v-else class="msg">
      Hello, User!
      <router-link to="/login">Login Now</router-link> 
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ProfileMenu',
  computed: {
    ...mapGetters(['getUser']),
    // ...mapActions(['updateUser']),
    isLoggedIn () {
    //   this.updateUser(this.getUser().name)
      return this.getUser().name
    }
  },
  methods: {
    ...mapActions(['updateUser']),
    logout () {
      this.updateUser({})
    }
  }
}
</script>

<style scoped>
.menuWrapper {
  padding: 20px 0px;
    width: 100%;
    text-align: start;
}
.logout, .msg {
margin: 0 25px;
}
a {
  text-decoration: none;
}
</style>