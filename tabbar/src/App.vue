<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/gi" activeColor="#cc0001">
        <img slot="item-icon" src="./assets/img/tabbar/Github.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/GithubActive.png" alt="">
        <div slot="item-text">Gay站</div>
      </tab-bar-item>
      <tab-bar-item path="/tw">
        <img slot="item-icon" src="./assets/img/tabbar/Twitter.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/TwitterActive.png" alt="">
        <div slot="item-text">推特</div>
      </tab-bar-item>
      <tab-bar-item path="/yo">
        <img slot="item-icon" src="./assets/img/tabbar/YouTube.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/YouTubeActive.png" alt="">
        <div slot="item-text">油管</div>
      </tab-bar-item>
      <tab-bar-item path="/bi">
        <img slot="item-icon" src="./assets/img/tabbar/Bilibili.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/BilibiliActive.png" alt="">
        <div slot="item-text" >哔哩哔哩</div>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>

import TabBar from './components/tabbar/TabBar.vue'
import TabBarItem from './components/tabbar/TabBarItem.vue'

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
