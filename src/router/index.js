import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue'),
        },
        {
            path: '/counter',
            name: 'counter',
            component: () => import('@/views/CounterView.vue')
        },
        {
            path: '/product',
            name: 'product',
            component: () => import('@/views/ProductView.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('@/views/CartView.vue')
        },
        {
            path: '/categories',
            name: 'categories',
            component: () => import('@/views/CategoriesView.vue')
        },
        {
            path: '/subcategories',
            name: 'subcategories',
            component: () => import('@/views/SubcategoriesView.vue')
        }
    ],
})

export default router
