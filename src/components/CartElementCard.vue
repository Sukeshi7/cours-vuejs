<script setup>
import { useCheckoutStore } from '@/stores/useCheckoutStore.js'

const props = defineProps({
    title: String,
    price: {
        type: Number,
        required: true,
        default: 10,
    },
    size: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    },
    img: {
        type: String,
        required: true,
    }
})

//const emit = defineEmits(['deleteCartElement'])

const { removeProduct } = useCheckoutStore()

function deleteElement() {
    // remonter infoavec emit dans le parent
//    emit('deleteCartElement', props.title)
    removeProduct(props.id)
}
</script>

<template>
    <div class="flex items-center justify-between border-b pb-4">
        <div class="flex items-center gap-4">
            <img :src="props.img" class="w-20 h-20 object-cover rounded" alt="Produit">
            <div>
                <p class="font-medium">{{ props.title }}</p>
                <p class="text-gray-500 text-sm">Quantité : {{ props.quantity }}</p>
                <p class="text-gray-500 text-sm">Pointure : {{ props.size }}</p>
            </div>
        </div>
        <div class="text-right">
            <p class="font-bold">{{ props.price }} €</p>
            <button class="text-red-500 text-sm hover:underline mt-1" @click="deleteElement">Supprimer</button>
        </div>
    </div>

</template>
