<script setup>
import { CardItem } from './CardItem.vue'
import { defineProps, onMounted } from 'vue'
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  itemList: {
    type: Array,
    required: true,
    default: () => []
  }
})

onMounted(() => {
  console.log('CardGrid mounted')
})

</script>

<template>
  <div class="card-grid">
    <!-- 左上角小标题 -->
    <div class="card-grid__title">
      {{ title }}
    </div>
    <!-- 标题旁边的子分类 -->
    <div class="card-grid__sub-title">
      {{ subTitle }}
    </div>
    <!-- 卡片内容Grid -->
    <!-- <div class="card-grid__content">
      <CardItem v-for="item in itemList" :key="item.id" :item="item" />
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.card-grid {
  .card-grid__title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .card-grid__sub-title {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
  }
  .card-grid__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>