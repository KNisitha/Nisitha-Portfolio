/**
 * K. NISITHA — PORTFOLIO MAIN SCRIPT
 * Interactions, animations, mobile navigation, typing effect, 
 * contact form validation, and scroll behaviors.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize all interactive modules
  initTypingEffect();
  initNavigation();
  initScrollSpy();
  initBackToTop();
  initContactForm();
  initProfileImageFallback();
  initResumeDownloadVerification();

  // If projects.js is loaded, initialize dynamic projects
  if (typeof renderProjects === "function" && typeof portfolioProjects !== "undefined") {
    renderProjects(portfolioProjects);
    if (typeof initProjectFilters === "function") {
      initProjectFilters();
    }
  }
});

/* --------------------------------------------------------------------------
   1. TYPING ANIMATION (Accessible, No Layout Shifting)
   -------------------------------------------------------------------------- */
function initTypingEffect() {
  const typingElement = document.getElementById("typing-text");
  if (!typingElement) return;

  const roles = [
    "Aspiring Software Developer",
    "B.Tech IT Student",
    "Web Development Enthusiast"
  ];

  // Check prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    typingElement.textContent = roles[0];
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseEnd = 2000;
  const pauseStart = 400;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
      typingElement.textContent = currentRole.substring(0, charIndex);
    } else {
      charIndex++;
      typingElement.textContent = currentRole.substring(0, charIndex);
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
      delay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = pauseStart;
    }

    setTimeout(type, delay);
  }

  type();
}

/* --------------------------------------------------------------------------
   2. STICKY HEADER & MOBILE NAVIGATION
   -------------------------------------------------------------------------- */
function initNavigation() {
  const header = document.getElementById("site-header");
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  // Sticky header shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });

  // Toggle mobile menu
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
      toggleMobileMenu(!isExpanded);
    });

    // Close when clicking any link
    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        toggleMobileMenu(false);
      });
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (
        mobileMenu.classList.contains("open") &&
        !mobileMenu.contains(e.target) &&
        !mobileToggle.contains(e.target)
      ) {
        toggleMobileMenu(false);
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
        toggleMobileMenu(false);
        mobileToggle.focus();
      }
    });
  }

  function toggleMobileMenu(open) {
    if (open) {
      mobileMenu.classList.add("open");
      mobileMenu.setAttribute("aria-hidden", "false");
      mobileToggle.setAttribute("aria-expanded", "true");
    } else {
      mobileMenu.classList.remove("open");
      mobileMenu.setAttribute("aria-hidden", "true");
      mobileToggle.setAttribute("aria-expanded", "false");
    }
  }
}

