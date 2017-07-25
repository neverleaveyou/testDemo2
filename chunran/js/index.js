/*
* @Author: vincnet
* @Date:   2016-08-31 09:44:51
* @Last Modified by:   vincnet
* @Last Modified time: 2016-08-31 11:10:02
*/
// 解决左右禁止滑动的默认行为
var xx,yy,XX,YY,swipeX,swipeY ;
 document.addEventListener('touchstart',function(event){
     xx = event.targetTouches[0].screenX ;
     yy = event.targetTouches[0].screenY ;
     swipeX = true;
     swipeY = true ;
 })
 document.addEventListener('touchmove',function(event){
      XX = event.targetTouches[0].screenX ;
      YY = event.targetTouches[0].screenY ;
      if(swipeX && Math.abs(XX-xx)-Math.abs(YY-yy)>0)  //左右滑动
      {
          event.stopPropagation();//组织冒泡
          event.preventDefault();//阻止浏览器默认事件
          swipeY = false ;
          //左右滑动
      }
      else if(swipeY && Math.abs(XX-xx)-Math.abs(YY-yy)<0){  //上下滑动
          swipeX = false ;
          //上下滑动，使用浏览器默认的上下滑动
      }
  })
