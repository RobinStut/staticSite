// const mobileTrigger = document.querySelector('[data-navigation-toggle]')
// const mobileWrapper = document.querySelector('[data-navigation-mobile]')

// mobileTrigger.addEventListener("click", () => {

//   const toggle = () => mobileWrapper.classList.toggle('show')
//   const hasShowClass = Array.from(mobileWrapper.classList).some((x) => x === 'show')
//   const animateDirection = hasShowClass ? 'out' : 'in';

//   mobileTrigger.className = 'navigation_toggle'
//   mobileTrigger.classList.add(animateDirection)

//   document.querySelector('.one').classList.toggle('one-ani')
//   document.querySelector('.two').classList.toggle('two-ani')

//   if (hasShowClass) {
//     mobileWrapper.classList.add(animateDirection)

//     setTimeout(() => {
//       toggle()
//       mobileWrapper.classList.remove(animateDirection)
//     }, 300);
//   }
//   else {
//     toggle()
//     mobileWrapper.classList.add(animateDirection)
//     setTimeout(() => {
//       mobileWrapper.classList.remove(animateDirection)
//     }, 300);

//   }
// });
