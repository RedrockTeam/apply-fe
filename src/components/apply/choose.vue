<template>
  <section class="choose">
    <p class="title">
        选择组织和部门
    </p>

    <section class="item-container" v-for="item in choices">
        <div class="item">
            <p class="wrapper">
                <span>组织</span>
                <select>
                    <option>
                    </option>
                </select>
            </p>
        </div>
    </section>

  </section>
</template>

<script>
export default {
    data () {
        return {
            choices: [
                {organization: '红岩网校工作站', apartment: 'Web研发部'}
            ],
            organizations: [
                {name: '红岩网校工作站', value: '红岩网校工作站', apartment: [
                    {name: 'Web研发部', value: 'Web研发部'},
                    {name: '视觉设计部', value: '视觉设计部'},
                    {name: '移动开发部', value: '移动开发部'},
                    {name: '产品运营部', value: '产品运营部'},
                    {name: '运维安全部', value: '运维安全部'}
                ]},
                {name: '学生科技联合会', value: '学生科技联合会  ', apartment: [
                    {name: '综合部', value: '综合部'},
                    {name: '科创竞赛部', value: '科创竞赛部'},
                    {name: '项目管理部', value: '项目管理部'},
                    {name: '科技人文部', value: '科技人文部'},
                    {name: '媒体运营部', value: '媒体运营部'},
                    {name: '信息部', value: '信息部'}
                ]},
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.choose {
    box-sizing: border-box;
    padding: 0 .45rem;
    float: left;
    width: 10rem;
    height: 10rem;
    background-color: #ace;
}
p {
    margin: 0;
}
input, select {
    -webkit-tap-highlight-color: transparent;
}
.title {
    letter-spacing: .05rem;
    font-size: .55rem;
    text-align: center;
    color: #473d1f;
}
.item-container {
    margin-top: .5rem;

}
.item {
    background-color: #fffef5;
}
</style>