<template>
  <LuckDraw
      v-model="currIndex"
      :awards="awards"
      :radius="radius"
      :btnRadius="btnRadius"
      :textMargin="textMargin"
      @start="handleStart"
      @end="handleEnd"
    />
</template>

<script>
import LuckDraw from '../base/lotter/BaseLotter.vue'
import axios from 'axios'

export default {
  name: 'MyLotter',
  components: {
    LuckDraw
  },
  data () {
    return {
      currIndex: 5, // 奖品的索引
      radius: 180,   // 半径
      btnRadius: 60,// 按钮半径
      textMargin: 30,// 文字距离边框距离
      textFontSize: '13px',       // 文字大小
      awards: [     // 奖品
        { name: '价值5988元华为 P30pro', color: '#f9e3bb' },
        { name: '价值398元车载空气净化器', color: '#f8d384' },
        { name: '价值25元百叶帘遮阳挡', color: '#f9e3bb' },
        { name: '16元油卡套餐红包', color: '#f8d384' },
        { name: '5元油卡直冲红包', color: '#f9e3bb' },
        { name: '3元话费直冲红包', color: '#f8d384' },
        { name: '价值32元重力感应手机支架', color: '#f9e3bb' },
        { name: '价值198元手提迷你车在保温冷藏箱', color: '#f8d384' },
      ],
    }
  },
  mounted: function() {
    console.log("mounted");
    //var that = this;
    //axios.post('/api'+'/TazBase/boot/hello')
    axios.get('/api'+'/TazMobileOut/rs/detail/10005')
    .then(function(response) {
      console.log(response);
      // var data = response.data;
      // if(data.msg == "success"){
      //   var obj = data.data;
      //   console.log(obj);
      // }
    })
    .catch(function(error) {
      console.log(error);
    });
  },
  methods: {
    handleStart () {
      console.log('开始抽奖')
    },
    handleEnd (index) {
      console.log(index);
      alert('恭喜您抽到大奖, 奖品为' + this.awards[this.currIndex].name)
    }
  }
}
</script>