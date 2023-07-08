<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12" v-for="data in data" :key="data">
                <div class="card mt-5" style="background-color: #f8f9fa;border:none">
                    <div class="row no-gutters">
                        <div class="col-md-5">
                            <Card :data="data"></Card>
                        </div>
                        <div class="col-md-6">
                            <DetailCardDesc :data="data"></DetailCardDesc>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import Detail from '../scripts/detail.js'
import Card from '../components/Card.vue';
import DetailCardDesc from '../components/DetailCardDesc.vue';
const route = useRoute();
const {data} = Detail(route);
</script>
