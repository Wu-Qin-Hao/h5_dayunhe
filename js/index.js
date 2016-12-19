
/*function loading_to() {*/
    /*图片缩放轮播部分定时器*/
    setTimeout(function () {
        $(".arousel").addClass("change");
    },1000);
    setTimeout(function(){
        $(".arousel").removeClass("active").removeClass("change");
        $(".arousel:nth-child(2)").addClass("active");
    },3000);
    setTimeout(function () {
        $(".arousel:nth-child(2)").addClass("change");
    },3500);
    setTimeout(function(){
        $(".arousel").removeClass("active").removeClass("change");
        $(".arousel:nth-child(3)").addClass("active");
    },6000);
    setTimeout(function () {
        $(".arousel:nth-child(3)").addClass("change");
    },6500);
    setTimeout(function(){
        $(".arousel").removeClass("active").removeClass("change");
        $(".arousel:nth-child(4)").addClass("active");
    },9000);
    setTimeout(function () {
        $(".arousel:nth-child(4)").addClass("change");
    },9500);



    /*文字一段一段出来部分定时器*/
    setTimeout(function(){
        $("#animation_text1").css("opacity","1");
        $("#animation_text1").css("padding-top","0");
    },2300);
    setTimeout(function(){
        $("#animation_text2").css("opacity","1");
        $("#animation_text2").css("padding-top","0");
    },4600);
    setTimeout(function(){
        $("#animation_text3").css("opacity","1");
        $("#animation_text3").css("padding-top","0");
    },6900);
    setTimeout(function(){
        $("#animation_text4").css("opacity","1");
        $("#animation_text4").css("padding-top","0");
    },9200);


    /*邀请函部分定时器*/
    setTimeout(function () {
        $(".cont_box").css("opacity","1");
        $("#sContainer").css("opacity","1");
        $("#sContainer").css("margin-top","22%");
    },13000);
    /*setTimeout(function () {
     $("#sContainer").css("margin-top","80%");
     $("#sContainer").css("width","70%");
     },15000);*/
    setTimeout(function () {
        $(".invitation").css("opacity","1")
    },23000);
    /*文字一个一个出来*/
    setTimeout(function () {
        var index=0;
        var word=document.getElementById("w").innerHTML;
        function type(){
            document.getElementById("aa").innerText = word.substring(0,index++);
        }
        var settime=setInterval(type, 200);
        setTimeout(function () {
            settime=window.clearInterval(settime)
        },14500);
    },13000);
    setTimeout(function () {
        var index=0;
        var word=document.getElementById("q").innerHTML;
        function type(){
            document.getElementById("bb").innerText = word.substring(0,index++);
        }
        var settime1=setInterval(type, 200);
        setTimeout(function () {
            settime1=window.clearInterval(settime1);
        },16000);
    },14500);
    setTimeout(function () {
        $(".img_size img").css("opacity","1");
        $(".img_size img").addClass("change");
    },19000);



    function goto() {
        $(".sec1").css("display","none");
        $(".sec2").css("display","block");
        /*整屏切换部分设置*/
        $(".fullpage").css("height",document.documentElement.clientHeight);
        $(".fullbody").css("height",document.documentElement.clientHeight*3);
        $(".w").css("height",document.documentElement.clientHeight);
        /*人物头像部分定时器*/
        setTimeout(function () {
            $("#a1").css("opacity","1");
            $("#a1").css("padding-top","0");
        },200);
        setTimeout(function () {
            $("#a2").css("opacity","1");
            $("#a2").css("padding-top","0");
        },400);
        setTimeout(function () {
            $("#a3").css("opacity","1");
            $("#a3").css("padding-top","0");
        },600);
        setTimeout(function () {
            $("#a4").css("opacity","1");
            $("#a4").css("padding-top","0");
        },800);
        setTimeout(function () {
            $("#a5").css("opacity","1");
            $("#a5").css("padding-top","0");
        },800);
        setTimeout(function(){
            $(".area").addClass("nofocus");
            $(".area:first-child").removeClass("nofocus").addClass("active");
        },1000);
        setTimeout(function(){
            $(".area").removeClass("active").addClass("nofocus");
            $(".area:nth-child(2)").removeClass("nofocus").addClass("active");
        },4500);
        setTimeout(function(){
            $(".area").removeClass("active").addClass("nofocus");
            $(".area:nth-child(1)").removeClass("nofocus").addClass("active");
        },9000);
        setTimeout(function(){
            $(".area").removeClass("active").addClass("nofocus");
            $(".area:nth-child(2)").removeClass("nofocus").addClass("active");
        },12500);
        setTimeout(function(){
            $(".area").removeClass("active").addClass("nofocus");
            $(".area:nth-child(1)").removeClass("nofocus").addClass("active");
        },16000);
        setTimeout(function(){
            $(".area").removeClass("active").addClass("nofocus");
            $(".area:nth-child(2)").removeClass("nofocus").addClass("active");
        },20000);
        setTimeout(function(){
            $(".area").removeClass("active").addClass("nofocus");
            $(".area:nth-child(1)").removeClass("nofocus").addClass("active");
        },24000);
        setTimeout(function(){
            $(".area").removeClass("active").addClass("nofocus");
            $(".area:nth-child(3)").removeClass("nofocus").addClass("active");
        },29000);
        setTimeout(function(){
            $(".area").removeClass("active").addClass("nofocus");
            $(".area:nth-child(1)").removeClass("nofocus").addClass("active");
        },32000);
        setTimeout(function(){
            $(".area").removeClass("active").addClass("nofocus");
            $(".area:nth-child(4)").removeClass("nofocus").addClass("active");
        },37000);
        setTimeout(function(){
            $(".area").removeClass("active").addClass("nofocus");
            $(".area:nth-child(1)").removeClass("nofocus").addClass("active");
        },41500);
        setTimeout(function(){
            $(".area").removeClass("active").addClass("nofocus");
            $(".area:nth-child(5)").removeClass("nofocus").addClass("active");
        },44500);
        setTimeout(function(){
            $(".area").removeClass("active").addClass("nofocus");
            $(".area:nth-child(1)").removeClass("nofocus").addClass("active");
        },52000);
        /*图片缩放轮播部分定时器*/
        setTimeout(function () {
            $(".screen3 .img_box").css("opacity","1");
            $(".screen3 .img_box").css("padding-top","0px");
            setTimeout(function () {
                $(".arousel").addClass("change");
            },1000);
            setTimeout(function(){
                $(".arousel").removeClass("active").removeClass("change");
                $(".arousel:nth-child(2)").addClass("active");
            },3000);
            setTimeout(function () {
                $(".arousel:nth-child(2)").addClass("change");
            },3500);
            setTimeout(function(){
                $(".arousel").removeClass("active").removeClass("change");
                $(".arousel:nth-child(3)").addClass("active");
            },6000);
            setTimeout(function () {
                $(".arousel:nth-child(3)").addClass("change");
            },6500);
            setTimeout(function(){
                $(".arousel").removeClass("active").removeClass("change");
                $(".arousel:nth-child(4)").addClass("active");
            },9000);
            setTimeout(function () {
                $(".arousel:nth-child(4)").addClass("change");
            },9500);
        },1500);
        /*聊天部分定时器*/
        setTimeout(function () {
            $("#box1").css("opacity","1");
            $("#box1").css("padding-top","0");
        },3000);
        setTimeout(function () {
            $("#box2").css("opacity","1");
            $("#box2").css("padding-top","0");
        },5000);
        setTimeout(function () {
            $("#box3").css("opacity","1");
            $("#box3").css("padding-top","0");
        },7000);
        setTimeout(function () {
            $("#box4").css("opacity","1");
            $("#box4").css("padding-top","0");
            $(".over").css("margin-top","-150px");
        },9000);
        setTimeout(function () {
            $("#box5").css("opacity","1");
            $("#box5").css("padding-top","0");
            $(".over").css("margin-top","-450px");
        },13000);
        setTimeout(function () {
            $("#box6").css("opacity","1");
            $("#box6").css("padding-top","0");
            $(".over").css("margin-top","-600px");
        },17000);
        setTimeout(function () {
            $("#box7").css("opacity","1");
            $("#box7").css("padding-top","0");
            $(".over").css("margin-top","-900px");
        },21000);
        setTimeout(function () {
            $("#box8").css("opacity","1");
            $("#box8").css("padding-top","0");
            $(".over").css("margin-top","-1050px");
        },25000);
        setTimeout(function () {
            $("#box9").css("opacity","1");
            $("#box9").css("padding-top","0");
            $(".over").css("margin-top","-1250px");
        },29000);
        setTimeout(function () {
            $("#box10").css("opacity","1");
            $("#box10").css("padding-top","0");
            $(".over").css("margin-top","-1450px");
        },33000);
        setTimeout(function () {
            $("#box11").css("opacity","1");
            $("#box11").css("padding-top","0");
            $(".over").css("margin-top","-1650px");
        },37000);
        setTimeout(function () {
            $("#box12").css("opacity","1");
            $("#box12").css("padding-top","0");
            $(".over").css("margin-top","-1950px");
        },41000);
        setTimeout(function () {
            $("#box13").css("opacity","1");
            $("#box13").css("padding-top","0");
            $(".over").css("margin-top","-2250px");
        },45000);
        setTimeout(function () {
            $("#box14").css("opacity","1");
            $("#box14").css("padding-top","0");
            $(".over").css("margin-top","-2550px");
        },49000);
        setTimeout(function () {
            $("#box15").css("opacity","1");
            $("#box15").css("padding-top","0");
            $(".over").css("margin-top","-2950px");
        },53000);
        setTimeout(function () {
            $(".bottom").css("display","block");
        },54000)
    }



    /*点击切换另一个整屏*/
    function goto_new() {
        $(".fullbody").css("top","-"+document.documentElement.clientHeight+"px");
        $(".bottom").css("display","none");
        isTouchDevice();

        /*setTimeout(function () {
         var index=0;
         var word=document.getElementById("wz4").innerHTML;
         function type(){
         document.getElementById("wzs4").innerText = word.substring(0,index++);
         }
         var settime=setInterval(type, 200);
         setTimeout(function () {
         settime=window.clearInterval(settime)
         },2000);
         },1000);
         setTimeout(function () {
         var index=0;
         var word=document.getElementById("wz3").innerHTML;
         function type(){
         document.getElementById("wzs3").innerText = word.substring(0,index++);
         }
         var settime=setInterval(type, 200);
         setTimeout(function () {
         settime=window.clearInterval(settime)
         },4000);
         },3000);
         setTimeout(function () {
         var index=0;
         var word=document.getElementById("wz2").innerHTML;
         function type(){
         document.getElementById("wzs2").innerText = word.substring(0,index++);
         }
         var settime=setInterval(type, 200);
         setTimeout(function () {
         settime=window.clearInterval(settime)
         },6000);
         },5000);
         setTimeout(function () {
         var index=0;
         var word=document.getElementById("wz1").innerHTML;
         function type(){
         document.getElementById("wzs1").innerText = word.substring(0,index++);
         }
         var settime=setInterval(type, 200);
         setTimeout(function () {
         settime=window.clearInterval(settime)
         },8000);
         },7000);
         setTimeout(function () {
         $("#video").css("opacity","1");
         },10000); */
//全局变量，触摸开始位置
        var startX = 0, startY = 0;
        //touchstart事件
        function touchSatrtFunc(evt) {
            try
            {
                //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
                var touch = evt.touches[0]; //获取第一个触点
                var x = Number(touch.pageX); //页面触点X坐标
                var y = Number(touch.pageY); //页面触点Y坐标
                //记录触点初始位置
                startX = x;
                startY = y;
            }catch (e) {
            }
        }
        //touchmove事件，这个事件无法获取坐标
        function touchMoveFunc(evt) {
            try
            {
                //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
                var touch = evt.touches[0]; //获取第一个触点
                var x = Number(touch.pageX); //页面触点X坐标
                var y = Number(touch.pageY); //页面触点Y坐标
                var text = 'TouchMove事件触发：（' + x + ', ' + y + '）';
                //判断滑动方向
                if (y - startY >30) {
                    $(".fullbody").css("top","-"+document.documentElement.clientHeight+"px");
                    /*debug.log("上一页");*/
                }
                if(y - startY <-30){
                    /*debug.log("下一页");*/
                    $(".fullbody").css("top","-"+document.documentElement.clientHeight*2+"px");
                }
            }catch (e) {
            }
        }
        //touchend事件
        function touchEndFunc(evt) {
            try {
            }catch (e) {
            }
        }
        //绑定事件
        function bindEvent() {
            document.addEventListener('touchstart', touchSatrtFunc, false);
            document.addEventListener('touchmove', touchMoveFunc, false);
            document.addEventListener('touchend', touchEndFunc, false);
        }
        //判断是否支持触摸事件
        function isTouchDevice() {
            /* document.getElementById("version").innerHTML = navigator.appVersion;*/
            try {
                document.createEvent("TouchEvent");
                bindEvent(); //绑定事件
            }catch (e) {
            }
        }

        /*
         //全局变量，触摸开始位置
         var startX = 0, startY = 0;
         //touchstart事件
         function touchSatrtFunc(evt) {
         try
         {
         //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
         var touch = evt.touches[0]; //获取第一个触点
         var x = Number(touch.pageX); //页面触点X坐标
         var y = Number(touch.pageY); //页面触点Y坐标
         //记录触点初始位置
         startX = x;
         startY = y;
         }catch (e) {
         }
         }
         //touchmove事件，这个事件无法获取坐标
         function touchMoveFunc(evt) {
         try
         {
         //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
         var touch = evt.touches[0]; //获取第一个触点
         var x = Number(touch.pageX); //页面触点X坐标
         var y = Number(touch.pageY); //页面触点Y坐标
         var text = 'TouchMove事件触发：（' + x + ', ' + y + '）';
         //判断滑动方向
         if (y - startY >30) {
         /!*text += '<br/>上下滑动';*!/
         $(".fullbody").css("top","-"+document.documentElement.clientHeight*2+"px");
         debug.log("1111111111");
         }
         if(y - startY <-30){
         debug.log("222222");
         }
         }catch (e) {
         }
         }
         //touchend事件
         function touchEndFunc(evt) {
         try {
         }catch (e) {
         }
         }
         //绑定事件
         function bindEvent() {
         document.addEventListener('touchstart', touchSatrtFunc, false);
         document.addEventListener('touchmove', touchMoveFunc, false);
         document.addEventListener('touchend', touchEndFunc, false);
         }
         //判断是否支持触摸事件
         function isTouchDevice() {
         document.getElementById("version").innerHTML = navigator.appVersion;
         try {
         document.createEvent("TouchEvent");
         bindEvent(); //绑定事件
         }catch (e) {
         }
         }
         isTouchDevice();
         /!*window.onload = isTouchDevice;*!/
         */

    }
/*}*/

