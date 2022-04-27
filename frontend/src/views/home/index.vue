<template>
  <div
    style="
      background-image: url('https://www.braininitiative.org/wp-content/uploads/2016/11/brain-whythebrain-2.jpg');
    "
    class="px-8 py-16 text-white space-y-4 bg"
  >
    <h3 class="text-4xl font-bold">Why Study the Brain?</h3>
    <p class="text-lg font-medium">
      The brain is the most complex part in the human body. This three-pound
      organ is responsible for our intelligence, interpreting sensation,
      initiating body movement, and controlling all of our behaviors.
    </p>
  </div>
  <slider-images class="my-4" />

  <div class="space-y-8 py-6">
    <article class="space-y-4 lg:w-8/12">
      <p class="text-lg">
        The brain and the rest of the central nervous system are composed of a
        variety of cells, but the primary functional unit is a cell called a
        neuron. All sensations, movements, , memories, and feelings are the
        result of signals that pass through neurons of differing shapes, sizes,
        and functions. The average brain contains 80-90 billion neurons, the
        cell bodies of which form "gray matter." Many, many more specialized
        cells called "glia" protect and support neurons in gray matter, and
        provide insulation for their delicate interconnections (called axons) in
        the "white matter." The folds in the human brain form sulci (grooves)
        and gyri (ridges), adding to its surface area to maximize the number of
        cells that can pack into our skulls, and increasing the quantity of
        information we can process.
      </p>
      <p class="text-lg">
        Over hundreds of years, scientists have learned much about the brain,
        including the countless methods through which information is transferred
        from neuron to neuron at a junction called a synapse, and how hundreds -
        even thousands - of neurons can function together to form a larger
        circuit responsible for any given activity. All human brains share basic
        anatomical circuits and synaptic interactions, but the precise pattern
        of connections and interactions are highly variable from person to
        person—and therein lies the source of the remarkable variation we see in
        human behavior - from the breathtaking dance of a ballerina, to the
        elegant craftsmanship of a master carpenter, to the shrewd judgment of
        an expert trader. Remodeling its circuitry with each new experience -
        our brain makes us who we are, enabling us to perceive beauty, teach our
        children, remember loved ones, react against injustice, learn from
        history, and imagine a different future.
      </p>
      <p class="text-lg">
        However, due to the vast complexity of the brain, much remains to be
        discovered. Researchers continue to explore the mechanics behind a
        healthy brain that functions quickly and automatically - at the speed of
        thought. Truly understanding a circuit requires identifying and
        characterizing the component cells, defining their connections with one
        another, monitoring and recording their activity patterns - and we are
        still at the point where much work remains to identify the key
        differences in a vast array of unknown neurons. In the longer term, new
        treatments for devastating brain diseases are likely to emerge from a
        deeper understanding of brain circuits. The analysis of circuits is not
        the only area of neuroscience worthy of attention, but advances in
        technology are driving a qualitative shift in what is possible, and
        focused progress in this area will benefit many other areas of
        neuroscience as well.
      </p>
    </article>
  </div>
</template>

<script>
import SliderImages from "./slider-images.component.vue";
export default {
  name: "HomeContainer",
  components: { SliderImages },
};
</script>
