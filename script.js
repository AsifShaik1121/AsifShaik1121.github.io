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
  
    toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  
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
  
    // Fade-in profile photo
    const photo = document.querySelector(".hero-photo img");
    if (photo) {
      setTimeout(() => {
        photo.classList.add("visible");
      }, 300); // delay for smooth entry
    }
  });
  