import { defineStore } from 'pinia'
import {computed, ref} from 'vue'
import { supabase } from '../utils/supabase'


export const useProductStore = defineStore('product', () => {

    const products = ref([]);
    const allProducts = computed(() => {
       return products.value;
    });

    async function getAllProducts() {
        const data = await supabase.from('products').select();
        if (data.error) {
            console.error(data.error);
            return;
        }

        data.data.forEach(product => {
            products.value.push(product);
        });
    }

    async function getProductByCategory(category) {
        //api supabase
    }

    async function getPopularProducts() {
        const data = await supabase.from('products').select(6);
        if (data.error) {
            console.error(data.error);
            return;
        }

        data.data.forEach(product => {
            products.value.push(product);
        });
    }

    return {
        allProducts,
        getAllProducts,
        getProductByCategory,
        getPopularProducts,
    }
});
