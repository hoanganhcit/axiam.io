tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00e5ff',
          cyanHover: '#33ebff',
          cyanDark: '#0891b2',
          electric: '#06b6d4',
          purple: '#7928ca',
          violet: '#6366f1',
          dark: '#050b14',
          card: '#081220',
          surface: '#070d18',
          surfaceAlt: '#0b1426',
          border: '#162338',
          muted: '#64748b',
          accentGlow: 'rgba(0, 229, 255, 0.15)'
        },
        'border-active': 'rgba(0, 229, 255, 0.4)',
        'border-glass': 'rgba(255, 255, 255, 0.08)',
        'primary-container': '#00e5ff',
        'outline-variant': '#3b494c',
        tertiary: '#f3e8ff',
        'tertiary-container': '#dbc7ff',
        'on-background': '#d4e4fa',
        background: '#051424',
        'status-warning': '#F59E0B',
        'inverse-on-surface': '#233143',
        'secondary-container': '#0566d9',
        'error-container': '#93000a',
        'on-error-container': '#ffdad6',
        'inverse-surface': '#d4e4fa',
        'on-tertiary-fixed': '#25005a',
        'surface-container-high': '#1c2b3c',
        'status-success': '#10B981',
        'surface-container': '#122131',
        'on-primary-container': '#00626e',
        'surface-bright': '#2c3a4c',
        'bg-surface': '#111827',
        surface: '#051424',
        'on-secondary-container': '#e6ecff',
        'inverse-primary': '#006875',
        'on-surface': '#d4e4fa',
        'bg-obsidian': '#080C14',
        'on-secondary': '#002e6a',
        'status-error': '#EF4444',
        'bg-canvas': '#0B0F19',
        'surface-container-low': '#0d1c2d',
        'surface-container-lowest': '#010f1f',
        'tertiary-fixed': '#eaddff',
        'on-secondary-fixed': '#001a42',
        primary: '#c3f5ff',
        'bg-surface-elevated': '#1E293B',
        'tertiary-fixed-dim': '#d2bbff',
        'on-tertiary-container': '#6e25de',
        'on-primary-fixed-variant': '#004f58',
        'on-surface-variant': '#bac9cc',
        'secondary-fixed': '#d8e2ff',
        error: '#ffb4ab',
        'on-primary': '#00363d',
        outline: '#849396',
        secondary: '#adc6ff',
        'on-tertiary': '#3f008e',
        'on-error': '#690005',
        'surface-tint': '#00daf3',
        'on-tertiary-fixed-variant': '#5a00c6',
        'surface-variant': '#273647',
        'primary-fixed-dim': '#00daf3',
        'primary-fixed': '#9cf0ff',
        'surface-container-highest': '#273647',
        'on-primary-fixed': '#001f24',
        'secondary-fixed-dim': '#adc6ff',
        'on-secondary-fixed-variant': '#004395',
        'surface-dim': '#051424'
      },
        boxShadow: {
          'cyan-glow': '0 0 25px -5px rgba(0, 240, 255, 0.25)',
          'cyan-button': '0 0 20px -3px rgba(0, 240, 255, 0.45)',
          'card-glass': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.05), 0 10px 25px -5px rgba(0, 0, 0, 0.5)'
        },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px'
      },
      spacing: {
        'space-lg': '1.5rem',
        'space-2xl': '4rem',
        gutter: '1.5rem',
        'space-sm': '0.5rem',
        'space-xs': '0.25rem',
        'margin-lg': '5rem',
        'margin-md': '2.5rem',
        margin: '1.25rem',
        'gutter-lg': '2rem',
        'space-md': '1rem',
        'space-xl': '2.5rem'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        'code-telemetry': ['JetBrains Mono', 'monospace'],
        'headline-sm': ['Inter', 'sans-serif'],
        'display-mobile': ['Inter', 'sans-serif'],
        'label-caps': ['Inter', 'sans-serif'],
        'body-sm': ['Inter', 'sans-serif'],
        'headline-lg': ['Inter', 'sans-serif'],
        'headline-lg-mobile': ['Inter', 'sans-serif'],
        'label-md': ['Inter', 'sans-serif'],
        'body-md': ['Inter', 'sans-serif'],
        'body-lg': ['Inter', 'sans-serif'],
        'headline-md': ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif']
      },
      fontSize: {
        'code-telemetry': ['12px', { lineHeight: '16px', letterSpacing: '0.04em', fontWeight: '500' }],
        'headline-sm': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'display-mobile': ['36px', { lineHeight: '42px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'label-caps': ['12px', { lineHeight: '16px', letterSpacing: '0.12em', fontWeight: '700' }],
        'body-sm': ['13px', { lineHeight: '20px', fontWeight: '400' }],
        'headline-lg': ['40px', { lineHeight: '48px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg-mobile': ['28px', { lineHeight: '36px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'label-md': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'body-md': ['15px', { lineHeight: '24px', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'headline-md': ['28px', { lineHeight: '36px', letterSpacing: '-0.01em', fontWeight: '600' }],
        display: ['56px', { lineHeight: '64px', letterSpacing: '-0.03em', fontWeight: '700' }]
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'scan-line': 'scan 3s ease-in-out infinite alternate',
        'radar': 'radar 6s linear infinite'
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 0.35, transform: 'scale(1)' },
          '50%': { opacity: 0.75, transform: 'scale(1.05)' }
        },
        scan: {
          '0%': { transform: 'translateY(-80px)' },
          '100%': { transform: 'translateY(80px)' }
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      }
    }
  }
};

window.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('js-ready');
  initializeSectionFadeIn();
  initializePricingCalculator();
  initializePublicationFilters();
  initializePublicationModal();
});

