<script setup>
import CardGrid from './components/CardGrid.vue'
// import CardItem from './components/CardItem.vue';
const bannerList = [
  {
    id: 1,
    imgUrl: 'https://img1.baidu.com/it/u=2948122369,95117273&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=756'
  },
  {
    id: 2,
    imgUrl: 'https://image14.m1905.cn/uploadfile/2018/0206/20180206092712415807.jpg'
  },
  {
    id: 3,
    imgUrl: 'https://pic.rmb.bdstatic.com/bjh/60c2e68f23602d612a4c8dada31368f6.jpeg'
  }

]
const title1 = '热门电影'
const subTitle1 = '电影频道'
const itemList1 = [
      {
        id: 1,
        name: '战狼2',
        cover: 'https://img1.baidu.com/it/u=2948122369,95117273&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=756',
        tags: ['动作', '战争'],
        actors: ['吴京', '弗兰克·格里罗', '吴刚'],
        playCount: 1000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 2,
        name: '红海行动',
        cover: 'https://image14.m1905.cn/uploadfile/2018/0206/20180206092712415807.jpg',
        tags: ['动作', '战争'],
        actors: ['张译', '黄景瑜', '海清'],
        playCount: 2000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 3,
        name: '唐人街探案2',
        cover: 'https://pic.rmb.bdstatic.com/bjh/60c2e68f23602d612a4c8dada31368f6.jpeg',
        tags: ['喜剧', '悬疑'],
        actors: ['王宝强', '刘昊然', '肖央'],
        playCount: 3000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 4,
        name: '复仇者联盟3',
        cover: 'https://img1.baidu.com/it/u=4189968213,3619286430&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1153',
        tags: ['动作', '科幻'],
        actors: ['小罗伯特·唐尼', '克里斯·海姆斯沃斯', '克里斯·埃文斯'],
        playCount: 4000000,
        episode: 1,
        type: 'movie',
        nation: '美国'
      },
      {
        id: 5,
        name: '战狼2',
        cover: 'https://img1.baidu.com/it/u=2948122369,95117273&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=756',
        tags: ['动作', '战争'],
        actors: ['吴京', '弗兰克·格里罗', '吴刚'],
        playCount: 1000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 6,
        name: '红海行动',
        cover: 'https://image14.m1905.cn/uploadfile/2018/0206/20180206092712415807.jpg',
        tags: ['动作', '战争'],
        actors: ['张译', '黄景瑜', '海清'],
        playCount: 2000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 7,
        name: '唐人街探案2',
        cover: 'https://pic.rmb.bdstatic.com/bjh/60c2e68f23602d612a4c8dada31368f6.jpeg',
        tags: ['喜剧', '悬疑'],
        actors: ['王宝强', '刘昊然', '肖央'],
        playCount: 3000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 8,
        name: '复仇者联盟3',
        cover: 'https://img1.baidu.com/it/u=4189968213,3619286430&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1153',
        tags: ['动作', '科幻'],
        actors: ['小罗伯特·唐尼', '克里斯·海姆斯沃斯', '克里斯·埃文斯'],
        playCount: 4000000,
        episode: 1,
        type: 'movie',
        nation: '美国'
      },
      {
        id: 9,
        name: '战狼2',
        cover: 'https://img1.baidu.com/it/u=2948122369,95117273&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=756',
        tags: ['动作', '战争'],
        actors: ['吴京', '弗兰克·格里罗', '吴刚'],
        playCount: 1000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 10,
        name: '红海行动',
        cover: 'https://image14.m1905.cn/uploadfile/2018/0206/20180206092712415807.jpg',
        tags: ['动作', '战争'],
        actors: ['张译', '黄景瑜', '海清'],
        playCount: 2000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 11,
        name: '唐人街探案2',
        cover: 'https://pic.rmb.bdstatic.com/bjh/60c2e68f23602d612a4c8dada31368f6.jpeg',
        tags: ['喜剧', '悬疑'],
        actors: ['王宝强', '刘昊然', '肖央'],
        playCount: 3000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 12,
        name: '复仇者联盟3',
        cover: 'https://img1.baidu.com/it/u=4189968213,3619286430&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1153',
        tags: ['动作', '科幻'],
        actors: ['小罗伯特·唐尼', '克里斯·海姆斯沃斯', '克里斯·埃文斯'],
        playCount: 4000000,
        episode: 1,
        type: 'movie',
        nation: '美国'
      },
      {
        id: 13,
        name: '战狼2',
        cover: 'https://img1.baidu.com/it/u=2948122369,95117273&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=756',
        tags: ['动作', '战争'],
        actors: ['吴京', '弗兰克·格里罗', '吴刚'],
        playCount: 1000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 14,
        name: '红海行动',
        cover: 'https://image14.m1905.cn/uploadfile/2018/0206/20180206092712415807.jpg',
        tags: ['动作', '战争'],
        actors: ['张译', '黄景瑜', '海清'],
        playCount: 2000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 15,
        name: '唐人街探案2',
        cover: 'https://pic.rmb.bdstatic.com/bjh/60c2e68f23602d612a4c8dada31368f6.jpeg',
        tags: ['喜剧', '悬疑'],
        actors: ['王宝强', '刘昊然', '肖央'],
        playCount: 3000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 16,
        name: '复仇者联盟3',
        cover: 'https://img1.baidu.com/it/u=4189968213,3619286430&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1153',
        tags: ['动作', '科幻'],
        actors: ['小罗伯特·唐尼', '克里斯·海姆斯沃斯', '克里斯·埃文斯'],
        playCount: 4000000,
        episode: 1,
        type: 'movie',
        nation: '美国'
      },

    ]

