/**
 * K. NISITHA — PORTFOLIO PROJECTS DATA & FILTERING
 * Maintainable project data structure. 
 * Allows easy modification of titles, descriptions, tags, and genuine URLs.
 */

const portfolioProjects = [
  {
    id: "smart-student-performance-tracker",
    title: "Smart Student Performance Tracker",
    category: "practice",
    status: {
      label: "Practice Project",
      badgeClass: "badge-success",
      pulseClass: "",
      isLive: false
    },
    description: "A Java-based student result management application that calculates total marks, average, grade, and pass/fail status.",
    tags: ["Java"],
    githubUrl: "https://github.com/KNisitha/Smart-Student-Performance-Tracker",
    btnText: "View on GitHub",
    liveDemoUrl: null,
    illustration: {
      type: "graduation-cap",
      tag: "<Java Application />",
      svg: `<svg class="thumb-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
      bgClass: "thumb-student-tracker"
    }
  },
  {
    id: "evently",
    title: "Evently",
    category: "web",
    status: {
      label: "Concept Prototype",
      badgeClass: "badge-info",
      pulseClass: "status-pulse-dot dot-blue",
      isLive: false
    },
    description: "An event-related platform concept for exploring event-planning services and connecting users with relevant service options such as venues, photographers, caterers, and decorators.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/KNisitha/evently", // Real repository without .git
    liveDemoUrl: null,
    illustration: {
      type: "calendar",
      tag: "<Event Platform />",
      svg: `<svg class="thumb-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
      bgClass: "thumb-evently"
    }
  },
  {
    id: "watch-store",
    title: "Watch Store",
    category: "practice",
    status: {
      label: "Practice Project",
      badgeClass: "badge-neutral",
      pulseClass: "",
      isLive: false
    },
    description: "An e-commerce practice project focused on showcasing watches and exploring product browsing, database integration, and shopping-related functionality.",
    tags: ["HTML / CSS", "JavaScript", "Database Concept"],
    githubUrl: null, // Placeholder: Add genuine repo when ready
    liveDemoUrl: null,
    illustration: {
      type: "watch",
      tag: "<E-Commerce Practice />",
      svg: `<svg class="thumb-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path></svg>`,
      bgClass: "thumb-watch"
    }
  },
  {
    id: "todo-list",
    title: "To-Do List",
    category: "practice",
    status: {
      label: "Practice Project",
      badgeClass: "badge-success",
      pulseClass: "",
      isLive: false
    },
    description: "A clean task-management application intended to help users organize, prioritize, and track everyday tasks with an intuitive, responsive user interface.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    githubUrl: null, // Placeholder: Add genuine repo when ready
    liveDemoUrl: null,
    illustration: {
      type: "tasks",
      tag: "<Productivity App />",
      svg: `<svg class="thumb-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>`,
      bgClass: "thumb-todo"
    }
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    category: "web",
    status: {
      label: "Current",
      badgeClass: "badge-active",
      pulseClass: "status-pulse-dot dot-purple",
      isLive: true
    },
    description: "My personal website showcasing my education, technical skills, projects, and professional contact information with a modern dark theme and responsive layout.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/KNisitha",
    liveDemoUrl: null,
    illustration: {
      type: "laptop",
      tag: "<Personal Portfolio />",
      svg: `<svg class="thumb-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
      bgClass: "thumb-portfolio"
    }
  }
];

/**
 * Render Project Cards
 * @param {Array} projects - Array of project objects
 */
function renderProjects(projectsToRender) {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  container.innerHTML = "";

  projectsToRender.forEach(project => {
    const article = document.createElement("article");
    article.className = "project-card card-glass";
    article.setAttribute("data-category", project.category);

    // Tags HTML
    const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join("");

    // Action button HTML
    let actionHtml = "";
    if (project.githubUrl) {
      const buttonLabel = project.btnText || (project.id === 'portfolio-website' ? 'GitHub Profile' : (project.id === 'smart-student-performance-tracker' ? 'View on GitHub' : 'View Repository'));
      actionHtml = `
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-glow">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          <span>${buttonLabel}</span>
        </a>
      `;
    } else {
      actionHtml = `
        <span class="btn-disabled" title="Repository in progress or pending upload">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline>
          </svg>
          <span>${project.status.label === 'In Progress' ? 'Repository In Progress' : 'Repository Pending'}</span>
        </span>
      `;
    }

    const pulseHtml = project.status.pulseClass ? `<span class="${project.status.pulseClass}"></span> ` : "";

    article.innerHTML = `
      <div class="project-thumbnail ${project.illustration.bgClass}">
        <div class="thumb-illustration">
          ${project.illustration.svg}
          <span class="thumb-code-tag">${project.illustration.tag}</span>
        </div>
        <span class="project-status-badge ${project.status.badgeClass}">
          ${pulseHtml}${project.status.label}
        </span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tags">
          ${tagsHtml}
        </div>
        <div class="project-actions">
          ${actionHtml}
        </div>
      </div>
    `;

    container.appendChild(article);
  });
}

/**
 * Setup Project Category Filter
 */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  if (!filterButtons.length) return;

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");
      if (filterValue === "all") {
        renderProjects(portfolioProjects);
      } else {
        const filtered = portfolioProjects.filter(p => p.category === filterValue);
        renderProjects(filtered);
      }
    });
  });
}
