<template>
    <div>
        <mt-header title="前端前线">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
    <mt-button>关闭</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
        <div><h2>前端前线官方网站</h2></div>
        <h5>欢迎访问</h5>
        <div>
            <mt-navbar v-model="selected">
  <mt-tab-item id="1">首页</mt-tab-item>
  <mt-tab-item id="2">我的关注</mt-tab-item>
  <mt-tab-item id="3">著名文章</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <mt-cell v-for="n in list" :title="' ' + n" :key="n"/>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell v-for="n in 10" :title="'vue ' + n" :key="n"/>
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <mt-cell v-for="n in 10" :title="'angular' + n" :key="n"/>
  </mt-tab-container-item>
</mt-tab-container>
        </div>
    </div>
</template>
<script>
export default {
    name:'',
    data(){
        return {
            selected:'1',
            list:['tab切换','灯泡模式','swiper','跳转','ontap','echartstab','table布局','layui分页','input','jquerymore']
        }
    }
}
</script>
<style>

</style>

