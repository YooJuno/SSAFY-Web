<script setup>
import axios from "axios"

const SERVER_URL = import.meta.env.VITE_SERVER_URL

async function getTodos() {
  try {
    const response = await axios.get(`${SERVER_URL}/todos`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getTodos();
</script>

<template>
  <h1>Axios</h1>
</template>

<style scoped>
</style>
