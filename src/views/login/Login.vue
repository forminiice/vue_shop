<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="~@/assets/logo.png" alt="" />
      </div>
      <!-- 登录表单区域 -->
      <el-form :model="loginForm" label-width="0" class="login_form" :rules="loginFormRules" ref="loginFormRef">
        <!-- 用户名 -->
        <el-form-item  prop="username">
          <el-input prefix-icon="iconfont icon-user" v-model="loginForm.username"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input prefix-icon="iconfont icon-3702mima" v-model="loginForm.password" type="password"></el-input>
        </el-form-item >
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click.native="login">登录</el-button>
          <el-button type="info" @click.native="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getLoginMessage } from '@/network/login'

export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      // 表单验证规则
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在3到10个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在6到15个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return
        const res = await getLoginMessage(this.loginForm)
        if (res.meta.status !== 200) return console.log('登陆失败')
        console.log('登录成功')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login_container {
  height: 100%;
  background-color: #2b4b6b;

  @at-root .login_box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    @at-root .avatar_box {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 10px;
      height: 130px;
      width: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      box-shadow: 0 0 10px #ddd;
      background-color: #fff;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
    @at-root .login_form {
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 0 10px;
      width: 100%;
      box-sizing: border-box;
    }
    @at-root .btns {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
