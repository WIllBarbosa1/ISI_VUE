<template>
  <header id="header">
    <h2>Batera Shows</h2>
    <nav class="nav-container">
      <router-link to="/">Home</router-link>
      <router-link to="/shows">Shows</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      login: false,
    };
  },
  methods: {
    handleLogin() {
      // this.login = !this.login
      alert('Teste');
    },
  },
};
</script>

<style src="./style.css" scoped></style>
