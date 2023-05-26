// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        "primevue/resources/themes/lara-light-blue/theme.css",
        "primevue/resources/primevue.css",
        "/node_modules/primeflex/primeflex.css"
    ],
	build: {
		transpile: ["primevue"]
	}
})