<template>
  <div class="flex justify-between">
    <select
      :value="modelValue"
      class="w-full bg-white capitalized"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option v-if="placeholder" value="" disabled selected hidden>
        {{ placeholder.toUpperCase() }}
      </option>
      <option
        v-for="option in options"
        :key="option"
        :value="option"
        class="capitalized"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Select value',
    },
    options: {
      type: [Array, Object],
      required: true,
    },
  },
};
</script>

