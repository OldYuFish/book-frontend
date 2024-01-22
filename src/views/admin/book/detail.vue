<template>
    <el-container>
        <el-header height="210px">
            <el-row>
                <el-col :span="10">
                    <el-image style="width: 8eh; height: 15em;" :src="url" :fit="fits" />
                </el-col>
                <el-col :span="12">
                    <el-row>
                        <el-col :span="12">
                            <div style="font-size: 35px;">{{ bookName }}</div>
                        </el-col>
                        <el-col :span="12">
                            <el-button type="primary">立即预订</el-button>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-button type="primary">50万+人次借阅</el-button>
                        <el-button type="warning">优秀课程</el-button>
                        <el-button type="danger">专题课程</el-button>
                        <el-col :span="4">
                            更新时间
                        </el-col>
                        <el-col :span="8">
                            2022-11-15 09:31:45
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4">
                            主编作者
                        </el-col>
                        <el-col :span="4">
                            XXX
                        </el-col>
                        <el-col :span="4">
                            出版日期
                        </el-col>
                        <el-col :span="4">
                            2022-01-17
                        </el-col>
                        <el-col :span="4">
                            出版社
                        </el-col>
                        <el-col :span="4">
                            北京大学出版社
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4">
                            类型
                        </el-col>
                        <el-col :span="4">
                            工程学 > 计算机类
                        </el-col>
                        <el-col :span="4">
                            所示分类
                        </el-col>
                        <el-col :span="4">
                            技术类
                        </el-col>
                        <el-col :span="4">
                            ISBN/ISSN
                        </el-col>
                        <el-col :span="4">
                            978-7-5394-7312-9
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4">
                            图书状态
                        </el-col>
                        <el-col :span="4">
                            已上架
                        </el-col>
                        <el-col :span="4">
                            图书册数
                        </el-col>
                        <el-col :span="4">
                            20
                        </el-col>
                        <el-col :span="4">
                            已借出
                        </el-col>
                        <el-col :span="4">
                            14
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-header>
        <el-main>
            <el-tabs>
                <el-tab-pane label="图书简介" name="first">图书简介内容</el-tab-pane>
                <el-tab-pane label="读者目录" name="second">读者目录内容</el-tab-pane>
                <el-tab-pane label="读者评价" name="third">读者评价内容</el-tab-pane>
            </el-tabs>
            <el-card class="box-card">
            </el-card>
        </el-main>
    </el-container>
</template>

<script lang="ts" setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
let url = 'https://fecdn.luogu.com.cn/luogu/logo.png?0fdd294ff62e331d2f70e1a37ba4ee02'

let bookName = '111'
</script>