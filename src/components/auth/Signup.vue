<script setup lang="ts">
import { signupFields } from "@constants/formFields";
import Input from "@components/auth/Input.vue";
import FormAction from "@components/auth/FormAction.vue";

const handleSubmit = (e: any) => {
    console.log('注册')
    e.preventDefault();
    createAccount()
}

//handle Signup API Integration here
const createAccount = () => {

}
</script>

<template>
    <div class="w-2/5 mx-auto">
        <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
            <div class="">
                <Input v-for="(item, index) in signupFields" :key="index" :labelText="item.labelText"
                    :labelFor="item.labelFor" :id="item.id" :name="item.name" :type="item.type"
                    :isRequired="item.isRequired" :placeholder="item.placeholder" />
                <FormAction action="submit" text="注册" />
            </div>
        </form>
    </div>

</template>

<style scoped>

</style>
