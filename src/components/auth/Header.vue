<script setup lang="ts">
const props = defineProps<{
    heading: string,
    paragraph: string,
    linkName: string,
    linkUrl: string,
}>()
</script>

<template>
    <div class="mt-10 mb-10">
        <div class="flex justify-center">
            <img alt="" class="h-14 w-14"
                src="https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315" />
        </div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {{ heading }}
        </h2>
        <p class="text-center text-sm text-gray-600 mt-5">
            {{ paragraph }}
            <a :href="linkUrl" class="font-medium text-purple-600 hover:text-purple-500">
                {{ linkName }}
            </a>
        </p>
    </div>
</template>

<style scoped>

</style>