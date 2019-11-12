<template>
  <div class="newsinfo-container">
    <h2 class="title">{{ newsinfo.title }}</h2>
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | dateFormat }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>
    <hr>
    <div class="content" v-html="newsinfo.content"></div>
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  import comment from '../subcomponents/comment'

  export default {
    name: "NewsInfo",
    data() {
      return {
        id: this.$route.params.id,
        newsinfo: []
      }
    },
    created() {
      this.getNewsInfo()
    },
    methods: {
      getNewsInfo() {
        this.$http.get('api/getnew/' + this.id).then(res => {
          if(res.body.status === 0) {
            this.newsinfo = res.body.message[0]
          } else {
            Toast('获取新闻详情失败！')
          }
        })
      }
    },
    components: {
      "comment-box": comment
    }
  }
</script>

<style>
  .newsinfo-container {
    padding: 0 4px;
  }
  .newsinfo-container .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .newsinfo-container .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .newsinfo-container .content img {
    width: 100%;
  }
</style>