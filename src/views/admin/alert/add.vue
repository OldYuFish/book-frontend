<template>
    <el-form :model="form" labelWidth="180px" :rules="rules">
        <el-row>
            <el-col :span="12">
                <el-form-item label="标题名称" prop="title">
                    <el-input v-model="form.title" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="提醒类型" prop="type">
                    <el-select v-model="form.type">
                        <el-option value="1" label="到期提醒" />
                        <el-option value="2" label="其他提醒" />
                    </el-select>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="推送渠道" prop="pushChannel">
                    <el-select v-model="form.pushChannel">
                        <el-option value="1" label="钉钉" />
                        <el-option value="2" label="微信" />
                        <el-option value="3" label="短信" />
                        <el-option value="4" label="邮箱" />
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="提醒频率" prop="frequency">
                    <el-select v-model="form.frequency">
                        <el-option value="1" label="每天一次" />
                        <el-option value="2" label="每天两次" />
                        <el-option value="3" label="每周一次" />
                        <el-option value="4" label="每月一次" />
                    </el-select>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-form-item label="提醒内容模板">
                    <el-input v-model="form.description" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-form-item label="接收对象" prop="role">
                    <el-input v-model="form.role" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="创建时间">
                    <el-input v-model="form.createDate" disabled  :placeholder="now"/>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="状态" prop="status">
                    <el-input v-model="form.status" />
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