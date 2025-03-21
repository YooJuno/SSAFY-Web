<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/CCTV">CCTV</RouterLink> |
      <RouterLink to="/Status">Status</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  background: #007bff;
  color: white;
  padding: 15px;
  text-align: center;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}
</style>
