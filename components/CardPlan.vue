<template>
  <div class="card">
    <div v-if="selected > 0" class="hint selected">
      <p>Selecionado</p>
    </div> 
    <div v-else-if="hint" class="hint">
      <p>{{ hint }}</p>
    </div>  
    <h1 class="title c-grey">{{ title }}</h1>
    <p class="price"><span v-if="price">R$</span>{{ price || 'Grátis' }}<span v-if="price">/mês</span></p>
    <p class="description">{{ description }}</p>
    <p class="comment">{{ comment }}</p>
    <CustomBtn
    name="Escolher Plano"
    width="80"
    @click="$emit('select-plan')" 
    style="margin: 0 1rem 1rem 1rem;"
    />
    <p class="location">Lorem Ipsum is simply dummy text in {{ countries[country || 'br'] }}</p>
    <ul class="benefits">
      <li v-for="benefit in benefits" :key="benefit">{{ benefit }}</li>
    </ul>
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
  hint?: string
  selected: number
}>()

defineEmits(['select-plan'])

const countries = {
  br: 'Brasil',
  usa: 'Estados Unidos'
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  //
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  //
  background-color: #fff;
  border-radius: 8px;
  padding: 2rem 0;
  p {
    text-align: center;
    margin: 0 2rem 1rem;
    color: #666;
  }
  .hint {
    position: absolute;
    top: -15px;
    //
    width: 120px;
    height: 30px;
    background-color: #36b931;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 14px;
      margin: 0;
      color: #fff;
    }
    &.selected {
      background-color: #292D32;
    }
  }
  .price {
    font-size: 40px;
    font-weight: 700;
    color: #663399;
    span {
      font-size: 28px;
      font-weight: 400;
    }
  }
  .description {
    font-size: 14px;
  }
  .comment {
    font-size: 20px;
    border-top: 1px solid #666;
    border-bottom: 1px solid #666;
    width: 75%;
    padding: 1rem 0;
  }
  .location {
    text-align: left;
    font-weight: 700;
  }
  .benefits {
    li {
      line-height: 1.5rem;
      list-style-image: url(../assets/img/check.svg);
    }
  }
}
</style>