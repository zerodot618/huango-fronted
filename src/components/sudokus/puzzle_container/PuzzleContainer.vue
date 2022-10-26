<script setup lang="ts">
import { countNInBoard, validateGameBoard } from "../utils/sudoku";

import PuzzleBoard from "./puzzle/PuzzleBoard.vue";
import PuzzleControls from "./puzzle_controls/PuzzleControls.vue";
import GameTimer from "./GameTimer.vue";
import LoadingPuzzle from "./LoadingPuzzle.vue";
import { ref, onMounted } from 'vue'

const api = "https://vuedoku-api.herokuapp.com/api/";

const loading = ref(true)
const activeValue = ref(0)
const currentTime = ref(0)
const completeTime = ref(0)

const originalBoard = ref(
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
)

const completeBoard = ref(
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
)

const startTimer = () => {
    if (validateGameBoard(completeBoard.value)) {
        stopTimer()
    } else {
        currentTime.value = currentTime.value + 1
    }
}

const stopTimer = () => {
    completeTime.value = currentTime.value
}

const toggleActive = (input: number) => {
    return countNInBoard(input, completeBoard.value) >= 9
        ? activeValue.value = 0
        : activeValue.value = input
}

const editBoard = (position: Array<number>, newValue: number) => {
    completeBoard.value[position[0]][position[1]] = newValue
}

const resetBoard = () => {
    originalBoard.value.forEach((row, i) => {
        row.forEach((value, j) => {
            editBoard([i, j], value)
        })
    })
}

const buildGameBoard = (game_board: Array<Array<number>>) => {
    originalBoard.value = game_board
    game_board.forEach((row, i) => {
        row.forEach((value, j) => {
            editBoard([i, j], value);
        });
    });
}

const getRandomBoard = () => {
    fetch(api + "random")
        .then((response) => response.json())
        .then((data) => {
            buildGameBoard(data.game_board);
            loading.value = false;
        });
}

const getDifficulty = (diffcult: string) => {
    fetch(api + diffcult)
        .then((response) => response.json())
        .then((data) => {
            const index = Math.floor(Math.random() * data.length);
            buildGameBoard(data?.[index].game_board);
            currentTime.value = 0;
        });
}

onMounted(() => {
    getRandomBoard()
    setInterval(startTimer, 1000)
})

</script>
<template>
    <div class="container" v-if="!loading">
        <div class="difficulty">
            <p>Choose puzzle difficulty:</p>
            <button @click="getDifficulty('easy')">Easy</button>
            <button @click="getDifficulty('medium')">Medium</button>
            <button @click="getDifficulty('hard')">Hard</button>
        </div>
        <GameTimer :currentTime="currentTime" />

        <PuzzleBoard :activeValue="activeValue" :toggleActive="toggleActive" :originalBoard="originalBoard"
            :completeBoard="completeBoard" :editBoard="editBoard" :completeTime="completeTime" />
        <PuzzleControls :activeValue="activeValue" :toggleActive="toggleActive" :originalBoard="originalBoard"
            :completeBoard="completeBoard" :editBoard="editBoard" :resetBoard="resetBoard" />
    </div>
    <div v-else>
        <LoadingPuzzle />
    </div>
</template>
<style scoped>
.container {
    width: 800px;
    height: calc(100vh - 88px);
    background: var(--bg-teal-mute);
    border-left: 0.5px solid #ffffff80;
    border-right: 0.5px solid #ffffff80;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
}

.difficulty {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
}

.difficulty button {
    height: 32px;
    border: 0.5px solid #ffffff80;
    border-radius: 4px;
    background: transparent;
    color: var(--color-font-teal);
}

.difficulty button:hover {
    color: var(--color-selected);
    cursor: pointer;
}

.difficulty button:active {
    border: 0.5px solid var(--color-selected);
}

@media only screen and (max-width: 600px) {
    .container {
        justify-content: flex-start;
        gap: 24px;
    }

    .difficulty {
        margin-top: 20px;
        font-size: 10px;
    }

    .difficulty button {
        height: 24px;
    }
}
</style>