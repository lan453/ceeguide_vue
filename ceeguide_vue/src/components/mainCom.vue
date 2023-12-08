<template>
    <div class="mainComClass">
        <el-row justify="center">
            <div class="flex-container">
                <div>
                    <img src="../assets/logo.png" alt="Logo"
                        style="filter: brightness(110%);width: 80px;height: auto;position: relative;">
                </div>
                <div class="col-right">
                    <p class="col-text" @click="fileDowload">政策文件下载</p>
                    <p class="down">&nbsp; |&nbsp; </p>
                    <p class="col-text" @click="fileDowload">贵州省各高校历年录取分数线文件下载</p>
                    <p class="down">&nbsp; | &nbsp;</p>
                    <p class="col-text"><a href="https://gaokao.gzgkzytb.cn" target="_blank">用户登录</a></p>
                    <p class="down">&nbsp; | &nbsp;</p>
                    <p class="col-text"><a href="https://gly.gzgkzytb.cn" target="_blank">管理员登录</a></p>
                </div>
            </div>
        </el-row>

        <el-row justify="center">
            <div class="content-container">
                <h3 class="image-description2">前言</h3>
                <span>
                    &emsp;&emsp;本网站为开发的初衷是在高考改革的形势下能够帮助各中学子能够更好的规划自己的学业,主要适用于实行新高考改革3+1+2地区的考生。
                    因各年龄段的学生所需不同，本网站开发了两种匹配方案：一、高中以下，根据所选择的学校和专业来匹配要学习的科目;
                    二、高中，根据自己的选择科目，匹配可报考的学校和专业。<br>
                    &emsp;&emsp;希望本网站能够给各学子带去帮助，同时也希望大家都能够考上自己心仪的大学！后期本人会继续补充本网站内容，整合一系列与高考相
                    关的政策文件,并将不断完善网页，让用户拥有更好的体验。<br>
                    &emsp;&emsp;注：匹配出来的某些记录会缺少专业代码等相关字段，是因为该记录下的专业是一个大类或者是一个班级。专业大类可以去《专业目录》中的“专业类别”查找。<br>
                    <!-- &emsp;&emsp;本网站内容皆来自于<a href="http://www.moe.gov.cn/" target="_blank">"中华人民共和国教育部"</a>
                和<a href="https://zsksy.guizhou.gov.cn/" target="_blank">"贵州省招生考试院"</a>。 -->
                </span>
            </div>
            <el-col :span="24"></el-col>
            <el-carousel class="carousel_main" :interval="3000" type="card" @change="updateCurrentIndex"
                height="calc(42vh)">
                <h3 class="image-description1">网页主体内容</h3>
                <el-carousel-item v-for="(item, index) in imgwrap" :key="index">
                    <div class="carousel-item-wrapper">
                        <img :src="item.url" class="carousel-image" @click="goLogoin" />
                        <p class="image-description" v-show="currentIndex === index">{{ item.description }}</p>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </el-row>
    </div>
</template>

<script>
import '../assets/home.css'
export default {
    //组件注入
    components: {
    },
    //变量初始化
    data() {
        return {
            currentIndex: 0,
            imgwrap: [
                {
                    url: require("../assets/carousel_images/0.png"),
                    description: '一、点击右上角用户登录'
                },
                {
                    url: require("../assets/carousel_images/1.png"),
                    description: '二、用户登录界面'
                },
                {
                    url: require("../assets/carousel_images/2.png"),
                    description: '三、点击注册'
                },
                {
                    url: require("../assets/carousel_images/3.png"),
                    description: '四、注册个人信息，选择自己对应的身份类型'
                },
                {
                    url: require("../assets/carousel_images/4.png"),
                    description: '五、初中生主页面'
                },
                {
                    url: require("../assets/carousel_images/5.png"),
                    description: '六、初中生一键匹配'
                },
                {
                    url: require("../assets/carousel_images/6.png"),
                    description: '七、高中生主页面'
                },
                {
                    url: require("../assets/carousel_images/7.png"),
                    description: '八、高中生一键匹配'
                },
                {
                    url: require("../assets/carousel_images/8.png"),
                    description: '九、高等院校专业选考科目要求表'
                },
                {
                    url: require("../assets/carousel_images/9.png"),
                    description: '十、普通高等学校本科专业目录'
                },
            ]

        }
    },
    //方法定义
    methods: {
        goLogoin() {
            // 打开新标签页并跳转到指定链接
            //window.open("http://gaokao.lazhfu.xyz/", "_blank");
        },
        updateCurrentIndex(index) {
            this.currentIndex = index;
        },
        fileDowload() {

        },
    },
    // 在组件内容被渲染到页面之后自动执行的函数
    mounted() {
    },
    // 当data中的数据发生变化后执行
    updated() {
    },
}

</script>

<style>
.content-container {
    width: 155vh;
    background-color: rgb(252, 252, 252);
    text-align: left;
    padding: 10px;
    box-sizing: border-box;
    /* 确保宽度中包含填充 */
}

.down {
    color: #e5e2e2;
}

.col-right {
    margin-left: 67vh;
    display: flex;
}

.col-text {
    font-size: 15px;
    color: #353030;
    cursor: pointer;
}

.col-right :hover {
    color: rgb(0, 217, 255);
}

.col-text a {
    text-decoration: none;
    color: #353030;
}

.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}


.col-text a:hover {
    color: rgb(0, 217, 255);
}

.mainComClass {
    width: 100%;
    background-image: url('../assets/b1.png');
    /* background-color: #67C23A; */
    height: calc(100vh);
    font-weight: bold;
    /* 设置背景图的URL */
    background-size: cover;
    /* 背景图覆盖整个页面 */
    background-position: center;
    /* 背景图居中显示 */
    background-repeat: no-repeat;

}

.carousel_main {
    top: 10px;
    height: auto;
    width: 155vh;
}

.carousel-item-wrapper {
    position: relative;
    display: inline-block;
    margin-bottom: 10PX;
}

.carousel-image {
    display: block;
    width: 100%;
    height: auto;
}

.image-description1 {
    position: absolute;
    top: -12%;
    margin-left: 70px;
    transform: translate(-50%, 50%);
    color: rgb(18, 19, 18);
    background-color: rgba(128, 211, 111, 0.5);
    padding: 5px 10px;
    font-size: 20px;
    border-radius: 5px;
    /* 设置一个较高的 z-index 值 */
    z-index: 999;
}

.image-description2 {
    /* top: -15%;
    left: 7%; */
    width: 40px;
    margin-top: -10px;
    margin-left: -10px;
    color: rgb(18, 19, 18);
    background-color: rgba(128, 211, 111, 0.5);
    padding: 5px 10px;
    font-size: 20px;
    border-radius: 5px;
}

.image-description2 a {
    text-decoration: none;
}

.image-description {
    position: absolute;
    bottom: 10%;
    margin-left: 50%;
    transform: translate(-50%, 50%);
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    font-size: 14px;
    border-radius: 5px;
    width: auto;
}

.el-carousel__item:nth-child(n) {
    background-color: #d3dce6;
}

.mx-1 {
    background-color: aliceblue;
    width: 1000px;
    height: auto;
    background-color: aliceblue;
    text-align: center;
}
</style>