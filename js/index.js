var indexData = (function(){
    var timer1;
    var Mintimer;
    var timer2;
    var timer3;
    var a;
    var b;
    var c;
    var d;
    var f;
    var con;
    return{
        init:function(){
            // 顶部广告部分
            this.$Top_img = document.querySelector('.Top_img');
            this.$removebtn = document.querySelector('.removebtn');

            // logo部分点击事件
            this.$section = document.querySelector('.section');
            this.$searchBox_inp = this.$section.querySelector('.searchBox_inp');
            this.$placeholderBox = this.$section.querySelector('.placeholderBox');
            // banner轮播图的点击事件的获取Dom对象
            this.$center = document.querySelector('.center');
            this.$centerBack = this.$center.querySelector('.centerBack');
            this.$centerBackLi = this.$centerBack.children;
            console.log(this.$centerBackLi);
            this.$tipbox = this.$center.querySelector(".tipbox");
            this.$tipAllLi = this.$tipbox.children;
            // 给tipbox中的li添加index
            for(var i = 0; i < this.$tipAllLi.length;i++){
                this.$tipAllLi[i].index = i;
            }
            this.index = 0;

            // 小轮播图获取Dom对象
            this.$min_Carousel = document.querySelector('.min_Carousel');
            this.$min_Carbox = this.$min_Carousel.querySelector('.min_Carbox');
            this.$min_CarboxallLi = this.$min_Carbox.children;
            this.$min_tips = this.$min_Carousel.querySelector('.min_tips');
            this.$min_tipsallLi = this.$min_tips.children;
            //this.$min_tipsallLi中的li添加 Minindex;
            for(var i = 0; i < this.$min_tipsallLi.length;i++){
                this.$min_tipsallLi[i].Minindex = i;
            }
            this.Minindex = 0;

            // 大轮播图获取Dom对象
            this.$Carbox1 = document.getElementById('Carbox1');
            this.$Carouselleft_btn1 =  document.getElementById('Carouselleft_btn1');
            this.$Carouselright_btn1 =  document.getElementById('Carouselright_btn1');

            this.$Carbox2 = document.getElementById('Carbox2');
            this.$Carouselleft_btn2 =  document.getElementById('Carouselleft_btn2');
            this.$Carouselright_btn2 =  document.getElementById('Carouselright_btn2');

            this.$Carbox3 = document.getElementById('Carbox3');
            this.$Carouselleft_btn3 =  document.getElementById('Carouselleft_btn3');
            this.$Carouselright_btn3 =  document.getElementById('Carouselright_btn3');

            this.$Carbox4 = document.getElementById('Carbox4');
            this.$Carouselleft_btn4 =  document.getElementById('Carouselleft_btn4');
            this.$Carouselright_btn4 =  document.getElementById('Carouselright_btn4');

            this.$Carbox5 = document.getElementById('Carbox5');
            this.$Carouselleft_btn5 =  document.getElementById('Carouselleft_btn5');
            this.$Carouselright_btn5 =  document.getElementById('Carouselright_btn5');
            this.a = 0;
            this.b = 0;
            this.c = 0;
            this.d = 0;
            this.f = 0;

            // 公告位置的轮播图
            this.$news_R_ul = document.querySelector('.news_R_ul');
            this.$news_R_li = this.$news_R_ul.children;
            var first = this.$news_R_li[0];
            var last = this.$news_R_li[4];
            this.$news_R_ul.appendChild(first.cloneNode(true));
            this.$news_R_ul.insertBefore(last.cloneNode(true),first);
            this.$news_R_ul.style.top = -50 + 'px';
            for(var i = 0; i < this.$news_R_li.length;i++){
                this.$news_R_li[i].newsindex = i;
            }
            this.newsindex = 0;

            //友情连接的轮播图
            this.$bottom = document.querySelector('.bottom');
            this.$bott_btn1 = this.$bottom.querySelector('.bott_btn1');
            this.$bott_btn2 = this.$bottom.querySelector('.bott_btn2');
            this.$friendslink = this.$bottom.querySelector('.friendslink');
            this.con = 0;

            //页面的滚动距离出先导航栏和返回顶部按钮
            this.$pageRight_top = document.querySelector('.pageRight_top');
            this.$pageRight_nav = document.querySelector('.pageRight_nav');
            this.$pageRight_ul = document.querySelector('.pageRight_ul');
            this.$pageRight_li = this.$pageRight_ul.children;
            this.$pageRight_span1 = this.$pageRight_nav.querySelector('#pageRight_span1');
            this.$pageRight_span2 = this.$pageRight_nav.querySelector('#pageRight_span2');
            this.$pageRight_span3 = this.$pageRight_nav.querySelector('#pageRight_span3');
            this.$pageRight_span4 = this.$pageRight_nav.querySelector('#pageRight_span4');
            this.$pageRight_span5 = this.$pageRight_nav.querySelector('#pageRight_span5');
            this.$pageRight_span6 = this.$pageRight_nav.querySelector('#pageRight_span6');
            this.$pageRight_span7 = this.$pageRight_nav.querySelector('#pageRight_span7');

            this.$pageRight_color1 = this.$pageRight_nav.querySelector('#pageRight_color1');
            this.$pageRight_color2 = this.$pageRight_nav.querySelector('#pageRight_color2');
            this.$pageRight_color3 = this.$pageRight_nav.querySelector('#pageRight_color3');
            this.$pageRight_color4 = this.$pageRight_nav.querySelector('#pageRight_color4');
            this.$pageRight_color5 = this.$pageRight_nav.querySelector('#pageRight_color5');
            this.$pageRight_color6 = this.$pageRight_nav.querySelector('#pageRight_color6');
            this.$pageRight_color7 = this.$pageRight_nav.querySelector('#pageRight_color7');

            //返回顶部下面的盒子的鼠标移进去的效果
            this.$pageRight_bottom = document.querySelector('.pageRight_bottom');
            this.$pageRight_p1 = document.querySelector('.pageRight_p1');
            this.$pageRight_p2 = document.querySelector('.pageRight_p2');
            this.$pageRight_p3 = document.querySelector('.pageRight_p3');
            this.$pageRight_a1 = document.querySelector('.pageRight_a1');
            this.$pageRight_a2 = document.querySelector('.pageRight_a2');
            this.$pageRight_a3 = document.querySelector('.pageRight_a3');

            // 调用函数
            this.event();
            this.autoPlay(this.index);
            this.newsautoPlay(this.newsindex);
            this.MinautoPlay(this.Minindex);
        },
        event:function(){
            var _this = this;
            //顶部广告点击隐藏广告
            this.$removebtn.onclick = function(e){
                _this.$Top_img.style.display = 'none';
            }
            //搜索框的input事件
            this.$searchBox_inp.onfocus = function(){
                _this.$placeholderBox.style.display = 'none';
            }
            this.$searchBox_inp.onblur = function(){
                _this.$placeholderBox.style.display = 'block';
            }
            //banner轮播图中的点击事件
            this.$tipbox.onmouseover = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName == "LI"){
                    _this.showImage(target.index);
                }
                clearInterval(timer1);
                _this.autoPlay(_this.index);
            }
            //小轮播图中的点击事件
            this.$min_tips.onclick = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement; 
                if(target.nodeName == "LI"){
                    console.log(target.Minindex);
                    _this.MinshowImage(target.Minindex);
                }
                clearInterval(Mintimer);
                _this.MinautoPlay(_this.Minindex);
            }
            // 大轮播图中的点击事件
            this.$Carouselleft_btn1.onclick = function(){
                if(_this.a > 3){
                    _this.a = 3;
                }
                _this.MoveImage1(--_this.a);
            }
            this.$Carouselright_btn1.onclick = function(){
                if(_this.a < 0){
                    _this.a = 0;
                }
                console.log(_this.a);
                _this.MoveImage1(++_this.a);
                
            }
            this.$Carouselleft_btn2.onclick = function(){
                if(_this.b > 3){
                    _this.b = 3;
                }
                _this.MoveImage2(--_this.b);
            }
            this.$Carouselright_btn2.onclick = function(){
                if(_this.b < 0){
                    _this.b = 0;
                }
                _this.MoveImage2(++_this.b);
                
            }
            this.$Carouselleft_btn3.onclick = function(){
                if(_this.c > 3){
                    _this.c = 3;
                }
                _this.MoveImage3(--_this.c);
            }
            this.$Carouselright_btn3.onclick = function(){
                if(_this.c < 0){
                    _this.c = 0;
                }
                _this.MoveImage3(++_this.c);
                
            }
            this.$Carouselleft_btn4.onclick = function(){
                if(_this.d > 3){
                    _this.d = 3;
                }
                _this.MoveImage4(--_this.d);
            }
            this.$Carouselright_btn4.onclick = function(){
                if(_this.d < 0){
                    _this.d = 0;
                }
                _this.MoveImage4(++_this.d);
                
            }
            this.$Carouselleft_btn5.onclick = function(){
                if(_this.f > 3){
                    _this.f = 3;
                }
                _this.MoveImage5(--_this.f);
            }
            this.$Carouselright_btn5.onclick = function(){
                if(_this.f < 0){
                    _this.f = 0;
                }
                _this.MoveImage5(++_this.f);
                
            }

            //公告轮播图的事件
            this.$news_R_ul.onmouseover = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName == "LI"){
                    clearInterval(timer2);
                    _this.newsindex = target.newsindex;
                }
                _this.newsautoPlay(_this.newsindex);
            }

            //友情连接的轮播图
            this.$bott_btn1.onclick = function(e){
                e = e || window.event;
                if(_this.con > 8){
                    _this.con = 8;
                }
                _this.linkPlay(--_this.con);
                _this.$bott_btn2.style.background = '#b3b3b3';
            }
            this.$bott_btn2.onclick = function(e){
                e = e || window.event;
                if(_this.con < 0){
                    _this.con = 0;  
                }
                _this.linkPlay(++_this.con); 
                _this.$bott_btn1.style.background = '#b3b3b3';
            }

            // 页面的滚动距离出先导航栏和返回顶部按钮
            this.$pageRight_top.onclick = function(e){
                timer3 = setInterval(function() {
                    var _top = document.documentElement.scrollTop - 70;
                    console.log(_top);
                    if(_top <= 0) {
                       _top = 0;
                       clearInterval(timer3);
                    }
                    document.documentElement.scrollTop = _top;
                }, 10);
            }
            window.onscroll = function() {
                // 获取滚动距离
               var top = document.documentElement.scrollTop;
               if(top >= 1100) {
                _this.$pageRight_top.style.display = 'block';
               } else {
                _this.$pageRight_top.style.display = 'none';
               }
               if(top < 1800 ){
                _this.$pageRight_nav.style.transform = 'translate(100px,0)';
               }
               
               if(top >= 1800 && top < 2900){
                _this.$pageRight_nav.style.transform = 'translate(-10px,0)';
                _this.$pageRight_span1.style.width = '95px';
                _this.$pageRight_color1.style.color = "red";
               }else{
                _this.$pageRight_span1.style.width = '0px';
                _this.$pageRight_color1.style.color = "black";
               }
               if(top >= 2900 && top < 3500){
                _this.$pageRight_span2.style.width = '95px';
                _this.$pageRight_color2.style.color = "red";
               }else{
                _this.$pageRight_span2.style.width = '0px';
                _this.$pageRight_color2.style.color = "black";
               }
               if(top >= 3500 && top < 4200){
                _this.$pageRight_span3.style.width = '95px';
                _this.$pageRight_color3.style.color = "red";
               }else{
                _this.$pageRight_span3.style.width = '0px';
                _this.$pageRight_color3.style.color = "black";
               }
               if(top >= 4200 && top < 5300){
                _this.$pageRight_span4.style.width = '95px';
                _this.$pageRight_color4.style.color = "red";
               }else{
                _this.$pageRight_span4.style.width = '0px';
                _this.$pageRight_color4.style.color = "black";
               }
               if(top >= 5300 && top < 6400){
                _this.$pageRight_span5.style.width = '95px';
                _this.$pageRight_color5.style.color = "red";
               }else{
                _this.$pageRight_span5.style.width = '0px';
                _this.$pageRight_color5.style.color = "black";
               }
               if(top >= 6400 && top < 7500){
                _this.$pageRight_span6.style.width = '95px';
                _this.$pageRight_color6.style.color = "red";
               }else{
                _this.$pageRight_span6.style.width = '0px';
                _this.$pageRight_color6.style.color = "black";
               }
               if(top >= 7500 && top < 8400){
                _this.$pageRight_span7.style.width = '95px';
                _this.$pageRight_color7.style.color = "red";
               }else{
                _this.$pageRight_span7.style.width = '0px';
                _this.$pageRight_color7.style.color = "black";
               }
               if( top <= 8400 && top >= 1100){
                _this.$pageRight_nav.style.transform = 'translate(-10px,0)';
               }
               else{
                _this.$pageRight_nav.style.transform = 'translate(100px,0)';
               }
           }
           // 返回顶部下盒子的鼠标一进去的效果
            this.$pageRight_bottom.onmouseover = function(e){
                _this.$pageRight_p1.style.display = 'block';
                _this.$pageRight_a1.style.display = 'block';
                _this.$pageRight_p2.style.display = 'block';
                _this.$pageRight_a2.style.display = 'block';
                _this.$pageRight_p3.style.display = 'block'; 
           }
           this.$pageRight_bottom.onmouseout = function(e){
                _this.$pageRight_p1.style.display = 'none';
                _this.$pageRight_a1.style.display = 'none';
                _this.$pageRight_p2.style.display = 'none';
                _this.$pageRight_a2.style.display = 'none';
                _this.$pageRight_p3.style.display = 'none';
           }
        },
        //banner轮播图的展示图片
        showImage:function(index){
            var _this = this;
            for(var i = 0;i<_this.$tipAllLi.length;i++){
                _this.$tipAllLi[i].className = 'none';
                move(_this.$centerBackLi[i],'opacity',0,function(obj){        
                    obj.style.display = 'none';
                 });
            }
            _this.$tipAllLi[index].className = 'current';
            _this.$centerBackLi[index].style.display = 'block';
            move(_this.$centerBackLi[index],'opacity',100);
        },
        //banner轮播图的定时器
        autoPlay:function(index){
            var _this = this;
            clearInterval(timer);
            timer1 = setInterval(function(){
                index++;
                if(index > 7){
                    index = 0;
                }
                _this.showImage(index);
            },3000)
        },
        //小轮播图展示图片
        MinshowImage:function(Minindex){
            var _this = this;
            for(var i = 0; i < _this.$min_tipsallLi.length; i++){
                _this.$min_tipsallLi[i].removeAttribute('class');
                move(_this.$min_CarboxallLi[i],'opacity',0,function(obj){        
                    obj.style.display = 'none';
                 });
            }
            _this.$min_tipsallLi[Minindex].className = 'min_current';
            _this.$min_CarboxallLi[Minindex].style.display = 'block';
            move(_this.$min_CarboxallLi[Minindex],'opacity',100);
        },
        //小轮播图的定时器
        MinautoPlay:function(Minindex){
            var _this = this;
            clearInterval(Mintimer);
            Mintimer = setInterval(() => {
                Minindex++;
                if(Minindex > 8) {
                    Minindex = 0;
                }
                this.MinshowImage(Minindex);
            }, 2000)
        },
        //大轮播图的图片移动
        MoveImage1:function(count){
            if(count < 0){
                count = 0;
                this.$Carbox1.style.left == 0;
                // this.$Carouselleft_btn.style.cursor = 'default';
            }else if(count > 3){
                count = 3;
                this.$Carbox1.style.left = -3600 + 'px';
                // this.$Carouselright_btn.style.cursor = 'not-allowed';
            }
            this.count = count;
            move1(this.$Carbox1, 'left', -1200 * this.count,200);
                
        },
        MoveImage2:function(count){
            if(count < 0){
                count = 0;
                this.$Carbox2.style.left == 0;
                // this.$Carouselleft_btn.style.cursor = 'default';
            }else if(count > 3){
                count = 3;
                this.$Carbox2.style.left = -3600 + 'px';
                // this.$Carouselright_btn.style.cursor = 'not-allowed';
            }
            this.count = count;
            move1(this.$Carbox2, 'left', -1200 * this.count,200);
            
        },
        MoveImage3:function(count){
            if(count < 0){
                count = 0;
                this.$Carbox3.style.left == 0;
            }else if(count > 3){
                count = 3;
                this.$Carbox3.style.left = -3600 + 'px';
            }
            this.count = count;
            move1(this.$Carbox3, 'left', -1200 * this.count,200);
            
        },
        MoveImage4:function(count){
            if(count < 0){
                count = 0;
                this.$Carbox4.style.left == 0;
            }else if(count > 3){
                count = 3;
                this.$Carbox4.style.left = -3600 + 'px';
            }
            this.count = count;
            move1(this.$Carbox4, 'left', -1200 * this.count,200);
            
        },
        MoveImage5:function(count){
            if(count < 0){
                count = 0;
                this.$Carbox5.style.left == 0;
            }else if(count > 3){
                count = 3;
                this.$Carbox5.style.left = -3600 + 'px';
            }
            this.count = count;
            move1(this.$Carbox5, 'left', -1200 * this.count,200);
            
        },
        //公告部分的轮播图
        newsautoPlay:function(index){
            clearInterval(timer2);
            timer2 = setInterval(_=>{
                ++index;
                console.log(index);
                if(index > 5){
                    index = 0;
                    this.$news_R_ul.style.top = 0 + 'px';
                }
                move(this.$news_R_ul,'top', -50 * index,'')
            },1500)
        },
        // 友情链接部分轮播图
        linkPlay:function(count){
            console.log(count);
            if(count < 0){
                count = 0;
                this.$friendslink.style.left = 0;
                this.$bott_btn1.style.background = '#ccc';
                this.$bott_btn1.style.cursor = 'default';
            }else if(count > 8){
                count = 8;
                this.$friendslink.style.left = -1256 + 'px';
                this.$bott_btn2.style.cursor = 'default';
                this.$bott_btn2.style.background = '#ccc';
            }
            this.count = count;
            move1(this.$friendslink,'left',-157 * this.count,500)
        },
       
        
    }
}())