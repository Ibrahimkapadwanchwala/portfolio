const counter = document.querySelector(".counter");

const startLoader = () => {
  let currVal = 0;

  function updateCounter() {
    if (currVal >= 100) {
      currVal = 100;
      counter.textContent = currVal;
      revealContent();
      return;
    }

    let increment = Math.floor(Math.random() * 10) + 1;
    currVal += increment;
    if (currVal > 100) currVal = 100;

    counter.textContent = currVal;

    let delay = Math.floor(Math.random() * 80) + 20;
    setTimeout(updateCounter, delay);
  }

  updateCounter();
};

const revealContent = () => {
  const tl = gsap.timeline({
    onComplete: () => {
      document.body.style.overflow = "auto";
    }
  });

  tl.to(".counter", {
    opacity: 0,
    y: -20,
    duration: 0.5,
    ease: "power3.in"
  })
  // Slide the curtain bars up
  .to(".bar", {
    yPercent: -100,
    duration: 1.2,
    ease: "expo.inOut",
    stagger: {
      amount: 0.5,
      from: "start"
    }
  }, "-=0.2")
  // THIS PART REVEALS THE NAVBAR/APP
  .to("#root", {
    opacity: 1,
    visibility: "visible", // Bring it back to life
    duration: 0.5
  }, "-=1"); // Starts revealing while bars are still moving
};

startLoader();