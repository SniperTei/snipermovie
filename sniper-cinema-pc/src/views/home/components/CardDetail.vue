<script setup>
import { defineProps, onMounted } from 'vue'
defineProps({
  itemDetail: {
    type: Object,
    required: true
  }
})
onMounted(() => {
  console.log('CardDetail mounted')
})
</script>

<template>
  <div class="card-detail">
    <!-- 封面 -->
    <img :src="itemDetail.cover" alt="cover" />
    <!-- 电影名称 -->
    <span>{{ itemDetail.name }}</span>
  </div>
</template>

<style lang="scss" scoped>

</style>