<script setup lang="ts">
import { countNInBoard } from "../../utils/sudoku"

const props = defineProps({
    value: { type: Number, required: true },
    rowIndex: { type: Number, required: true },
    cellIndex: { type: Number, required: true },
    activeValue: { type: Number, required: true },
    toggleActive: { type: Function, required: true },
    completeBoard: { type: Array<Array<number>>, required: true },
    originalBoard: { type: Array<Array<number>>, required: true },
    editBoard: { type: Function, required: true },
})

const editCell = () => {
    if (props.activeValue) {
        props.editBoard([props.rowIndex, props.cellIndex], props.activeValue)
        if (countNInBoard(props.activeValue, props.completeBoard) >= 9) {
            props.toggleActive(0)
        }
    } else if (props.activeValue === 0) {
        props.editBoard([props.rowIndex, props.cellIndex], 0)
    } else {
        console.log(new Error("No number has been selected"))
    }
}

const disableOriginal = () => {
    return props.originalBoard[props.rowIndex][props.cellIndex] !== 0
}


</script>
<template>
    <button class="puzzle-cell" :disabled="disableOriginal" @click="() => (editCell())">
        <h1>{{ value === 0 ? "" : value }}</h1>
    </button>
</template>
<style scoped>
.puzzle-cell {
    height: 100%;
    width: calc(100% / 9);
    border: 0.5px solid #ffffff80;
    display: grid;
    place-content: center;
    background: var(--bg-teal);
}

.puzzle-cell:nth-child(3n) {
    border-right: 1px solid var(--font-teal);
}

.puzzle-cell:hover {
    cursor: pointer;
    border: 1px solid #ffffff;
}

.puzzle-cell:active {
    border: 1px solid var(--color-selected);
}

.puzzle-cell h1 {
    font-weight: 200;
    font-size: 24px;
    color: var(--font-teal);
}

button:disabled h1 {
    font-size: 28px;
    font-weight: 800;
    color: var(--color-selected-soft);
}
</style>