
var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#blur")
document.addEventListener("mousemove",function(dets){
        crsr.style.left=dets.x+"px"
        crsr.style.top=dets.y+"px"
        blur.style.left=dets.x-125+"px"
        blur.style.top=dets.y-125+"px"


})
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    

})
gsap.to("#nav", {
    backgroundColor: "#000000d0",
    duration: 0.5,
    height: "90px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      //markers:"true",
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
  }  
})
gsap.to("#main", {
    backgroundColor: "rgba(13, 10, 10, 0.322)",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        //markers:"true",
        start: "top -50%",
        end: "top -100%",
        scrub: 2,
    }
})
