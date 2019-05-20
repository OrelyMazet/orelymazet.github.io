let  toast = document.getElementsByClassName("facehappy")[0];

window.onload = function () {
    let  toast = document.getElementsByClassName("facehappy")[0];
    toast.style.visibility = 'hidden';
}

window.onclick= function(){

    let  toast = document.getElementsByClassName("facehappy")[0];
    var emojiface=document.getElementsByClassName("emojiface")[0];
    var happyface=document.getElementsByClassName("facehappy")[0];

    var tl = new TimelineMax({onComplete:appearElem});
    TweenMax.to(document.getElementById("happyeyes"),8,{delay:1,left:"8%",rotation:360});
    TweenMax.to(document.getElementById("sadmouth"),5,{rotation:45,scale:0.5});
    TweenMax.to(emojiface,8,{x:750,ease:Elastic.easeOut});
    TweenMax.staggerFrom(".engrenage",8,{opacity:"10%",scale:1,delay:2});
    TweenMax.to(document.getElementById("toolone"),5,{rotation:100,x:"5%",delay:3});
    TweenMax.to(document.getElementById("tooltwo"),5,{rotation:130,x:"5%",delay:4});
    TweenMax.to(document.getElementById("toolthree"),5,{rotation:160,x:"5%",delay:5});
    TweenMax.to(document.getElementById("toolfour"),5,{rotation:190,x:"5%",delay:6});
    TweenMax.to(emojiface,8,{y:200,delay:7});
    TweenMax.to(emojiface,3,{right:540,delay:8});
    TweenMax.to(document.getElementById("tap"),5,{rotation:360,delay:9});
    
    
    tl.to(document.getElementById("tuyau"), 5, {right:100, ease:Bounce.easeOut,});
    console.log("happy")
    

function appearElem() {

    let  toast = document.getElementsByClassName("facehappy")[0];
    TweenMax.to(document.getElementById("twofunel"),1,{rotation:180,transformOrigin:'0% 50%',x:56,delay:10});
    TweenMax.from(document.getElementsByClassName("facehappy")[0],10,{visibility:"visible", rotation:360,repeat:2,transformOrigin:'70% 90%',x:700,delay:11});
    toast.style.visibility = "visible";
}
};