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
                        <!-- <el-col :span="12">
                            <el-button type="primary">立即预订</el-button>
                        </el-col> -->
                    </el-row>
                    <el-row>
                        <el-button type="primary">50万+人次借阅</el-button>
                        <el-button type="warning">优秀课程</el-button>
                        <el-button type="danger">专题课程</el-button>
                        <el-col :span="4">
                            更新时间
                        </el-col>
                        <el-col :span="4">
                            {{ data.data.bookInformation.updateTime }}
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4">
                            主编作者
                        </el-col>
                        <el-col :span="4">
                            {{ data.data.bookInformation.author }}
                        </el-col>
                        <el-col :span="4">
                            出版日期
                        </el-col>
                        <el-col :span="4">
                            {{ data.data.bookInformation.publicDate }}
                        </el-col>
                        <el-col :span="4">
                            出版社
                        </el-col>
                        <el-col :span="4">
                            {{ data.data.bookInformation.press }}
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4">
                            类型
                        </el-col>
                        <el-col :span="4">
                            {{ data.data.bookInformation.type }}
                        </el-col>
                        <el-col :span="4">
                            所示分类
                        </el-col>
                        <el-col :span="4">
                            {{ data.data.bookInformation.category }}
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
                            {{ data.data.bookInformation.status }}
                        </el-col>
                        <el-col :span="4">
                            图书册数
                        </el-col>
                        <el-col :span="4">
                            {{ data.data.bookInformation.number }}
                        </el-col>
                        <el-col :span="4">
                            已借出
                        </el-col>
                        <el-col :span="4">
                            {{ data.data.bookInformation.borrowNumber }}
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-header>
        <el-main>
            <el-tabs>
                <el-tab-pane label="图书简介" name="first">{{ data.data.bookInformation.description }}</el-tab-pane>
                <el-tab-pane label="读者目录" name="second">{{ chapter }}</el-tab-pane>
                <el-tab-pane label="读者评价" name="third">读者评价内容</el-tab-pane>
            </el-tabs>
            <el-card class="box-card">
            </el-card>
        </el-main>
    </el-container>
</template>

<script lang="ts" setup>
import { bookManage } from '@/api';
import { ElMessage } from 'element-plus';

const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
let url = ref('https://fecdn.luogu.com.cn/luogu/logo.png?0fdd294ff62e331d2f70e1a37ba4ee02')
let data=ref()
let chapter=ref('')
const route = useRoute()

const getBookInfo = async () => {
    const json = { id: route.params.aid }
    const { Data } = await bookManage.info(json)
    if (Data.code === 0) {
        data=Data
        // data.data.bookInformation.id
        url=data.data.bookInformation.image
        // data.data.bookInformation.title
        // data.data.bookInformation.category
        // data.data.bookInformation.type
        // data.data.bookInformation.author
        // data.data.bookInformation.press
        // data.data.bookInformation.publicDate
        // data.data.bookInformation.borrowTimes
        // data.data.bookInformation.borrowNumber
        // data.data.bookInformation.number
        // data.data.bookInformation.status
        // data.data.bookInformation.updateTime
        // data.data.bookInformation.description
        for (let i = 0; i < data.data.bookInformation.directory.length; i++) {
            chapter+=data.data.bookInformation.directory[i].chapterNumber+'  '+data.data.bookInformation.directory[i].sectionNumber+'  '+data.data.bookInformation.directory[i].chapterName
        }
    else {
        ElMessage.error("查询书籍详情信息失败!")
    }
}
getBookInfo()
</script>