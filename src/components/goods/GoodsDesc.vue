<template>
  <div class="goodsdesc_container">
    <h3>{{ info.title }}</h3>
    <hr>
    <div class="content" v-html="info.content"></div>
  </div>
</template>

<script>
export default {
  name: "GoodsDesc",
  data() {
    return {
      info: {}  //图文数据
    }
  },
  created() {
    this.getGoodsDesc()
  },
  methods: {
    getGoodsDesc() {
      this.$http.get('api/goods/getdesc/' + this.$route.params.id).then(res => {
        if(res.body.status === 0) {
          this.info = res.body.message[0]
        }
      })
    }
  }
}
</script>

<style>
  .goodsdesc_container {
    padding: 4px;
  }
  .goodsdesc_container h3 {
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
  .goodsdesc_container .content img {
    width: 100%;
  }
</style>