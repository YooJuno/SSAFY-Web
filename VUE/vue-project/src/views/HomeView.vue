<script setup>
import { ref } from "vue";

const isLoading = ref(true);
</script>

<template>
  <p v-if="isLoading">로딩중...</p>
  <ul v-else>
    <li>짜장면</li>
    <li>짬뽕</li>
    <li>탕수육</li>
  </ul>
</template>

<style scoped>
</style>
