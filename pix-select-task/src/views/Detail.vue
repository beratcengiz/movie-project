<template>
    <div class="container">
        <div class="row">
            <div class="d-flex flex-column w-100">
                <h3 class="text-white" style="margin-top:80px">Film Detayı</h3>
                <div style="border: 1px solid white;" class="w-100"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 mt-5" v-for="data in data" :key="data">
                <div class="card" style="background-color: #121212;border:none;border-radius: 2%;">
                    <div class="row no-gutters">
                        <div class="col-md-4 d-flex justify-content-center align-items-center" style="padding-top: 0;margin-top:0">
                            <Card :data="data"  style="width: 350px;height: 350px;"></Card>
                        </div>
                        <div class="col-md-8">
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
const { data } = Detail(route);
</script>
