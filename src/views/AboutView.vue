<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Counter = {{ $counterStore.counter }}</p>
    <p>DoubleCounter = {{ $counterStore.doubleCounter }}</p>
    <button @click="$counterStore.incrementCounter()">Add one</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/CounterStore";

const $counterStore = useCounterStore();
</script>
