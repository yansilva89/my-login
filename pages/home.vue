<template>
  <header class="header">
    <h1 class="logo" style="margin: 0 0 0 2rem;">
      <span>My</span>
      Login
    </h1>
    <div class="user-session" style="margin: 0 2rem 0 0;" @click="showDialogUser">
      <h1>J</h1>
    </div>
    <div class="user-dialog" v-if="dialogUser" @click="logoutUser()">
      <p>Sair</p>
    </div>
  </header>
  <div class="content">
    <div style="width: 100%; margin-bottom: 1rem;">
      <h3 class="title">Olá John,</h3>
      <p class="text">Seja bem vindo a nossa comunidade de usuários.</p>
    </div>
    <div class="video" style="width: 100%;">
      <iframe width="100%" height="400px" src="https://www.youtube.com/embed/l2y8oYqNV8I" title="Video Example" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div style="width: 100%; margin-top: 1.5rem;">
      <p class="text">Caso tenha dúvidas, <span style="text-decoration: underline;">visite nossa central de ajuda.</span></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UseUserStore } from '~/stores/user';
const router = useRouter();
const userStore = UseUserStore()

const dialogUser = ref(false)
const showDialogUser = () => {
  dialogUser.value = true
}

const logoutUser = () => {
  userStore.logout()
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 72px;
  //
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FAFAFC;
  border-bottom: 1px solid #eeeded;
  .user-dialog {
    position: absolute;
    top: 72px;
    right: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dce2e7;
    color: #3c3c3c;
    width: 120px;
    height: 48px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color .3s ease-in-out;
    &:hover {
      background-color: #aeb9c3;
    }
  }
  .user-session {
    background-color: #1A4CA3;
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    cursor: pointer;
    border: 1px solid #eeeded;
    &:hover {
      border: 1px solid #666666;
    }
    h1 {
      margin: 0;
      color: #fff;
    }
  }
}
.content {
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
}
</style>