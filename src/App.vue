<template>
  <section class="container">
    <div class="banner"></div>
    <p class="notify">
        每人最多可以参加3个组织 同一组织可以报多个部门
    </p>
    <div class="btn">
        <a v-link="{path: '/apply'}">
          立即报名
        </a>
    </div>
    <div class="btn-container">
        <div class="btn">
            <a v-link="{path: '/about'}">
                了解组织
            </a>
        </div>
        <div class="btn">
            <a v-link="{path: '/check'}">
                查询状态
            </a>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url(/static/background.png) no-repeat 100% 100%;
  background-size: cover;
}
.banner {
    margin-top: .3rem;
    width: 100%;
    height: 8rem;
    background: url(/static/banner.png) no-repeat 100% 100%;
    background-size: cover;
}
.notify {
    padding: 0;
    margin-top: .15rem;
    margin-bottom: 0;
    text-align: center;
    font-size: .4rem;
    color: #c8b16d;
}
.btn {
    margin: 1rem auto 0 auto;
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
.btn-container {
    padding: 0 .75rem;
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

//  适配部分 切图分辨率 default ip5 (蟆的 给的图是 750 忘了默认匹配 ip6)
@media (max-width: 320px) and (max-height: 420px) {
    .banner {
        margin-top: 0;
    }
    .btn {
        margin: .5rem auto 0 auto;
    }
}
//  iphone4 wx-webview  320 * 416

@media (min-width: 360px) and (min-height: 580px) {
    .banner {
        margin-top: .4rem;
    }
    .notify {
        margin-top: .3rem;
        font-size: .36rem;
    }
    .btn {
        margin: .9rem auto 0 auto;
        a {
            font-size: .45rem;
        }
    }
}
//  iphone6 wx-webview  375 * 603

@media (min-width: 400px) and (min-height: 640px) {
    .banner {
        margin-top: .5rem;
    }
    .btn {
        margin: .9rem auto 0 auto;
    }
}
//  iphone6p wx-webview  414 * 672
</style>
