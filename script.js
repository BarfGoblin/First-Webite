const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { rootMargin: "0px", threshold: [0, 0.1, 1] }
);

const tags = document.querySelectorAll("img");

tags.forEach((tag) => {
  observer.observe(tag);
});
