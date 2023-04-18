<template>
  <el-form :model="form" label-position="top">
    <el-form-item label="Nome" required>
      <el-input v-model="form.username" class="custom-field" placeholder="Seu nome" />
    </el-form-item>
    <el-form-item label="Celular" required>
      <el-input v-model="form.phone" class="custom-field" placeholder="(99) 99999-0000" />
    </el-form-item>
    <el-form-item label="E-mail" required>
      <el-input v-model="form.email" class="custom-field" placeholder="Informe seu e-mail" />
    </el-form-item>
    <el-form-item label="Senha" required>
      <el-input v-model="form.password" type="password" class="custom-field" placeholder="Crie sua senha" />
    </el-form-item>
    <el-form-item label="Confirmar Senha" required>
      <el-input v-model="form.confirmPassword" type="password" class="custom-field" placeholder="Confirme sua senha" />
    </el-form-item>
    <!-- Btn -->
    <el-form-item>
      <CustomBtn name="Criar Conta" width="100" @click="onSubmit" />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { UseUserStore } from '~/stores/user';
const router = useRouter();
const userStore = UseUserStore()

const form = reactive({
  username: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const onSubmit = async () => {
  if (form.username, form.phone, form.email, form.password, form.confirmPassword) {
    if (form.password === form.confirmPassword) {
      const result = await userStore.addUser(form)
      if (result) {
        ElNotification({
          title: 'Sucesso',
          message: 'Usuário cadastrado com sucesso.',
          type: 'success',
        })
        router.push('/home');
      } else {
        ElNotification({
          title: 'Erro',
          message: 'Usuário e/ou Senha inválidos.',
          type: 'error',
        })
      }
    } else {
      ElNotification({
        title: 'Senhas diferentes',
        message: 'Os campos Senha e Confirmar Senha precisam ter valores iguais.',
        type: 'error',
      })
    }
  } else {
    ElNotification({
      title: 'Erro',
      message: 'Preencha todos os campos.',
      type: 'error',
    })
  }
}
</script>

<style scoped></style>