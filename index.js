// Your code here
const dodger = document.getElementById("dodger"); // Access the dodger element

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", ""); // Get current position
    const left = parseInt(leftNumbers, 10); // Convert to integer
  
    if (left > 0) { // Ensure it doesn't move past the left edge
      dodger.style.left = `${left - 1}px`; // Move 1px to the left
    }
  }
  
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", ""); // Get current position
    const left = parseInt(leftNumbers, 10); // Convert to integer
  
    if (left < 360) { // Ensure it doesn't move past the right edge
      dodger.style.left = `${left + 1}px`; // Move 1px to the right
    }
  }
  
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  