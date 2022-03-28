<template>
  <div>
    <div class="cate" v-if="category === 0">
      <div class="title">图片新闻</div>
      <div>
        <img
          src="https://img2.baidu.com/it/u=1354316170,1951449891&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=457"
        />
      </div>
      <div>
        <div>如果回忆会发出声响,那么今天的蜻蜓振翅和雨前惊雷,都归你!</div>
      </div>
    </div>

    <div class="cate" v-else-if="category === 1">
      <div class="title">文字新闻</div>
      <div>
        中国天气网讯
        近期我国大部偏暖，但一股新的冷空气正蓄势待发，各地气温将急速下降。
        受其影响，今天（12月15日）夜间至18日，中东部大部分地区气温将下降6～10℃，
        东北、华东等局地可达12℃以上。各地气温在一两天之内迅速降至近期低点，
        近20个省会级城市将创今年下半年来气温新低，多地冷暖转换剧烈，需注意及时调整着装，谨防感冒。
      </div>
    </div>

    <div class="cate" v-else-if="category === 2">
      <div class="title">视频新闻</div>
      <video width="640" height="480" controls>
        <source src="./web.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: "",
    };
  },

  props: {
    category: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.cate {
  margin-top: 10px;
  border: 1px solid skyblue;
}
.title {
  font-size: 20px;
  color: black;
  font-weight: bold;
}
</style>