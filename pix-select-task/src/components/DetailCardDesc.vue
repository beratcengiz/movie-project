<template>
    <div class="card-body ml-4 ">
        <h2 class="text-warning">{{ props.data.title }}</h2>
        <div class="mb-4" style="border-bottom: 2px solid rgb(198, 198, 222);"></div>
        <p style="font-weight: 600;" class="text-warning">Oy kullanan kişi sayısı - <span class="text-white">{{ props.data.vote_count }}</span></p>
        <p style="font-weight: 600;" class="text-warning">Orjinal İsim - <span class="text-white">{{ props.data.original_title }}</span></p>
        <p style="font-weight: 600;" class="text-warning">Kısa açıklama - <span class="text-white">{{ props.data.tagline }}</span></p>
        <p style="font-weight: 600;" class="text-warning">İmdb id - <span class="text-white">{{ props.data.imdb_id }}</span></p>
        <p style="font-weight: 600;" class="text-warning">İncelenme Sayısı - <span class="text-white">{{ props.data.runtime }}</span></p>
        <div class="card-body w-100 pb-3 pr-2 pl-0">
            <h5 class="text-warning">Film Açıklaması</h5>
            <p style="color:white">{{ props.data.overview ? props.data.overview : 'Açıklama Yok' }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: ['data'],
    setup(props) {
        return {props}
    }
}
</script>