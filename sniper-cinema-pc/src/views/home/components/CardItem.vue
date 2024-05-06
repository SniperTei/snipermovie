<script setup>
import { defineProps, onMounted } from 'vue'
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
onMounted(() => {
  console.log('CardItem mounted')
})
</script>

<template>
  <div class="card-item">
    <!-- 背景图 -->
    <img :src="item.cover" alt="cover" />
    <!-- 电影名称 -->
    <span>{{ item.name }}</span>
    <!-- 标签 -->
    <div class="tags">
      <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
    </div>
    <!-- 演员列表 -->
    <div class="actors">
      <span v-for="actor in item.actors" :key="actor">{{ actor }}</span>
    </div>
    <!-- 播放量 -->
    <span>播放量：{{ item.playCount }}</span>
    <!-- 第几集 -->
    <span v-if="item.type === 'drama'">第{{ item.episode }}集</span>
  </div>
</template>

<style lang="scss" scoped>
.card-item {
  position: relative;
  // width: 300px;
  width: 190px;
  margin: 20px;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  span {
    display: block;
    font-size: 16px;
    font-weight: bold;
    margin-top: 2px;
  }
  .tags {
    span {
      font-size: 12px;
      display: inline-block;
      margin-right: 10px;
      padding: 5px;
      background-color: #409eff;
      color: #fff;
      border-radius: 5px;
    }
  }
  .actors {
    margin-top: 5px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    span {
      display: inline-block;
      margin-right: 10px;
      padding: 5px;
      background-color: #f0f0f0;
      border-radius: 5px;
    }
  }
}
</style>