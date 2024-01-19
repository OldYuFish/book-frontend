<script setup>
import { checkEmail, checkPhone } from '../util.js';
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

</script>
<template>
    <div class="container">
        <div class="login">
            <div class="loginTitle">
                登录
            </div>
            <div>
                <el-input v-model="username" placeholder="手机号或电子邮箱" class="input" />
            </div>
            <div>
                <el-input v-model="password" type="password" placeholder="密码" class="input" />
            </div>
            <div>
                <el-checkbox v-model="checked" @click=rememberPassword label="记住密码" style="width:60%;" />
                <el-button link @click="toFindPassword">忘记密码?</el-button>
            </div>
            <div>
                <el-button type="primary" class="input" @click="login">登录</el-button>
            </div>
        </div>
    </div>
</template>
<style>
* {
    margin: 0;
    padding: 0;
}

.container {
    background-color: #F0F2F5;
    height: 100vh;
    width: 100vw;
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login {
    width: 400px;
    height: 400px;
    background-color: #FFFFFF;
}

.login .loginTitle {
    margin: 10%;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: large;
}

.login .input {
    width: 80%;
    margin: 4%;
}

</style>