<template>
    <el-form :model="form" labelWidth="180px" :rules="rules">
        <el-row>
            <el-col :span="24">
                <el-form-item label="活动标题" prop="title">
                    <el-input v-model="form.title" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="活动类型" prop="type">
                    <el-select v-model="form.type">
                        <el-option value="1" label="竞技比赛" />
                        <el-option value="2" label="优惠活动" />
                        <el-option value="3" label="研讨会议" />
                        <el-option value="4" label="其他" />
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="是否需报名" prop="shouldApplication">
                    <el-select v-model="form.shouldApplication">
                        <el-option value="1" label="是" />
                        <el-option value="0" label="否" />
                    </el-select>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="报名开始时间">
                    <el-input v-model="form.applicationStartDate" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="报名结束时间">
                    <el-input v-model="form.applicationEndDate" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="活动开始时间" prop="activityStartDate">
                    <el-input v-model="form.activityStartDate" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="活动结束时间" prop="activityEndDate">
                    <el-input v-model="form.activityEndDate" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-form-item label="活动地点" prop="address">
                    <el-input v-model="form.address" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-form-item label="活动内容说明">
                    <el-input v-model="form.description" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-form-item label="活动图片">
                    <el-button type="primary">
                        点我上传！
                    </el-button>
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
import { FormRules } from 'element-plus';
interface RuleForm {
    title: string
    type: string
    shouldApplication: boolean
    applicationStartDate: string
    applicationEndDate: string
    activityStartDate: string
    activityEndDate: string
    address: string
    description: string
}
const form = reactive({
    title: '',
    type: '',
    shouldApplication: '',
    applicationStartDate: '',
    applicationEndDate: '',
    activityStartDate: '',
    activityEndDate: '',
    address: '',
    description: '',
})
const rules = reactive<FormRules<RuleForm>>({
    title: [
        { required: true, trigger: 'blur' },
    ],
    type: [
        { required: true, trigger: 'blur' },
    ],
    shouldApplication: [
        { required: true, trigger: 'blur' },
    ],
    activityStartDate: [
        { required: true, trigger: 'blur' },
    ],
    activityEndDate: [
        { required: true, trigger: 'blur' },
    ],
    address: [
        { required: true, trigger: 'blur' },
    ],
})
</script>