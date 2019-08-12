<template>
  <div class="container">
    <div class="close" @click="close"></div>
    <p class="title">手机号登录</p>

    <div class="weui-cell weui-cell_vcode">
      <div class="weui-cell__hd">
        <label class="weui-label">手机号</label>
      </div>
      <div class="weui-cell__bd">
        <input
          class="weui-input"
          maxlength="11"
          type="tel"
          pattern="^\d{11}$"
          placeholder="请输入手机号"
          v-model="phoneNum"
        />
      </div>
      <div class="weui-cell__ft">
        <button
          v-show="timeCode === 60"
          class="weui-vcode-btn"
          @click="getCode"
        >
          获取验证码
        </button>
        <div v-show="timeCode !== 60" class="time-code weui-vcode-btn">
          {{ timeCode }}s
        </div>
      </div>
    </div>

    <div class="weui-cell weui-cell_vcode vcode-input scale-1px">
      <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
      <div class="weui-cell__bd">
        <input
          v-model="code"
          class="weui-input"
          type="number"
          placeholder="请输入验证码"
        />
      </div>
    </div>
    <a class="weui-btn weui-btn_primary" href="javascript:" @click="signUp"
      >确定</a
    >
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      phoneNum: "",
      timeCode: 60,
      code: ""
    };
  },
  methods: {
    signUp() {},
    getCode() {},
    close() {}
  }
};
</script>

<style scoped>
.container {
  padding-top: 150px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 999;
  overflow: hidden;
}
.container >>> .weui-btn {
  margin: 20px auto;
}
.title {
  text-align: left;
  padding-left: 40px;
  font-size: 23px;
  margin-bottom: 32px;
}
.weui-vcode-btn {
  border: none;
}
.vcode-input {
  height: 45px;
}
.captcha-code {
  height: 45px;
}
.captcha-code::before {
  display: none;
}
.scale-1px::after {
  left: 16px;
}
.weui-btn {
  margin: 13px;
  margin-top: 59px;
}
.close {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 8px;
  left: 8px;
  background-size: contain;
  background-image: url("../../assets/close.png");
}
.time-code {
  width: 100px;
  text-align: center;
  color: #ccc;
}
</style>
