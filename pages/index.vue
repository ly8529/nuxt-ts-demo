<template>
  <div class="red filter">hhhh 我是红色字体</div>
  <h1 class="text-3xl font-bold underline" @click="addCount">
    {{ counterStore.count }}
  </h1>
  <NuxtIcon name="art" class="text-32px"></NuxtIcon>
</template>
<script setup lang="ts">
import { useCounterStore } from "../store/index";
const counterStore = useCounterStore();
function addCount() {
  counterStore.increment();
}
</script>
<style lang="scss">
@import url(assets/common/reset.scss);
.filter {
  filter: blur(10px);
  display: flex;
}
</style>
