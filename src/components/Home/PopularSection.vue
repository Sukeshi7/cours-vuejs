<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { useProductStore } from "@/stores/useProductStore.js"
import { onMounted } from 'vue'

const productStore = useProductStore()

onMounted(() => {
    productStore.getPopularProducts()
})
</script>

<template>
  <section class="py-12">
    <div class="max-w-7xl mx-auto px-4">
      <h3 class="text-2xl font-semibold mb-8 text-center">Produits en vedette</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ProductCard v-for="product in productStore.popularProducts" :title="product.title" :price="product.price" :desc="product.desc" :img="product.img"/>
        </div>
    </div>
  </section>
</template>
