<template>
  <div v-if="selectedPlan === 0" class="container column" style="margin-top: 2rem;">
    <h1 class="logo">
      <span>My</span>
      Login
    </h1>
    <div style="text-align: center;">
      <h3 class="title">Nossos planos <span>disponíveis</span></h3>
      <p class="text">Escolha o plano que mais combina com você</p>
    </div>
    <div class="plan">
      <CardPlan />
      <CardPlan />
      <CardPlan />
    </div>
  </div>
</template>

<script lang="ts" setup>

const selectedPlan = ref(0)
</script>
<style lang="scss" scoped>
.plan {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  @media (max-width: 981px) {
    grid-template-columns: repeat(2, 1fr);
    gap: .5rem;
  }
  @media (max-width: 581px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
}
</style>
