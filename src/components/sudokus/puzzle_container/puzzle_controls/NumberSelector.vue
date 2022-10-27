<script setup lang="ts">
import { countNInBoard } from "../../utils/sudoku";

const props = defineProps({
    activeValue: { type: Number, required: true },
    toggleActive: { type: Function, required: true },
    completeBoard: { type: Array<Array<number>>, required: true },
    originalBoard: { type: Array<Array<number>>, required: true },
})

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const disableSelection = (n: number) => {
    return countNInBoard(n, props.completeBoard) >= 9
}

const erasing = () => {
    return props.activeValue === 0 ? "erasing" : ""
}
</script>
<template>
    <div class="number-selector">
        <img v-if="activeValue === 0" class="erasing" src="../../../../assets/images/eraser.png" width="20" alt="erase"
            @click="() => (toggleActive(0))" />
        <img v-else src="../../../../assets/images/eraser.png" width="20" alt="erase" @click="
        () => (toggleActive(0))" />
        <div class="selection" v-for="number in numbers" :key="number">
            <button v-if="activeValue === number" class="selected" :disabled="disableSelection(number)">
                {{ numbers[number - 1] }}
            </button>
            <button v-else :disabled="disableSelection(number)" @click="() => (toggleActive(number))">
                {{ numbers[number - 1] }}
            </button>
        </div>
    </div>
</template>
<style scoped>
.number-selector {
    width: 80%;
    border: 0.5px solid #ffffff80;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding-left: 8px;
}

.number-selector img {
    filter: invert(87%) sepia(27%) saturate(151%) hue-rotate(306deg) brightness(103%) contrast(101%);
}

.number-selector img:hover {
    cursor: pointer;
}

.number-selector button {
    background: none;
    width: 100%;
    height: 100%;
    border: none;
    color: var(--font-teal);
    font-size: 24px;
}

.number-selector .selection {
    font-weight: 200;
    width: calc(80% / 9);
    display: grid;
    place-content: center;
    font-size: 20px;
}

.number-selector button:hover {
    font-size: 32px;
    color: var(--color-selected);
    cursor: pointer;
}

.number-selector button:disabled {
    opacity: 0.6;
}

.number-selector button:disabled:hover {
    font-size: 24px;
    color: var(--font-teal);
    cursor: default;
}

.number-selector .erasing {
    filter: invert(62%) sepia(31%) saturate(888%) hue-rotate(295deg) brightness(99%) contrast(104%);
}

.selection .selected {
    font-size: 32px;
    font-weight: 500;
    color: var(--color-selected);
}

@media only screen and (max-width: 600px) {
    .numberSelector {
        width: 360px;
    }

    .numberSelector button {
        font-size: 20px;
    }

    .numberSelector .selection {
        width: 28px;
        height: 100%;
        border: none;
    }
}

.selection .selected {
    font-size: 24px;
    font-weight: 600;
    color: #ffffff;
}
</style>