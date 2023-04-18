import { UseUserStore } from '~/stores/user'

export default defineNuxtPlugin(() => {
  addRouteMiddleware(
    'auth',
    (to) => {
      if (to.meta.public) return
      const systemStore = UseUserStore()
      if (!systemStore.token)
        return navigateTo('/login')
    },
    { global: true }
  )
})
