<template>
  <el-form-item>
    <el-button type="primary" class="custom-btn" v-bind="$attrs">Fazer Login</el-button>
  </el-form-item>
</template>

<script lang="ts">
  export default {
    inheritAttrs: false
  }
</script>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.custom-btn {
  width: 100%;
  height: 64px !important;
  background-color: #1A4CA3;
  border: 0 !important;
  transition: background-color .5s ease-out;
  text-transform: uppercase;
  &:hover {
    background-color: #663399;
  }
  @media (max-width: 581px) {
    text-transform: initial;
  }
}
</style>