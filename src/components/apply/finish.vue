<template>
    <section class="finish">
        <div class="banner">
            <p class="ok">
                完成
            </p>
            <p class="remain">
                你还可以报<span> {{applyData.remain_org}} </span>个组织
            </p>
        </div>
        <p class="notify">
            每人最多可以参加3个组织 同一组织可以报多个部门
        </p>
        <div class="btn">
            <a v-link="{path: '/about'}">
              了解组织
            </a>
        </div>
        <div class="btn">
            <a v-link="{path: '/app'}">
              退出
            </a>
        </div>
    </section>
</template>

<script>
export default {
    props: [
        'applyData'
    ],
    detached () {
        let data = {},
            data_str = '';
        
        data.student_file = this.applyData.student_file;
        data.student_org = this.applyData.student_org;
        data_str = JSON.stringify(data);

        localStorage.setItem('apply_CQUPT', data_str);
        /**
         *  在关闭页面之前调用
         *  报名成功后将数据存到 localStorage 
         */
    }
}
</script>

<style lang="less" scoped>
.finish {
    float: left;
    width: 10rem;
    background-color: transparent;
    overflow: hidden;
    .banner {
        text-align: center;
        margin: 0 auto;
        width: 9rem;
        height: 3.1rem;
        background: url('/static/finish-banner.png') no-repeat 100% 100%;
        background-size: contain;
        .ok {
            display: inline-block;
            margin-top: 1rem;
            color: #f38502;
            font-size: .6rem;
            width: 100%;
        }
        .remain {
            display: inline-block;
            color: #776039;
            font-size: .45rem;
            line-height: .6rem;
            margin-top: .4rem;
            span {
                font-size: .6rem;
                color: #f38502;
                vertical-align: bottom;
            }
        }
    }
}
.notify {
    margin-top: .5rem;
    margin-bottom: 0;
    text-align: center;
    font-size: .4rem;
    color: #c8b16d;
}
.btn {
    margin: .85rem auto 0 auto;
    width: 8.5rem;
    height: 1.45rem;
    background: url(/static/btn-big.png) no-repeat 100% 100%;
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
</style>