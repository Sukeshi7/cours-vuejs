<script setup>
import CategoryCard from "@/components/CategoryCard.vue";

const categories = [
    {
        id: 1,
        title: 'Chaussures de Ville',
        desc: 'Classiques, élégantes pour vos journées de travail',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvAz8bSMDxZvg1ZjElGs285z3WDhxMySLcA&s'
    },
    {
        id: 2,
        title: 'Baskets',
        desc: 'Pour le sport ou le quotidien',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvAz8bSMDxZvg1ZjElGs285z3WDhxMySLcA&s'
    },
    {
        id: 3,
        title: 'Bottes',
        desc: 'Pour l\'hiver et les jours de pluie',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvAz8bSMDxZvg1ZjElGs285z3WDhxMySLcA&s'
    }
];
</script>

<template>
    <main class="max-w-7xl mx-auto px-4 py-10">
        <h2 class="text-3xl font-bold mb-8 text-center">Chaussures Homme</h2>

        <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <CategoryCard v-for="category in categories" :title="category.title" :desc="category.desc" :img="category.img"/>
        </section>
    </main>
</template>
