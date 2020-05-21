import Vue from 'vue'
import Router from 'vue-router'
import myAdvertisementn from '../components/pages/my-advertisement'
import userProfile from '../components/pages/user-profile'
import advertisement from '../components/pages/advertisement'
import thisAdvertisement from '../components/pages/this-advertisement'

Vue.use(Router);

let router = new Router({
    routes:[      
        {
            path:'/',
            name: 'advertisement',
            component: advertisement,
            // meta:{
            //     requiresAuth: true
            // }
        },
        {
            path: '/user',
            name: 'user-profile',
            component: userProfile,
        },
        {
            path: '/my-advertisement',
            name: 'my-advertisement',
            component: myAdvertisementn,
        },
        {
            path: '/this-advertisement',
            name: 'this-advertisement',
            component: thisAdvertisement,
            props: true,
        },

    ],

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