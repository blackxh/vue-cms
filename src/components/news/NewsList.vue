<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/newsinfo/' + item.id">
          <img
            class="mui-media-object mui-pull-left" :src="item.img_url"
          />
          <div class="mui-media-body">
            <h2>{{item.title}}</h2>
            <p class="mui-ellipsis">
              <span>发表时间：{{item.add_time | dateFormat}}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default {
  name: "NewsList",
  data() {
    return {
      newslist: []
    }
  },
  created() {
    this.getNewsList()
  },
  methods: {
    getNewsList() { //获取新闻列表
      this.$http.get('api/getnewslist').then(res => {
        if(res.body.status === 0) {
          this.newslist = res.body.message
        } else {
          Toast('获取新闻列表失败！')
        }
      })
    }
  }
};
</script>

<style scoped>
  .mui-table-view li h2 {
    font-size: 14px;
  }
  .mui-table-view li .mui-ellipsis {
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
</style>