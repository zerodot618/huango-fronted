<script setup lang="ts">
import { ref, reactive } from 'vue'

const props = defineProps({
    default: String,
    digitCount: { type: Number, required: true }
})

const digits = reactive(new Array<string>)

if (props.default && props.default.length === props.digitCount) {
    for (let i = 0; i < props.digitCount; i++) {
        digits[i] = props.default.charAt(i)
    }
} else {
    for (let i = 0; i < props.digitCount; i++) {
        digits[i] = '';
    }
}

const otpCont = ref(null)

const emit = defineEmits(['update:otp']);

const isDigitsFull = () => {
    for (const elem of digits) {
        if (elem == null || elem == undefined || elem == '') {
            return false;
        }
    }

    return true;
}

const handleKeyDown = (event: KeyboardEvent, index: number) => {
    console.log(event)
    if (event.key !== "Tab" &&
        event.key !== "ArrowRight" &&
        event.key !== "ArrowLeft"
    ) {
        event.preventDefault();
    }

    if (event.key === "Backspace") {
        digits[index] = '';

        if (index != 0) {
            (otpCont!.value!.children!)[index - 1].focus();
        }

        return;
    }

    if ((new RegExp('^([0-9])$')).test(event.key)) {
        digits[index] = event.key;

        if (index != props.digitCount - 1) {
            (otpCont!.value!.children!)[index + 1].focus();
        }
    }

    if (isDigitsFull()) {
        emit('update:otp', digits.join(''))
    }
}

</script>
<template>
    <div ref="otpCont">
        <input type="text" v-for="(el, ind) in digits" :key="el + ind" v-model="digits[ind]"
            @keydown="handleKeyDown($event, ind)"
            class="h-16 w-9 text-center border-2 border-solid border-black inline-block rounded m-1 text-5xl focus:outline focus:outline-2 focus:outline-black"
            :autofocus="ind === 0" :placeholder="(ind + 1).toString()" maxlength="1" />
    </div>
</template>

<style scoped>
.digit-box {
    height: 4rem;
    width: 2rem;
    border: 2px solid black;
    display: inline-block;
    border-radius: 5px;
    margin: 5px;
    font-size: 3rem;
}

.digit-box:focus {
    outline: 3px solid black;
}
</style>