const title2 = '动作片'
const subTitle2 = '更多'
const itemList2 = [
      {
        id: 1,
        name: '战狼2',
        cover: 'https://img1.baidu.com/it/u=2948122369,95117273&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=756',
        tags: ['动作', '战争'],
        actors: ['吴京', '弗兰克·格里罗', '吴刚'],
        playCount: 1000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 2,
        name: '红海行动',
        cover: 'https://image14.m1905.cn/uploadfile/2018/0206/20180206092712415807.jpg',
        tags: ['动作', '战争'],
        actors: ['张译', '黄景瑜', '海清'],
        playCount: 2000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 3,
        name: '唐人街探案2',
        cover: 'https://pic.rmb.bdstatic.com/bjh/60c2e68f23602d612a4c8dada31368f6.jpeg',
        tags: ['喜剧', '悬疑'],
        actors: ['王宝强', '刘昊然', '肖央'],
        playCount: 3000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 4,
        name: '复仇者联盟3',
        cover: 'https://img1.baidu.com/it/u=4189968213,3619286430&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1153',
        tags: ['动作', '科幻'],
        actors: ['小罗伯特·唐尼', '克里斯·海姆斯沃斯', '克里斯·埃文斯'],
        playCount: 4000000,
        episode: 1,
        type: 'movie',
        nation: '美国'
      },
      {
        id: 5,
        name: '战狼2',
        cover: 'https://img1.baidu.com/it/u=2948122369,95117273&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=756',
        tags: ['动作', '战争'],
        actors: ['吴京', '弗兰克·格里罗', '吴刚'],
        playCount: 1000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 6,
        name: '红海行动',
        cover: 'https://image14.m1905.cn/uploadfile/2018/0206/20180206092712415807.jpg',
        tags: ['动作', '战争'],
        actors: ['张译', '黄景瑜', '海清'],
        playCount: 2000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 7,
        name: '唐人街探案2',
        cover: 'https://pic.rmb.bdstatic.com/bjh/60c2e68f23602d612a4c8dada31368f6.jpeg',
        tags: ['喜剧', '悬疑'],
        actors: ['王宝强', '刘昊然', '肖央'],
        playCount: 3000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 8,
        name: '复仇者联盟3',
        cover: 'https://img1.baidu.com/it/u=4189968213,3619286430&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1153',
        tags: ['动作', '科幻'],
        actors: ['小罗伯特·唐尼', '克里斯·海姆斯沃斯', '克里斯·埃文斯'],
        playCount: 4000000,
        episode: 1,
        type: 'movie',
        nation: '美国'
      },
      {
        id: 9,
        name: '战狼2',
        cover: 'https://img1.baidu.com/it/u=2948122369,95117273&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=756',
        tags: ['动作', '战争'],
        actors: ['吴京', '弗兰克·格里罗', '吴刚'],
        playCount: 1000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 10,
        name: '红海行动',
        cover: 'https://image14.m1905.cn/uploadfile/2018/0206/20180206092712415807.jpg',
        tags: ['动作', '战争'],
        actors: ['张译', '黄景瑜', '海清'],
        playCount: 2000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 11,
        name: '唐人街探案2',
        cover: 'https://pic.rmb.bdstatic.com/bjh/60c2e68f23602d612a4c8dada31368f6.jpeg',
        tags: ['喜剧', '悬疑'],
        actors: ['王宝强', '刘昊然', '肖央'],
        playCount: 3000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 12,
        name: '复仇者联盟3',
        cover: 'https://img1.baidu.com/it/u=4189968213,3619286430&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1153',
        tags: ['动作', '科幻'],
        actors: ['小罗伯特·唐尼', '克里斯·海姆斯沃斯', '克里斯·埃文斯'],
        playCount: 4000000,
        episode: 1,
        type: 'movie',
        nation: '美国'
      },
      {
        id: 13,
        name: '战狼2',
        cover: 'https://img1.baidu.com/it/u=2948122369,95117273&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=756',
        tags: ['动作', '战争'],
        actors: ['吴京', '弗兰克·格里罗', '吴刚'],
        playCount: 1000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 14,
        name: '红海行动',
        cover: 'https://image14.m1905.cn/uploadfile/2018/0206/20180206092712415807.jpg',
        tags: ['动作', '战争'],
        actors: ['张译', '黄景瑜', '海清'],
        playCount: 2000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 15,
        name: '唐人街探案2',
        cover: 'https://pic.rmb.bdstatic.com/bjh/60c2e68f23602d612a4c8dada31368f6.jpeg',
        tags: ['喜剧', '悬疑'],
        actors: ['王宝强', '刘昊然', '肖央'],
        playCount: 3000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 16,
        name: '复仇者联盟3',
        cover: 'https://img1.baidu.com/it/u=4189968213,3619286430&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1153',
        tags: ['动作', '科幻'],
        actors: ['小罗伯特·唐尼', '克里斯·海姆斯沃斯', '克里斯·埃文斯'],
        playCount: 4000000,
        episode: 1,
        type: 'movie',
        nation: '美国'
      },

    ]

