<script setup lang="ts">

</script>
<template>
    <div class="app-bar">
        <h1>数独游戏</h1>
        <div class="button-row">
            <p>阅读关于该应用程序</p>
            <a href="">逻辑</a>
            <a href="">UI</a>
            <a href="">逻辑 + UI/UX</a>
        </div>
    </div>
</template>
<style scoped>
.app-bar {
    padding-left: 40px;
    padding-right: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 88px;
}

.app-bar .button-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
}
</style>