<template>
  <div class="card">
    <h1 class="title">{{ title }}</h1>
    <p class="price">{{ price || 'Grátis' }}</p>
    <p class="description">{{ description }}</p>
    <p class="comment">{{ comment }}</p>
    <div>
      <button
        class="btn-plan"
        @click="$emit('select-plan')"
      >
        Ecolher Plano
      </button>
    </div>
    <p class="location">Seu site em servidores no {{ countries[country || 'br'] }}</p>
    <!-- <ul class="benefits">
      <li v-for="benefit in " :key="benefit">{{ benefit }}</li>
    </ul> -->
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  comment?: string
  price?: number
  country?: 'br' | 'usa'
  benefits?: string[]
}>()

defineEmits(['select-plan'])

const countries = {
  br: 'Brasil',
  usa: 'Estados Unidos'
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>