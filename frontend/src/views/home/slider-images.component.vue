<template>
  <div class="w-full h-128 grid grid-cols-3">
    <div class="w-full h-128 space-y-1 col-span-2">
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
        id="range"
      />
      <label class="text-center block" for="range"
        >{{ this.value }}/{{ images.length - 1 }}</label
      >
    </div>
    <div class="px-4 flex flex-col space-y-2">
      <base-button @click="this.loadTumors">Load Tumors</base-button>
      <base-button @click="this.load_wo_Tumors"
        >Load Without Tumors</base-button
      >
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "SliderImages",

  data() {
    return {
      value: 0,
      images: [
        {
          src: 'https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png'
        }
      ],
    };
  },

  methods: {
    changedImage() {
      this.value = this.$refs.range.value;
    },
    async loadImages(kind) {
      if(kind === 'tumors'){
        const {data} = await axios.get('http://localhost:8080/api/tumors', )
        console.log(data);
        this.value = 0;
        return data;
      }

      if(kind === 'wo_tumors'){
        const {data} = await axios.get('http://localhost:8080/api/wo_tumors', )
        console.log(data);
        this.value = 0;
        return data;
      }
    },

    async loadTumors() {
      this.images = await this.loadImages('tumors')
    },

    async load_wo_Tumors() {
      this.images = await this.loadImages('wo_tumors')
    },
  },



  async mounted () {
    this.images = await this.loadImages('tumors');
  },

  computed: {
    someImage() {
      console.log(this.images[this.value].src);
      return this.images[this.value].src;
    },
  },
};
</script>
