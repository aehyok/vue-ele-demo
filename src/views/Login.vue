<template>
  <div class="login-container" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="login-box">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        autocomplete="off"
        label-position="left"
      >
        <div class="title">aehyok</div>
        <el-form-item prop="username">
          <el-input
            ref="username"
            v-model.trim="loginForm.username"
            placeholder="用户名"
            name="username"
            type="text"
            autocomplete="off"
            @keyup.enter="handleLogin"
          />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            ref="password"
            v-model.trim="loginForm.password"
            type="password"
            placeholder="密码"
            name="password"
            autocomplete="new-password"
            @keyup.enter="handleLogin"
          />
        </el-form-item>
        <el-form-item prop="code">
          <div class="verify-code-item">
            <el-input
              class="verify-code"
              ref="verifyCode"
              v-model.trim="loginForm.code"
              type="text"
              placeholder="验证码"
              name="verifyCode"
              autocomplete="off"
              @keyup.enter="handleLogin"
            />
            <div class="code-img">
              <img :src="imgUrl" alt="" />
            </div>
            <el-button type="text" @click="getVerifyCode">换一张</el-button>
          </div>
        </el-form-item>
        <el-button
          class="handleLogin"
          :loading="loading"
          type="primary"
          @click.prevent="handleLogin"
        >
          登录
        </el-button>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { defineComponent, ref } from "vue";
import { ElForm } from "element-plus";

export default defineComponent({
  data() {
    return {
      backgroundImage: require("../assets/login_bg.jpg") as string,
      loginForm: {
        username: "",
        password: "",
        key: "",
        code: ""
      },
      loginRules: {
        username: [{ validator: this.validateAccount, trigger: "blur" }],
        password: [{ validator: this.validatePassword, trigger: "blur" }],
        code: [{ validator: this.validatorVerCode, trigger: "blur" }]
      }
    };
  },
  methods: {
    test(test: string) {
      console.log(test);
    },
    validateAccount(rule: any, value: string, callback: Function) {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    },
    validatePassword(rule: any, value: string, callback: Function) {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    },
    validatorVerCode(rule: any, value: string, callback: Function) {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        callback();
      }
    },
    // 登录
    handleLogin() {
      this.$router.push("/");
    }
  }
});
</script>
<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
}
.login-box {
  box-sizing: border-box;
  padding: 50px 60px;
  position: absolute;
  right: 186px;
  top: 50%;
  margin-top: -215px;
  width: 500px;
  background: #fff;
  border-radius: 4px;
  -webkit-box-shadow: 2px 2px 10px #333;
  -moz-box-shadow: 2px 2px 10px #333;
  box-shadow: 2px 2px 10px #333;
}
.title {
  font-size: 30px;
  margin-bottom: 30px;
}
.handleLogin {
  width: 100%;
}
.verify-code-item {
  display: flex;
  margin-bottom: 10px;
  .verify-code {
    flex: 1;
  }
  .code-img {
    width: 118px;
    height: 44px;
    background: #dedede;
    margin: 0 10px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
