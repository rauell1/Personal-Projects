// Portfolio.js — defensive, HTML-matching version
(function () {
  'use strict';

  // Helpers
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));
  const getByIds = (...ids) => ids.map(id => document.getElementById(id)).find(Boolean) || null;

  // Wait for DOM
  window.addEventListener('DOMContentLoaded', () => {
    // ---------- REMOVE LOADER (if present) ----------
    const loader = document.getElementById('loader');
    if (loader) {
      // fade then remove
      loader.style.transition = 'opacity 0.45s ease';
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 500);
    }

    // ---------- PROGRESS BAR (raf) ----------
    const progressBar = document.getElementById('progressBar');
    let lastScrollY = window.scrollY;
    let ticking = false;
    function updateProgress() {
      if (!progressBar) return;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight || 1;
      const pct = Math.max(0, Math.min(100, (lastScrollY / docHeight) * 100));
      progressBar.style.width = pct + '%';
      ticking = false;
    }
    window.addEventListener('scroll', () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    }, { passive: true });
    // initial
    updateProgress();

    // ---------- CURSOR (optional) ----------
    // IDs in your HTML: id="cursor" and id="cursorFollower"
    const cursor = document.getElementById('cursor');
    const follower = getByIds('cursorFollower', 'cursor-follower');
    if (cursor && follower) {
      let mx = 0, my = 0, fx = 0, fy = 0;
      document.addEventListener('mousemove', (e) => {
        mx = e.clientX; my = e.clientY;
        cursor.style.left = mx + 'px';
        cursor.style.top = my + 'px';
      }, { passive: true });

      (function loop() {
        fx += (mx - fx) * 0.12;
        fy += (my - fy) * 0.12;
        follower.style.left = fx + 'px';
        follower.style.top = fy + 'px';
        requestAnimationFrame(loop);
      })();

      // hover interactions
      $$('a, button, .card').forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.style.transform = 'scale(1.4)';
          follower.style.transform = 'scale(1.25)';
        });
        el.addEventListener('mouseleave', () => {
          cursor.style.transform = 'scale(1)';
          follower.style.transform = 'scale(1)';
        });
      });
    } else {
      // not fatal — just log if someone expects cursor
      // console.info('Custom cursor elements not found — skipping cursor init.');
    }

    // ---------- PARTICLES ----------
    const particlesEl = document.getElementById('particles');
    if (particlesEl) {
      // create a reasonable number depending on width
      const count = Math.min(36, Math.max(8, Math.floor(window.innerWidth / 90)));
      for (let i = 0; i < count; i++) {
        const d = document.createElement('div');
        d.className = 'particle';
        d.style.left = Math.random() * 100 + '%';
        d.style.top = (Math.random() * 100) + '%';
        d.style.animationDelay = (Math.random() * 12) + 's';
        d.style.animationDuration = (8 + Math.random() * 10) + 's';
        particlesEl.appendChild(d);
      }
    }

    // ---------- REVEAL ON SCROLL (IntersectionObserver) ----------
    const reveals = $$('.reveal');
    if (reveals.length) {
      const io = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active', 'visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      reveals.forEach(r => io.observe(r));
    }

    // ---------- RADAR CHART (Chart.js) ----------
    const skillsCanvas = document.getElementById('skillsChart');
    if (skillsCanvas) {
      if (typeof Chart === 'undefined') {
        console.warn('Chart.js not loaded. Radar chart skipped.');
      } else {
        try {
          const ctx = skillsCanvas.getContext('2d');
          // set canvas parent height to keep responsive aspect
          skillsCanvas.parentElement.style.minHeight = '360px';
          new Chart(ctx, {
            type: 'radar',
            data: {
              labels: ['Solar PV Design', 'EV Charging Systems', 'Sales Strategy', 'Policy Advocacy', 'Project Management', 'Community Engagement'],
              datasets: [{
                label: "Roy's Skills",
                data: [9, 8, 9, 7, 8, 10],
                backgroundColor: 'rgba(0,121,107,0.18)',
                borderColor: '#00796b',
                borderWidth: 3,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#00796b'
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                r: {
                  angleLines: { color: 'rgba(0,0,0,0.06)' },
                  grid: { color: 'rgba(0,0,0,0.03)' },
                  ticks: { display: false, max: 10 },
                  pointLabels: { color: '#102027', font: { size: 12 } }
                }
              },
              plugins: { legend: { display: false } }
            }
          });
        } catch (err) {
          console.warn('Radar chart init failed:', err);
        }
      }
    }

    // ---------- CONTACT FORM (Formspree) ----------
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (ev) => {
        ev.preventDefault();
        // Basic client-side validation (HTML required attributes already)
        const btn = contactForm.querySelector('button[type="submit"]') || null;
        if (btn) {
          btn.disabled = true;
          const origText = btn.textContent;
          btn.textContent = 'Sending...';
        }

        // submit via fetch to formspree (your action must be valid)
        const action = contactForm.getAttribute('action') || '';
        const formData = new FormData(contactForm);

        if (!action) {
          // No action provided — fallback to UX-only: show message and reset
          setTimeout(() => {
            alert('Message simulated (no form action set). Replace form action with Formspree or backend endpoint.');
            contactForm.reset();
            if (btn) { btn.disabled = false; btn.textContent = origText; }
          }, 700);
          return;
        }

        fetch(action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        }).then(resp => {
          if (resp.ok) {
            alert('Thanks — message sent!');
            contactForm.reset();
          } else {
            resp.json().then(data => {
              console.warn('Formspree error response', data);
              alert('Submission error. Try again later.');
            }).catch(() => alert('Submission error. Try again later.'));
          }
        }).catch(() => {
          alert('Network error. Please try again.');
        }).finally(() => {
          if (btn) { btn.disabled = false; btn.textContent = origText; }
        });
      });
    }

    // ---------- CV DOWNLOAD VISUAL FEEDBACK ----------
    const dl = document.getElementById('downloadBtn');
    if (dl) {
      dl.addEventListener('click', (e) => {
        // let the <a download> handle file download; just add a tiny animation
        dl.style.transform = 'scale(0.96)';
        setTimeout(() => dl.style.transform = '', 140);
      });
    }

    // ---------- SMOOTH SCROLL FOR NAV ----------
    document.querySelectorAll('nav a[href^="#"]').forEach(a => {
      a.addEventListener('click', (ev) => {
        ev.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // ---------- BACK TO TOP BUTTON ----------
    const backBtn = document.getElementById('backToTop');
    if (backBtn) {
      const toggle = () => {
        backBtn.style.display = window.scrollY > 600 ? 'block' : 'none';
      };
      window.addEventListener('scroll', toggle, { passive: true });
      toggle();
      backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // ---------- PARALLAX: light, only if hero present ----------
    const hero = document.querySelector('.hero');
    const overlay = document.querySelector('.overlay');
    if (hero && overlay) {
      window.addEventListener('scroll', () => {
        const s = window.pageYOffset || 0;
        hero.style.transform = `translateY(${s * 0.15}px)`;
        overlay.style.transform = `translateY(${s * 0.08}px)`;
      }, { passive: true });
    }

    // ---------- MOBILE OPTIMIZATIONS ----------
    const mobileOptimize = () => {
      if (window.matchMedia('(max-width:768px)').matches) {
        const vid = document.querySelector('.bg-video');
        if (vid && typeof vid.pause === 'function') { vid.pause(); vid.style.display = 'none'; }
        // reduce particles
        const parts = $$('.particle');
        parts.forEach((p, i) => { if (i > 6) p.remove(); });
      }
    };
    mobileOptimize();
    window.addEventListener('resize', mobileOptimize, { passive: true });

    // small accessibility: keyboard 'c' -> contact
    document.addEventListener('keydown', (e) => {
      if (e.key && e.key.toLowerCase() === 'c' && !e.ctrlKey && !e.metaKey) {
        const c = document.getElementById('contact');
        if (c) c.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    // done DOMContentLoaded
  }); // end DOMContentLoaded

})(); // end IIFE
