<template>
  <div class="p-4" v-for="(item, index) in itemsList" :key="index">
    <p>author: {{ item.author }}</p>
    <p>content: {{ item.content }}</p>
    <p>description: {{ item.description }}</p>
    <p>title: {{ item.title }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "news-component",

  data() {
    return {
      itemsList: null,
    };
  },

  methods: {
    async fetchData() {
      const { data } = await axios.get(
        "http://127.0.0.1:5500/src/config/mockup.json"
      );
      const replace = JSON.stringify(data);
      this.itemsList = JSON.parse(replace);
    },
  },
  async mounted() {
    await this.fetchData();
  },
};
</script>
