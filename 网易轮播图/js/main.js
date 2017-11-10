/**
 * Created by Administrator on 2017/4/14.
 */
window.onload=function(){
    function $(id){return document.getElementById(id);}
    var box=$("bo");
    var icn_main=$("icn_main");
    var icn_main_imgs=icn_main.children;
    var bo_con=$("bo_con");
    for(var i=0;i<icn_main_imgs.length;i++){
        var span=document.createElement("span");
        span.innerHTML=icn_main_imgs.length-i;
        span.className="con-nom";
        bo_con.insertBefore(span,bo_con.children[1]);
    }
    var bo_con_spans=bo_con.children;
   bo_con_spans[1].setAttribute("class","con-nom current");
    var scrollWith=box.clientWidth;
    for(var i=1;i<icn_main_imgs.length;i++){
        icn_main_imgs[i].style.left=scrollWith+"px";
    }
    var key=0;
    for(var k in bo_con_spans){
        bo_con_spans[k].onclick=function (){
            if(this.className=="con-lt"){
                //alert("zuo");
                change(icn_main_imgs[key],{left:scrollWith});
                --key<0?key=icn_main_imgs.length-1:key;
                icn_main_imgs[key].style.left=-scrollWith+"px";
                change(icn_main_imgs[key],{left:0});
                setSque();
            }
            else if(this.className=="con-rt"){
                //alert("you");
                fn();

            }
            else{
                //alert("xia");
                var that=this.innerHTML-1;
                if(that>key){
                    change(icn_main_imgs[key],{left:-scrollWith});
                    icn_main_imgs[that].style.left=scrollWith+"px";
                }
                else if(that<key){
                    change(icn_main_imgs[key],{left:scrollWith});
                    icn_main_imgs[that].style.left=-scrollWith+"px";
                }
                key=that;
                change(icn_main_imgs[key],{left:0});
                setSque();
            }
        }

    }
    function setSque(){
        for(var i=1;i<bo_con_spans.length-1;i++){
            bo_con_spans[i].className="con-nom";
        }
        bo_con_spans[key+1].className="con-nom current";
    }
    var timer=null;
    timer=setInterval(fn,2000);
    function fn(){
        change(icn_main_imgs[key],{left:-scrollWith});
        ++key>icn_main_imgs.length-1?key=0:key;
        icn_main_imgs[key].style.left=scrollWith+"px";
        change(icn_main_imgs[key],{left:0});
        setSque();
    }
    box.onmouseover=function(){
        clearInterval(timer);
    }
    box.onmouseout=function(){
        clearInterval(timer);
        timer=setInterval(fn,2000);
    }
}