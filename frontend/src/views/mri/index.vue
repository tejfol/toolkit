<template>
  <div>
    <div class="bg-white my-4">
      <canvas id="gl" height="480" width="640"> </canvas>
    </div>
    <hr class="mb-4 mt-2" />
    <div class="space-y-2 px-4">
      <fieldset>
        <label class="font-bold" for="change-volume">Load volume:</label>
        <custom-select
          id="change-volume"
          :modelValue="volumeList[0].url"
          @update:modelValue="changeVolume"
          :options="volumeOptions"
        />
      </fieldset>
      <fieldset>
        <label class="font-bold" for="change-color">Color Map:</label>
        <custom-select
          id="change-color"
          :modelValue="volumeList[0].colorMap"
          @update:modelValue="changeColor"
          :options="options"
        />
      </fieldset>
      <fieldset class="flex flex-col">
        <label class="font-bold" for="change-opacity">Opacity:</label>
        <input
          :value="volumeList[0].opacity"
          @input="changeOpacity"
          id="change-opacity"
          type="range"
          min="0"
          max="1"
          step="0.1"
        />
      </fieldset>
    </div>
    <div class="mt-4 px-4 space-y-2">
      <div>
        <h3 class="text-2xl font-semibold">What is an MRI scan?</h3>
        <div class="space-y-1">
          <p>
            An MRI scan uses a large magnet, radio waves, and a computer to
            create a detailed, cross-sectional image of internal organs and
            structures.
          </p>
          <p>
            The scanner itself typically resembles a large tube with a table in
            the middle, allowing the patient to slide in.
          </p>
          <p>
            An MRI scan differs from
            <a
              class="underline text-blue-600"
              href="https://www.medicalnewstoday.com/articles/153201.php"
              >CT scans</a
            >
            and X-rays, as it
            <a
              class="underline text-blue-600"
              href="http://www.nhs.uk/conditions/mri-scan/Pages/Introduction.aspx"
              >does not use</a
            >
            potentially harmful ionizing radiation.
          </p>
          <p>
            The development of the MRI scan represents a huge milestone for the
            medical world.
          </p>
          <p>
            Doctors, scientists, and researchers are now able to examine the
            inside of the human body in high detail using a non-invasive tool.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {Niivue} from '@niivue/niivue'
const nv = new Niivue()

import CustomSelect from '../../components/input/select.component.vue';

export default {
  name: 'mri-component',
  components: {CustomSelect},

  data(){
    return {
      options: ['white', 'actc', 'blue', 'blue2red', 'bluegrn', 'bone', 'bronze', 'cividis', 'cool', 'copper', 'copper2', 'ct_airways', 'ct_bones', 'electric_blue', 'gold', 'hot', 'hotiron', 'jet', 'inferno', 'linspecer', 'xrain',],
      volumeOptions:[],
      volumeList: [
        {
          url: null,
          volume: {hdr: null, img: null},
          colorMap: 'white',
          opacity: 1,
          visible: true,
        }
      ]

    }
  },

  methods: {
    changeColor(newValue) {
      this.volumeList[0].colorMap = newValue;
      console.log(this.volumeList[0].colorMap);
      nv.loadVolumes(this.volumeList)
    },

    async changeVolume(newValue) {
      this.volumeList[0].url = newValue;
      console.log(this.volumeList[0].url);
      nv.loadVolumes(this.volumeList)
    },

    changeOpacity(newValue) {
      this.volumeList[0].opacity = newValue.target.value;
      nv.loadVolumes(this.volumeList)
    }
  },

  async mounted() {
    const {data} = await axios.get('http://localhost:8080/api/mni');
    const result = await data.map(e => e.src)

    this.volumeOptions = result;
    this.volumeList[0].url = this.volumeOptions[0];

    nv.attachTo('gl')
    nv.loadVolumes(this.volumeList) // press the "v" key to cycle through views

  }
}

</script>

