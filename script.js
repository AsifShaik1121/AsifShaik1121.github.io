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
    loadRepos();
});

  // Replace with your GitHub username
const GITHUB_USERNAME = "AsifShaik1121";

async function loadRepos() {
  const repoList = document.getElementById("repo-list");
  
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
    const repos = await response.json();

    repoList.innerHTML = repos.map(repo => `
      <div class="repo-card">
        <h3>${repo.name}</h3>
        <p>${repo.description ? repo.description : "No description available."}</p>
        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
      </div>
    `).join("");
  } catch (error) {
    repoList.innerHTML = "<p>⚠️ Unable to load repositories.</p>";
    console.error("Error fetching repos:", error);
  }
}

window.addEventListener("load", loadRepos);

  