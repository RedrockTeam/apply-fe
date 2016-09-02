<template>
    <section class="about">
        <p class="title">
            学校九大组织
        </p>
        
        <section class="organizations">
            <div class="line-wrapper" 
                 v-for="organization in organizations">
                <a class="organizations-item" 
                   v-for="item in organization"
                   href="http://baidu.com">
                    <img src="/static/logo-hy.png">
                    <span>{{item.organization}}</span>
                </a>
            </div>         
        </section>

        <div class="btn-container">
            <div class="btn">
                <a v-link="{path: '/app'}">
                  返回
                </a>
            </div>
            <div class="btn">
                <a v-link="{path: '/apply'}">
                  去报名
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            organizations: [
                [
                    {organization: '红岩网校工作站', img: '/static/logo-hy.png', src: ''},
                    {organization: '红岩网校工作站', img: '', src: ''},
                    {organization: '红岩网校工作站', img: '', src: ''}
                ],
                [
                    {organization: '红岩网校工作站', img: '', src: ''},
                    {organization: '红岩网校工作站', img: '', src: ''},
                    {organization: '红岩网校工作站', img: '', src: ''}
                ],
                [
                    {organization: '红岩网校工作站', img: '', src: ''},
                    {organization: '红岩网校工作站', img: '', src: ''},
                    {organization: '红岩网校工作站', img: '', src: ''}
                ]
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.title {
    margin-top: .5rem;
    letter-spacing: .05rem;
    font-size: .55rem;
    text-align: center;
    color: #473d1f;
}
.about {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url(/static/background.png) no-repeat 100% 100%;
    background-size: cover;
    overflow: hidden;
}
.organizations {
    text-align: center;
    margin: .5rem auto;
    width: 9.6rem;
    overflow: hidden;
    .line-wrapper {
        overflow: hidden;
    }
    .organizations-item {
        display: inline-block;
        width: 3rem;
        text-align: center;
    }
    .organizations-item:first-of-type {
        float: left;
    }
    .organizations-item:last-of-type {
        float: right;
    }
    img {
        box-sizing: border-box;
        margin: 0 auto;
        display: block;
        width: 2.8rem;
        border: .06rem solid #faa747;
        border-radius: .1rem;
    }
    span {
        line-height: 1rem;
        font-size: .38rem;
        max-width: 3rem;
        overflow: hidden;
        color: #816a40;
    }
}
.btn-container {
    padding: 0 .5rem;
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
    }
    .btn:first-of-type {
        float: left;
    }
    .btn:last-of-type {
        float: right;
    }
    a {
        display: inline-block;
        width: 100%;
        height: 100%;
        color: #fff;
    }
}
</style>