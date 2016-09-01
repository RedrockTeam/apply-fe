<template>
  <section class="file">
    <p class="title">
        填写个人信息
    </p>

    <p class="item">
        <span>姓名</span>
        <input type="text" 
               class="input-text" 
               v-model="name">
    </p>
    <p class="item">
        <span>性别</span>
        <span class="label-wrapper">
            <input type="radio"
               class="input-radio" 
               id="male" 
               value="男" 
               v-model="gender">
            <label for="male">男</label>
            <input type="radio" 
                   class="input-radio" 
                   id="female" 
                   value="女" 
                   v-model="gender">
            <label for="female">女</label>
        </span>
    </p>
    <p class="item">
        <span>学号</span>
        <input type="tel" 
               class="input-text" 
               v-model="id">
    </p>
    <p class="item">
        <span>学院</span>
        <select v-model="college">
            <option v-for="option in colleges" 
                    v-bind:value="option.value">
                {{option.text}}
            </option>
        </select>
    </p>
    <p class="item">
        <span>手机</span>
        <input type="tel" 
               class="input-text" 
               v-model="phone">
    </p>
    
    <div class="btn-container">
        <div class="btn">
            返回
        </div>
        <div class="btn">
            下一步
        </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
        name: "",
        gender: "",
        id: "",
        college: "",
        phone: "",
        colleges: [
            { text: '计算机科学与技术', value: '计算机科学与技术' },
            { text: '传媒', value: '传媒' },
            { text: '通信', value: '通信' }
        ]
    }
  }
}
</script>

<style lang="less" scoped>
p {
    margin: 0;
}
input, a, label, select {
    -webkit-tap-highlight-color: transparent;
}
label {
    position: relative;
    font-size: .5rem;
}
select {
    appearance: button;
    box-sizing: border-box;
    margin: 0;
    width: 7.5rem;
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
    background-color: #fefff4;
}
label:before {
    content: "";
    display: inline-block;
    transition: all .5s;
    box-sizing: border-box;
    width: .5rem;
    height: .5rem;
    border-radius: .25rem;
    border: .1rem solid #fff;
    margin-right: .2rem;
    background-color: #fff;
    vertical-align: baseline;
}
input[type=radio]:checked + label:before {
    background-color: #feaa61;
}
.label-wrapper {
    display: inline-block;
    float: right;
    width: 7.5rem;
}
.file {
    box-sizing: border-box;
    padding: 0 .45rem;
    float: left;
    width: 10rem;
    height: 10rem;
}
.title {
    letter-spacing: .05rem;
    font-size: .55rem;
    text-align: center;
    color: #473d1f;
}
.item {
    margin-top: .6rem;
    line-height: 1rem;
    color: #816b41;
    span {
        font-size: .5rem;
        letter-spacing: .05rem;
    }
}
.input-text {
    box-sizing: border-box;
    margin: 0;
    padding: 0 .2rem;
    background-color: #fefff4;
    width: 7.5rem;
    height: 1rem;
    line-height: .8rem;
    font-size: .5rem;
    float: right;
    border: none;
    border-radius: .15rem;
    outline: none;
}
.input-radio {
    display: none;
}
.btn-container {
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
</style>