<template>
  <section class="progress">
    <div class="block"></div>
    <div class="circle"></div>
    <div class="block"></div>
    <div class="circle"></div>
    <div class="block"></div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="less">
.progress {
    width: 100%;
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 0;
    text-align: center;
}
.block {
    transition: all .8s;
    margin: 0;
    padding: 0;
    display: inline-block;
    width: 2.8rem;
    height: .08rem;
    background-color: #fff;
}
.circle {
    transition: all .8s;
    box-sizing: border-box;
    border: .06rem solid #fff;
    width: .3rem;
    height: .3rem;
    background-color: #fff;
    border-radius: .15rem;
    display: inline-block;
    vertical-align: middle;
}
.finish {
    background-color: #fd9455;
}
</style>
