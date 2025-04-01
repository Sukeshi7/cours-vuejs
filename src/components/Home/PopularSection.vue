<script setup>
import ProductCard from '@/components/ProductCard.vue'

const products = [
  {
    title: 'Manteau',
    price: 10,
    desc: 'chaud',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvAz8bSMDxZvg1ZjElGs285z3WDhxMySLcA&s'
  },
  {
    title: 'Chaussure',
    price: 20,
    desc: 'sympa',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvAz8bSMDxZvg1ZjElGs285z3WDhxMySLcA&s'
  },
  {
    title: 'Pull',
    price: 30,
    desc: 'laine',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvAz8bSMDxZvg1ZjElGs285z3WDhxMySLcA&s'
  },
  {
    title: 'Chaussettes',
    price: 40,
    desc: 'pilou',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvAz8bSMDxZvg1ZjElGs285z3WDhxMySLcA&s'
  }
]
</script>

<template>
  <section class="py-12">
    <div class="max-w-7xl mx-auto px-4">
      <h3 class="text-2xl font-semibold mb-8 text-center">Produits en vedette</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard v-for="product in products" :title="product.title" :price="product.price" :desc="product.desc" :img="product.img"/>
      </div>
    </div>
  </section>
</template>
