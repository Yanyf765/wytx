/**
 * Created by Administrator on 2018/9/30.
 */
function $(id){
    return document.getElementById(id);
}
function show(obj){
    obj.style.display = "block";
}

function hide(obj){
    obj.style.display = "none";
}

function scroll(){
    if (window.pageXOffset!=null){
        //ie9+ 和其他浏览器
        return{
            left:window.pageXOffset,
            top:window.pageYOffset
        }
    }
    else if(document.compatMode == "CSS1Compat"){
        // 声明的了 DTD
        // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
        return{
            left: document.documentElement.scrollLeft,
            top:document.documentElement.scrollTop
        }
    }

    //  剩下的肯定是怪异模式的
    return{
        left: document.body.scrollLeft,
        top:document.body.scrollTop
    }
}
