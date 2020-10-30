<template>
  <div>
    <el-button type="primary" v-on:click="onGotoPage">{{ message }}</el-button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      message: "Hello in Home",
    };
  },
  methods: {
    onGotoPage() {
      console.log("将要进行页面跳转");
      let momentId = "123";
      //测试代码

      console.log('aaaa')
      new Promise((resolve)=>{
        console.log('bbb')
        resolve()
        new Promise((resolve)=>{
          console.log('cccc')
          resolve()
        }).then(()=>{
          console.log(111)
          new Promise((resolve)=>{
            console.log('eee')
            resolve()
          }).then(()=>{
            console.log('fff')
          })
        })
      }).then(()=>{
        console.log('ggg')
        new Promise((resolve)=>{
          console.log(222)
          resolve()
        }).then(()=>{
          console.log(333)
        })
      })
      console.log('hhhh')


      this.$router.push(`./About?momentId=${momentId}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.app-header {
  background: "#2bae85";
}
</style>
