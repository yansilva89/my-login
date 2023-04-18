<template>
  <div class="container">
    <div class="box-info">
      <div class="box-form">
        <h1 class="logo">
          <span>My</span>
          Login
        </h1>
        <div>
          <h3 class="title">Entre na sua conta</h3>
          <p class="text">Para acessar sua conta informe seu nome de usuário e senha</p>
        </div>
        <div>
          <el-form :model="form" label-position="top">
            <el-form-item label="Usuário">
              <el-input v-model="form.username" class="custom-field" placeholder="Nome do usuário" />
            </el-form-item>
            <el-form-item label="Senha">
              <el-input v-model="form.password" type="password" class="custom-field" placeholder="Sua senha" />
            </el-form-item>
            <el-form-item>
              <div style="width: 100%; text-align: right;">
                <el-link :underline="false" target="_blank">Esqueceu a senha?</el-link>
              </div>
            </el-form-item>
            <!-- Btn -->
            <el-form-item>
              <CustomBtn name="Fazer Login" width="100" @click="onSubmit" />
            </el-form-item>
            <el-form-item>
              Ainda não tem conta?
              <el-link :underline="false" target="_blank" style="margin-left: 4px; color: #663399; font-weight: 600;" @click="toPlans">Cadastre-se</el-link>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="box-bg"></div>
  </div>
</template>

<script setup lang="ts">
import { UseUserStore } from '~/stores/user';
const router = useRouter();
const userStore = UseUserStore()

const form = reactive({
  username: 'johnd',
  password: 'm38rmF$'
})

const onSubmit = async () => {
  const result = await userStore.login(form)
  if (result) {
    ElNotification({
      title: 'Sucesso',
      message: 'Usuário logado com sucesso.',
      type: 'success',
    })
    router.push('/home');
  } else {
    ElNotification({
      title: 'Erro',
      message: 'Usuário e/ou senha incorretos.',
      type: 'error',
    })
  }
}

const toPlans = () => {
  router.push('/plan');
}

definePageMeta({
  public: true
})
</script>
