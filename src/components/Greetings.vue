
<script setup lang="ts">
import { ref } from 'vue';

interface Props {
    messages: string[]
}

const { messages } = defineProps<Props>()

const randomMessage = () => {
    return messages[Math.floor(Math.random() * messages.length)]
}

const greeting = ref(messages[0])
const setGreeting = (message: string) => {
    greeting.value = message;
}
</script>

<template>
    <div>
        <h3>{{ greeting }}! Thank you for visiting!</h3>
        <button @click="setGreeting(randomMessage())">
            New Greeting
        </button>
    </div>
</template>

<style scoped>
button {
    background-image: linear-gradient(to right, #8e2de2, #4a00e0);
    color: rgb(255, 196, 0);
    border: brown solid 1px;
    border-radius: 5px;
    padding: 2px 5px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
}
</style>