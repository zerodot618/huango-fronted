<script setup lang="ts">
import TopicList from "../components/TopicList.vue";

const posts = [
    {
        id: 1,
        user: "mycurrentuser",
        date: "2021-01-19 15:30:30",
        post: "Today I'm feeling sooooo well."
    },
    {
        id: 2,
        user: "cshannon",
        date: "2021-01-19 15:25:20",
        post: "I think that I love giraffes"
    }
]

</script>

<template>
    <div class="posts">
        <h1>Posts</h1>
        <TopicList :posts="posts"></TopicList>
    </div>
</template>

<style scoped>

</style>