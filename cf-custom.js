var headingAnim = new ScrollMagic.Controller();

var leftscene = new ScrollMagic.Scene({
  triggerElement: "main",
  triggerHook: 0,
  duration: 100,
})
  .setTween(".partyheadingleft", 1, { left: "50%", opacity: 1 })
  .addIndicators({ name: "start heading" })
  .addTo(headingAnim);

var rightscene = new ScrollMagic.Scene({
  triggerElement: "main",
  triggerHook: 0,
  duration: 100,
})
  .setTween(".partyheadingright", 1, { right: "50%", opacity: 1 })
  .addTo(headingAnim);
