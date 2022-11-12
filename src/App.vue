<template>
  <VNavbar />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import VNavbar from "@/components/VNavbar";

export default {
  name: 'App',
  components: {
    VNavbar
  }
}
</script>

<style>

</style>
