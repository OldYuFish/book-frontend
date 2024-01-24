<template>
    <el-form :model="form" labelWidth="180px" :rules="rules">
        <el-row>
            <el-col :span="12">
                <el-form-item label="账号" prop="username">
                    <el-input v-model="form.username" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password" />
                </el-form-item>
            </el-col>
        </el-row>
        <!-- <el-form-item label="提醒类型" prop="type">
                    <el-select v-model="form.type">
                        <el-option value="1" label="到期提醒" />
                        <el-option value="2" label="其他提醒" />
                    </el-select>
                </el-form-item> -->
                <el-row>
            <el-col :span="12">
                <el-form-item label="用户姓名" prop="realName">
                    <el-input v-model="form.realName" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="用户编号" prop="userId">
                    <el-input v-model="form.userId" disabled/>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="性别">
                    <el-input v-model="form.sex" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="民族">
                    <el-input v-model="form.nation" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="职务">
                    <el-input v-model="form.duties" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="状态">
                    <el-input v-model="form.status" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="证件类型">
                    <el-input v-model="form.idType" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="证件编号">
                    <el-input v-model="form.idCardNumber" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="联系电话">
                    <el-input v-model="form.phone" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="婚姻情况">
                    <el-input v-model="form.marriage" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-form-item label="通讯地址">
                    <el-input v-model="form.address" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="可借图书数">
                    <el-input v-model="form.couldBorrow" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="注册时间">
                    <el-input v-model="form.registerDate" disable :placeholder="now"/>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-form-item label="备注">
                    <el-input v-model="form.note" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-button>
                    返回
                </el-button>
            </el-col>
            <el-col :span="12">
                <el-button type="primary">
                    保存
                </el-button>
            </el-col>
        </el-row>
    </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { FormRules } from 'element-plus'
import dayjs from 'dayjs'

let now=dayjs()

interface RuleForm {
    userId:string
    username:string
    password:string
    realName:string
    sex:string
    nation:string
    duties:string
    status:string
    idType:string
    idCardNumber:string
    phone:string
    marriage:string
    address:string
    couldBorrow:string
    registerDate:string
    note:string
}
const form = reactive({
    userId:'',
    username:'',
    password:'',
    realName:'',
    sex:'',
    nation:'',
    duties:'',
    status:'',
    idType:'',
    idCardNumber:'',
    phone:'',
    marriage:'',
    address:'',
    couldBorrow:'',
    registerDate:'',
    note:'',
})
const rules = reactive<FormRules<RuleForm>>({
    username: [
        { required: true, trigger: 'blur' },
    ],
    password: [
        { required: true, trigger: 'blur' },
    ],
    realName: [
        { required: true, trigger: 'blur' },
    ],
})
</script>