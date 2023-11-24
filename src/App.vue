<template>
  <Header ></Header>
  <Home></Home>
</template>

<script>
import {defineComponent} from "vue";
import Home from "@/components/Home.vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  components: {Header, Home}
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  font-family: "Oswald", sans-serif;
}
</style>