const title3 = '喜剧片'
const subTitle3 = '更多'
const itemList3 = [
      {
        id: 1,
        name: '战狼2',
        cover: 'https://img1.baidu.com/it/u=2948122369,95117273&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=756',
        tags: ['动作', '战争'],
        actors: ['吴京', '弗兰克·格里罗', '吴刚'],
        playCount: 1000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 2,
        name: '红海行动',
        cover: 'https://image14.m1905.cn/uploadfile/2018/0206/20180206092712415807.jpg',
        tags: ['动作', '战争'],
        actors: ['张译', '黄景瑜', '海清'],
        playCount: 2000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 3,
        name: '唐人街探案2',
        cover: 'https://pic.rmb.bdstatic.com/bjh/60c2e68f23602d612a4c8dada31368f6.jpeg',
        tags: ['喜剧', '悬疑'],
        actors: ['王宝强', '刘昊然', '肖央'],
        playCount: 3000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 4,
        name: '复仇者联盟3',
        cover: 'https://img1.baidu.com/it/u=4189968213,3619286430&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1153',
        tags: ['动作', '科幻'],
        actors: ['小罗伯特·唐尼', '克里斯·海姆斯沃斯', '克里斯·埃文斯'],
        playCount: 4000000,
        episode: 1,
        type: 'movie',
        nation: '美国'
      },
      {
        id: 5,
        name: '战狼2',
        cover: 'https://img1.baidu.com/it/u=2948122369,95117273&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=756',
        tags: ['动作', '战争'],
        actors: ['吴京', '弗兰克·格里罗', '吴刚'],
        playCount: 1000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 6,
        name: '红海行动',
        cover: 'https://image14.m1905.cn/uploadfile/2018/0206/20180206092712415807.jpg',
        tags: ['动作', '战争'],
        actors: ['张译', '黄景瑜', '海清'],
        playCount: 2000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 7,
        name: '唐人街探案2',
        cover: 'https://pic.rmb.bdstatic.com/bjh/60c2e68f23602d612a4c8dada31368f6.jpeg',
        tags: ['喜剧', '悬疑'],
        actors: ['王宝强', '刘昊然', '肖央'],
        playCount: 3000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 8,
        name: '复仇者联盟3',
        cover: 'https://img1.baidu.com/it/u=4189968213,3619286430&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1153',
        tags: ['动作', '科幻'],
        actors: ['小罗伯特·唐尼', '克里斯·海姆斯沃斯', '克里斯·埃文斯'],
        playCount: 4000000,
        episode: 1,
        type: 'movie',
        nation: '美国'
      },
      {
        id: 9,
        name: '战狼2',
        cover: 'https://img1.baidu.com/it/u=2948122369,95117273&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=756',
        tags: ['动作', '战争'],
        actors: ['吴京', '弗兰克·格里罗', '吴刚'],
        playCount: 1000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 10,
        name: '红海行动',
        cover: 'https://image14.m1905.cn/uploadfile/2018/0206/20180206092712415807.jpg',
        tags: ['动作', '战争'],
        actors: ['张译', '黄景瑜', '海清'],
        playCount: 2000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 11,
        name: '唐人街探案2',
        cover: 'https://pic.rmb.bdstatic.com/bjh/60c2e68f23602d612a4c8dada31368f6.jpeg',
        tags: ['喜剧', '悬疑'],
        actors: ['王宝强', '刘昊然', '肖央'],
        playCount: 3000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 12,
        name: '复仇者联盟3',
        cover: 'https://img1.baidu.com/it/u=4189968213,3619286430&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1153',
        tags: ['动作', '科幻'],
        actors: ['小罗伯特·唐尼', '克里斯·海姆斯沃斯', '克里斯·埃文斯'],
        playCount: 4000000,
        episode: 1,
        type: 'movie',
        nation: '美国'
      },
      {
        id: 13,
        name: '战狼2',
        cover: 'https://img1.baidu.com/it/u=2948122369,95117273&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=756',
        tags: ['动作', '战争'],
        actors: ['吴京', '弗兰克·格里罗', '吴刚'],
        playCount: 1000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 14,
        name: '红海行动',
        cover: 'https://image14.m1905.cn/uploadfile/2018/0206/20180206092712415807.jpg',
        tags: ['动作', '战争'],
        actors: ['张译', '黄景瑜', '海清'],
        playCount: 2000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 15,
        name: '唐人街探案2',
        cover: 'https://pic.rmb.bdstatic.com/bjh/60c2e68f23602d612a4c8dada31368f6.jpeg',
        tags: ['喜剧', '悬疑'],
        actors: ['王宝强', '刘昊然', '肖央'],
        playCount: 3000000,
        episode: 1,
        type: 'movie',
        nation: '中国'
      },
      {
        id: 16,
        name: '复仇者联盟3',
        cover: 'https://img1.baidu.com/it/u=4189968213,3619286430&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1153',
        tags: ['动作', '科幻'],
        actors: ['小罗伯特·唐尼', '克里斯·海姆斯沃斯', '克里斯·埃文斯'],
        playCount: 4000000,
        episode: 1,
        type: 'movie',
        nation: '美国'
      },

    ]

