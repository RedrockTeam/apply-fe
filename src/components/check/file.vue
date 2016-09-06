<template>
    <section class="file">
        <p class="title">
            输入身份信息
        </p>

        <p class="item">
            <span>姓名</span>
            <input type="text" 
                   class="input-text" 
                   v-model="student_file.name">
        </p>
        <p class="item">
            <span>学号</span>
            <input type="tel" 
                   class="input-text" 
                   v-model="student_file.id">
        </p>
        
        <p class="notify" v-show="show_notify">
            {{notify}}
        </p>

        <div class="btn-container">
            <div class="btn">
                <a v-link="{path: '/app'}">
                    返回
                </a>
            </div>
            <div class="btn" 
                 @touchend="check_file">
                下一步
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: [
        'applyData'
    ],
    data () {
        return {
            student_file: {
                name: "",
                id: ""
            },
            show_notify: true,
            notify: ''
        }
    },
    methods: {
        check_file () {
            this.notify = '姓名与学号不匹配';
        },
        next_step () {
            let file = this.student_file;
            this.applyData.student_file = this.student_file;
            this.applyData.current_step = 2;
        }
    }
}
</script>

<style lang="less" scoped>
.file {
    box-sizing: border-box;
    padding: 0 .45rem;
    float: left;
    width: 10rem;
    height: 10rem;
    .title {
        margin: 1.5rem auto;
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
    .notify {
        margin-left: 1.6rem;
        line-height: 1rem;
        height: 1rem;
        color: #816b41;
        font-size: .45rem;
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
}
</style>