<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from './stores/counter'

const { count } = storeToRefs(useCounterStore())
const { increment } = useCounterStore()
</script>

<template>
  <h1>count {{ count }}</h1>
  <button @click="increment">+1</button>
</template>

<style scoped lang="scss"></style>
