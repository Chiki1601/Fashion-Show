let model = document.getElementById("model");
const masterTL = gsap.timeline();

//Audience flashes
function flashLights() {
  const flashTL = gsap.timeline({
    repeat: -1,
    repeatDelay: -0.5,
    duration: 0.1,
    yoyo: true
  });
  flashTL
    .to(".flashes2", { opacity: 0 })
    .to(".flashes3", { opacity: 0 })
    .to(".flashes1", { opacity: 0, delay: -0.2 });
  return flashTL;
}

//lights
function rightLight() {
  const rightTL = gsap.timeline({ repeat: 20, repeatDelay: 0.5 });
  rightTL.to("#right-light", {
    keyframes: [
      { skewX: -11, duration: 2 },
      { skewX: -5, duration: 3 },
      { skewX: -12, duration: 3 },
      { skewX: 0, duration: 3 }
    ],
    ease: "power4.inOut"
  });
  return rightTL;
}

function leftLight() {
  const leftTL = gsap.timeline({ repeat: 20, repeatDelay: 0.5 });
  leftTL
    .to("#left-light", { skewX: 8, duration: 2 })
    .to("#left-light", { skewX: 7, duration: 1 })
    .to("#left-light", { skewX: 5, duration: 1.5 })
    .to("#left-light", { skewX: 0, duration: 1.1 });
  return leftTL;
}

function rightSpotLight() {
  const rightSpotTL = gsap.timeline({ repeat: 20, repeatDelay: 1 });
  rightSpotTL
    .to("#spot-light-right", { skewX: -15, duration: 2 })
    .to("#spot-light-right", { skewX: 0, duration: 3 })
    .to("#spot-light-right", { skewX: -25, duration: 3 })
    .to("#spot-light-right", { skewX: 0, duration: 3 });
  return rightSpotTL;
}

function leftSpotLight() {
  const leftSpotTL = gsap.timeline({ repeat: 20, repeatDelay: 1 });
  leftSpotTL
    .to("#spot-light-left", { skewX: -20, duration: 2 })
    .to("#spot-light-left", { skewX: 0, duration: 3 })
    .to("#spot-light-left", { skewX: 15, duration: 3 })
    .to("#spot-light-left", { skewX: 0, duration: 3 });
  return leftSpotTL;
}

//model poses
const modelTL = gsap.timeline();
function poseOne() {
  const poseOneTL = gsap.timeline();
  poseOneTL
    .to("#left-arm-bottom", {
      transformOrigin: "top",
      rotate: -85,
      y: 20,
      x: -23
    })
    .to("#left-arm-top", { rotate: 20, delay: -0.5 })
    .to("#dress-bottom", {
      rotate: 8,
      delay: -0.5
    })
    .to("#dress-top", {
      rotate: -5,
      x: -5,
      delay: -0.5
    })
    .to("#head", {
      rotate: -5,
      x: -5,
      delay: -0.5
    })
    .to("#right-leg-top", {
      x: -20,
      transformOrigin: "top",
      rotate: 20,
      delay: -0.5
    })
    .to("#right-leg-bottom", { x: -64, y: -3, delay: -0.5 });

  return poseOneTL;
}

function poseTwo() {
  const poseTwoTL = gsap.timeline();
  poseTwoTL
    .to("#left-arm-bottom", {
      transformOrigin: "top",
      rotate: -85,
      y: 20,
      x: -23
    })
    .to("#left-arm-top", { rotate: 20, delay: -0.5 })
    .to("#right-arm-top", { y: 5, delay: -0.5 })
    .to("#dress-bottom", {
      rotate: -8,
      y: 25,
      delay: -0.5
    })
    .to("#dress-top", {
      rotate: 5,
      x: 5,
      delay: -0.5
    })
    .to("#head", {
      rotate: 5,
      x: 5,
      delay: -0.5
    })
    .to("#left-leg-top", {
      x: 20,
      transformOrigin: "top",
      rotate: -20,
      delay: -0.5
    })
    .to("#left-leg-bottom", { x: 64, y: -3, delay: -0.5 });

  return poseTwoTL;
}

//Control Master Timeline
masterTL
  .add(flashLights())
  .add(rightLight(), 0)
  .add(leftLight(), 0)
  .add(rightSpotLight(), 0)
  .add(leftSpotLight(), 0);

model.addEventListener("click", () => {
  modelTL.add(poseTwo(), 0);
});