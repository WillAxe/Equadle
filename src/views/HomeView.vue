<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { generateEquation } from '@/generator/generator.ts'

const equation = ref('')
function handleGenerateEquation() {
  equation.value = generateEquation()
}
</script>

<template>
  <main>
    <button @click="handleGenerateEquation"></button>
    <div class="math-expression-wrapper">
      <div>{{equation}}</div>
    </div>
  </main>
</template>
