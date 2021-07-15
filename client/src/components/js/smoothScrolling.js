export const smoothScrolling = () => {
  // Smooth scrolling

  // Define selector for selecting
  // anchor links with the hash
  let selector = 'a[href^="#"]';

  // Collect all such anchor links
  let list = document.querySelectorAll(selector);

  // Iterate through each of the links
  list.forEach((link) => {
    link.onclick = function (e) {
      // Prevent scrolling if the
      // hash value is blank
      e.preventDefault();

      // Get the destination to scroll to
      // using the hash property
      let destination = document.querySelector(this.hash);

      // Scroll to the destination using
      // scrollIntoView method
      destination.scrollIntoView({
        behavior: "smooth",
      });
    };
  });
};
