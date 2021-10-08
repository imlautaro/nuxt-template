import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/composition-api/module',
		'nuxt-windicss',
		'unplugin-icons/nuxt',
	],
	components: true,
	srcDir: 'src',
	target: 'static',
}

export default config
