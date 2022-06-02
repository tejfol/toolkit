<template>
  <header
    class="
      h-16
      flex
      bg-gradient-to-r
      from-sky-800
      to-indigo-900
      text-white text-xl
      z-[1]
    "
  >
    <nav class="m-auto container flex justify-center transition-all">
      <router-link
        exact-active-class="text-white"
        class="transition-all pr-4 hover-underline-animation"
        to="/"
        >Home</router-link
      >
      <router-link
        exact-active-class="text-white"
        class="transition-all px-4 hover-underline-animation"
        to="mri"
        >MRI</router-link
      >
      <router-link
        exact-active-class="text-white"
        class="transition-all px-4 hover-underline-animation"
        to="about"
        >About</router-link
      >
      <router-link
        exact-active-class="text-white"
        class="transition-all px-4 hover-underline-animation"
        to="faq"
        >FAQ</router-link
      >
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style>
.hover-underline-animation {
  display: inline-block;
  position: relative;
  color: #0087ca;
}

.hover-underline-animation:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #0087ca;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>