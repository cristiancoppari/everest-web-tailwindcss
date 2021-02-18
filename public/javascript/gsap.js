window.addEventListener("load", () => {
  // Header animation
  // Config
  const headerTL = gsap.timeline({ defaults: { duration: 1 } });
  // Animations
  headerTL
    .from("header", { opacity: 0 })
    .from("nav", { opacity: 0, ease: "power4.out" });

  // Text animations

  // Introduction
  // Config
  const introductionTL = gsap.timeline({
    defaults: {
      duration: 1,
    },
    scrollTrigger: {
      trigger: ".section-introduction",
      // markers: true,
      start: "top center",
      toggleActions: "restart none none paused",
    },
  });
  // Animations
  introductionTL
    .from(".section-introduction .title-anim", {
      opacity: 0,
      y: -50,
      stagger: 0.2,
    })
    .from(
      ".section-introduction .paragraph-anim",
      { opacity: 0, y: -50, stagger: 0.2 },
      "-=.5"
    );

  // Building
  // Config
  const buildingTL = gsap.timeline({
    defaults: {
      duration: 1,
    },
    scrollTrigger: {
      trigger: ".section-building",
      // markers: true,
      start: "top center",
      toggleActions: "restart none none paused",
    },
  });
  // Animations
  buildingTL
    .from(".section-building .title-anim", {
      opacity: 0,
      y: -50,
      stagger: 0.2,
    })
    .from(
      ".section-building .paragraph-anim",
      { opacity: 0, y: -50, stagger: 0.2 },
      "-=.5"
    )
    .from(".section-building .link-anim", { opacity: 0, y: -50 });

  // Apartments
  // Config
  const apartmentsTL = gsap.timeline({
    defaults: {
      duration: 1,
    },
    scrollTrigger: {
      trigger: ".section-apartments",
      // markers: true,
      start: "top center",
      toggleActions: "restart none none paused",
    },
  });
  // Animations
  apartmentsTL
    .from(".section-apartments .title-anim", {
      opacity: 0,
      x: -50,
    })
    .from(
      ".section-apartments .paragraph-anim",
      { opacity: 0, y: -50, stagger: 0.2 },
      "-=.5"
    )
    .from(".section-apartments .img-anim", { opacity: 0, x: -50 }, "-=.5");

  // Icons
  // Config
  const iconsTL = gsap.timeline({
    defaults: {
      duration: 1,
    },
    scrollTrigger: {
      trigger: ".section-icons",
      // markers: true,
      start: "top center",
      toggleActions: "restart none none paused",
    },
  });
  // Animations
  iconsTL.from(".section-icons .icon-card", {
    opacity: 0,
    y: -50,
    stagger: 0.2,
  });

  // Qualities
  // Config
  const qualitiesTL = gsap.timeline({
    defaults: {
      duration: 1,
    },
    scrollTrigger: {
      trigger: ".section-qualities",
      // markers: true,
      start: "top center",
      toggleActions: "restart none none paused",
    },
  });
  // Animations
  qualitiesTL
    .from(".section-qualities .title-anim", {
      opacity: 0,
      y: -50,
    })
    .from(".section-qualities .img-anim", { opacity: 0, x: -50 }, "-=.5")
    .from(
      ".section-qualities .paragraph-anim",
      { opacity: 0, y: -50, stagger: 0.2 },
      "-=.5"
    )
    .from(".section-qualities .button-download-container", {
      opacity: 0,
      y: -50,
    });

  // Qualities
  // Config
  const lifestyleTL = gsap.timeline({
    defaults: {
      duration: 1,
    },
    scrollTrigger: {
      trigger: ".section-lifestyle",
      // markers: true,
      start: "top center",
      toggleActions: "restart none none paused",
    },
  });
  // Animations
  lifestyleTL
    .from(".section-lifestyle .title-anim", {
      opacity: 0,
      y: -50,
    })
    .from(
      ".section-lifestyle .paragraph-anim",
      { opacity: 0, y: -50, stagger: 0.2 },
      "-=.5"
    )
    .from(".section-lifestyle .img-anim", { opacity: 0, x: -50 }, "-=.5");

  // International Design
  // Config
  const internationalDesignTL = gsap.timeline({
    defaults: {
      duration: 1,
    },
    scrollTrigger: {
      trigger: ".section-international-design",
      // markers: true,
      start: "top center",
      toggleActions: "restart none none paused",
    },
  });
  // Animations
  internationalDesignTL
    .from(".section-international-design .title-anim", {
      opacity: 0,
      y: -50,
    })
    .from(
      ".section-international-design .paragraph-anim",
      { opacity: 0, y: -50, stagger: 0.2 },
      "-=.5"
    )
    .from(
      ".section-international-design .img-anim",
      { opacity: 0, y: -50 },
      "-=.5"
    );
  // Master Timelines
});
