<script setup>
import ProductCard from "@/components/ProductCard.vue";

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
    <main class="max-w-7xl mx-auto px-4 py-10">
        <div class="flex flex-col md:flex-row gap-8">
            <!-- Filtres -->
            <aside class="md:w-1/4">
                <h2 class="text-lg font-semibold mb-4">Filtres</h2>
                <div class="space-y-4">
                    <div>
                        <label class="block font-medium mb-1">Genre</label>
                        <select class="w-full border px-3 py-2 rounded">
                            <option>Tous</option>
                            <option>Homme</option>
                            <option>Femme</option>
                        </select>
                    </div>
                    <div>
                        <label class="block font-medium mb-1">Prix</label>
                        <input type="range" min="30" max="200" class="w-full">
                    </div>
                    <div>
                        <label class="block font-medium mb-1">Pointure</label>
                        <div class="flex flex-wrap gap-2">
                            <button class="border px-2 py-1 rounded hover:bg-gray-100">39</button>
                            <button class="border px-2 py-1 rounded hover:bg-gray-100">40</button>
                            <button class="border px-2 py-1 rounded hover:bg-gray-100">41</button>
                        </div>
                    </div>
                </div>
            </aside>

            <section class="flex-1">
                <h2 class="text-xl font-semibold mb-6">Chaussures pour Homme</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <ProductCard v-for="product in products" :title="product.title" :price="product.price" :desc="product.desc" :img="product.img"/>
                </div>
            </section>
        </div>
    </main>
</template>