/* --------------------------------------------------------------------------
   3. SCROLL SPY (Active Section Highlighting)
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll("main section[id]");
  const desktopLinks = document.querySelectorAll(".desktop-nav .nav-link");
  const mobileLinks = document.querySelectorAll(".mobile-nav-links .mobile-link");

  if (!sections.length) return;

  function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 140;
      const sectionId = current.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        desktopLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });

        mobileLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNavigation, { passive: true });
  highlightNavigation(); // Initial run
}

/* --------------------------------------------------------------------------
   4. BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  }, { passive: true });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* --------------------------------------------------------------------------
   5. CONTACT FORM VALIDATION & HONEST MAILTO FALLBACK
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  if (!form || !feedback) return;

  const nameInput = document.getElementById("user-name");
  const emailInput = document.getElementById("user-email");
  const subjectInput = document.getElementById("user-subject");
  const messageInput = document.getElementById("user-message");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const subjectError = document.getElementById("subject-error");
  const messageError = document.getElementById("message-error");

  // Email regex validation
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Live input error clearing
  [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
    if (input) {
      input.addEventListener("input", () => {
        input.classList.remove("input-error");
        const errEl = document.getElementById(`${input.name}-error`);
        if (errEl) errEl.classList.remove("visible");
      });
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      nameInput.classList.add("input-error");
      nameError.classList.add("visible");
      isValid = false;
    } else {
      nameInput.classList.remove("input-error");
      nameError.classList.remove("visible");
    }

    // Validate Email
    if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
      emailInput.classList.add("input-error");
      emailError.classList.add("visible");
      isValid = false;
    } else {
      emailInput.classList.remove("input-error");
      emailError.classList.remove("visible");
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      subjectInput.classList.add("input-error");
      subjectError.classList.add("visible");
      isValid = false;
    } else {
      subjectInput.classList.remove("input-error");
      subjectError.classList.remove("visible");
    }

    // Validate Message (min 10 characters)
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      messageInput.classList.add("input-error");
      messageError.classList.add("visible");
      isValid = false;
    } else {
      messageInput.classList.remove("input-error");
      messageError.classList.remove("visible");
    }

    if (!isValid) return;

    // Format mailto link
    const recipient = "k.nisitha2007@gmail.com";
    const subject = encodeURIComponent(`[Portfolio Contact] ${subjectInput.value.trim()}`);
    const bodyContent = `Hello Nisitha,\n\n${messageInput.value.trim()}\n\n---\nFrom: ${nameInput.value.trim()}\nReply-To: ${emailInput.value.trim()}`;
    const body = encodeURIComponent(bodyContent);

    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Show honest notification
    feedback.className = "form-feedback info";
    feedback.style.display = "block";
    feedback.innerHTML = `
      <p><strong>Opening your email client...</strong></p>
      <p>Your message has been pre-formatted for <strong>${recipient}</strong>. If your email application did not launch automatically, click the button below or copy the message.</p>
      <div style="margin-top: 10px; display: flex; gap: 8px; flex-wrap: wrap;">
        <a href="${mailtoUrl}" class="copy-email-btn" style="background: #3B82F6; color: white;">Open Email App</a>
        <button type="button" id="copy-clipboard-btn" class="copy-email-btn">Copy Details to Clipboard</button>
      </div>
    `;

    // Attempt to open mailto
    window.location.href = mailtoUrl;

    // Clipboard copy handler
    const copyBtn = document.getElementById("copy-clipboard-btn");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        const fullText = `To: ${recipient}\nSubject: [Portfolio Contact] ${subjectInput.value.trim()}\n\n${bodyContent}`;
        navigator.clipboard.writeText(fullText).then(() => {
          copyBtn.textContent = "Copied to Clipboard! ✓";
          setTimeout(() => {
            copyBtn.textContent = "Copy Details to Clipboard";
          }, 3000);
        }).catch(() => {
          copyBtn.textContent = "Please select and copy manually";
        });
      });
    }
  });
}

/* --------------------------------------------------------------------------
   6. PROFILE IMAGE FALLBACK HANDLER
   -------------------------------------------------------------------------- */
function initProfileImageFallback() {
  const profileImg = document.getElementById("profile-img");
  const fallback = document.getElementById("photo-fallback");

  if (!profileImg || !fallback) return;

  profileImg.addEventListener("error", () => {
    profileImg.style.display = "none";
    fallback.style.display = "flex";
  });

  // Verify if already loaded
  if (profileImg.complete && profileImg.naturalHeight === 0) {
    profileImg.style.display = "none";
    fallback.style.display = "flex";
  }
}

/* --------------------------------------------------------------------------
   7. RESUME DOWNLOAD LINK CHECK & VERIFICATION
   -------------------------------------------------------------------------- */
function initResumeDownloadVerification() {
  const resumeBtn = document.getElementById("download-resume-btn");
  if (!resumeBtn) return;

  // Ensure relative path resolves correctly whether served on root or subfolder
  // Primary target is assets/Nisitha_Resume.pdf
  resumeBtn.addEventListener("click", (e) => {
    // If running via file protocol or standard static server, keep default action
    console.log("Downloading resume: Nisitha_Resume.pdf");
  });
}
