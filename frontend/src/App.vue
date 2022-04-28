<template>
  <base-header class="sticky top-0" />
  <main class="container mx-auto min-h-screen text-lg bg-white">
    <router-view />
  </main>
</template>

<script>
import BaseHeader from "./components/base/base.header.component.vue";
export default {
  name: "App",
  components: { BaseHeader },
};
</script>


