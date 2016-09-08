<template>
    <section class="result">
        <div class="dialog">
            不巧
            <span class="name">{{applyData.student_file.name}}</span>
            同学 我们在这里等你
        </div>
        
        <section class="item-container">
            <div class="item" v-for="item in student_org">
                <p class="wrapper">
                    <span class="key">部门</span>
                    <span class="department">
                        {{item.department}}
                    </span>
                </p>
                <p class="wrapper">
                    <span class="key">状态</span>
                    <span class="status">
                        {{item.status}}
                    </span>
                </p>
            </div>
        </section>

        <div class="btn">
            <a v-link="{path: '/app'}">
                返回首页
            </a>
        </div>
    </section>
</template>

<script>
export default {
    watch : {
        'applyData.student_org': function (new_value, old_value) {
            this.student_org = new_value;
        }
    },
    props: [
        'applyData'
    ],
    data () {
        return {
            student_org: [
                {department: '红岩网校工作站web研发部', status: '已报名'}
            ]
        }
    },
    methods: {
        
    }
}
</script>

<style lang="less" scoped>
.result {
    box-sizing: border-box;
    padding: 0 .45rem;
    float: left;
    width: 10rem;
    height: 10rem;
}
.dialog {
    width: 100%;
    height: 2rem;
    line-height: 2.2rem;
    text-align: center;
    font-size: .45rem;
    background: url('/static/images/dialog.png') no-repeat 100% 100%;
    background-size: contain;
    .name {
        vertical-align: bottom;
        display: inline-block;
        white-space:nowrap;
        overflow:hidden; 
        text-overflow:ellipsis;
        max-width: 2.5rem;
        color: #f58604;
    }
}
.item-container {
    transition: all .6s;
    margin-top: .5rem;
    min-height: 9rem;
    max-height: 10rem;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
.item {
    margin-top: .5rem;
    box-sizing: border-box;
    padding: .2rem 0 .1rem 0;
    border-radius: .1rem;
    background-color: #fffef5;
    position: relative;
    .wrapper {
        padding: 0 .9rem 0 .3rem;
        box-sizing: border-box;
        line-height: 1rem;
        color: #816b41;
        .key {
            font-size: .45rem;
            letter-spacing: .05rem;
            margin-right: .3rem;
        }
        .department {
            line-height: 1rem;
            font-size: .45rem;
            max-width: 6.5rem;
            display: inline-block;
            white-space:nowrap;
            overflow:hidden; 
            text-overflow:ellipsis;
            vertical-align: top;
        }
        .status {
            font-size: .45rem;   
            color: #f58604;
        }
    }
    .wrapper:first-of-type {
        padding-bottom: .1rem;
        border-bottom: 1px solid #ccc;
    }
    .wrapper:last-of-type {
        padding-top: .2rem;
    }
}
.item:first-of-type {
    margin-top: 0;
}
.btn {
    margin: 1rem auto 0 auto;
    width: 8.5rem;
    height: 1.45rem;
    background: url(/static/images/btn-big.png) no-repeat 100% 100%;
    background-size: cover;   
    a {
        display: inline-block;
        width: 100%;
        height: 100%;
        line-height: 1.45rem;
        font-size: .4rem;
        text-align: center;
        text-decoration: none;
        color: #fff;
        letter-spacing: .05rem;
        -webkit-tap-highlight-color: transparent;
    }
}

@media (max-width: 320px) and (max-height: 420px) {
    .item-container {
        margin-top: .2rem;
        min-height: 7rem;
        max-height: 8.5rem;
    }
    .btn {
        margin: .5rem auto 0 auto;
    }
}
//  iphone4 wx-webview  320 * 416

@media (min-width: 360px) and (min-height: 580px) {
    .item-container {
        min-height: 9rem;
        max-height: 10rem;
    }
    .btn {
        margin: .9rem auto 0 auto;
        a {
            font-size: .45rem;
        }
    }
}
//  iphone6 wx-webview  375 * 603

</style>