<template>
  <button
    type="button"
    class="
      px-4
      py-2
      bg-main-blue
      rounded-md
      text-white
      font-semibold
      outline-none
      border-0
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
