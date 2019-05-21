window.onclick= function(){

    let  toast = document.getElementById("face");
    //var emojiface=document.getElementsByClassName("emojiface")[0];
    //var happyface=document.getElementsByClassName("facehappy")[0];

    var tl = new TimelineMax({onclick});
    TweenMax.to(document.getElementById("toolone"),10,{rotation:100,x:"5%",delay:3});
    TweenMax.to(document.getElementById("tooltwo"),10,{rotation:130,x:"5%",delay:4});
    TweenMax.to(document.getElementById("toolthree"),10,{rotation:160,x:"5%",delay:5});
    TweenMax.to(document.getElementById("toolfour"),10,{rotation:190,x:"5%",delay:6});
    
    tl.to(document.getElementById("face"), 5, {right:300,ease:Bounce.easeOut,});
    console.log("happy");
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