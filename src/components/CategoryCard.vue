<script setup>

const props = defineProps({
    title :{
        type: String,
        required: true
    },
    desc :{
        type: String,
        required: true
    },
    img :{
        type: String,
        required: true
    }
})

</script>

<template>
    <a href="#" class="block border rounded-2xl overflow-hidden shadow hover:shadow-md transition">
        <img :src="props.img" alt="Ville" class="w-full h-48 object-cover">
        <div class="p-4">
            <h3 class="font-semibold text-lg">{{ props.title }}</h3>
            <p class="text-gray-600 text-sm">{{ props.desc }}</p>
        </div>
    </a>
</template>
