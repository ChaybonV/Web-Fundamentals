<script setup>
  // ----- Import
  import {ref,onMounted} from "vue";

  // ----- Components
  import Counter from "./components/Counter.vue"

  // ----- Data
  let counters = ref([])

  // ----- Lifecycles
  onMounted(()=>{
    fetch("https://dummyjson.com/products")
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      counters.value=data.products;
    })
  })
</script>

<template>
<div>
  <h1>Counter van domme vragen</h1>

  <div v-for="(item,index) in counters" :key="index">
    <Counter v-bind:counterName="item.title" :counterInitialValue="item.stock"/>
  </div>

</div>
</template>
