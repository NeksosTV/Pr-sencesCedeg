// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss"
  
  ],

  routes: [
    {
      name: 'attendance-form',
      path: '/attendance-form',
      component: '@/components/AttendanceForm.vue'
    }
  ],
})
