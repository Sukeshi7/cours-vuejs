<script setup>

import CartElementCard from "@/components/CartElementCard.vue";
import {computed, ref} from "vue";

const productsInCart = ref(
    [
        {
            id: 1,
            title: 'Produit 1',
            price: 30,
            size: '39',
            quantity: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvAz8bSMDxZvg1ZjElGs285z3WDhxMySLcA&s'
        },
        {
            id: 2,
            title: 'Produit 2',
            price: 50,
            size: '41',
            quantity: 2,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvAz8bSMDxZvg1ZjElGs285z3WDhxMySLcA&s'
        },
        {
            id: 3,
            title: 'Produit 3',
            price: 20,
            size: '42',
            quantity: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvAz8bSMDxZvg1ZjElGs285z3WDhxMySLcA&s'
        },
    ]
)

let totalPrice = computed(() => {
    let result = 0
    for (let i = 0; i < productsInCart.value.length; i++) {
        result += productsInCart.value[i].price * productsInCart.value[i].quantity
    }
    return result;
});

function deleteCartElement(product) {
    productsInCart.value = productsInCart.value.filter(item => item.id !== product.id);
}
</script>

<template>
    <main class="max-w-4xl mx-auto px-4 py-10">
        <h2 class="text-2xl font-bold mb-6">Mon Panier</h2>
        <div class="space-y-6">
            <CartElementCard
                v-for="product in productsInCart"
                :title="product.title"
                :price="product.price"
                :size="product.size"
                :quantity="product.quantity"
                :img="product.img"
                @deleteCartElement="deleteCartElement(product)"
            />

            <!-- Résumé commande -->
            <div class="text-right mt-10">
                <p class="text-lg font-semibold">Total : <span class="text-blue-600">{{ totalPrice }} €</span></p>
                <button class="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">Commander</button>
            </div>
        </div>
    </main>

</template>
