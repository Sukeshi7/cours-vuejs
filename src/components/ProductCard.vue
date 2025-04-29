<script setup>

const props = defineProps({
  title: String,
  price: {
    type: Number,
    required: true,
    default: 10,
  },
  desc: String,
  img: {
    type: String,
    required: true,
  }
})

import { useCheckoutStore} from "@/stores/useCheckoutStore.js"
const { addProduct } = useCheckoutStore()

function addProductInCart() {
  addProduct({
      id: Math.floor(Math.random() * 1000),
      title: props.title,
      price: props.price,
      size: '39',
      quantity: 1,
      img: props.img
  })
}
</script>

<template>
  <div class="border text-center rounded-2xl overflow-hidden shadow hover:shadow-md transition">
    <img :src="props.img" :alt="props.title" class="w-full h-60 object-cover"/>
    <div class="p-4">
      <h4 class="font-semibold text-lg">{{ props.title }}</h4>
      <p class="text-gray-600">{{ props.desc }}</p>
      <p class="font-bold mt-2">{{ props.price }} €</p>
    </div>
      <button class="bg-blue-600 rounded px-4 py-2 text-white mx-auto mb-4" @click="addProductInCart">Ajouter au panier</button>
  </div>
</template>
