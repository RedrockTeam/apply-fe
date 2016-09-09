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
                   v-bind:href="item.href">
                    <img v-bind:src="item.img">
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
            /* 记得加上招贤纳士的地址 */
            organizations: [
                [
                    {organization: '团委办公室', img: '/static/images/logo-tw.png', href: 'http://h5.rrxiu.net/v/aqbj01'},
                    {organization: '青年志愿者协会', img: '/static/images/logo-qx.png', href: 'http://o.maka.im/k/66AKFG37'},
                    {organization: '团委宣传部', img: '/static/images/logo-tw.png', href: 'http://m.eqxiu.com/s/cPPW2WtR'}
                ],
                [
                    {organization: '科技联合会', img: '/static/images/logo-kl.png', href: 'http://b61.rrxiu.me/v/ikq34i'},
                    {organization: '红岩网校工作站', img: '/static/images/logo-hy.png', href: 'http://hongyan.cqupt.edu.cn/2016joinus/'},
                    {organization: '社团联合会', img: '/static/images/logo-sl.png', href: 'http://u1380763.jisuapp.cn/s?id=1936916'}
                ],
                [
                    {organization: '大学生艺术团', img: '/static/images/logo-dyt.png', href: 'http://h5.rrxiu.net/v/nxs2xo'},
                    {organization: '团委组织部', img: '/static/images/logo-tw.png', href: 'http://u1380875.jisuapp.cn/s?id=1951983'},
                    {organization: '学生会', img: '/static/images/logo-xsh.png', href: 'http://b61.rrxiu.me/v/4hbitl?from_code=5897fe5273c16e98fc6cd27fdc4b9f60'}
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
    font-size: .5rem;
    text-align: center;
    color: #473d1f;
}
.about {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url(/static/images/comp-background.png) no-repeat 100% 100%;
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
    padding: 0 .75rem;
    overflow: hidden;
    .btn {
        display: inline-block;
        width: 3.7rem;
        height: 1.35rem;
        line-height: 1.35rem;
        text-align: center;
        color: #fff;
        font-size: .45rem;
        letter-spacing: .2rem;
        background: url('/static/images/btn-small.png') no-repeat 100% 100%;
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
@media (max-width: 320px) and (max-height: 420px) {
    .organizations {
        margin: .3rem auto;
    }
    .organizations-item {
        span {
            line-height: .8rem;
        }
    }
}
//  iphone4 wx-webview  320 * 416
</style>