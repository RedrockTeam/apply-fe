<template>
  <section class="apply">
    <Progress :apply-data.sync="applyData"></Progress>
    <div v-bind:class="{'area': true, 'area-step-two': applyData.current_step == 2, 'area-step-three': applyData.current_step == 3}">
        <File :apply-data.sync="applyData"></File>
        <Choose :apply-data.sync="applyData"></Choose>
        <Finish :apply-data.sync="applyData"></Finish>
    </div>
  </section>
</template>

<script>
import Progress from "./progress"
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
            applyData: {
                current_step: 1,
                student_file: {},
                student_org: []
            }
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
    transform: translateX(0rem);
    transition: all .5s;
    width: 30rem;
}
.area-step-two {
    transform: translateX(-10rem);
}
.area-step-three {
    transform: translateX(-20rem);
}
</style>
