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
</script>

<template>
  <div class="border rounded-2xl overflow-hidden shadow hover:shadow-md transition">
    <img :src="props.img" :alt="props.title" class="w-full h-60 object-cover">
    <div class="p-4">
      <h4 class="font-semibold text-lg">{{ props.title }}</h4>
      <p class="text-gray-600">{{ props.desc }}</p>
      <p class="font-bold mt-2">{{ props.price }} €</p>
    </div>
  </div>
</template>
