<template>
  <div v-if="selectedPlanId === 0" class="container column">
    <h1 class="logo">
      <span>My</span>
      Login
    </h1>
    <div style="text-align: center;">
      <h3 class="title">Nossos planos <span>disponíveis</span></h3>
      <p class="text">Escolha o plano que mais combina com você</p>
    </div>
    <div class="plan">
      <CardPlan v-for="plan in thePlans" :key="plan.id" :hint="plan.hint" :selected="selectedPlanId" :title="plan.title" :description="plan.description" :comment="plan.comment" :price="plan.price" :country="plan.country" :benefits="plan.benefits" @select-plan="toSelectPlan(plan.id)" />
    </div>
  </div>
  <div v-else class="container column">
    <h1 class="logo">
      <span>My</span>
      Login
    </h1>
    <div style="text-align: center;">
      <h3 class="title">Você está muito próximo de adquirir<br>grandes <span>benefícios</span></h3>
      <p class="text">Cadastre-se e entre para nossa comunidade</p>
    </div>
    <div class="signup-box">
      <div class="signup">
        <div>
          <h3 class="title">Dados Pessoais</h3>
          <p class="text">Informe seus dados pessoais para acesso à sua conta</p>
        </div>
        <FormPlan />
      </div>
      <div class="cardplan">
        <CardPlan :hint="selectedPlan?.hint" :selected="selectedPlanId" :title="selectedPlan?.title || ''" :description="selectedPlan?.description || ''" :comment="selectedPlan?.comment" :price="selectedPlan?.price" :country="selectedPlan?.country" :benefits="selectedPlan?.benefits" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const selectedPlanId = ref(0)
const toSelectPlan = (id: number) => {
  selectedPlanId.value = id
}

const selectedPlan = computed(() => thePlans.value.find(plan => plan.id === selectedPlanId.value))

interface planInterface {
  id: number
  title: string
  description: string
  comment?: string
  price?: number
  hint?: string
  country?: 'br' | 'usa'
  benefits?: string[]
}
const thePlans = ref<planInterface[]>([{
  id: 1,
  title: 'Básico',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  comment: 'Lorem Ipsum is simply dummy text',
  price: 0,
  country: 'br',
  benefits: [
    'Lorem Ipsum',
    'Lorem Ipsum is simply',
    'Lorem Ipsum is simply dummy text',
    'Lorem Ipsum is simply dummy',
    'Lorem Ipsum is simply'
  ]
}, {
  id: 2,
  title: 'Intermediário',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  comment: 'Lorem Ipsum is simply dummy text',
  price: 499,
  hint: 'Mais Usado',
  country: 'br',
  benefits: [
    'Lorem Ipsum',
    'Lorem Ipsum is simply',
    'Lorem Ipsum is simply dummy text',
    'Lorem Ipsum is simply dummy',
    'Lorem Ipsum is simply'
  ]
}, {
  id: 3,
  title: 'Avançado',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  comment: 'Lorem Ipsum is simply dummy text',
  price: 999,
  country: 'br',
  benefits: [
    'Lorem Ipsum',
    'Lorem Ipsum is simply',
    'Lorem Ipsum is simply dummy text',
    'Lorem Ipsum is simply dummy',
    'Lorem Ipsum is simply'
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

.signup-box {
  width: 85%;
  display: grid;
  grid-template-columns: 60% 1fr;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 581px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .signup {
    background-color: #fff;
    padding: 2rem 2rem;
    border: 1px solid #eeeded;
    border-radius: 8px; 
  }
}
</style>
