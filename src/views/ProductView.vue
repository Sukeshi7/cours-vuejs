<script setup>

const product = {
    id: 1,
    title: 'Chaussure Cuir Classique',
    price: 80,
    desc: 'Idéale pour le bureau ou les grandes occasions.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvAz8bSMDxZvg1ZjElGs285z3WDhxMySLcA&s',
    sizes: [39, 40, 41, 42]
}
</script>

<template>
    <main class="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        <div>
            <img :src="product.img" class="w-full rounded-xl object-cover" alt="Produit">
        </div>
        <div>
            <h2 class="text-3xl font-bold mb-4">{{ product.title }}</h2>
            <p class="text-gray-600 mb-4">{{ product.desc }}</p>
            <p class="text-2xl font-bold mb-4">{{ product.price }} €</p>

            <div class="mb-4">
                <label class="block font-medium mb-1">Pointure</label>
                <select class="w-full border px-3 py-2 rounded">
                    <option v-for="size in product.sizes">
                        {{ size }}
                    </option>
                </select>
            </div>

            <button class="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition w-full">Ajouter au panier</button>
        </div>

        <!-- TODO ajouter des commentaires / avis en components -->
    </main>
</template>

