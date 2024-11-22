// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.getAttribute('href') === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top for Home
    } else {
      document.querySelector(e.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// Fade-in animation on scroll
const faders = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

faders.forEach(fader => observer.observe(fader));

// Initialize project navigation
// Initialize project navigation
let currentProjectIndex = 0;

function nextProjects() {
  const projects = document.querySelectorAll('.project-card'); // Ensure it's the correct class
  const projectsPerPage = 3; // Show 3 projects per page
  const totalProjects = projects.length;

  // Hide all cards first
  projects.forEach(project => project.style.display = 'none');

  // Show the next 3 projects
  for (let i = currentProjectIndex; i < currentProjectIndex + projectsPerPage; i++) {
    if (projects[i]) {
      projects[i].style.display = 'block';
    }
  }

  // Move to the next set of 3 projects
  currentProjectIndex += projectsPerPage;

  // If we reach the end of the list, loop back to the start
  if (currentProjectIndex >= totalProjects) {
    currentProjectIndex = 0;
  }
}

// Initial setup - Show first 3 projects
nextProjects();

// Add event listener to the Next button
document.getElementById('next-button').addEventListener('click', nextProjects);




