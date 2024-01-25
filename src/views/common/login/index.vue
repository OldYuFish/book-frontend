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
                        <el-button type="primary" class="input" @click="submit">登录</el-button>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="找回密码">
                    <div>
                        <el-input v-model="username" placeholder="用户名" class="input" />
                    </div>
                    <!-- <div>
                        <el-input v-model="code" placeholder="验证码" style="width: 50%; margin: 4%;" />
                        <el-button class="inputcodebutton" type="primary" @click="getVerificationCode">发送验证码</el-button>
                    </div> -->
                    <div>
                        <el-input v-model="password" type="password" placeholder="密码" class="input" />
                    </div>
                    <div>
                        <el-input v-model="repeatPassword" type="password" placeholder="重复密码" class="input" />
                    </div>
                    <div>
                        <el-button type="primary" class="input" @click="submitFindPwd">找回密码</el-button>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script setup>
import { checkEmail, checkPhone } from '@/utils.js'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import { login } from '@/api';
const username = ref('')
const password = ref('')
const repeatPassword=ref('')
const router = useRouter();
const submit = async () => {
    if (
        username.value === null ||
        username.value === undefined ||
        username.value === "" ||
        password.value === "" ||
        password.value === null ||
        password.value === undefined
    ) {
        ElMessage.error("用户名或密码为空");
    } else {
        const json = { username: username.value, password: password.value };
        const { data } = await login.login(json)
        if (data.code === 0) {
            localStorage.setItem("token", data.data.token);
            await router.push("/admin/home");
            ElMessage.success("登陆成功");
        }
        else {
            ElMessage.error('登陆失败！请联系系统管理员！');
        }
    }
}

const submitFindPwd = async () => {
    if (
        username.value === null ||
        username.value === undefined ||
        username.value === "" ||
        password.value === "" ||
        password.value === null ||
        password.value === undefined
    ) {
        ElMessage.error("用户名或密码为空");
    } else {
        const json = { username: username.value, password: password.value };
        const { data } = await login.findPassword(json)
        if (data.code === 0) {
            ElMessage.success("修改成功");
            await router.push('/login')
        }
        else {
            ElMessage.error('修改失败！请联系系统管理员！');
        }
    }
}

</script>
<style>
* {
    margin: 0;
    padding: 0;
}

.container {
    background-color: #F0F2F5;
    height: 100vh;
    width: 100%;
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