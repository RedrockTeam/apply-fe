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
    ready () {
        
    },
    components: {
        Progress,
        File,
        Choose,
        Finish
    },
    data () {
        return {
            /**
             *  current_step    当前步骤
             *  student_file    学生信息
             *  student_org     本次报名的部门
             *  remain_org      还能报的部门
             *  exist_org       后台返回的已经报的部门
             */
            applyData: {
                current_step: 1,
                student_file: {},
                student_org: [],
                remain_org: 3,
                exist_org: [],
                show_choose: false
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
    background: url(/static/images/comp-background.png) no-repeat 100% 100%;
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
