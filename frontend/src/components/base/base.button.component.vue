<template>
  <button
    type="button"
    class="
      transition-all
      px-4
      py-2
      bg-main-blue
      rounded-md
      text-white
      font-semibold
      outline-none
      border border-transparent
      hover:bg-white hover:border hover:border-main-blue hover:text-main-blue
    "
  >
    <slot> Click </slot>
  </button>
</template>

<script>
export default {
  name: "ButtonComponent",
};
</script>
