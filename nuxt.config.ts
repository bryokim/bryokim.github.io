// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxtjs/google-fonts", "@nuxt/image"],

  ui: {
    icons: ["vscode-icons", "bi", "logos"],
  },

  googleFonts: {
    families: {
      "Josefin+Sans": true,
      Lato: [100, 300],
      "Crimson Pro": {
        wght: "199..900",
        ital: "199..700",
      },
      Cinzel: [500],
      "Josefin Slab": [400],
    },
  },
});