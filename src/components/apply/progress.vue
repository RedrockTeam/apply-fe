<template>
  <section class="progress">
    <div class="block finish"></div>
    <div class="circle finish"></div>
    <div v-bind:class="{'block': true, 'finish': applyData.current_step > 1}"></div>
    <div v-bind:class="{'circle': true, 'finish': applyData.current_step > 1}"></div>
    <div v-bind:class="{'block': true, 'finish': applyData.current_step > 2}"></div>
  </section>
</template>

<script>
export default {
    props: [
        'applyData'
    ]
}
</script>

<style lang="less">
.progress {
    width: 100%;
    height: 1.1rem;
    line-height: 1.1rem;
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
