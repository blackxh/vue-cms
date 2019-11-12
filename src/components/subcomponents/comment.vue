<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入要BB的内容（最多BB120字）" maxlength="120"></textarea>

    <mt-button type="primary" size="large">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, index) in comments" :key="item.add_time">
        <div class="cmt-title">
          第{{index + 1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}
        </div>
        <div class="cmt-body">
          {{item.content === ''|| item.content === 'undefined' ? '此用户很懒，嘛都没说' : item.content}}
        </div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  name: "comment",
  data() {
    return {
      pageIndex: 1,
      comments: []
    }
  },
  created() {
    this.getComments()
  },
  methods: {
    getComments() {//获取评论
      this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex).then(res => {
        if(res.body.status === 0) {
          // this.comments = res.body.message
          this.comments = this.comments.concat(res.body.message)
        } else {
          Toast('获取评论失败！')
        }
      })
    },
    getMore() {//加载更多
      this.pageIndex++
      this.getComments()
    }
  },
  props: ["id"]
};
</script>

<style>
  .cmt-container h3 {
    font-size: 18px;
  }
  .cmt-container textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-container .cmt-list {
    margin: 5px 0;
  }
  .cmt-container .cmt-list .cmt-item {
    font-size: 14px;
  }
  .cmt-container .cmt-list .cmt-item .cmt-title {
    line-height: 30px;
    background-color: #ccc;
  }
  .cmt-container .cmt-list .cmt-item .cmt-body {
    line-height: 35px;
    text-indent: 2em;
  }
</style>