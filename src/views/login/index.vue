<template>
  <div class="login-page">
    <main class="content-wrapper">
      <div class="left">
        <img src="~@/assets/systhetic.jpg" alt="" />
      </div>
      <div class="right">
        <h3 class="project-name">数字乡村振兴运营平台</h3>
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
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="4"
              ><el-checkbox v-model="rememberPasCbox" size="large">
                记住用户名和密码
              </el-checkbox>
            </el-col>
            <el-col :span="3"
              ><el-button type="text" @click="dialogFormVisible = true">
                忘记密码
              </el-button></el-col
            >
          </el-row>
          <el-button
            size="large"
            type="primary"
            style="width: 100%; margin-top: 20px; height: 50px"
            @click="submitForm"
            :loading="loading"
          >
            登 录
          </el-button>
        </el-form>
      </div>
    </main>
  </div>
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
      rememberPasCbox: false,
      loading: false,
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
  methods: {
    dialogFormVisible() {},
    submitForm() {
       this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          localStorage.setItem("loginInfo",true)
          this.$router.push('/')
        }
       })
    },
  },
};
</script>
<style scoped>
body {
  margin: 0px;
}
</style>
<style lang="scss" scoped>
.login-page {
  height: 100vh;
  background: url("~@/assets/bg.jpg");

  ::v-deep .el-input {
    font-size: 16px;
  }

  ::v-deep .el-input__inner {
    height: 50px;
  }
}

.content-wrapper {
  display: flex;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 88%;
  height: 794px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .left {
    flex: 0 0 56.5%;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .right {
    flex: 1;
    padding: 7% 7% 0;
  }
}

.project-name {
  text-align: center;
  font-size: 44px;
  font-weight: 600;
  color: #099e45;
  margin-bottom: 90px;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
}
</style>