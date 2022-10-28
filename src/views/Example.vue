<script setup lang="ts">
import OtpInput from '@components/OtpInput.vue'
import { ref } from "vue";

const otpValue = ref('')
</script>

<template>
    <div class="example-box">
        <p class="text-Lavender">自动焦点验证框</p>
        <OtpInput :digit-count="4" @update:otp="otpValue = $event" />
        <p>当前 OTP 值: {{ otpValue }} </p>
    </div>

</template>

<style scoped>
.example-box {
    margin-left: 20px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>