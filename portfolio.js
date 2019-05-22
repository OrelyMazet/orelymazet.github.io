window.onload= function(){

    //let  toast = document.getElementById("face");
    //var emojiface=document.getElementsByClassName("emojiface")[0];
    //var happyface=document.getElementsByClassName("facehappy")[0];

    var tl = new TimelineMax({onload});
    TweenMax.to(document.getElementById("toolone"),10,{rotation:100,x:"5%",repeat:-1,repeatDelay:4});
    TweenMax.to(document.getElementById("tooltwo"),10,{rotation:130,x:"5%",repeat:-1,repeatDelay:6});
    TweenMax.to(document.getElementById("toolthree"),10,{rotation:160,x:"5%",repeat:-1,repeatDelay:8});
    TweenMax.to(document.getElementById("toolfour"),10,{rotation:190,x:"5%",repeat:-1,repeatdDelay:10});
    //TweenMax.to(toast, 4, {x:300,ease:Bounce.easeOut,});
    console.log("happy");
}

let icone =document.getElementById("mail");
icone.onclick= function(){
    let  toast = document.getElementById("face");
    var bou = new TimelineMax({onclick});
    TweenMax.to(toast, 4, {x:200,ease:Bounce.easeOut,});
    console.log("happiness");
}

    function maFunction() {
     var elmnt = document.getElementById("milieu");
        elmnt.scrollIntoView();
        console.log("joyeux");
  }
  
  function scdeFunction() {
    var elmnt = document.getElementById("message");
       elmnt.scrollIntoView();
       console.log("joyeux");
 }

 function troisFunction() {
    var elmnt = document.getElementById("real");
       elmnt.scrollIntoView();
       console.log("ok");
 }