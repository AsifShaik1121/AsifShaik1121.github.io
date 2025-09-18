// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Dark Mode Toggle
  const toggleBtn = document.getElementById("theme-toggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  
    // Change icon
    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☀️"; // Sun for light mode
    } else {
      toggleBtn.textContent = "🌙"; // Moon for dark mode
    }
  
    // Save preference in local storage
    localStorage.setItem("theme", 
      document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
  });
  
  // Load saved theme on refresh
  window.addEventListener("load", () => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      toggleBtn.textContent = "☀️";
    }
  });
  