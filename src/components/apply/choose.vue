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
                <select v-model="choice.organization" 
                        @change="confirm_organization($index)">
                    <option disabled="disabled">请选择组织</option>
                    <option v-for="organization in organizations" 
                            v-bind:value="organization.value">
                        {{organization.value}}
                    </option>
                </select>
            </p>
            <p class="wrapper">
                <span>部门</span>
                <select v-model="choice.apartment"
                        @change="confirm_apartment($index)">
                    <option disabled="disabled">请选择部门</option>
                    <option v-for="apartment in apartments[choice.organization]"
                            v-bind:value="apartment">
                        {{apartment}}
                    </option>
                </select>
            </p>
        </div>
        <div class="add-item" 
             @click="add_item">
            <div class="add">
                
            </div>
            <span>继续添加报名组织</span>
        </div>
    </section>

    <div class="btn-container">
        <div class="btn" @touchend="prev_step">
            上一步
        </div>
        <div class="btn" @touchend="show_submit_cover">
            确认
        </div>
    </div>

    <div class="cover" v-show="show_cover">
        <div class="notify-container">
            <div class="close" 
                 @click="close_show_cover">
                
            </div>
            <p class="cover-title">提示</p>
            <p class="cover-notify">
                {{cover_notify}}
            </p>
        </div>
    </div>

    <div class="cover cover-submit" v-show="submit_cover">
        <div class="notify-container">
            <div class="close" 
                 @click="close_submit_cover">
                
            </div>
            <p class="cover-title">提示</p>
            <p class="cover-notify">
                请输入身份证后六位确认提交
            </p>
            <input type="password" 
               class="input-text"
               v-model="verify">
            <p class="cover-notify">
                信息提交后不可修改
            </p>
            <div class="btn" 
                 @click="next_step">
                确认提交
            </div>
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
            show_cover: false,
            submit_cover: false,
            cover_notify: '选择出现了一些偏差',
            verify: '',
            choices: [
                {
                    organization: '请选择组织', 
                    apartment: '请选择部门', 
                    removable: true
                }
            ],
            organizations: {
                '校学生会': {
                    value: '校学生会'
                },
                '学生科技联合会': {
                    value: '学生科技联合会'
                },
                '学生社团联合会': {
                    value: '学生社团联合会'
                },
                '青年志愿者协会': {
                    value: '青年志愿者协会'
                },
                '红岩网校工作站': {
                    value: '红岩网校工作站'
                },
                '大学生艺术团': {
                    value: '大学生艺术团'
                },
                '团委各部室': {
                    value: '团委各部室'
                }
            },
            apartments: {
                '校学生会': [
                    '综合部',
                    '学习部',
                    '宣传部',
                    '权益提案部',
                    '生活服务部',
                    '文艺部',
                    '体育部',
                    '女生部'
                ],
                '学生科技联合会': [
                    '综合部',
                    '科创竞赛部',
                    '项目管理部',
                    '科技人文部',
                    '媒体运营部',
                    '信息部'
                ],
                '学生社团联合会': [
                    '综合部',
                    '宣传部',
                    '社团服务部',
                    '社团活动部'
                ],
                '青年志愿者协会': [
                    '综合管理部',
                    '青年志愿者服务总队',
                    '实践服务服务部',
                    '宣传推广部'
                ],
                '红岩网校工作站': [
                    '产品策划部',
                    '视觉设计部',
                    'Web研发部',
                    '产品运营部',
                    '移动开发部',
                    '运维安全部'
                ],
                '大学生艺术团': [
                    '综合部',
                    '管乐团',
                    '舞蹈团',
                    '民乐团',
                    '合唱团',
                    '话剧团'
                ],
                '团委各部室': [
                    '团委办公室',
                    '团委组织部',
                    '团委宣传部'
                ]
            }
        }
    },
    methods: {
        confirm_organization (index) {
            let len = 0,
                chosen_norepeat = [];

            let chosen = this.choices.map((item, index) => {
                let _org = item.organization;
                if (_org != "请选择组织") {
                    return _org;
                }
            }); 

            let _drop_repeat = function (array) {
                let n = {}, 
                    r = [], 
                    len = array.length, 
                    val, 
                    type;
                for (let i = 0; i < array.length; i++) {
                    val = array[i];
                    type = typeof val;
                    if (!n[val]) {
                        n[val] = [type];
                        r.push(val);
                    } else if (n[val].indexOf(type) < 0) {
                        n[val].push(type);
                        r.push(val);
                    }
                }
                return r;     
            }
            chosen_norepeat = _drop_repeat(chosen);
            len = chosen_norepeat.length;
            this.applyData.remain_org = 3 - len;
            if (len > 3) {
                this.choices.splice(index, 1);
                this.cover_notify = '最多选择三个组织';
                this.show_cover = true;
            }
        },
        confirm_apartment (index) {
            let chosen_norepeat = [];

            let chosen = this.choices.map((item, index) => {
                let _org = item.organization,
                    _apt = item.apartment;
                if (_org != "请选择组织" && _apt != "请选择部门") {
                    return _org + _apt;
                }
            }); 

            let _drop_repeat = function (array) {
                let n = {}, 
                    r = [], 
                    len = array.length, 
                    val, 
                    type;
                for (let i = 0; i < array.length; i++) {
                    val = array[i];
                    type = typeof val;
                    if (!n[val]) {
                        n[val] = [type];
                        r.push(val);
                    } else if (n[val].indexOf(type) < 0) {
                        n[val].push(type);
                        r.push(val);
                    }
                }
                return r;     
            }
            chosen_norepeat = _drop_repeat(chosen);
            if (chosen.length != chosen_norepeat.length) {
                this.choices.splice(index, 1);
                this.cover_notify = '不能重复选择';
                this.show_cover = true;
            }
        },
        add_item () {
            let data = {
                organization: '请选择组织', 
                apartment: '请选择部门',
                removable: true
            };
            this.choices.push(data)
        },
        close_item (index) {
            this.choices.splice(index, 1);
        },
        close_show_cover () {
            this.show_cover = false;
            this.cover_notify = '';
        },
        close_submit_cover () {
            this.submit_cover = false;
        },
        show_submit_cover () {
            this.submit_cover = true;
        },
        prev_step () {
            this.applyData.current_step = 1;
        },
        next_step () {
            // this.submit_cover = false;
            this.applyData.student_org = this.choices;
            this.applyData.current_step = 3;
        }
    }
}
</script>

