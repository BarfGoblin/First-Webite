// let lastKnownScrollPosition = 0;
// let ticking = false;
// let lastKnownScroll = 0;

// function doSomething(scrollPos) {
//     let scrollDiff = scrollPos - lastKnownScroll
//     let gridContainer = document.querySelector(".grid-container");
//     if (scrollDiff < 0) {
//         gridContainer.setAttribute("class", "grid-container scroll-motion-up")
//     } else {
//         gridContainer.setAttribute("class", "grid-container scroll-motion-down")
//     }
//     lastKnownScroll = scrollPos;
// }

// function throttle(fn, wait) {
//     let minScrollTime = 100;
//     let time = Date.now();
//     return function () {
//         if ((time + wait - Date.now()) < 0) {
//             fn();
//             time = Date.now();
//         }
//     }
// }

// document.addEventListener("scroll", (event) => {
//     lastKnownScrollPosition = window.scrollY;

//     if (!ticking) {
//         window.requestAnimationFrame(() => {
//             doSomething(lastKnownScrollPosition);
//             ticking = false;
//         });

//         ticking = true;
//     }
// });
