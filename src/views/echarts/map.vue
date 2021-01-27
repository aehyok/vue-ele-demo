<template>
  hello map
  <div class="map" ref="right-map" id="right-map"></div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      chinaMap: ""
    };
  },
  mounted() {
    // this.chinaMap = this.$axios.get(`/china1.json`);
    this.$axios.get(`/china1.json`).then(res => {
      console.log(res, "res");
      this.chinaMap = res.data;
      console.log(this.chinaMap, "this.chinaMap ");
      this.mapChart();
    });
  },
  methods: {
    mapChart() {
      this.$echarts.registerMap("china", this.chinaMap);
      const myChart = this.$echarts.init(document.getElementById("right-map"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "平均价格",
          // subtext: '',
          left: "center",
          textStyle: {
            color: "#fff"
          }
        },
        normal: {
          //静态的时候显示的默认样式
          // show:true, //默认是否显示
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["平均价格"],
          textStyle: {
            color: "#fff"
          }
        },
        visualMap: {
          min: 0,
          max: 150,
          left: "left",
          top: "bottom",
          text: ["高", "低"], // 文本，默认为数值文本
          calculable: true,
          textStyle: {
            color: "#fff"
          }
        },
        // toolbox: {
        // 	show: true,
        // 	orient : 'vertical',
        // 	left: 'right',
        // 	top: 'center',
        // 	feature : {
        // 		mark : {show: true},
        // 		dataView : {show: true, readOnly: false},
        // 		restore : {show: true},
        // 		saveAsImage : {show: true}
        // 	}
        // },
        series: [
          {
            name: "平均价格",
            type: "map",
            mapType: "china",
            roam: false,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            data: [
              {
                name: "北京市",
                value: Math.round(Math.random() * 10)
              },
              {
                name: "天津市",
                value: Math.round(Math.random() * 10)
              },
              {
                name: "上海市",
                value: Math.round(Math.random() * 100)
              },
              {
                name: "重庆市",
                value: Math.round(Math.random() * 100)
              },
              {
                name: "河北省",
                value: Math.round(Math.random() * 100)
              },
              {
                name: "河南省",
                value: Math.round(Math.random() * 10)
              },
              {
                name: "云南省",
                value: Math.round(Math.random() * 100)
              },
              {
                name: "辽宁省",
                value: Math.round(Math.random() * 10)
              },
              {
                name: "黑龙江省",
                value: Math.round(Math.random() * 100)
              },
              {
                name: "湖南省",
                value: Math.round(Math.random() * 100)
              },
              {
                name: "安徽省",
                value: Math.round(Math.random() * 10)
              },
              {
                name: "山东省",
                value: Math.round(Math.random() * 10)
              },
              {
                name: "新疆维吾尔自治区",
                value: Math.round(Math.random() * 10)
              },
              {
                name: "江苏省",
                value: Math.round(Math.random() * 100)
              },
              {
                name: "浙江省",
                value: Math.round(Math.random() * 10)
              },
              {
                name: "江西省",
                value: Math.round(Math.random() * 100)
              },
              {
                name: "湖北省",
                value: Math.round(Math.random() * 100)
              },
              {
                name: "广西壮族自治区",
                value: Math.round(Math.random() * 100)
              },
              {
                name: "甘肃省",
                value: Math.round(Math.random() * 100)
              },
              {
                name: "山西省",
                value: Math.round(Math.random() * 10)
              },
              {
                name: "内蒙古自治区",
                value: Math.round(Math.random() * 10)
              },
              {
                name: "陕西省",
                value: Math.round(Math.random() * 10)
              },
              {
                name: "吉林省",
                value: Math.round(Math.random() * 10)
              },
              {
                name: "福建省",
                value: Math.round(Math.random() * 100)
              },
              {
                name: "贵州省",
                value: Math.round(Math.random() * 100)
              },
              {
                name: "广东省",
                value: Math.round(Math.random() * 100)
              },
              {
                name: "青海省",
                value: Math.round(Math.random() * 100)
              },
              {
                name: "西藏自治区",
                value: Math.round(Math.random() * 100)
              },
              {
                name: "四川省",
                value: Math.round(Math.random() * 150)
              },
              {
                name: "宁夏回族自治区",
                value: Math.round(Math.random() * 100)
              },
              {
                name: "海南省",
                value: Math.round(Math.random() * 100)
              },
              {
                name: "台湾省",
                value: Math.round(Math.random() * 100)
              },
              {
                name: "香港特别行政区",
                value: Math.round(Math.random() * 100)
              },
              {
                name: "澳门特别行政区",
                value: Math.round(Math.random() * 100)
              }
            ]
          }
        ]
      });
    }
  }
});
</script>
<style lang="scss" scoped>
.map {
  width: 600px;
  height: 600px;
}
</style>
