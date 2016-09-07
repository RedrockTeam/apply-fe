<template>
  <section class="file">
    <p class="title">
        填写个人信息
    </p>

    <p class="item">
        <span>姓名</span>
        <input type="text" 
               class="input-text" 
               v-model="student_file.name">
    </p>
    <p class="item">
        <span>性别</span>
        <span class="label-wrapper">
            <input type="radio"
               class="input-radio" 
               id="male" 
               value="男" 
               v-model="student_file.gender">
            <label for="male">男</label>
            <input type="radio" 
                   class="input-radio" 
                   id="female" 
                   value="女" 
                   v-model="student_file.gender">
            <label for="female">女</label>
        </span>
    </p>
    <p class="item">
        <span>学号</span>
        <input type="tel" 
               class="input-text" 
               v-model="student_file.code">
    </p>
    <p class="item">
        <span>学院</span>
        <select v-model="student_file.college">
            <option disabled="disabled">请选择学院</option>
            <option v-for="option in colleges" 
                    v-bind:value="option.value">
                {{option.text}}
            </option>
        </select>
    </p>
    <p class="item">
        <span>手机</span>
        <input type="tel" 
               class="input-text" 
               v-model="student_file.contact">
    </p>
    
    <div class="btn-container">
        <div class="btn">
            <a v-link="{path: '/app'}">
                返回
            </a>
        </div>
        <div class="btn" 
             @touchend="next_step">
            下一步
        </div>
    </div>

    <div class="file-cover" 
         v-show="show_file_cover">
        <div class="notify-container">
            <div class="close" 
                 @click="close_file_cover">
                
            </div>
            <p class="cover-title">提示</p>
            <p class="cover-notify">
                请将信息正确地填写完整
            </p>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    ready () {
        if (localStorage.apply_CQUPT) {
            let data = JSON.parse(localStorage.apply_CQUPT);
            this.student_file = data.student_file;
        }
    },
    props: [
        'applyData'
    ],
    data () {
        return {
            show_file_cover: false,
            student_file: {
                name: "",
                gender: "",
                code: "",
                college: "请选择学院",
                contact: "",
            },
            colleges: [
                { text: '通信与信息工程学院', value: '通信与信息工程学院' },
                { text: '计算机科学与技术学院', value: '计算机科学与技术学院' },
                { text: '经济管理学院', value: '经济管理学院' },
                { text: '自动化学院学院', value: '自动化学院学院' },
                { text: '光电工程学院', value: '光电工程学院' },
                { text: '外国语学院', value: '外国语学院' },
                { text: '生物信息学院', value: '生物信息学院' },
                { text: '法学院', value: '法学院' },
                { text: '先进制造工程学院', value: '先进制造工程学院' },
                { text: '体育学院', value: '体育学院' },
                { text: '理学院', value: '理学院' },
                { text: '传媒艺术学院', value: '传媒艺术学院' },
                { text: '软件工程学院', value: '软件工程学院' },
                { text: '国际半导体学院', value: '国际半导体学院' },
                { text: '国际学院', value: '国际学院' }
            ]
        }
    },
    methods: {
        close_file_cover () {
            this.show_file_cover = false;
        },
        next_step () {
            let file = this.student_file;

            for (let key in file) {
                if (file[key].length == 0) {
                    this.show_file_cover = true;
                    return;
                }
            }

            if (!(/(^(13\d|15[^4\D]|17[13678]|18\d)\d{8}|170[^346\D]\d{7})$/.test(file.contact))) {
                /* 电话格式填写不对 */
                this.show_file_cover = true;
                return;
            }
            if (!(/2014\d{6}/.test(file.code))) {
                /* 学号格式填写不对 */
                this.show_file_cover = true;
                return;
            }
            if (file.college == "请选择学院") {
                /* 学院没有填写 */
                this.show_file_cover = true;
                return;
            }

            this.applyData.student_file = file;
            this.applyData.current_step = 2;
        }
    }
}
</script>

<style lang="less" scoped>
.file-cover {
    transition: all .6s;
    position: absolute;
    z-index: 100;
    background-color: rgba(0, 0, 0, .5);
    width: 10rem;
    height: 20rem;
    top: -2rem;
    left: 0rem;
    bottom: 0;
    .notify-container {
        position: absolute;
        box-sizing: border-box;
        width: 8rem;
        height: 3rem;
        top: 6rem;
        left: 50%;
        margin-left: -4rem;
        padding: .3rem 0rem;
        border-radius: .1rem;
        background-color: #fffef5;
        text-align: center;
        font-size: .45rem;
    }
    .cover-title {
        color: #f58604; 
        font-size: .5rem;
        margin-bottom: .5rem;       
    }
    .cover-notify {
        margin-bottom: .1rem;
    }
    .close {
        position: absolute;
        top: .1rem;
        right: .15rem;
        width: .5rem;
        height: .5rem;
        background: url('/static/close.png') no-repeat 100% 100%;
        background-size: cover;
        -webkit-tap-highlight-color: transparent;
    }

}
input, a, label, select, .btn {
    -webkit-tap-highlight-color: transparent;
}
label {
    position: relative;
    font-size: .5rem;
}
select {
    padding-left: .2rem;
    appearance: button;
    box-sizing: border-box;
    margin: 0;
    width: 7.5rem;
    height: 1rem;
    line-height: .8rem;
    font-size: .5rem;
    float: right;
    border: none;
    border-radius: .15rem;
    outline: none;
    position: relative;
    background: url('/static/arrow.png') no-repeat 100% 100%;
    background-size: contain;
    background-color: #fefff4;
}
label:before {
    content: "";
    display: inline-block;
    transition: all .5s;
    box-sizing: border-box;
    width: .5rem;
    height: .5rem;
    border-radius: .25rem;
    border: .1rem solid #fff;
    margin-right: .2rem;
    background-color: #fff;
    vertical-align: baseline;
}
input[type=radio]:checked + label:before {
    background-color: #feaa61;
}
.label-wrapper {
    display: inline-block;
    float: right;
    width: 7.5rem;
}
.file {
    box-sizing: border-box;
    padding: 0 .45rem;
    float: left;
    width: 10rem;
    height: 10rem;
}
.title {
    letter-spacing: .05rem;
    font-size: .55rem;
    text-align: center;
    color: #473d1f;
}
.item {
    margin-top: .6rem;
    line-height: 1rem;
    color: #816b41;
    span {
        font-size: .5rem;
        letter-spacing: .05rem;
    }
}
.input-text {
    box-sizing: border-box;
    margin: 0;
    padding: 0 .2rem;
    background-color: #fefff4;
    width: 7.5rem;
    height: 1rem;
    line-height: .8rem;
    font-size: .5rem;
    float: right;
    border: none;
    border-radius: .15rem;
    outline: none;
}
.input-radio {
    display: none;
}
.btn-container {
    padding: 0 .5rem;
    margin-top: 1rem;
    .btn {
        display: inline-block;
        width: 3.7rem;
        height: 1.35rem;
        line-height: 1.3rem;
        text-align: center;
        color: #fff;
        font-size: .5rem;
        letter-spacing: .2rem;
        background: url('/static/btn-small.png') no-repeat 100% 100%;
        background-size: cover;
        a {
            width: 100%;
            height: 100%;
            text-decoration: none;
            color: #fff;
        }
    }
    .btn:first-of-type {
        float: left;
    }
    .btn:last-of-type {
        float: right;
    }
}
</style>