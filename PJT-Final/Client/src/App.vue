<script setup>
import Header from "@/components/Header.vue";
import SidebarLeft from "@/components/SidebarLeft.vue";
import SidebarRight from "@/components/SidebarRight.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="container">
    <Header></Header>
    <div class="content">
      <SidebarLeft />
      <main>
        <RouterView />
      </main>

      <SidebarRight />
    </div>

    <Footer></Footer>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  display: flex;
  flex: 1;
}

main {
  flex: 1;
  padding: 20px;
  background-color: #f8f9fa;
}

header,
footer {
  background: #333;
  color: white;
  padding: 10px;
  text-align: center;
}

.sidebar-left,
.sidebar-right {
  width: 50px;
  background: #ddd;
  padding: 10px;
}
</style>
