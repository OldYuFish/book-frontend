<template>
    <div class="container">
        <div class="login">
            <el-tabs style="margin: 30px;">
                <el-tab-pane label="登录">
                    <div>
                        <el-input v-model="username" placeholder="手机号" class="input" />
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
                </el-tab-pane>
                <el-tab-pane label="找回密码">
                    <div>
                        <el-input v-model="phone" placeholder="邮箱" class="input" />
                    </div>
                    <div>
                        <el-input v-model="code" placeholder="验证码" style="width: 50%; margin: 4%;" />
                        <el-button class="inputcodebutton" type="primary" @click="getVerificationCode">发送验证码</el-button>
                    </div>
                    <div>
                        <el-input v-model="password" type="password" placeholder="密码" class="input" />
                    </div>
                    <div>
                        <el-input v-model="repeatPassword" type="password" placeholder="重复密码" class="input" />
                    </div>
                    <div>
                        <el-button type="primary" class="input" @click="register">找回密码</el-button>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script setup>
import { checkEmail, checkPhone } from '@/utils.js';
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
</script>
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

.login .input {
    width: 80%;
    margin: 4%;
}
</style>