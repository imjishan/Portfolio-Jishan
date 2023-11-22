document.addEventListener('DOMContentLoaded', function(){
  function init() {
    gsap.registerPlugin(ScrollTrigger);
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform
        ? "transform"
        : "fixed",
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  init();

  // let $circle = $(".cursor"),
  //     $follow = $(".circle-follow");

  // function moveCircle(e) {
  //   TweenLite.to($circle, 0.4, {
  //     x: e.clientX,
  //     y: e.clientY
  //   });
  //   gsap.to($follow, 0.8, {
  //     x: e.clientX,
  //     y: e.clientY
  //   });
  // }

  // $(window).on("mousemove", moveCircle)

  let crsr = document.querySelector(".cursor");
  let main = document.querySelector(".main");
  document.addEventListener("mousemove", function (dets) {
    // crsr.style.left = dets.x + -14 + "px";
    // crsr.style.top = dets.y + -14 + "px";

    gsap.to(crsr, {
      left: dets.x - 22,
      top: dets.y - 22,
      delay: 0.09,
    });
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top 27%",
      end: "top 0",
      scrub: 3,
    },
  });

  tl.to(
    ".page1 h1",
    {
      x: -100,
    },
    "anim"
  );

  tl.to(
    ".page1 h2",
    {
      x: 100,
    },
    "anim"
  );
  tl.to(
    ".page1 video",
    {
      width: "90%",
    },
    "anim"
  );

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top -115%",
      end: "top -120%",
      scrub: 3,
    },
  });


  let tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top 10%",
      end: "top 70%",
      scrub: 3,
    },
  });


    const isMobile = window.innerWidth < 768
    if(isMobile){
      tl5.to(".main", {
        backgroundColor: "#fff"
      })
    }else {
      tl2.to(".main", {
        backgroundColor: "#fff",
      });
    }

  

  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top -250%",
      end: "top -330%",
      scrub: 3,
    },
  });


  let tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top -200%",
      end: "top -220%",
      scrub: 3,
    },
  });

  if(isMobile){
    tl6.to(".main", {
      backgroundColor: "#0F0D0D",
    });
  }else{
    tl3.to(".main", {
      backgroundColor: "#0F0D0D",
    });
  }




  

  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top -480%",
      end: "top -510%",
      scrub: 3,
    },
  });

  tl4.to(".main", {
    backgroundColor: "#EDBFFF",
  });
  



  // here i am creating a js function to have a scale cursor which gets bigger when we hover on certain headings
  const pageOneH1 = document.querySelector(".page1-big-h1");
  const pageOneH2 = document.querySelector(".page1-big-h2");
  // for page 2
  const page1h1 = document.querySelector(".p2h1");
  // for page 3
  const biggg = document.querySelector(".bigggg");
  const mention = document.querySelector(".mention")
  const start = document.querySelector(".start")
  // for page 1 H1
  pageOneH1.addEventListener("mouseenter", function () {
    gsap.to(crsr, {
      scale: 5,
    });
  });
  pageOneH1.addEventListener("mouseleave", function () {
    gsap.to(crsr, {
      scale: 1,
    });
  });

  // for page 1 H2
  pageOneH2.addEventListener("mouseenter", function () {
    gsap.to(crsr, {
      scale: 5,
    });
  });
  pageOneH2.addEventListener("mouseleave", function () {
    gsap.to(crsr, {
      scale: 1,
    });
  });

  page1h1.addEventListener("mouseenter", function () {
    gsap.to(crsr, {
      scale: 5,
    });
  });
  page1h1.addEventListener("mouseleave", function () {
    gsap.to(crsr, {
      scale: 1,
    });
  });
  biggg.addEventListener("mouseenter", function () {
    gsap.to(crsr, {
      scale: 5,
    });
  });
  biggg.addEventListener("mouseleave", function () {
    gsap.to(crsr, {
      scale: 1,
    });
  });
  mention.addEventListener("mouseenter", function() {
    gsap.to(crsr, {
      scale: 5
    })
  })
  mention.addEventListener("mouseleave", function() {
    gsap.to(crsr, {
      scale: 1
    })
  })
  start.addEventListener("mouseenter", function() {
    gsap.to(crsr, {
      scale: 5
    })
  })
  start.addEventListener("mouseleave", function() {
    gsap.to(crsr, {
      scale: 1
    })
  })





  // image hovering effect

  let boxes = document.querySelectorAll(".box");
  boxes.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      let att = elem.getAttribute("data-image");
      console.log(att);
      crsr.style.width = "24vw";
      crsr.style.height = "20vw";
      crsr.style.objectFit = "cover";
      crsr.style.zIndex = "99999"
      crsr.style.borderRadius = "0";
      crsr.style.backgroundImage = `url(${att})`;
    });
    elem.addEventListener("mouseleave", function () {
      elem.style.backgroundColor = "transparent";
      crsr.style.width = "50px";
      crsr.style.height = "50px";
      crsr.style.borderRadius = "50%";
      crsr.style.backgroundImage = `none`;
    });
  });

})



