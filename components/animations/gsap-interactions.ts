import gsap from "gsap";

export function registerLuxuryCardHover(element: HTMLElement) {
  gsap.set(element, {
    transformPerspective: 900,
    transformStyle: "preserve-3d",
    willChange: "transform",
  });

  const rotateXTo = gsap.quickTo(element, "rotationX", {
    duration: 0.45,
    ease: "power3.out",
  });
  const rotateYTo = gsap.quickTo(element, "rotationY", {
    duration: 0.45,
    ease: "power3.out",
  });
  const xTo = gsap.quickTo(element, "x", { duration: 0.45, ease: "power3.out" });
  const yTo = gsap.quickTo(element, "y", { duration: 0.45, ease: "power3.out" });

  const onMove = (event: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    rotateXTo(y * -5);
    rotateYTo(x * 6);
    xTo(x * 5);
    yTo(y * 5);
  };

  const onEnter = () => {
    gsap.to(element, {
      scale: 1.012,
      duration: 0.38,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const onLeave = () => {
    rotateXTo(0);
    rotateYTo(0);
    xTo(0);
    yTo(0);
    gsap.to(element, {
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  element.addEventListener("mousemove", onMove);
  element.addEventListener("mouseenter", onEnter);
  element.addEventListener("mouseleave", onLeave);

  return () => {
    element.removeEventListener("mousemove", onMove);
    element.removeEventListener("mouseenter", onEnter);
    element.removeEventListener("mouseleave", onLeave);
    gsap.killTweensOf(element);
    gsap.set(element, { clearProps: "transform,willChange" });
  };
}

export function registerMagneticCta(element: HTMLElement) {
  gsap.set(element, { willChange: "transform" });

  const xTo = gsap.quickTo(element, "x", { duration: 0.38, ease: "power3.out" });
  const yTo = gsap.quickTo(element, "y", { duration: 0.38, ease: "power3.out" });
  const scaleTo = gsap.quickTo(element, "scale", {
    duration: 0.32,
    ease: "power3.out",
  });

  const onMove = (event: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    xTo(x * 6);
    yTo(y * 4);
  };

  const onEnter = () => scaleTo(1.012);
  const onLeave = () => {
    xTo(0);
    yTo(0);
    scaleTo(1);
  };

  element.addEventListener("mousemove", onMove);
  element.addEventListener("mouseenter", onEnter);
  element.addEventListener("mouseleave", onLeave);

  return () => {
    element.removeEventListener("mousemove", onMove);
    element.removeEventListener("mouseenter", onEnter);
    element.removeEventListener("mouseleave", onLeave);
    gsap.killTweensOf(element);
    gsap.set(element, { clearProps: "transform,willChange" });
  };
}
