<template>
  <section class="apply">
    <Progress></Progress>
    <div class="area">
        <File></File>
        <Choose></Choose>
        <Finish></Finish>
    </div>
  </section>
</template>

<script>
import  Progress from "./progress"
import File from "./file"
import Choose from './choose'
import Finish from './finish'

export default {
  components: {
    Progress,
    File,
    Choose,
    Finish
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less">
.apply {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url(/static/background.png) no-repeat 100% 100%;
  background-size: cover;
  overflow: hidden;
}
.area {
    transform: translateX(-10rem);
    transition: all .5s;
    width: 30rem;
}
</style>
