<script setup lang="ts">
import PuzzleCell from './PuzzleCell.vue';

const props = defineProps({
    rowData: { type: Array<number>, required: true },
    rowIndex: { type: Number, required: true },
    activeValue: { type: Number, required: true },
    toggleActive: { type: Function, required: true },
    completeBoard: { type: Array<Array<number>>, required: true },
    originalBoard: { type: Array<Array<number>>, required: true },
    editBoard: { type: Function, required: true },
})
</script>
<template>
    <div class="puzzle-row">
        <PuzzleCell v-for="(digit, i) in rowData" :key="i" :completeBoard="completeBoard" :originalBoard="originalBoard"
            :editBoard="editBoard" :rowIndex="rowIndex" :cellIndex="i" :value="digit" :activeValue="activeValue"
            :toggleActive="toggleActive" />
    </div>
</template>
<style scoped>
.puzzle-row {
    width: 100%;
    height: calc(100% / 9);
    border: 0.5px solid var(--font-teal-transparent);
    display: flex;
}

.puzzle-row:nth-child(3n) {
    border-bottom: 1px solid var(--font-teal);
}
</style>