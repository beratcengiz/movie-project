<template>
    <div class="card-body ml-4">
        <h2>{{ props.data.original_title }}</h2>
        <div class="mb-4" style="border-bottom: 2px solid grey;"></div>
        <p>Oy kullanan kişi sayısı - {{ props.data.vote_count }}</p>
        <p>Kısa açıklama - {{ props.data.tagline }}</p>
        <p>İmdb id - {{ props.data.imdb_id }}</p>
        <p>Anasayfa - {{ props.data.homepage }}</p>
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