function initializeSectionFadeIn() {
  const animatedElements = [...document.querySelectorAll('section > div')];

  if (!animatedElements.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  animatedElements.forEach((element, index) => {
    element.classList.add('fade-in-up');
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 80}ms`;
  });

  const observer = new IntersectionObserver((entries, sectionObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('is-visible');
      sectionObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

  animatedElements.forEach((element) => observer.observe(element));
}

function initializePublicationModal() {
  const publicationRoot = document.querySelector('main');

  if (!publicationRoot || !document.querySelector('[data-purpose="publication-cards-grid"]')) {
    return;
  }

  const modal = document.createElement('div');
  modal.className = 'publication-modal hidden';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'publication-modal-title');
  modal.innerHTML = `
    <div class="publication-modal__backdrop" data-modal-close></div>
    <article class="publication-modal__panel">
      <header class="publication-modal__header">
        <div class="publication-modal__meta">
          <span id="publication-modal-type" class="publication-modal__type"></span>
          <span id="publication-modal-date"></span>
        </div>
        <button type="button" class="publication-modal__close" aria-label="Close article" data-modal-close>
          <span aria-hidden="true">&times;</span>
        </button>
      </header>
      <div class="publication-modal__content">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug" id="publication-modal-title"></h2>
        <p id="publication-modal-author" class="publication-modal__author"></p>
        <div id="publication-modal-tags" class="publication-modal__tags"></div>
        <div class="publication-modal__body">
          <h3>The Latest Threat Intelligence</h3>
          <p>Security teams are facing a rapidly changing threat landscape where stolen identity data can be reused at scale. This publication examines the incident, the attack path, and the controls organizations can put in place to reduce exposure.</p>
          <p>The incident highlights why identity must be verified at the point of access, not only when credentials are created. Stronger, human-centered authentication can limit the value of stolen data and help organizations respond with confidence.</p>
          <blockquote>Identity is the first line of defense when trust is under attack.</blockquote>
          <h3>What organizations should know</h3>
          <p>Review access policies, monitor unusual sessions, and keep identity verification close to every sensitive action. The full article will include additional findings, timelines, and practical recommendations.</p>
        </div>
      </div>
    </article>
  `;
  document.body.append(modal);

  const typeElement = modal.querySelector('#publication-modal-type');
  const dateElement = modal.querySelector('#publication-modal-date');
  const titleElement = modal.querySelector('#publication-modal-title');
  const authorElement = modal.querySelector('#publication-modal-author');
  const tagsElement = modal.querySelector('#publication-modal-tags');

  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.classList.remove('publication-modal-open');
  };

  const openModal = (source) => {
    const card = source.closest('article');
    const title = card?.querySelector('h2, h3') || source.closest('main')?.querySelector('h2');
    const type = card?.querySelector('div.flex.items-center span');
    const date = type?.nextElementSibling;
    const author = card?.querySelector('p.text-xs') || source.closest('main')?.querySelector('p.text-slate-500');
    const tags = card ? [...card.querySelectorAll('div.flex.flex-wrap span')] : [];

    titleElement.textContent = title?.textContent.trim() || 'Publication article';
    typeElement.textContent = type?.textContent.trim() || 'White paper';
    dateElement.textContent = date?.textContent.trim() || 'Jan 08, 2025';
    authorElement.textContent = author?.textContent.trim() || 'Axiam Research Team';
    tagsElement.replaceChildren(...tags.slice(0, 6).map((tag) => {
      const tagElement = document.createElement('span');
      tagElement.textContent = tag.textContent.trim();
      return tagElement;
    }));

    modal.classList.remove('hidden');
    document.body.classList.add('publication-modal-open');
    modal.querySelector('.publication-modal__close').focus();
  };

  publicationRoot.addEventListener('click', (event) => {
    const trigger = event.target.closest('a, button');
    if (!trigger || !/read\s+article/i.test(trigger.textContent)) {
      return;
    }

    event.preventDefault();
    openModal(trigger);
  });

  modal.addEventListener('click', (event) => {
    if (event.target.closest('[data-modal-close]')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

function initializePublicationFilters() {
  const controls = document.querySelector('[data-purpose="filter-controls"]');
  const grid = document.querySelector('[data-purpose="publication-cards-grid"]');

  if (!controls || !grid) {
    return;
  }

  const filterButtons = [...controls.querySelectorAll('[data-filter]')];
  const searchInput = controls.querySelector('#publication-search');
  const cards = [...grid.querySelectorAll(':scope > article')];
  let activeFilter = 'all';

  const emptyState = document.createElement('p');
  emptyState.className = 'hidden md:col-span-2 rounded-xl border border-dashed border-slate-700 px-6 py-12 text-center text-slate-400';
  emptyState.textContent = 'No publications match your filters.';
  grid.append(emptyState);

  const updateFilterState = () => {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    let visibleCount = 0;

    cards.forEach((card) => {
      const type = card.querySelector('div.flex.items-center span')?.textContent.trim().toLowerCase() || '';
      const content = card.textContent.toLowerCase();
      const matchesType = activeFilter === 'all' || type === activeFilter;
      const matchesSearch = !query || content.includes(query);
      const isVisible = matchesType && matchesSearch;

      card.classList.toggle('hidden', !isVisible);
      visibleCount += isVisible ? 1 : 0;
    });

    emptyState.classList.toggle('hidden', visibleCount > 0);
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter.toLowerCase();
      filterButtons.forEach((filterButton) => {
        const isActive = filterButton === button;
        filterButton.setAttribute('aria-pressed', String(isActive));
        filterButton.classList.toggle('bg-[#0e3b5e]', isActive);
        filterButton.classList.toggle('text-[#00e5ff]', isActive);
        filterButton.classList.toggle('border-[#00e5ff]/30', isActive);
        filterButton.classList.toggle('shadow-sm', isActive);
        filterButton.classList.toggle('font-semibold', isActive);
        filterButton.classList.toggle('text-slate-400', !isActive);
      });
      updateFilterState();
    });
  });

  searchInput?.addEventListener('input', updateFilterState);
  updateFilterState();
}

function initializePricingCalculator() {
  const slider = document.getElementById('mau-slider');

  if (!slider) {
    return;
  }

  const mauDisplay = document.getElementById('mau-display');
  const pricePerMau = document.getElementById('price-per-mau');
  const estimatedMonthly = document.getElementById('est-monthly');
  const tierName = document.getElementById('tier-name');
  const tags = {
    free: document.getElementById('tag-free'),
    payg: document.getElementById('tag-payg'),
    growth: document.getElementById('tag-growth'),
    scale: document.getElementById('tag-scale')
  };

  const setActiveTag = (activeTag) => {
    Object.values(tags).forEach((tag) => {
      tag.className = 'px-2.5 py-1 rounded-md bg-[#0d1e38] text-slate-300 border border-slate-700/60 font-medium transition-colors';
    });
    activeTag.className = 'px-2.5 py-1 rounded-md bg-cyan-950/70 text-cyan-200 border border-cyan-400 font-semibold shadow-[0_0_12px_rgba(0,229,255,0.2)] transition-colors';
  };

  const updateCalculator = () => {
    const value = Number.parseInt(slider.value, 10);
    let unitPrice;
    let tier;
    let calculatedTotal;
    let activeTag;

    if (value <= 5000) {
      unitPrice = 0;
      tier = 'Free';
      calculatedTotal = 0;
      activeTag = tags.free;
    } else if (value <= 50000) {
      unitPrice = 0.05;
      tier = 'Pay-as-you-go';
      calculatedTotal = (value - 5000) * unitPrice;
      activeTag = tags.payg;
    } else if (value <= 200000) {
      unitPrice = 0.04;
      tier = 'Growth';
      calculatedTotal = (45000 * 0.05) + ((value - 50000) * unitPrice);
      activeTag = tags.growth;
    } else {
      unitPrice = 0.03;
      tier = 'Scale';
      calculatedTotal = (45000 * 0.05) + (150000 * 0.04) + ((value - 200000) * unitPrice);
      activeTag = tags.scale;
    }

    mauDisplay.textContent = value.toLocaleString();
    pricePerMau.textContent = `$${unitPrice.toFixed(2)}`;
    estimatedMonthly.textContent = `$${Math.round(calculatedTotal).toLocaleString()}`;
    tierName.textContent = tier;
    setActiveTag(activeTag);

    const percentage = ((value - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.background = `linear-gradient(to right, #00e5ff 0%, #00e5ff ${percentage}%, #1e293b ${percentage}%, #1e293b 100%)`;
  };

  slider.addEventListener('input', updateCalculator);
  updateCalculator();
}
