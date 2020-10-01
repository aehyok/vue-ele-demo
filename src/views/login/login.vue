<template>
  <el-form :model="loginForm" :rules="rules" ref="form">
    <el-form-item prop="account">
      <el-input
        type="text"
        placeholder="用户名"
        name="username"
        auto-complete="off"
        v-model="loginForm.account"
      />
    </el-form-item>
    <el-form-item prop="pass">
      <el-input
        type="password"
        placeholder="密码"
        name="inputDom"
        auto-complete="new-password"
        v-model="loginForm.pass"
      />
    </el-form-item>
    <el-form-item prop="verifCode">
      <div class="form-row">
        <el-input
          placeholder="验证码"
          name="inputDom"
          v-model="loginForm.verifCode"
          style="flex 1;"
        />
      </div>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.loginForm.account !== "") {
          this.$refs.form.validateField("account");
        }
        callback();
      }
    };
    const validateAccount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };

    return {
      loginForm: {
        pass: "",
        account: "",
        verifCode: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: ["blur", "change"] }],
        account: [{ validator: validateAccount, trigger: ["blur", "change"] }],
      },
    };
  },
};
</script>