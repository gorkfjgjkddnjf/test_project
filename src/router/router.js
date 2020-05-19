import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/main-block'
import userProfile from '../components/pages/user-profile'

Vue.use(Router);

let router = new Router({
    routes:[      
        {
            path:'/',
            name: 'main',
            component: main,
            // meta:{
            //     requiresAuth: true
            // }
        },
        {
            path: '/user',
            name: 'user-profile',
            component: userProfile,
        },

    ]
});

// router.beforeEach((to, from, next) => {
//     if(to.matched.some(record => record.meta.requiresAuth)){
//         if(store.getters.IS_LOGGED){
//             next()
//             return
//         }
//         next('/login')
//     }else{
//         next()
//     }
// })

export default router