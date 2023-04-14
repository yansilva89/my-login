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
          <p class="text">Para acessar sua conta informe seu e-mail e senha</p>
        </div>
        <div>
          <el-form :model="form" label-position="top">
            <el-form-item label="E-mail">
              <el-input v-model="form.username" class="custom-field" placeholder="Seu e-mail" />
            </el-form-item>
            <el-form-item label="Senha">
              <el-input v-model="form.password" class="custom-field" placeholder="Sua senha" />
            </el-form-item>
            <el-form-item>
              <div style="width: 100%; text-align: right;">
                <el-link :underline="false" target="_blank">Esqueceu a senha?</el-link>
              </div>
            </el-form-item>
            <!-- Btn -->
            <CustomBtn @click="onSubmit" />
            <el-form-item>
              Ainda não tem conta? 
              <el-link :underline="false" target="_blank" style="margin-left: 4px; color: #663399; font-weight: 600;">Cadastre-se</el-link>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="box-bg"></div>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  username: '',
  password: ''
})

const onSubmit = async () => {
  console.log('submit!')
  // const data = await $fetch( 'https://fakestoreapi.com/users', {
  //       method: 'POST',
  //       body: form
  //   } ) as any;
  // console.log(data);
}
</script>
