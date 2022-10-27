<script setup lang="ts">
import { loginFields } from "@constants/formFields";
import Input from "@components/auth/Input.vue";

const handleChange = (e: any) => {

}

const loginState: Array<number> = []


</script>

<template>
    <div class="w-2/5 mx-auto">
        <form class="mt-8 space-y-6">
            <div class="-space-y-px">
                <Input v-for="(item, index) in loginFields" :key="index" :handleChange="handleChange"
                    :value="loginState[item.id]" :labelText="item.labelText" :labelFor="item.labelFor" :id="item.id"
                    :name="item.name" :type="item.type" :isRequired="item.isRequired" :placeholder="item.placeholder" />
            </div>
        </form>
    </div>
</template>

<style scoped>

</style>