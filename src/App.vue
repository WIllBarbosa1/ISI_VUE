<template>
  <Header />
  <router-view id="page-container" />
  <Footer />
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

export default {
  name: 'App',
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style src="./style.css"></style>
