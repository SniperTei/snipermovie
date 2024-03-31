<script setup>
import CardItem from './CardItem.vue'
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
    <div class="card-grid__title">
      <!-- 左上角小标题 -->
      <div class="card-grid__main-title">
        {{ title }}
      </div>
      <!-- 标题旁边的子分类 -->
      <div class="card-grid__sub-title">
        {{ subTitle }}
    </div>
    </div>
    <!-- 卡片内容Grid -->
    <div class="card-grid__content">
      <CardItem v-for="item in itemList" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-grid {
  .card-grid__title {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    .card-grid__main-title {
      font-size: 24px;
      font-weight: bold;
      margin-right: 10px;
    }
    .card-grid__sub-title {
      font-size: 16px;
    }
  }
  .card-grid__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}
</style>