<script setup>
  // ----- Import
  import {ref} from "vue";

  // ----- Components
  import Counter from "./components/Counter.vue"

  // ----- Data
  let counters = ref([
    {
      "name":"Verlooy",
      "startValue":2
    },
    {
      "name":"Chaybon",
      "startValue":0
    },
    {
      "name":"Joeri",
      "startValue":0
    }
  ])
</script>

<template>
<div>
  <h1>Counter van domme vragen</h1>

  <div v-for="(item,index) in counters" :key="index">
    <Counter v-bind:counterName="item.name" :counterInitialValue="item.startValue"/>
  </div>

</div>
</template>