</script>

<template>
  <div class="home">
    <!-- 最上面滚动图 -->
    <div class="banner">
      <el-carousel height="460px">
        <el-carousel-item v-for="item in bannerList" :key="item.id">
          <img :src="item.imgUrl" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 子分类 -->
    <div class="sub-category">
      <div class="sub-category-item">
        <!-- <img src="../../assets/movie.jpg" alt="movie" /> -->
        <span>动作</span>
      </div>
      <div class="sub-category-item">
        <!-- <img src="../../assets/drama.jpg" alt="drama" /> -->
        <span>爱情</span>
      </div>
      <div class="sub-category-item">
        <!-- <img src="../../assets/variety.jpg" alt="variety" /> -->
        <span>喜剧</span>
      </div>
    </div>
    <!-- grid列表 -->
    <CardGrid :title="title1" :subTitle="subTitle1" :itemList="itemList1" :showPagination="false"></CardGrid>
    <CardGrid :title="title2" :subTitle="subTitle2" :itemList="itemList2" :showPagination="false"></CardGrid>
    <CardGrid :title="title3" :subTitle="subTitle3" :itemList="itemList3" :showPagination="false"></CardGrid>
    <!-- <div class="grid">
      <CardItem v-for="item in itemList1" :key="item.id" :item="item" />
    </div> -->
  </div>
</template>

<style scoped>
  .home {
    .banner {
      img {
        width: 100%;
      }
    }
    .sub-category {
      display: flex;
      justify-content: flex-start;
      margin-top: 20px;
      .sub-category-item {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f0f0f0;
        margin: 0 10px;
        span {
          font-size: 24px;
          font-weight: bold;
        }
      }
    }
    .grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  }
</style>