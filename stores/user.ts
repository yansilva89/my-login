import { defineStore } from "pinia"

export const UseUserStore = defineStore('user', () => {
  const token = ref('')
  const user = reactive({
    id:0,
    email:'',
    username:'',
    password:'',
    name:{
        firstname:'',
        lastname:''
    },
    address:{
        city:'',
        street:'',
        number:3,
        zipcode:'',
        geolocation:{
            lat:'',
            long:''
        }
    },
    phone:''
  })

  const addUser = async (objectData: any) => {
    const data = await $fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      body:JSON.stringify(objectData)
    } ) as any
    if (data.id) {
      Object.assign(user, data)
      await login({ username: objectData.username, password: objectData.password })
      return true
    }
    return false
  }

  const login = async (objectData: any) => {
    try {
      const data = await $fetch( 'https://fakestoreapi.com/auth/login', {
        method: 'POST',
        body: JSON.stringify(objectData)
      } ) as any
      if (data.token) {
        token.value = data.token
        getUser()
        return true
      }
    } catch {
      return false
    }
  }

  const getUser = async () => {
    const data = await $fetch('https://fakestoreapi.com/users/1', {
      method: 'GET',
    } ) as any
    if (data.id) {
      Object.assign(user, data)
      return true
    }
    return false
  }

  return { user, login, getUser, addUser }
})