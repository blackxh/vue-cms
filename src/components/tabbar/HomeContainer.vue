<template>
  <div>
    <!-- 轮播图区域 -->
    <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../assets/image/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../assets/image/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <img src="../../assets/image/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/image/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/image/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/image/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>

  </div>
</template>

<script>
import { Toast } from "mint-ui";
import swiper from '../subcomponents/swiper'

export default {
  name: "HomeContainer",
  data() {
    return {
      lunbotuList: []
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      //获取轮播图数据的方法
      this.$http
        .get("api/getlunbo")
        .then(res => {
          if (res.body.status === 0) {
            this.lunbotuList = res.body.message;
          } else {
            Toast("加载轮播图失败。。。");
          }
        });
    }
  },
  components: {
    swiper
  }
};
</script>

<style scoped>
  
  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
  }
  .mui-grid-view.mui-grid-9 img {
    width: 60px;
    height: 60px;
  }
  .mui-grid-view.mui-grid-9 .mui-media-body {
    font-size: 13px;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
  }
</style>