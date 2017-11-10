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
    bo_con_spans.children[1].setAttribute("class","con-nom current");
    var scrollWith=box.clientWidth;
    for(var i=1;i<icn_main_imgs.length;i++){
        icn_main_imgs[i].style.left=scrollWith+"px";
    }
}