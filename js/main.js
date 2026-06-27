// Dinero Inteligente - JavaScript v2
document.addEventListener('DOMContentLoaded', () => {
  // ===== Mermaid.js =====
  if (document.querySelector('pre.mermaid')) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js';
    script.onload = () => {
      mermaid.initialize({
        startOnLoad: true,
        theme: 'base',
        themeVariables: {
          primaryColor: '#d1fae5',
          primaryTextColor: '#064e3b',
          primaryBorderColor: '#10B981',
          lineColor: '#059669',
          secondaryColor: '#dbeafe',
          tertiaryColor: '#fef3c7',
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px'
        },
        flowchart: { curve: 'basis', padding: 15 }
      });
    };
    document.head.appendChild(script);
  }

  // ===== Smooth scroll =====
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ===== Animate cards on scroll =====
  const cards = document.querySelectorAll('.article-card');
  if (cards.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, i * 100);
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(card);
    });
  }

  // ===== Back to top button =====
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== Current year in footer =====
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
