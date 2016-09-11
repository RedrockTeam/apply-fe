<template>
    <section class="file">
        <p class="title">
            输入身份信息
        </p>

        <p class="item">
            <span>姓名</span>
            <input type="text" 
                   class="input-text" 
                   v-model="student_file.name">
        </p>
        <p class="item">
            <span>学号</span>
            <input type="tel" 
                   class="input-text" 
                   v-model="student_file.code">
        </p>
        
        <p class="notify" v-show="show_notify">
            {{notify}}
        </p>

        <div class="btn-container">
            <div class="btn">
                <a v-link="{path: '/app'}">
                    返回
                </a>
            </div>
            <div class="btn" 
                 @click="check_file">
                下一步
            </div>
        </div>
    </section>
</template>

<script>
export default {
    ready () {
        if (localStorage.apply_CQUPT) {
            let data = JSON.parse(localStorage.apply_CQUPT);
            this.student_file = {
                name: data.student_file.name,
                code: data.student_file.code
            }
            /* 一条一条填 免得出 bug */
        }
    },
    props: [
        'applyData'
    ],
    data () {
        return {
            student_file: {
                name: "",
                code: ""
            },
            show_notify: true,
            notify: ''
        }
    },
    methods: {
        check_file () {

            let data = this.student_file;
            let url = "/enroll/api/notify";

            this.notify = '正在查询 请稍候';
// ajax
            function createXHR(){
              if(typeof XMLHttpRequest != "undefined"){ // 非IE6浏览器
                return new XMLHttpRequest();
              }else if(typeof ActiveXObject != "undefined"){   // IE6浏览器
                var version = [
                      "MSXML2.XMLHttp.6.0",
                      "MSXML2.XMLHttp.3.0",
                      "MSXML2.XMLHttp",
                ];
                for(var i = 0; i < version.length; i++){
                  try{
                    return new ActiveXObject(version[i]);
                  }catch(e){
                    //跳过
                  }
                }
              }else{
                throw new Error("您的系统或浏览器不支持XHR对象！");
              }
            }
            // 转义字符
            function params(data){
              var arr = [];
              for(var i in data){
                arr.push(encodeURIComponent(i) + "=" + encodeURIComponent(data[i]));
              }
              return arr.join("&");
            }
            // 封装ajax
            function ga_ajax(obj){
              var xhr = createXHR();
              obj.url = obj.url + "?rand=" + Math.random(); // 清除缓存
              obj.data = params(obj.data);      // 转义字符串
              if(obj.method === "get"){      // 判断使用的是否是get方式发送
                obj.url += obj.url.indexOf("?") == "-1" ? "?" + obj.data : "&" + obj.data;
              }
              // 异步
              if(obj.async === true){
                // 异步的时候需要触发onreadystatechange事件
                xhr.onreadystatechange = function(){
                  // 执行完成
                  if(xhr.readyState == 4){
                    callBack();
                  }
                }
              }
              xhr.open(obj.method,obj.url,obj.async);  // false是同步 true是异步 // "demo.php?rand="+Math.random()+"&name=ga&ga",
              if(obj.method === "post"){
                xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                xhr.send(obj.data);
              }else{
                xhr.send(null);
              }
              // xhr.abort(); // 取消异步请求
              // 同步
              if(obj.async === false){
                callBack();
              }
              // 返回数据
              function callBack(){
                // 判断是否返回正确
                if(xhr.status == 200){
                  obj.success(xhr.responseText);
                }else{
                  obj.Error("获取数据失败，错误代号为："+xhr.status+"错误信息为："+xhr.statusText);
                }
              }
            }
// ajax      
    
            ga_ajax({
                "method" : "post",
                "url" : url,
                "data" : data,
                "success" : function(data){
                  alert(data);
                  alert(typeof data);
                  alert(data.status);
                  alert(data["status"]);
                  alert(data.extra);
                  alert(data.content);
                  alert(data.content.toString());
                },
                "Error" : function(text){
                  alert(text);
                },
                "async" : false
              });



/*
            this.$http.post(url, data, {
                emulateJSON: true
            })
            .then((res) => {
                let content = res.data.content;

                if (content == "该学生没有报过任何部门!") {
                    this.notify = '你还没有参与报名或信息填写错误';
                }

                alert('res 全部');
                alert(res);
                alert('res 转字符');
                let str = JSON.stringify(res);
                alert(str);
                alert("_res 再封装");
                let _res = JSON.parse(str);
                alert(_res);
                alert("_res 数据类型");
                alert(Object.prototype.toString.call(_res));

                alert("_res headers");
                alert(JSON.stringify(_res.headers));
                alert("_res headers ...parsed");
                var a = JSON.stringify(_res.headers);
                var b = JSON.parse(a);
                alert(b);
                alert("_res data");
                alert(_res.data);

                // if (res.data.status == 0 && res.data.extra) {
                //     this.notify = '查询成功'; 
                //     let extra =  res.data.extra;
                //     let org = [];

                //     org = extra.map((item, index) => {
                //         let data = {};
                //         data.department = item.dept_name.replace('|', " ");
                //         // data.department = item.dept_name[0] + " " item.dept_name[1];
                //         //  9-11 修改部门判断

                //         switch (~~item.current_step) {
                //             case 1:
                //                 data.status = "报名成功";
                //                 break;
                //             case 2:
                //                 data.status = "第一轮通过";
                //                 break;    
                //             case 3:
                //                 data.status = "第二轮通过";
                //                 break;    
                //             case 4:
                //                 data.status = "第三轮通过";
                //                 break;    
                //             case 5:
                //                 data.status = "第四轮通过";
                //                 break;
                //             case -2:
                //                 data.status = "第一轮未通过";
                //                 break;    
                //             case -3:
                //                 data.status = "第二轮未通过";
                //                 break;    
                //             case -4:
                //                 data.status = "第三轮未通过";
                //                 break;    
                //             case -5:
                //                 data.status = "第四轮未通过";
                //                 break;        
                //             default:
                //                 data.status = "报名成功";
                //                 break;
                //         }
                //         return data;
                //     });
                //     this.applyData.student_org = org;
                //     this.applyData.student_file = this.student_file;
                //     this.applyData.current_step = 2;
                // }
            }, (res) => {
                this.notify = '网络有问题';
            });
*/            
        }
    }
}
</script>

<style lang="less" scoped>
.file {
    box-sizing: border-box;
    padding: 0 .45rem;
    float: left;
    width: 10rem;
    height: 10rem;
    .title {
        margin: 1.5rem auto;
        letter-spacing: .05rem;
        font-size: .5rem;
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
        border-radius: .1rem;
        outline: none;
        color: #766139;
    }
    .notify {
        margin-left: 1.6rem;
        line-height: 1rem;
        height: 1rem;
        color: #816b41;
        font-size: .45rem;
    }
    .btn-container {
        padding: 0 .5rem;
        margin-top: 1rem;
        .btn {
            display: inline-block;
            width: 3.7rem;
            height: 1.35rem;
            line-height: 1.35rem;
            text-align: center;
            color: #fff;
            font-size: .5rem;
            letter-spacing: .2rem;
            background: url('/static/images/btn-small.png') no-repeat 100% 100%;
            background-size: cover;
            a {
                width: 100%;
                height: 100%;
                text-decoration: none;
                color: #fff;
            }
        }
        .btn:first-of-type {
            float: left;
        }
        .btn:last-of-type {
            float: right;
        }
    }
}
</style>