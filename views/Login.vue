<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" class="login-box">
      <h3>欢迎登录</h3>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        form: {
          name: '',
          password: ''
        },
        rules: {
          name: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      submitForm(formName){
        this.$refs[formName].validate((valid)=>{
          if(valid){
            sessionStorage.setItem("isLogin","true");
            this.$store.dispatch("asyncUpdateUser",{name:this.form.name});
            this.$router.push({name:"Main",params:{name:this.form.name}});
          }else{
            this.$message({
              message:"警告，请输入用户名和密码",
              type:'warning'

            })
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
  .login-box {
    width: 300px;
    margin: 120px auto;
    border: 1px solid lightgray;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px darkgray;
  }
</style>
