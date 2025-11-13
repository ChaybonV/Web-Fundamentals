<!-- <script setup>
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
</template> -->

<script setup>
</script>

<template>
  <div>
    <!-- Navigation -->
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/artists">Artists</RouterLink>
      <RouterLink to="/songs">Songs</RouterLink>
      <RouterLink to="/ranking">Ranking</RouterLink>
      <RouterLink to="/voting">Voting</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>