<style lang="less" scoped>
.cover {
    transition: all .6s;
    position: absolute;
    z-index: 100;
    background-color: rgba(0, 0, 0, .5);
    width: 10rem;
    height: 20rem;
    top: -2rem;
    left: 10rem;
    bottom: 0;
    .notify-container {
        position: absolute;
        box-sizing: border-box;
        width: 8rem;
        height: 3rem;
        top: 6rem;
        left: 50%;
        margin-left: -4rem;
        padding: .3rem 0rem;
        border-radius: .1rem;
        background-color: #fffef5;
        text-align: center;
        font-size: .45rem;
    }
    .cover-title {
        color: #f58604; 
        font-size: .5rem;
        margin-bottom: .5rem;       
    }
    .cover-notify {
        margin-bottom: .1rem;
    }
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
}
.cover-submit {
    .notify-container {
        height: 6.5rem;
        top: 4rem;
    }
    .input-text {
        box-sizing: border-box;
        margin: .2rem 0 .6rem 0;
        padding: 0 .2rem;
        background-color: #eee;
        width: 6rem;
        height: 1rem;
        line-height: .8rem;
        font-size: .5rem;
        border: none;
        border-radius: .15rem;
        outline: none;
        text-align: center;
    }
    .btn {
        display: inline-block;
        width: 3rem;
        height: 1.1rem;
        line-height: 1rem;
        text-align: center;
        color: #fff;
        font-size: .5rem;
        background: url('/static/btn-small.png') no-repeat 100% 100%;
        background-size: cover;
    }
}
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
    max-height: 10rem;
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