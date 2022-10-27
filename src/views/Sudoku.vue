<script setup lang="ts">
import PuzzleContainer from '../components/sudokus/puzzle_container/PuzzleContainer.vue'
import AppBar from '../components/sudokus/AppBar.vue';
</script>
<!-- 参考链接 -->
<!-- https://github.com/3derekmason/vuedoku -->
<template>
    <div class="app">
        <AppBar />
        <PuzzleContainer />
    </div>
</template> 

<style scoped>
@import "../assets/css/sudoku-base.css";

.app {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>