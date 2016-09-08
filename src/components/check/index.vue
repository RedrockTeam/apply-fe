<template>
    <section class="check">
       <div  v-bind:class="{'area': true, 'area-step-two': applyData.current_step == 2}">
           <File :apply-data.sync="applyData"></File>
           <Result :apply-data.sync="applyData"></Result>
       </div>
    </section>
</template>

<script>
import File from "./file"
import Result from "./result"

export default {
    components: {
        File,
        Result
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

<style lang="less" scoped>
.check {
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
    width: 20rem;
}
.area-step-two {
    transform: translateX(-10rem);
}
</style>