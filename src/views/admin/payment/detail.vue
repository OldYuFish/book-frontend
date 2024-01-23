<!-- <template>

</template>

<script lang="ts" setup>

</script> -->
<template>
  <el-container>
    <el-header class="header">
      <span class="header-title">订单号码：KCZ2023051809124400001</span>
    </el-header>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form label-position="left" label-width="100px">
            <el-form-item label="订单编号">
              <span>KCZ2023051809124400001</span>
            </el-form-item>
            <el-form-item label="支付状态">
              <span>已完成</span>
            </el-form-item>
            <el-form-item label="支付时间">
              <span>2023-05-18 09:12:44</span>
            </el-form-item>
            <el-form-item label="订单时间">
              <span>2023-05-17 14:00:00</span>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12">
          <!-- <el-avatar src="https://placekitten.com/100/100"></el-avatar> -->
          <el-form label-position="left" label-width="100px">
            <el-form-item label="用户名">
              <span>王小虎</span>
            </el-form-item>
            <el-form-item label="支付金额">
              <span>￥50.00</span>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-main>
    <el-footer class="footer">
      <el-button>返回</el-button>
    </el-footer>
  </el-container>
</template>

<script setup>
import { ElContainer, ElHeader, ElMain, ElFooter, ElRow, ElCol, ElForm, ElFormItem, ElAvatar, ElButton } from 'element-plus';
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 16px;
  background-color: #F2F2F2;
}
.header-title {
  font-weight: bold;
}
.footer {
  text-align: right;
  padding: 20px;
}
</style>
