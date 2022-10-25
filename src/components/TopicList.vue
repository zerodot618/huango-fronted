<script setup lang="ts">
import SingleTopic from "./SingleTopic.vue";

const props = defineProps(['posts'])

</script>

<template>
    <div class="post-list">
        <SingleTopic v-for="post in posts" :key="post.id" :post="post"></SingleTopic>
    </div>
</template> 