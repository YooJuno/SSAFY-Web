<script setup>
import { ref } from "vue";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

const inputText = ref("");
const outputText = ref("");

const socket = new WebSocket(SOCKET_URL);

socket.onopen = () => {
  console.log("Connected to the server");
};

// 서버에서 메시지를 받으면 출력
socket.onmessage = async (event) => {
  const text = await event.data.text();
  outputText.value = text;
};

socket.onclose = () => {
  console.log("Disconnected from the server");
};

socket.onerror = (event) => {
  console.error("WebSocket error:", event);
};

function sendMessage() {
  try {
    socket.send(inputText.value);
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <input type="text" v-model="inputText" @input="sendMessage" />
  <p>{{ outputText }}</p>
</template>

<style scoped>
</style>
