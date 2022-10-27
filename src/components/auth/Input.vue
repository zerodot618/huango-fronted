<script setup lang="ts">
const props = defineProps<{
    handleChange: { type: Function, required: true },
    value: { type: String, required: true },
    key: any,
    labelText: { type: String, required: true },
    labelFor?: string,
    id: string,
    name: string,
    type: string,
    isRequired?: boolean,
    placeholder: string,
    customClass?: string,
}>()

const fixedInputClass = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm "
const classString = fixedInputClass + props.customClass
</script>

<template>
    <div class="my-5">
        <label :for="labelFor" class="sr-only">
            {{ labelText }}
        </label>
        <input :onchange="handleChange" :key="key" :value="value" :id="id" :name="name" :type="type"
            :required="isRequired" :class="classString" :placeholder="placeholder" />
    </div>
</template>