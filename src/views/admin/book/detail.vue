<template>
    <el-container>
        <el-header height="210px">
            <el-row>
                <el-col :span="10">
                    <el-image style="width: 8em; height: 15em;" :src="url" :fit="'fill'" />
                </el-col>
                <el-col :span="12">
                    <el-row>
                        <el-col :span="12">
                            <div style="font-size: 35px;">{{ bookInfo.title }}</div>
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
                            {{ bookInfo.updateTime }}
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4">
                            主编作者
                        </el-col>
                        <el-col :span="4">
                            {{ bookInfo.author }}
                        </el-col>
                        <el-col :span="4">
                            出版日期
                        </el-col>
                        <el-col :span="4">
                            {{ bookInfo.publicDate }}
                        </el-col>
                        <el-col :span="4">
                            出版社
                        </el-col>
                        <el-col :span="4">
                            {{ bookInfo.press }}
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4">
                            类型
                        </el-col>
                        <el-col :span="4">
                            {{ bookInfo.type }}
                        </el-col>
                        <el-col :span="4">
                            所示分类
                        </el-col>
                        <el-col :span="4">
                            {{ bookInfo.category }}
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
                            {{ bookInfo.status }}
                        </el-col>
                        <el-col :span="4">
                            图书册数
                        </el-col>
                        <el-col :span="4">
                            {{ bookInfo.number }}
                        </el-col>
                        <el-col :span="4">
                            已借出
                        </el-col>
                        <el-col :span="4">
                            {{ bookInfo.borrowNumber }}
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-header>
        <el-main>
            <el-tabs>
                <el-tab-pane label="图书简介" name="first">{{ bookInfo.description }}</el-tab-pane>
                <el-tab-pane label="读者目录" name="second">
                  <el-row v-for="chapter of chapters">
                    <el-text size="small">{{ chapter }}</el-text>
                  </el-row>
                </el-tab-pane>
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

const url = ref('https://fecdn.luogu.com.cn/luogu/logo.png?0fdd294ff62e331d2f70e1a37ba4ee02')
const bookInfo = ref({
  id: 0,
  image: '',
  title: '',
  category: '',
  type: '',
  author: '',
  press: '',
  publicDate: '',
  borrowTimes: 0,
  borrowNumber: 0,
  number: 0,
  status: '',
  updateTime: '',
  description: '',
});
const chapters = ref<string[]>([]);
const route = useRoute()

const getBookInfo = async () => {
    const json = { id: Number(route.params.aid) };
    const { data } = await bookManage.info(json);
    if (data.code === 0) {
      bookInfo.value.id = data.data.bookInformation.id;
      bookInfo.value.image = '';
      bookInfo.value.title = data.data.bookInformation.title;
      bookInfo.value.category = data.data.bookInformation.category;
      bookInfo.value.type = data.data.bookInformation.type;
      bookInfo.value.author = data.data.bookInformation.author;
      bookInfo.value.press = data.data.bookInformation.press;
      bookInfo.value.publicDate = data.data.bookInformation.publicDate;
      bookInfo.value.borrowTimes = data.data.bookInformation.borrowTimes;
      bookInfo.value.borrowNumber = data.data.bookInformation.borrowNumber;
      bookInfo.value.number = data.data.bookInformation.number;
      bookInfo.value.status = data.data.bookInformation.status;
      bookInfo.value.updateTime = data.data.bookInformation.updateTime;
      bookInfo.value.description = data.data.bookInformation.description;
      data.data.bookInformation.directory.forEach((val) => {
        if (String(val.sectionNumber) === '0') {
          chapters.value.push(`第${val.chapterNumber}章 ${val.chapterName}`);
        } else {
          chapters.value.push(`${val.chapterNumber}.${val.sectionNumber} ${val.chapterName}`);
        }
      });
    } else {
        ElMessage.error("查询书籍详情信息失败!")
    }
};
getBookInfo();
</script>