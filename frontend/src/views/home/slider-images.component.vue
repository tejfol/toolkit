<template>
  <div class="w-full h-96 grid grid-cols-2">
    <div class="w-full h-96 space-y-2">
      <img
        :src="someImage"
        class="w-full h-full object-contain bg-black"
        alt="Images"
      />
      <input
        class="w-full block"
        ref="range"
        @input="changedImage"
        :value="value"
        min="0"
        :max="images.length - 1"
        type="range"
      />
    </div>
    <div class="px-4">
      <base-button @click="loadTumors">Load Tumors</base-button>
    </div>
  </div>
</template>

<script>
import { getFiles } from "../../helpers/read";
export default {
  name: "SliderImages",

  data() {
    return {
      value: 0,
      images: [
        {
          src: "https://w.wallhaven.cc/full/72/wallhaven-7279ey.jpg",
        },
        {
          src: "https://w.wallhaven.cc/full/1k/wallhaven-1ky1r1.jpg",
        },
        {
          src: "https://w.wallhaven.cc/full/z8/wallhaven-z86zdy.jpg",
        },
        {
          src: "https://w.wallhaven.cc/full/y8/wallhaven-y8o5gk.jpg",
        },
        {
          src: "https://w.wallhaven.cc/full/28/wallhaven-28ldgg.jpg",
        },
        {
          src: "https://w.wallhaven.cc/full/wq/wallhaven-wqj1pp.jpg",
        },
        {
          src: "https://w.wallhaven.cc/full/l3/wallhaven-l3pzpq.png",
        },
        {
          src: "https://w.wallhaven.cc/full/9m/wallhaven-9mpzwk.jpg",
        },
        {
          src: "https://w.wallhaven.cc/full/y8/wallhaven-y8o5rd.jpg",
        },
        {
          src: "https://w.wallhaven.cc/full/m9/wallhaven-m9ezr9.png",
        },
        {
          src: "https://w.wallhaven.cc/full/72/wallhaven-7279ey.jpg",
        },
      ],
    };
  },

  methods: {
    changedImage() {
      this.value = this.$refs.range.value;
    },
    async loadTumors() {
      // const items = [];
      // for (let i = 1; i < 183; i++) {
      //   items.push({ src: "./src/assets/tumors/" + "Y" + i + ".jpg" });
      // }
      console.log();
      console.log(items);
      console.log(await getFiles("../../assets/tumors"));
      this.images = items;
    },
  },

  computed: {
    someImage() {
      return this.images[this.value].src;
    },
  },
};
</script>
