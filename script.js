document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(".feature-card, .program-card, .stat-box, .testimonial, .price-card, .story-card, .timeline-item, .member-card, .class-card, .faq-item");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => {
    item.classList.add("reveal");
    observer.observe(item);
  });

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const button = form.querySelector("button[type='submit']");
      if (!button) return;

      const originalText = button.textContent;
      button.textContent = "Submitted";
      button.disabled = true;

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        form.reset();
      }, 1800);
    });
  }

  const handleParallax = () => {
    const offset = window.scrollY || window.pageYOffset;
    document.documentElement.style.setProperty("--scrollY", `${offset}px`);
  };

  const handleMouse = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 28;
    const y = (e.clientY / window.innerHeight - 0.5) * 28;
    document.documentElement.style.setProperty("--mouseX", `${x}px`);
    document.documentElement.style.setProperty("--mouseY", `${y}px`);
  };

  window.addEventListener("scroll", handleParallax, { passive: true });
  window.addEventListener("mousemove", handleMouse, { passive: true });
  handleParallax();
});