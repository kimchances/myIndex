
export default {
  server: {
    port: 8888, // default: 3000
    host: 'localhost' // default: localhost,
  },

  env: {
    // 调试
    // baseUrl: 'http://localhost:7001'
    // 正式服
    baseUrl: 'http://kimchanwill.com/egg/'
  },

  router: {
    base: '/nuxt/'
  },
  mode: 'universal',
  /*
  ** html头
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    // link: [
    //   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    // ]
  },
  /*
  ** 顶部加载颜色
  */
  loading: { color: '#fff' },
  /*
  ** 配置一个CSS入口
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    "~/assets/scss/main.scss"
  ],

  //加载全局scss
  styleResources: {
    // scss: [
    //   '~/static/main.scss'
    // ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** 插件加载
  */
  plugins: [
    '@/plugins/axios',
    '@/plugins/element-ui',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */

  modules: [
    // 解析SASS
    '@nuxtjs/style-resources'
  ],

  //如下配置全局使用的变量、mixins和函数文件路径
  styleResources: {
    scss: [
      './assets/scss/_variables.scss',
      './assets/scss/_mixins.scss'
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    // transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
