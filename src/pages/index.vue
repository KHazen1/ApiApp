<script setup>
import { useApi } from "../composables/useApi";

const {jokes, getJokes} = useApi();
</script>

<template>
  <div class="flex flex-row items-center justify-center">
    <button  @click="getJokes" class="px-6 py-6 mt-12 bg-red-600 rounded-xl hover:bg-red-700 hover:text-red-300">
      JOKE TIME!
      </button>
  </div>
  <p class="flex flex-row items-center justify-center mt-12 text-lg">{{ jokes }}</p>
</template>
