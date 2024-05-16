<script setup>
import CardDetail from './components/CardDetail.vue'
import { onMounted } from 'vue'
const itemDetail = {
  id: 1,
  name: '飞驰人生2',
  cover: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2622074080.jpg',
  tags: ['喜剧', '爱情'],
  actors: ['沈腾', '黄景瑜', '尹正'],
  playCount: 1000000,
  episode: 0,
  year: 2021,
  area: '中国',
  type: '喜剧',
  permission: 'VIP',
  status: '已完结',
  score: 8.5,
  director: '韩寒',
  desc: '故事发生在《飞驰人生》的四年之后，曾经的赛车手张驰（沈腾 饰）在经历了一系列失败之后，决定重返赛车赛场，与老搭档孙伟（黄景瑜 饰）再度携手合作，共同征战一场全新的赛车比赛。'
}

onMounted(() => {
  console.log('Detail mounted')
})

</script>

<template>
  <div class="card-detail">
    <card-detail :item-detail="itemDetail"></card-detail>
  </div>
</template>

<style scoped>

</style>