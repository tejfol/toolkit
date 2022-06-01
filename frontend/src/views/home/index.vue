<template>
  <div>
    <div class="bgImage px-8 py-16 text-white space-y-4">
      <h3 class="text-4xl font-bold">Why Study the Brain?</h3>
      <p class="text-lg font-medium xl:w-6/12">
        The brain is the most complex part in the human body. This three-pound
        organ is responsible for our intelligence, interpreting sensation,
        initiating body movement, and controlling all of our behaviors.
      </p>
    </div>
    <div class="px-4">
      <div class="space-y-8 pt-6">
        <article class="grid xl:grid-cols-2 grid-cols-1 gap-4">
          <p class="text-lg">
            The brain and the rest of the central nervous system are composed of
            a variety of cells, but the primary functional unit is a cell called
            a neuron. All sensations, movements, , memories, and feelings are
            the result of signals that pass through neurons of differing shapes,
            sizes, and functions. The average brain contains 80-90 billion
            neurons, the cell bodies of which form "gray matter." Many, many
            more specialized cells called "glia" protect and support neurons in
            gray matter, and provide insulation for their delicate
            interconnections (called axons) in the "white matter." The folds in
            the human brain form sulci (grooves) and gyri (ridges), adding to
            its surface area to maximize the number of cells that can pack into
            our skulls, and increasing the quantity of information we can
            process.
          </p>
          <p class="text-lg">
            The brain and the rest of the central nervous system are composed of
            a variety of cells, but the primary functional unit is a cell called
            a neuron. All sensations, movements, , memories, and feelings are
            the result of signals that pass through neurons of differing shapes,
            sizes, and functions. The average brain contains 80-90 billion
            neurons, the cell bodies of which form "gray matter." Many, many
            more specialized cells called "glia" protect and support neurons in
            gray matter, and provide insulation for their delicate
            interconnections (called axons) in the "white matter." The folds in
            the human brain form sulci (grooves) and gyri (ridges), adding to
            its surface area to maximize the number of cells that can pack into
            our skulls, and increasing the quantity of information we can
            process.
          </p>
        </article>
        <slider-images class="mt-4 mb-8" />
      </div>
    </div>
  </div>
</template>

<script>
import SliderImages from "./slider-images.component.vue";
export default {
  name: "HomeContainer",
  components: { SliderImages },
};
</script>

<style scoped>
.bgImage {
  background-image: url("../../assets/images/brain.gif");
  object-fit: cover;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat, repeat;
}
</style>