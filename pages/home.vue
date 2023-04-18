<template>
  <header class="header">
    <h1 class="logo" style="margin: 0;">
      <span>My</span>
      Login
    </h1>
    <div class="user-session">
      <h1>J</h1>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  background-color: #FAFAFC;
  border-bottom: 1px solid #eeeded;
  padding: 0 2.5rem;
  .user-session {
    background-color: #1A4CA3;
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;

    h1 {
      margin: 0;
      color: #fff;
    }
  }
}
</style>