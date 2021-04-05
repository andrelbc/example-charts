import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('../layouts/MainLayout.vue'),
            children: [
                {path: "", component: () => import('../pages/Home.vue')}
            ]
        }
    //   {
    //     path: '/',
    //     name: 'Home',
    //     component: Home
    //   },
    //   {
    //     path: '/contato',
    //     name: 'Contato',
    //     component: Contato
    //   }
    ]
  })