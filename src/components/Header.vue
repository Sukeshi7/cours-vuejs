<script setup>

import {useCheckoutStore} from "@/stores/useCheckoutStore.js";

const menuItems = [
    {
        name: 'Accueil',
        url: '/'
    },
    {
        name: 'Catégories',
        url: '/categories'
    },
    {
        name: 'Sous-Catégories',
        url: '/subcategories'
    },
    {
        name: 'Produit',
        url: '/product'
    },
    {
        name: 'Panier',
        url: '/cart'
    },
]

const checkoutStore = useCheckoutStore();

</script>

<template>
    <header class="border-b shadow-sm sticky top-0 bg-white z-50">
        <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 class="text-2xl font-bold">Chaussures Élégance</h1>
            <nav class="space-x-6 hidden md:flex">
                <router-link
                    v-for="menuItem in menuItems" :key="menuItem.name"
                    :to="menuItem.url" class="hover:text-blue-600">{{ menuItem.name }}
                </router-link>
                <router-link :to="{name: 'cart'}" class="hover:text-blue-600">
                    Panier ({{ checkoutStore.productCount }})
                </router-link>
            </nav>
            <button class="md:hidden">☰</button>
        </div>
    </header>
</template>
