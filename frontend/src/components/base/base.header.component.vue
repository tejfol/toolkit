<template>
  <header
    class="
      h-16
      flex
      bg-gradient-to-r
      from-sky-800
      to-indigo-900
      text-white text-xl
    "
  >
    <nav class="m-auto container">
      <router-link
        exact-active-class="underline"
        class="transition-all pr-4 hover:underline"
        to="/"
        >Home</router-link
      >
      <router-link
        exact-active-class="underline"
        class="transition-all px-4 hover:underline"
        to="about"
        >About</router-link
      >
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>
