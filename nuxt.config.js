export default {
	srcDir: 'src',
	target: 'static',
	components: true,
	server: {
		host: '0.0.0.0',
	},
	buildModules: ['@nuxtjs/pwa'],
	pwa: {
		manifest: {
			name: 'Nuxt app',
			short_name: 'Nuxt app',
		},
	},
}
