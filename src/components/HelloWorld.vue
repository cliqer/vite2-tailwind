<template lang="pug">
div.bg-red-600
  h1 {{ msg }}

  p.bg-red-600
    a(href="https://vitejs.dev/guide/features.html" target="_blank") >Vite Documentation |
    a(href="https://v3.vuejs.org/" target="_blank") >Vue 3 Documentation
  p {{ test }}

  button(@click="state.count++") count is: {{ state.count }}
  p Edit code components/HelloWorld.vue to test hot module replacement.

</template>

<script setup>
import { defineProps, ref, reactive } from 'vue'

defineProps({
  msg: String
})

const test = ref('lalala')
const state = reactive({ count: 0 })
test.value = 'aasdaaaa'
</script>
