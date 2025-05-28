import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ['~/assets/css/tailwind.css'],
  modules: ['shadcn-nuxt', '@nuxt/icon'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
})