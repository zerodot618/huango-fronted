<script setup lang="ts">
import PuzzleRow from "./PuzzleRow.vue";
import { boardIsFull, validateGameBoard } from "../../utils/sudoku";

const props = defineProps({
    activeValue: { type: Number, required: true },
    toggleActive: { type: Function, required: true },
    completeBoard: { type: Array<Array<number>>, required: true },
    originalBoard: { type: Array<Array<number>>, required: true },
    editBoard: { type: Function, required: true },
    completeTime: { type: Number, required: true },
})

const validation = (boardArray: Array<Array<number>>) => {
    return validateGameBoard(boardArray)
}

</script>
<template>
    <div v-if="validation(completeBoard)" class="puzzle-board">
        <div class="congrats">
            <h1>Great Job!</h1>
            <h4>Time to complete:</h4>
            <h4>
                {{ Math.floor(completeTime / 60) }} minutes and
                {{ Math.floor(completeTime % 60) }} seconds.
            </h4>
        </div>
    </div>

    <div v-else-if="boardIsFull(completeBoard)" class="puzzle-board">
        <PuzzleRow v-for="(row, i) in completeBoard" :originalBoard="originalBoard" :completeBoard="completeBoard"
            :editBoard="editBoard" :key="i" :rowIndex="i" :rowData="row" :activeValue="activeValue"
            :toggleActive="toggleActive" :style="{ boxShadow: '0 2px 4px #D50000' }" />
    </div>

    <div v-else class="puzzle-board">
        <PuzzleRow v-for="(row, i) in completeBoard" :originalBoard="originalBoard" :completeBoard="completeBoard"
            :editBoard="editBoard" :key="i" :rowIndex="i" :rowData="row" :activeValue="activeValue"
            :toggleActive="toggleActive" />
    </div>
</template>
<style scoped>
.puzzle-board {
    width: 70%;
    height: 70%;
    aspect-ratio: 1/1;
    background: #ffffff20;
    display: flex;
    flex-wrap: wrap;
    box-shadow: 0 0 4px var(--font-teal-transparent);
}

.puzzle-board .congrats {
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
    animation: fadeIn 1s;
}

.congrats h1 {
    font-size: 64px;
}

.congrats h4 {
    text-align: center;
}

h4:nth-child(3n) {
    color: var(--color-selected);
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>