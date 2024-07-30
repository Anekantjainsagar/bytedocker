import gsap from "gsap";

export const animatePageIn = () => {
  const transitionElement = document.getElementById("transition-element");

  if (transitionElement) {
    const tl = gsap.timeline();

    gsap.killTweensOf(transitionElement); // Clear any existing animations

    tl.set(transitionElement, {
      yPercent: 0,
    })
      .to(transitionElement, {
        yPercent: -100,
        duration: 0.8,
        ease: "power2.out",
      })
      .to(
        transitionElement,
        {
          duration: 0.4,
          ease: "power2.out",
        },
        "<"
      );
  }
};

export const animatePageOut = (href, history, content = "") => {
  const transitionElement = document.getElementById("transition-element");
  const transitionContent = document.getElementById("transition-content");

  if (transitionElement && transitionContent) {
    transitionContent.innerHTML = content; // Set the content to be animated

    const tl = gsap.timeline();

    gsap.killTweensOf(transitionElement); // Clear any existing animations

    tl.set(transitionElement, {
      yPercent: 100,
    })
      .to(transitionElement, {
        yPercent: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          history(href); // Navigate to the new page
        },
      })
      .to(
        transitionElement,
        {
          duration: 0.4,
          ease: "power2.out",
        },
        "<"
      );
    setTimeout(() => {
      animatePageIn();
    }, 1000);
  } else {
    console.error("Transition elements not found");
  }
};
