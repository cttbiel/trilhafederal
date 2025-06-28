// Trilha Federal - JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Elementos do DOM
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const header = document.querySelector(".header");

  // Menu mobile toggle
  if (hamburger) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // Fechar menu ao clicar em um link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Header scroll effect
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Smooth scroll para links internos
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Animação de entrada dos elementos
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observar elementos para animação
  const animateElements = document.querySelectorAll(
    ".about-card, .vestibular-card, .recurso-card, .section-header"
  );
  animateElements.forEach((el) => {
    observer.observe(el);
  });

  // Contador animado para estatísticas
  const stats = document.querySelectorAll(".stat-number");
  const statsObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          statsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  stats.forEach((stat) => {
    statsObserver.observe(stat);
  });

  function animateCounter(element) {
    const target = parseInt(element.textContent.replace(/\D/g, ""));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current) + "+";
    }, 16);
  }

  // Parallax effect para o hero
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero");
    const heroImage = document.querySelector(".hero-image");

    if (hero && heroImage) {
      const rate = scrolled * -0.5;
      heroImage.style.transform = `translateY(${rate}px)`;
    }
  });

  // Tooltip para botões
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Loading animation
  window.addEventListener("load", function () {
    document.body.classList.add("loaded");
  });

  // Formulário de contato (se existir)
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simular envio do formulário
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      submitBtn.textContent = "Enviando...";
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = "Enviado!";
        submitBtn.style.background = "var(--primary-green)";

        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = "";
          this.reset();
        }, 2000);
      }, 1500);
    });
  }

  // Modal para informações detalhadas (se implementado)
  const modalTriggers = document.querySelectorAll("[data-modal]");
  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      const modalId = this.getAttribute("data-modal");
      const modal = document.getElementById(modalId);

      if (modal) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  // Fechar modal
  const modalCloses = document.querySelectorAll(".modal-close, .modal-overlay");
  modalCloses.forEach((close) => {
    close.addEventListener("click", function () {
      const modal = this.closest(".modal");
      if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });

  // Filtros para vestibulares (se implementado)
  const filterButtons = document.querySelectorAll(".filter-btn");
  const vestibularCards = document.querySelectorAll(".vestibular-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");

      // Remover classe ativa de todos os botões
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Filtrar cards
      vestibularCards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "block";
          card.classList.add("animate-in");
        } else {
          card.style.display = "none";
          card.classList.remove("animate-in");
        }
      });
    });
  });

  // Search functionality (se implementado)
  const searchInput = document.querySelector("#search-input");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase();
      const searchableElements = document.querySelectorAll("[data-search]");

      searchableElements.forEach((element) => {
        const text = element.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      });
    });
  }

  // Newsletter signup (se implementado)
  const newsletterForm = document.querySelector("#newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = this.querySelector('input[type="email"]').value;
      const submitBtn = this.querySelector('button[type="submit"]');

      if (email) {
        submitBtn.textContent = "Inscrito!";
        submitBtn.style.background = "var(--primary-green)";

        setTimeout(() => {
          submitBtn.textContent = "Inscrever-se";
          submitBtn.style.background = "";
          this.reset();
        }, 2000);
      }
    });
  }

  // Lazy loading para imagens
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute("data-src");
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => {
    imageObserver.observe(img);
  });

  // Back to top button
  const backToTopBtn = document.createElement("button");
  backToTopBtn.innerHTML = "↑";
  backToTopBtn.className = "back-to-top";
  backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-green);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 20px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: var(--shadow-md);
    `;

  document.body.appendChild(backToTopBtn);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopBtn.style.opacity = "1";
      backToTopBtn.style.visibility = "visible";
    } else {
      backToTopBtn.style.opacity = "0";
      backToTopBtn.style.visibility = "hidden";
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      const activeModal = document.querySelector(".modal.active");
      if (activeModal) {
        activeModal.classList.remove("active");
        document.body.style.overflow = "";
      }
    }
  });

  // Performance optimization - Debounce scroll events
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Aplicar debounce aos eventos de scroll
  const debouncedScrollHandler = debounce(function () {
    // Scroll handlers aqui
  }, 16);

  window.addEventListener("scroll", debouncedScrollHandler);

  console.log("🚀 Trilha Federal - Site carregado com sucesso!");
  console.log(
    "📚 Democratizando o acesso à informação sobre vestibulares federais"
  );
});
