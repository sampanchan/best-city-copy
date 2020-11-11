console.log('helo')




// header/ nav, logo, and.col animations
gsap.from("img", {
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    delay: 0.5, 
    stagger: 0.2,
    ease: "elastic", 
    force3D: true
  });


gsap.from(".col", {
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    delay: 0.5, 
    stagger: 0.2,
    ease: "elastic", 
    force3D: true
  });
  
  document.querySelectorAll(".col").forEach(function(box) {
    box.addEventListener("click", function() {
      gsap.to(".col", {
        duration: 0.5, 
        opacity: 0, 
        y: -100, 
        stagger: 0.1,
        ease: "back.in"
      });
    });
  });

  document.querySelectorAll(".col").forEach(function(box){
    box.addEventListener("click", function() {
        gsap.from(".col", {
            duration: 2,
            scale: 0.5, 
            opacity: 0, 
            delay: 0.5, 
            stagger: 0.2,
            ease: "elastic", 
            force3D: true
          });
    }); 
  });

  gsap.to("h1", 1, {
    scale: 0.1, 
    y: 60,
    yoyo: true, 
    repeat: -1, 
    ease: "power1.inOut",
    delay:1,
    stagger: {
      amount: 1.5, 
      grid: "auto",
      from: "center"
    }
  });
  gsap.to("nav", 1, {
    scale: 0.5, 
    y: 100,
    yoyo: true, 
    repeat: -1, 
    ease: "power1.inOut",
    delay:1,
    stagger: {
      amount: 1.5, 
      grid: "auto",
      from: "center"
    }
  });

  // button animations (does not work)

  var play = document.querySelector("#one");
  var reverse = document.querySelector("#two");
  var restart = document.querySelector("#three");

  var tl = gsap.timeline({paused: true});


  tl.to("#one", {duration: 1, x: 200, scale: 0.2}, "+=1")
  .to("#two", {duration: 1, x: 200, scale: 2, y: 20}, "twoAndThree") 
  .to("#three", {duration: 1, x: 200, rotation: 360}, "twoAndThree"); 

play.onclick = function() {
  tl.play();
}
reverse.onclick = function() {
  tl.reverse();
}
restart.onclick = function() {
  tl.restart();
}


// .hero h2 and p
var tl = gsap.timeline({repeat: -1, repeatDelay: 1});

tl.to(".hero h2", {duration: 1, x: 300, scale: 2, y: -200}, "greyAndPink") 
.to(".hero p", {duration: 1, x: 200, rotation: 360}, "greyAndPink"); 
tl.to(".col h3", {duration: 1, x: 100, rotation: 360, scale: 2});



let audioLogo= document.querySelector('img')
audioLogo.addEventListener('click', function(){
  console.log('click')

var sound = new Howl({
  src: ['js/covidBlues.mp3']
});

sound.play()
  
})

