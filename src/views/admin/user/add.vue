<template>
    <el-form :model="form" labelWidth="180px" :rules="rules">
        <el-row>
            <el-col :span="12">
                <el-form-item label="账号" prop="title">
                    <el-input v-model="form.title" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="密码" prop="title">
                    <el-input v-model="form.title" />
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
                <el-form-item label="用户姓名" prop="title">
                    <el-input v-model="form.title" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="用户编号" prop="title">
                    <el-input v-model="form.title" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="性别" prop="title">
                    <el-input v-model="form.title" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="民族" prop="title">
                    <el-input v-model="form.title" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="职务" prop="title">
                    <el-input v-model="form.title" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="状态" prop="title">
                    <el-input v-model="form.title" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="证件类型" prop="title">
                    <el-input v-model="form.title" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="证件编号" prop="title">
                    <el-input v-model="form.title" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="联系电话" prop="title">
                    <el-input v-model="form.title" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="婚姻情况" prop="title">
                    <el-input v-model="form.title" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-form-item label="通讯地址" prop="title">
                    <el-input v-model="form.title" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="可借图书数" prop="title">
                    <el-input v-model="form.title" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="注册时间" prop="title">
                    <el-input v-model="form.title" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-form-item label="备注" prop="title">
                    <el-input v-model="form.title" />
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

interface RuleForm {
    title: string
    type: string
    pushChannel: boolean
    frequency: string
    description: string
    role: string
    createDate: string
    status: string
}
const form = reactive({
    title: '',
    type: '',
    pushChannel: '',
    frequency: '',
    description: '',
    role: '',
    createDate: '',
    status: '',
})
const rules = reactive<FormRules<RuleForm>>({
    title: [
        { required: true, trigger: 'blur' },
    ],
    type: [
        { required: true, trigger: 'blur' },
    ],
    pushChannel: [
        { required: true, trigger: 'blur' },
    ],
    frequency: [
        { required: true, trigger: 'blur' },
    ],
    role: [
        { required: true, trigger: 'blur' },
    ],
    status: [
        { required: true, trigger: 'blur' },
    ],
})
</script>