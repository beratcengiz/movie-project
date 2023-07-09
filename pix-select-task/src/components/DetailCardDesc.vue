<template>
    <div class="card-body ml-4">
        <h2 class="text-success">{{ props.data.title }}</h2>
        <div class="mb-4" style="border-bottom: 2px solid rgb(198, 198, 222);"></div>
        <p style="font-weight: 600;" class="text-secondary">Oy kullanan kişi sayısı - <span class="text-dark">{{ props.data.vote_count }}</span></p>
        <p style="font-weight: 600;" class="text-secondary">Orjinal İsim - <span class="text-dark">{{ props.data.original_title }}</span></p>
        <p style="font-weight: 600;" class="text-secondary">Kısa açıklama - <span class="text-dark">{{ props.data.tagline }}</span></p>
        <p style="font-weight: 600;" class="text-secondary">İmdb id - <span class="text-dark">{{ props.data.imdb_id }}</span></p>
        <p style="font-weight: 600;" class="text-secondary">İncelenme Sayısı - <span class="text-dark">{{ props.data.runtime }}</span></p>
        <div class="card-body w-100 pb-3 pr-2 pl-0">
            <h5 class="text-success">Film Açıklaması</h5>
            {{ props.data.overview ? props.data.overview : 'Açıklama Yok' }}
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