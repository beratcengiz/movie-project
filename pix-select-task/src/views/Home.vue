<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-4" v-for="data in data" :key="data">
                    <Card :data="data"></Card>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Card from '../components/Card.vue'
import Hello from '../scripts/home.js'
import { onMounted } from 'vue';
const { getFavoriteMovies, data, success } = Hello();
onMounted(() => {
    getFavoriteMovies();
})
</script>