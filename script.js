/* =========================================================
   Deniz Aksoy — Blog & Portfolyo
   script.js — Ortak dinamik işlevler
   Vanilla JS, framework yok.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initNavDropdown();
  initLightbox();
  initBlogFilter();
  initSkillBars();
  initContactForm();
  initShareButtons();
});

/* ---------------------------------------------------------
   1) Mobil Hamburger Menü (slide-in panel)
   --------------------------------------------------------- */
function initMobileNav(){
  const hamburger = document.querySelector('.hamburger');
  const panel = document.querySelector('.mobile-panel');
  const overlay = document.querySelector('.nav-overlay');
  if (!hamburger || !panel || !overlay) return;

  const openMenu = () => {
    hamburger.classList.add('is-open');
    panel.classList.add('is-open');
    overlay.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    hamburger.classList.remove('is-open');
    panel.classList.remove('is-open');
    overlay.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', () => {
    const isOpen = panel.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  panel.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

/* ---------------------------------------------------------
   1b) Üst Menü Açılır Alt Menüsü (ISTQB Foundation)
   Hover zaten CSS ile çalışır; bu fonksiyon dokunmatik/klavye
   kullanıcıları için tıklama ile aç/kapa desteği ekler.
   --------------------------------------------------------- */
function initNavDropdown(){
  const dropdowns = document.querySelectorAll('.nav-item-dropdown');
  if (!dropdowns.length) return;

  dropdowns.forEach(dd => {
    const trigger = dd.querySelector('.dropdown-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dd.classList.contains('is-open');
      dropdowns.forEach(other => {
        other.classList.remove('is-open');
        other.querySelector('.dropdown-trigger')?.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen){
        dd.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', () => {
    dropdowns.forEach(dd => {
      dd.classList.remove('is-open');
      dd.querySelector('.dropdown-trigger')?.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape'){
      dropdowns.forEach(dd => dd.classList.remove('is-open'));
    }
  });
}

/* ---------------------------------------------------------
   2) Lightbox (Modal) — görsellere tıklayınca tam ekran açılış
   Tetikleyici: [data-lightbox] özniteliğine sahip herhangi bir <img>
   veya içinde img barındıran eleman.
   --------------------------------------------------------- */
function initLightbox(){
  const triggers = document.querySelectorAll('[data-lightbox]');
  if (!triggers.length) return;

  // Modal DOM'unu bir kere oluşturup body'e ekliyoruz
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Kapat">&times;</button>
    <img src="" alt="">
    <div class="lightbox-caption"></div>
  `;
  document.body.appendChild(lightbox);

  const imgEl = lightbox.querySelector('img');
  const captionEl = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  const openLightbox = (src, alt, caption) => {
    imgEl.src = src;
    imgEl.alt = alt || '';
    captionEl.textContent = caption || alt || '';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    // Kapanış animasyonu bittikten sonra src'yi temizle
    setTimeout(() => { if (!lightbox.classList.contains('is-open')) imgEl.src = ''; }, 300);
  };

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const img = trigger.tagName === 'IMG' ? trigger : trigger.querySelector('img');
      if (!img) return;
      const fullSrc = trigger.getAttribute('data-full') || img.src;
      const caption = trigger.getAttribute('data-caption') || img.alt;
      openLightbox(fullSrc, img.alt, caption);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);

  // Arka plana (görselin dışına) tıklayınca kapat
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // ESC tuşu ile kapat
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
  });
}

/* ---------------------------------------------------------
   3) Blog: Arama + Kategori Filtreleme
   --------------------------------------------------------- */
function initBlogFilter(){
  const searchInput = document.querySelector('#blog-search');
  const filterButtons = document.querySelectorAll('.filter-tags button');
  const cards = document.querySelectorAll('[data-post-card]');
  const noResults = document.querySelector('.no-results');
  if (!cards.length) return;

  let activeCategory = 'all';
  let searchTerm = '';

  const applyFilters = () => {
    let visibleCount = 0;
    cards.forEach(card => {
      const category = card.getAttribute('data-category') || '';
      const title = (card.getAttribute('data-title') || '').toLowerCase();
      const excerpt = (card.getAttribute('data-excerpt') || '').toLowerCase();

      const matchesCategory = activeCategory === 'all' || category === activeCategory;
      const matchesSearch = !searchTerm || title.includes(searchTerm) || excerpt.includes(searchTerm);

      const visible = matchesCategory && matchesSearch;
      card.style.display = visible ? '' : 'none';
      if (visible) visibleCount++;
    });

    if (noResults) noResults.classList.toggle('show', visibleCount === 0);
  };

  if (searchInput){
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter') || 'all';
      applyFilters();
    });
  });
}

/* ---------------------------------------------------------
   4) Hakkımda: Beceri çubuklarını görünür olunca doldur
   --------------------------------------------------------- */
function initSkillBars(){
  const bars = document.querySelectorAll('.skill-bar span');
  if (!bars.length) return;

  if (!('IntersectionObserver' in window)){
    bars.forEach(bar => { bar.style.width = (bar.getAttribute('data-percent') || 0) + '%'; });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const bar = entry.target;
        bar.style.width = (bar.getAttribute('data-percent') || 0) + '%';
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.4 });

  bars.forEach(bar => observer.observe(bar));
}

/* ---------------------------------------------------------
   5) İletişim Formu: Basit doğrulama + sahte gönderim
   --------------------------------------------------------- */
function initContactForm(){
  const form = document.querySelector('#contact-form');
  if (!form) return;

  const status = form.querySelector('.form-status');

  const setError = (group, message) => {
    group.classList.add('has-error');
    const errEl = group.querySelector('.form-error');
    if (errEl) errEl.textContent = message;
  };

  const clearError = (group) => {
    group.classList.remove('has-error');
  };

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let hasError = false;

    const fields = [
      { name: 'name', validate: (v) => v.trim().length >= 2, message: 'Lütfen adınızı girin (en az 2 karakter).' },
      { name: 'email', validate: (v) => isValidEmail(v), message: 'Lütfen geçerli bir e-posta adresi girin.' },
      { name: 'message', validate: (v) => v.trim().length >= 10, message: 'Mesajınız en az 10 karakter olmalı.' },
    ];

    fields.forEach(field => {
      const input = form.querySelector(`[name="${field.name}"]`);
      if (!input) return;
      const group = input.closest('.form-group');
      if (!field.validate(input.value)){
        setError(group, field.message);
        hasError = true;
      } else {
        clearError(group);
      }
    });

    if (hasError){
      if (status){ status.classList.remove('show'); }
      return;
    }

    // Backend olmadığı için gönderimi simüle ediyoruz
    if (status){
      status.textContent = 'Mesajınız için teşekkürler! En kısa sürede size geri döneceğim.';
      status.classList.add('show');
    }
    form.reset();
  });

  // Kullanıcı yazmaya başladığında hatayı temizle
  form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', () => {
      const group = input.closest('.form-group');
      if (group) clearError(group);
    });
  });
}

/* ---------------------------------------------------------
   6) Paylaşım Butonları (yazi-detay.html)
   --------------------------------------------------------- */
function initShareButtons(){
  const shareRow = document.querySelector('[data-share]');
  if (!shareRow) return;

  const pageUrl = window.location.href;
  const pageTitle = document.title;

  const twitterBtn = shareRow.querySelector('[data-share="twitter"]');
  const linkedinBtn = shareRow.querySelector('[data-share="linkedin"]');
  const whatsappBtn = shareRow.querySelector('[data-share="whatsapp"]');
  const copyBtn = shareRow.querySelector('[data-share="copy"]');
  const toast = document.querySelector('.copy-toast');

  if (twitterBtn){
    twitterBtn.addEventListener('click', () => {
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(pageTitle)}&url=${encodeURIComponent(pageUrl)}`;
      window.open(url, '_blank', 'noopener,width=600,height=500');
    });
  }

  if (linkedinBtn){
    linkedinBtn.addEventListener('click', () => {
      const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
      window.open(url, '_blank', 'noopener,width=600,height=500');
    });
  }

  if (whatsappBtn){
    whatsappBtn.addEventListener('click', () => {
      const url = `https://wa.me/?text=${encodeURIComponent(pageTitle + ' — ' + pageUrl)}`;
      window.open(url, '_blank', 'noopener,width=600,height=500');
    });
  }

  if (copyBtn){
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(pageUrl);
      } catch (err) {
        // Panoya erişilemezse eski yöntem
        const tmp = document.createElement('input');
        tmp.value = pageUrl;
        document.body.appendChild(tmp);
        tmp.select();
        document.execCommand('copy');
        document.body.removeChild(tmp);
      }
      if (toast){
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2200);
      }
    });
  }
}
