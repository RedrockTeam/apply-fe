<template>
  <section class="choose">
    <p class="title">
        选择组织和部门
    </p>

    <section class="item-container">
        <div class="item" 
             v-for="choice in choices" 
             transition="bounce">
            <div class="close"
                 @click="close_item($index)"
                 v-show="choice.removable">
            </div>
            <p class="wrapper">
                <span>组织</span>
                <select v-model="choice.organization">
                    <option v-for="organization in organizations" 
                            v-bind:value="organization.value">
                        {{organization.value}}
                    </option>
                </select>
            </p>
            <p class="wrapper">
                <span>部门</span>
                <select v-model="choice.apartment">
                    <option v-for="apartment in apartments[choice.organization]"
                            v-bind:value="apartment">
                        {{apartment}}
                    </option>
                </select>
            </p>
        </div>
        <div class="add-item" 
             @click="add_item"
             v-show="3 - choices.length">
            <div class="add">
                
            </div>
            <span>继续添加报名组织</span>
        </div>
    </section>

    <div class="btn-container">
        <div class="btn" @touchend="prev_step">
            上一步
        </div>
        <div class="btn" @touchend="next_step">
            确认
        </div>
    </div>
  </section>
</template>

<script>
export default {
    props: [
        'applyData'
    ],
    data () {
        return {
            choices: [
                {organization: '红岩网校工作站', apartment: 'Web研发部', removable: false}
            ],
            organizations: {
                '红岩网校工作站': {
                    value: '红岩网校工作站'
                },
                '学生科技联合会': {
                    value: '学生科技联合会'
                }
            },
            apartments: {
                '红岩网校工作站': [
                    'Web研发部',
                    '视觉设计部',
                    '移动开发部',
                    '产品运营部',
                    '运维安全部'
                ],
                '学生科技联合会': [
                    '综合部',
                    '科创竞赛部',
                    '项目管理部',
                    '科技人文部',
                    '媒体运营部',
                    '信息部'
                ]
            }
        }
    },
    methods: {
        add_item () {
            let data = {
                organization: '红岩网校工作站', 
                apartment: 'Web研发部',
                removable: true
            };
            this.choices.push(data)
        },
        close_item (index) {
            this.choices.splice(index, 1);
        },
        prev_step () {
            this.applyData.current_step = 1;
        },
        next_step () {
            this.applyData.student_org = this.choices;
            this.applyData.current_step = 3;
        }
    }
}
</script>

<style lang="less" scoped>
.choose {
    transition: all .6s;
    box-sizing: border-box;
    padding: 0 .45rem;
    float: left;
    width: 10rem;
}
select {
    padding-left: .2rem;
    appearance: button;
    box-sizing: border-box;
    margin: 0;
    width: 6.5rem;
    height: 1rem;
    line-height: .8rem;
    font-size: .5rem;
    float: right;
    border: none;
    border-radius: .15rem;
    outline: none;
    position: relative;
    background: url('/static/arrow.png') no-repeat 100% 100%;
    background-size: contain;
    background-color: #eeeeed;
}
.title {
    letter-spacing: .05rem;
    font-size: .55rem;
    text-align: center;
    color: #473d1f;
}
.item-container {
    transition: all .6s;
    margin-top: .5rem;
    min-height: 8rem;
    max-height: 11rem;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
.add-item {
    transition: all .6s;
    width: 100%;
    padding: .2rem 0;
    text-align: center;
    font-size: .5rem;
    line-height: .5rem;
    color: #fd9d4f;
    -webkit-tap-highlight-color: transparent;
    .add {
        display: inline-block;
        width: .5rem;
        height: .5rem;
        background: url('/static/add.png') no-repeat 100% 100%;
        background-size: cover;
        vertical-align: middle;
    }
    span {
        vertical-align: middle;
    }
}
.item {
    margin-top: .8rem;
    box-sizing: border-box;
    padding: .3rem 0rem;
    border-radius: .1rem;
    background-color: #fffef5;
    position: relative;
    .close {
        position: absolute;
        top: .1rem;
        right: .15rem;
        width: .5rem;
        height: .5rem;
        background: url('/static/close.png') no-repeat 100% 100%;
        background-size: cover;
        -webkit-tap-highlight-color: transparent;
    }
    .wrapper {
        padding: 0 .9rem 0 .3rem;
        box-sizing: border-box;
        line-height: 1rem;
        color: #816b41;
        span {
            font-size: .5rem;
            letter-spacing: .05rem;
        }
    }
    .wrapper:first-of-type {
        padding-bottom: .1rem;
        border-bottom: 1px dashed #ccc;
    }
    .wrapper:last-of-type {
        padding-top: .2rem;
    }
}
.item:first-of-type {
    margin-top: 0;
}
.btn-container {
    margin-top: .5rem;
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
}

@media (max-width: 320px) and (max-height: 420px) {
    .item-container {
        margin-top: .2rem;
        min-height: 7rem;
        max-height: 8.5rem;
    }
}
//  iphone4 wx-webview  320 * 416

@media (min-width: 360px) and (min-height: 580px) {
    .item-container {
        max-height: 11rem;
    }
}
//  iphone6 wx-webview  375 * 603

// 动画效果
.bounce-transition {
    
}
.bounce-enter {
    animation: bounce-in .6s;
}
.bounce-leave {
    // animation: bounce-out .6s;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}
@keyframes bounce-out {
    0% {
        transform: scale(1);

    }
    100% {
        transform: scale(0);
    }
}
// 离开动画暂时不写
</style>