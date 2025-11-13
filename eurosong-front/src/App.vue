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
