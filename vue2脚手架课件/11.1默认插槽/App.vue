<template>
  <div id="app">
    <h2>新闻列表</h2>
    <!-- 图片新闻 -->
    <news>
      <div class="title">图片新闻</div>
      <div>
        <img
          src="https://img2.baidu.com/it/u=1354316170,1951449891&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=457"
        />
      </div>
      <div>
        <div>如果回忆会发出声响,那么今天的蜻蜓振翅和雨前惊雷,都归你!</div>
      </div>
    </news>

    <!-- 文字新闻 -->
    <news>
        <div class="title">文字新闻</div>
        中国天气网讯
        近期我国大部偏暖，但一股新的冷空气正蓄势待发，各地气温将急速下降。
        受其影响，今天（12月15日）夜间至18日，中东部大部分地区气温将下降6～10℃，
        东北、华东等局地可达12℃以上。各地气温在一两天之内迅速降至近期低点，
        近20个省会级城市将创今年下半年来气温新低，多地冷暖转换剧烈，需注意及时调整着装，谨防感冒。
    </news>
  </div>
</template>

<script>
import news from "./components/news.vue";
export default {
  components: {
    news,
  },
  methods: {},

  mounted() {},
};
</script>

<style scoped>
</style>