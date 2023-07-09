<template>
    <div class="card-body ml-4">
        <h2>{{ props.data.title }}</h2>
        <div class="mb-4" style="border-bottom: 2px solid grey;"></div>
        <p style="font-weight: 600;" class="text-secondary">Oy kullanan kişi sayısı - <span class="text-success">{{ props.data.vote_count }}</span></p>
        <p style="font-weight: 600;" class="text-secondary">Orjinal İsim - <span class="text-success">{{ props.data.original_title }}</span></p>
        <p style="font-weight: 600;" class="text-secondary">Kısa açıklama - <span class="text-success">{{ props.data.tagline }}</span></p>
        <p style="font-weight: 600;" class="text-secondary">İmdb id - <span class="text-success">{{ props.data.imdb_id }}</span></p>
        <p style="font-weight: 600;" class="text-secondary">İncelenme Sayısı - <span class="text-success">{{ props.data.runtime }}</span></p>
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