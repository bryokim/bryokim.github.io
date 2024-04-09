// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: { prerender: { failOnError: false } },

  modules: ["@nuxt/ui", "@nuxtjs/google-fonts"],

  ui: {
    icons: ["vscode-icons", "bi", "logos"],
  },

  googleFonts: {
    families: {
      "Josefin+Sans": true,
      Lato: [100, 300],
      "Crymson Pro": {
        wght: "199..900",
        ital: "199..700",
      },
      Cinzel: [500],
      "Josefin Slab": [400],
    },
  },
});
