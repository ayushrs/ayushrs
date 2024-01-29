const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
const miniCircle = document.getElementById('mini-circle');

// Add a mousemove event listener to the document
document.addEventListener('mousemove', (event) => {
  // Update the position of the mini-circle to follow the cursor
  miniCircle.style.left = `${event.clientX}px`;
  miniCircle.style.top = `${event.clientY}px`;
});

function firstPageAnimaion(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration:1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration:2,
        delay: -1,
        stagger:.2
    })  
    .from("#herofooter", {
        y: -10,
        opacity: 0,
        ease: Expo.easeInOut,
        delay: -1,
        duration:1.5,
    }) 
}

firstPageAnimaion();

document.querySelectorAll(".elem")
.forEach(function(elem){
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function(dets ){
        gsap.to(elem.querySelector("img"),{
         opacity: 0,
         ease: Power3,
        });
     });

    elem.addEventListener("mousemove", function(dets ){
       var diff = dets.clientY - elem.getBoundingClientRect().top; 
       diffrot = dets.clientX - rotate;
       rotate = dets.clientX; 
       gsap.to(elem.querySelector("img"),{
        opacity: 1,
        ease: Power1,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5)
       });
    });
});

