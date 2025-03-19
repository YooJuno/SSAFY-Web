<script setup>
import { RouterLink, RouterView } from "vue-router";
import AppHeader from "@/components/app/AppHeader.vue";
import AppFooter from "@/components/app/AppFooter.vue";

</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
</style>