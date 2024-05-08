<script setup>
import CardItem from './CardItem.vue'
import { defineProps, onMounted } from 'vue'
import { ref } from 'vue'
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
  },
  maxShow: { // 最多展示几项
    type: Number,
    default: 8
  },
  showPagination: { // 是否展示分页
    type: Boolean,
    default: true
  }
})

const myItemList = ref(props.itemList)

onMounted(() => {
  console.log('CardGrid mounted')
  // 获取itemList值
  // const myItemList = props.itemList
  console.log('myItemList', myItemList)
  // 如果itemList长度大于maxShow，截取前maxShow项
  if (myItemList.value.length > props.maxShow) {
    myItemList.value = myItemList.value.slice(0, props.maxShow)
  }
  console.log('myItemList2', myItemList)
})

</script>

<template>
  <div class="card-grid">
    <div class="card-grid__head">
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
      <div class="card-grid__random">换一换</div>
    </div>
    <!-- 卡片内容Grid -->
    <div class="card-grid__content">
      <CardItem v-for="item in myItemList" :key="item.id" :item="item" />
    </div>
    <div class="card-grid__pagination" v-if="showPagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="400"
        :page-size="10"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-grid {
  // background-color: aquamarine;
  .card-grid__head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    // background-color: yellow;
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
    .card-grid__random {
      margin-right: 10px;
      // yellow color text
      // color: orange
    }
  }
  .card-grid__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>