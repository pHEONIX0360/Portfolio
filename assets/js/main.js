document.addEventListener("DOMContentLoaded",function(){new SweetScroll({}),particlesJS("particles-js",{particles:{number:{value:30,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"polygon",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:19.18081918081918,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:4,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}},nb:80},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})},!1);
const btn = document.querySelector('.btn1');
const container = document.querySelector('.container');

function moveButton() {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const buttonWidth = btn.offsetWidth;
    const buttonHeight = btn.offsetHeight;

    // Generate random positions within the container
    const randomX = Math.floor(Math.random() * (containerWidth - buttonWidth));
    const randomY = Math.floor(Math.random() * (containerHeight - buttonHeight));

    // Move the button to the new random position
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
    btn.style.left = `${randomX}px`;
}

// Move the button every second (1000 milliseconds)
setInterval(moveButton, 1000);