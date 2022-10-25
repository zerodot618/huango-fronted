<script setup lang="ts">
const props = defineProps(['post'])

const postTitle = (post: any) => post.user + "@" + post.date;

</script>

<template>
    <div class="single-post">
        <h3>{{ postTitle(post) }}</h3>
        <p>{{ post.post }}</p>
    </div>
</template> 