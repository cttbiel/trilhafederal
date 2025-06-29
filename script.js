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
      const href = this.getAttribute("href");
      // Só previne o padrão se for âncora interna existente
      if (href && href.startsWith("#")) {
        const targetSection = document.querySelector(href);
        if (targetSection) {
          e.preventDefault();
          const headerHeight = header.offsetHeight;
          const targetPosition = targetSection.offsetTop - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
      // Se não for âncora interna, deixa o comportamento padrão (redireciona)
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

  // Formulário de contato funcional
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      const formData = new FormData(this);

      // Obter dados do formulário
      const nome = formData.get("nome");
      const email = formData.get("email");
      const assunto = formData.get("assunto");
      const mensagem = formData.get("mensagem");

      // Validar dados
      if (!nome || !email || !assunto || !mensagem) {
        showNotification("Por favor, preencha todos os campos.", "error");
        return;
      }

      // Validar email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showNotification("Por favor, insira um email válido.", "error");
        return;
      }

      // Mostrar loading
      submitBtn.textContent = "Enviando...";
      submitBtn.disabled = true;

      // Enviar email usando EmailJS
      emailjs
        .send("service_trilhafederal", "template_contato", {
          to_email: "cttbiel@gmail.com",
          from_name: nome,
          from_email: email,
          subject: `Contato Trilha Federal - ${assunto}`,
          message: mensagem,
          assunto: assunto,
        })
        .then(function (response) {
          console.log("SUCCESS!", response.status, response.text);
          showNotification(
            "Mensagem enviada com sucesso! Entraremos em contato em breve.",
            "success"
          );
          contactForm.reset();
        })
        .catch(function (error) {
          console.log("FAILED...", error);
          showNotification(
            "Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente pelo email.",
            "error"
          );
        })
        .finally(function () {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        });
    });
  }

  // Função para mostrar notificações
  function showNotification(message, type = "info") {
    // Remover notificação anterior se existir
    const existingNotification = document.querySelector(".notification");
    if (existingNotification) {
      existingNotification.remove();
    }

    // Criar nova notificação
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-message">${message}</span>
        <button class="notification-close">&times;</button>
      </div>
    `;

    // Adicionar ao body
    document.body.appendChild(notification);

    // Mostrar notificação
    setTimeout(() => {
      notification.classList.add("show");
    }, 100);

    // Auto-remover após 5 segundos
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove();
        }
      }, 300);
    }, 5000);

    // Fechar ao clicar no X
    const closeBtn = notification.querySelector(".notification-close");
    closeBtn.addEventListener("click", () => {
      notification.classList.remove("show");
      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove();
        }
      }, 300);
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
      // Adicionar classe ativa ao botão clicado
      this.classList.add("active");

      // Filtrar cards
      vestibularCards.forEach((card) => {
        if (
          filter === "todos" ||
          card.getAttribute("data-category") === filter
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Busca em tempo real (se implementado)
  const searchInput = document.querySelector(".search-input");
  if (searchInput) {
    searchInput.addEventListener(
      "input",
      debounce(function () {
        const searchTerm = this.value.toLowerCase();

        vestibularCards.forEach((card) => {
          const title = card.querySelector("h3").textContent.toLowerCase();
          const description = card.querySelector("p").textContent.toLowerCase();

          if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      }, 300)
    );
  }

  // Debounce function
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
