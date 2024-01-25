<template>
    <el-form :model="form" ref="formRef" labelWidth="180px" :rules="rules">
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
                <el-form-item label="性别" prop="sex">
                    <el-input v-model="form.sex" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="民族" prop="nation">
                    <el-input v-model="form.nation" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="职务" prop="duties">
                    <el-input v-model="form.duties" />
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
                <el-form-item label="证件类型" prop="idType">
                    <el-input v-model="form.idType" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="证件编号" prop="idCardNumber">
                    <el-input v-model="form.idCardNumber" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="联系电话" prop="phone">
                    <el-input v-model="form.phone" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="婚姻情况" prop="marriage">
                    <el-input v-model="form.marriage" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-form-item label="通讯地址" prop="address">
                    <el-input v-model="form.address" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="可借图书数" prop="couldBorrow">
                    <el-input v-model="form.couldBorrow" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="注册时间" prop="registerDate">
                    <el-input v-model="form.registerDate" disable :placeholder="now"/>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-form-item label="备注" prop="note">
                    <el-input v-model="form.note" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-button @click="router.push('/admin/user/information')">
                    返回
                </el-button>
            </el-col>
            <el-col :span="12">
                <el-button type="primary" @click="create">
                    保存
                </el-button>
            </el-col>
        </el-row>
    </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage, FormInstance, FormRules } from "element-plus";
import dayjs from 'dayjs'
import { UserDetail } from "@/models";
import { userManage } from "@/api";

const router = useRouter();
const formRef = ref<FormInstance>();
const form = reactive({
    userId: '',
    username: '',
    password: '',
    realName: '',
    sex: '',
    nation: '',
    duties: '',
    status: '',
    idType: '',
    idCardNumber: '',
    phone: '',
    marriage: '',
    address: '',
    couldBorrow: 0,
    registerDate: '',
    note: '',
} as UserDetail);
const rules: FormRules = {
    username: [
        { required: true, trigger: 'blur' },
    ],
    password: [
        { required: true, trigger: 'blur' },
    ],
    realName: [
        { required: true, trigger: 'blur' },
    ],
};
const create = () => {
  formRef.value!.validate(async (valid) => {
    if (valid) {
      const params = {
        userId: form.userId,
        username: form.username,
        password: form.password,
        realName: form.realName,
        sex: form.sex,
        nation: form.nation,
        duties: form.duties,
        status: form.status,
        idType: form.idType,
        idCardNumber: form.idCardNumber,
        phone: form.phone,
        marriage: form.marriage,
        address: form.address,
        couldBorrow: form.couldBorrow,
        registerDate: dayjs(form.registerDate).format("YYYY-MM-DD"),
        note: form.note,
      } as UserDetail;
      const { data } = await userManage.create(params);
      if (data.code === 0) {
        ElMessage.success("用户添加成功！");
      }
    } else {
      ElMessage.error("表格填写有误，请检查！");
    }
  })
};
</script>