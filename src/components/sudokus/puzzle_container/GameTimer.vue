<script setup lang="ts">

const props = defineProps({
    currentTime: { type: Number, required: true },
})

const formatTime = (seconds: number) => {
    let timeTuple = [Math.floor(seconds / 60), Math.floor(seconds % 60)];
    let timeString: string = (timeTuple[1]).toString()
    if (timeTuple[1] < 10) {
        timeString = "0" + timeTuple[1].toString
    }
    return timeString
}
</script>

<template>
    <div class="timer">
        {{ formatTime(currentTime)[0] }}:{{ formatTime(currentTime)[1] }}
    </div>
</template>

<style scoped>
.timer {
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 4px;
}
</style>