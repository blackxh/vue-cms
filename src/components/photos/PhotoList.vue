<template>
  <div>
    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a :class="['mui-control-item', 
          item.id == 0 ? 'mui-active' : '']" 
          v-for="item in cates" :key="item.id" @click="getPhotoListByCateId(item.id)">
            {{ item.title }}
          </a>
        </div>
      </div>
    </div>

    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo' + item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
	//导入mui的js文件
	import mui from "../../lib/mui/js/mui.js";
	

	export default {
		name: "PhotoList",
		data() {
			return {
        cates: [],
        list: []
      };
    },
    created() {
      this.getAllCategory()
      this.getPhotoListByCateId(0)
    },
    mounted() {// 当组件中的DOM结构被渲染好并放到页面中后，会执行这个钩子函数
      //初始化滑动组件
      mui(".mui-scroll-wrapper").scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      });
    },
		methods: {
      getAllCategory() {
        this.$http.get("api/getimgcategory").then(res => {
          if(res.body.status === 0) {
            res.body.message.unshift({ title: "全部", id: 0 })
            this.cates = res.body.message
          }
        })
      },
      getPhotoListByCateId(cateId) {
        this.$http.get('api/getimages/' + cateId).then(res => {
          if(res.body.status === 0) {
            this.list = res.body.message
          }
        })
      }
    }
	};
</script>

<style>
  * {
    touch-action: pan-y;
  }
  .photo-list {
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
  }
  .photo-list li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
  }
  .photo-list li img {
    width: 100%;
    vertical-align: middle;
  }
  .photo-list li img[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
  .photo-list li .info {
    color: #fff;
    text-align: left;
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, .4);
    max-height: 84px;
  }
  .photo-list li .info .info-title {
    font-size: 14px;
  }
  .photo-list li .info .info-body {
    font-size: 13px;
  }
</style>