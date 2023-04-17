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
      <CardPlan
        v-for="plan in thePlans"
        :key="plan.id"
        :title="plan.title"
        :description="plan.description"
        :comment="plan.comment"
        :price="plan.price"
        :country="plan.country"
        :benefits="plan.benefits"
        @select-plan="selectedPlan = plan.id"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const selectedPlan = ref(0)

interface planInterface {
  id: number
  title: string
  description: string
  comment?: string
  price?: number
  country?: 'br' | 'usa'
  benefits?: string[]
}
const thePlans = ref<planInterface[]>([{
  id: 1,
  title: 'Básico',
  description: 'Ideal para quem está começando',
  comment: 'Apenas para testes',
  price: 0,
  country: 'br',
  benefits: [
    '1 usuário',
    '1 site',
    '1 GB de armazenamento',
    '1 GB de tráfego',
    'Suporte básico'
  ]
}, {
  id: 2,
  title: 'Intermediário',
  description: 'Ideal para quem está começando',
  comment: 'Apenas para testes',
  price: 99,
  country: 'br',
  benefits: [
    '1 usuário',
    '1 site',
    '1 GB de armazenamento',
    '1 GB de tráfego',
    'Suporte básico'
  ]
}, {
  id: 3,
  title: 'Avançado',
  description: 'Ideal para quem está começando',
  comment: 'Apenas para testes',
  price: 999,
  country: 'br',
  benefits: [
    '1 usuário',
    '1 site',
    '1 GB de armazenamento',
    '1 GB de tráfego',
    'Suporte básico'
  ]
}])

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
