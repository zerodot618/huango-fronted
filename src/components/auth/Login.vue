<script setup lang="ts">
import { loginFields } from "@constants/formFields";
import Input from "@components/auth/Input.vue";
import FormExtra from "@components/auth/FormExtra.vue";
import FormAction from "@components/auth/FormAction.vue";

const handleSubmit = (e: any) => {
    console.log('登录')
    e.preventDefault();
    authenticateUser();
}

// Handle Login API Integration here
const authenticateUser = () => {

}

</script>

<template>
    <div class="w-2/5 mx-auto">
        <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
            <div class="-space-y-px">
                <Input v-for="(item, index) in loginFields" :key="index" :labelText="item.labelText"
                    :labelFor="item.labelFor" :id="item.id" :name="item.name" :type="item.type"
                    :isRequired="item.isRequired" :placeholder="item.placeholder" />
            </div>

            <FormExtra />
            <FormAction action="submit" text="登录" />
        </form>
    </div>
</template>

<style scoped>

</style>