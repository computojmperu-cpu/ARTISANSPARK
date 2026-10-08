/**
 * @license
 * CREAMARKET - Lógica Interactiva Nativa (Vanilla JavaScript ES6+)
 * "Donde tu creatividad se convierte en oportunidad"
 */

// ==========================================================================
// 1. CONFIGURACIÓN Y DATOS SEMILLA (LOCALSTORAGE SEED DATA)
// ==========================================================================
const DB_STORAGE_KEY = 'creamarket_db_v1';
const SESSION_STORAGE_KEY = 'creamarket_session_v1';

// Imágenes autogeneradas de alta calidad
const ASSET_IMAGES = {
  hero: '/src/assets/images/creamarket_hero_maker_1791492222359.jpg',
  ceramicMug: '/src/assets/images/ceramic_handpainted_mug_1791492232427.jpg',
  toteBag: '/src/assets/images/canvas_totebag_art_1791492242315.jpg',
  cupcakes: '/src/assets/images/artisan_cupcakes_box_1791492251068.jpg'
};

const SEED_DATA = {
  categories: [
    { id: 'cat-1', name: 'Arte', desc: 'Pintura, escultura y obras plásticas', active: true, icon: '🎨' },
    { id: 'cat-2', name: 'Decoración', desc: 'Adornos y ambientación para el hogar o aula', active: true, icon: '🏺' },
    { id: 'cat-3', name: 'Manualidades', desc: 'Creaciones elaboradas con técnicas manuales', active: true, icon: '✂️' },
    { id: 'cat-4', name: 'Diseño digital', desc: 'Ilustración digital, papelería y gráficos', active: true, icon: '💻' },
    { id: 'cat-5', name: 'Regalos', desc: 'Detalles y recuerdos creativos', active: true, icon: '🎁' },
    { id: 'cat-6', name: 'Fotografía', desc: 'Sesiones de fotos y retratos para proyectos', active: true, icon: '📷' },
    { id: 'cat-7', name: 'Repostería', desc: 'Postres, cupcakes y delicias horneadas', active: true, icon: '🧁' },
    { id: 'cat-8', name: 'Personalización', desc: 'Artículos con nombres, frases y diseños a medida', active: true, icon: '✨' },
    { id: 'cat-9', name: 'Artesanía', desc: 'Trabajos en madera, arcilla y fibras naturales', active: true, icon: '🪵' },
    { id: 'cat-10', name: 'Arte creativo', desc: 'Talleres, sesiones formativas y asesorías', active: true, icon: '🖌️' },
    { id: 'cat-11', name: 'Otros', desc: 'Otras ideas y proyectos innovadores', active: true, icon: '💡' }
  ],

  users: [
    {
      id: 'user-client-1',
      name: 'Camila Torres',
      email: 'camila@colegio.edu',
      password: '123',
      role: 'cliente',
      avatar: 'CT',
      status: 'activo',
      phone: '987-111-222'
    },
    {
      id: 'user-student-1',
      name: 'Mateo Rivas',
      email: 'mateo@colegio.edu',
      password: '123',
      role: 'estudiante',
      avatar: 'MR',
      status: 'activo',
      venture: {
        name: 'Rivas Cerámica & Deco',
        desc: 'Piezas artesanales de cerámica utilitaria y decorativa moldeadas y pintadas a mano con materiales ecológicos.',
        grade: '5to de Secundaria - Sección B',
        contact: 'mateo.rivas@colegio.edu / WhatsApp escolar: 987-654-321',
        skills: 'Modelado en torno, pintura sobre loza, esmaltado apto para alimentos'
      }
    },
    {
      id: 'user-student-2',
      name: 'Sofía Mendoza',
      email: 'sofia@colegio.edu',
      password: '123',
      role: 'estudiante',
      avatar: 'SM',
      status: 'activo',
      venture: {
        name: 'Bloom & Crumb Repostería',
        desc: 'Repostería creativa para celebraciones y eventos escolares. Cupcakes botánicos, galletas temáticas y postres artesanales.',
        grade: '4to de Secundaria - Sección A',
        contact: 'sofia.mendoza@colegio.edu / Pedidos con 2 días de anticipación',
        skills: 'Decoración botánica en buttercream, pastelería fina, empaques ecológicos'
      }
    },
    {
      id: 'user-admin-1',
      name: 'Prof. Alberto Navarro',
      email: 'admin@colegio.edu',
      password: '123',
      role: 'admin',
      avatar: 'AN',
      status: 'activo'
    }
  ],

  products: [
    {
      id: 'prod-1',
      title: 'Taza de Cerámica Floral Pintada a Mano',
      type: 'producto',
      category: 'Arte',
      price: 28.00,
      sellerId: 'user-student-1',
      availability: 'disponible',
      prepTime: 'Listo para entrega inmediata',
      desc: 'Taza de cerámica artesanal elaborada en torno y decorada a mano con flores botánicas en tonos pastel. Acabado brillante esmaltado libre de plomo, apto para café, té y microondas.',
      image: ASSET_IMAGES.ceramicMug,
      featured: true,
      status: 'activo',
      createdAt: '2026-09-20'
    },
    {
      id: 'prod-2',
      title: 'Tote Bag en Lienzo "Creative Spark" 100% Algodón',
      type: 'producto',
      category: 'Diseño digital',
      price: 35.00,
      sellerId: 'user-student-2',
      availability: 'por_encargo',
      prepTime: '2 a 3 días hábiles',
      desc: 'Bolsa de tela de algodón grueso con serigrafía artesanal de ilustración original realizada por el colectivo estudiantil. Lavable, resistente para llevar libros o laptop.',
      image: ASSET_IMAGES.toteBag,
      featured: true,
      status: 'activo',
      createdAt: '2026-09-25'
    },
    {
      id: 'prod-3',
      title: 'Caja x4 Cupcakes Botánicos Artesanales',
      type: 'producto',
      category: 'Repostería',
      price: 24.00,
      sellerId: 'user-student-2',
      availability: 'por_encargo',
      prepTime: '2 días de anticipación',
      desc: 'Hermosa caja de presentación con 4 cupcakes de vainilla y relleno de frutos rojos silvestres, decorados individualmente con pétalos y flores realistas en suave crema de mantequilla.',
      image: ASSET_IMAGES.cupcakes,
      featured: true,
      status: 'activo',
      createdAt: '2026-10-01'
    },
    {
      id: 'prod-4',
      title: 'Retrato Ilustrado Digital Personalizado',
      type: 'servicio',
      category: 'Personalización',
      price: 45.00,
      sellerId: 'user-student-2',
      availability: 'por_encargo',
      prepTime: '4 días hábiles',
      desc: 'Servicio de ilustración digital personalizada a partir de tu foto escolar o familiar. Entrega de archivo digital en ultra alta resolución (300 DPI) listo para imprimir como póster o cuadro.',
      image: ASSET_IMAGES.hero,
      featured: true,
      status: 'activo',
      createdAt: '2026-10-02'
    },
    {
      id: 'prod-5',
      title: 'Organizador de Escritorio en Madera Reutilizada',
      type: 'producto',
      category: 'Artesanía',
      price: 38.00,
      sellerId: 'user-student-1',
      availability: 'disponible',
      prepTime: 'Listo para entrega',
      desc: 'Organizador elaborado en el taller de carpintería escolar con listones reciclados de pino, pulidos y encerados a mano. Cuenta con ranuras para teléfono, bolígrafos y notas adhesivas.',
      image: ASSET_IMAGES.hero,
      featured: false,
      status: 'activo',
      createdAt: '2026-10-04'
    },
    {
      id: 'prod-6',
      title: 'Taller Individual de Iniciación al Modelado en Arcilla (1h)',
      type: 'servicio',
      category: 'Arte creativo',
      price: 30.00,
      sellerId: 'user-student-1',
      availability: 'disponible',
      prepTime: 'Coordinar horario escolar',
      desc: 'Aprende las técnicas iniciales de cuencos y placas en arcilla natural. La sesión se realiza en el aula de arte con supervisión del docente y todos los materiales incluidos.',
      image: ASSET_IMAGES.ceramicMug,
      featured: false,
      status: 'activo',
      createdAt: '2026-10-05'
    },
    {
      id: 'prod-7',
      title: 'Set de 3 Cuadernos Encuadernados a Mano (Costura Copta)',
      type: 'producto',
      category: 'Manualidades',
      price: 22.00,
      sellerId: 'user-student-2',
      availability: 'disponible',
      prepTime: 'Listo para entrega',
      desc: 'Cuadernos tamaño media carta con 60 hojas de papel ecológico de 90 gramos. Tapa dura forrada en papel marmoleado hecho por alumnos.',
      image: ASSET_IMAGES.toteBag,
      featured: false,
      status: 'activo',
      createdAt: '2026-10-06'
    },
    {
      id: 'prod-8',
      title: 'Sesión Fotográfica Escolar para Proyectos o Retratos',
      type: 'servicio',
      category: 'Fotografía',
      price: 40.00,
      sellerId: 'user-student-1',
      availability: 'por_encargo',
      prepTime: 'Agendar fecha libre',
      desc: 'Sesión de 40 minutos en el patio o jardines del colegio para fotografía de proyectos escolares o retratos profesionales para anuario. Entrega de 10 fotografías retocadas.',
      image: ASSET_IMAGES.hero,
      featured: false,
      status: 'activo',
      createdAt: '2026-10-07'
    }
  ],

  orders: [
    {
      id: 'ORD-1001',
      productId: 'prod-1',
      clientId: 'user-client-1',
      sellerId: 'user-student-1',
      quantity: 2,
      unitPrice: 28.00,
      totalAmount: 56.00,
      deliveryDate: '2026-10-15',
      notes: 'Por favor empacar en caja de regalo para el día del maestro.',
      status: 'en-preparacion',
      createdAt: '2026-10-05'
    },
    {
      id: 'ORD-1002',
      productId: 'prod-3',
      clientId: 'user-client-1',
      sellerId: 'user-student-2',
      quantity: 1,
      unitPrice: 24.00,
      totalAmount: 24.00,
      deliveryDate: '2026-10-18',
      notes: 'Flores decorativas preferentemente en tonos lilas y rosas.',
      status: 'pendiente',
      createdAt: '2026-10-06'
    },
    {
      id: 'ORD-1003',
      productId: 'prod-5',
      clientId: 'user-client-1',
      sellerId: 'user-student-1',
      quantity: 1,
      unitPrice: 38.00,
      totalAmount: 38.00,
      deliveryDate: '2026-10-07',
      notes: 'Entrega realizada en la biblioteca durante el receso.',
      status: 'entregado',
      createdAt: '2026-10-02'
    }
  ],

  reports: [
    {
      id: 'REP-201',
      productId: 'prod-6',
      reporterId: 'user-client-1',
      reason: 'Datos de contacto incorrectos',
      details: 'El horario para coordinar la clase de arcilla no estaba especificado en la descripción inicial.',
      status: 'pendiente',
      createdAt: '2026-10-07'
    }
  ]
};

// ==========================================================================
// 2. ESTADO GLOBAL DE LA APLICACIÓN
// ==========================================================================
class Store {
  constructor() {
    this.data = this.loadData();
    this.currentUser = this.loadSession();
    this.currentView = 'home';
    this.selectedProductId = null;
    this.filters = {
      search: '',
      category: '',
      type: '',
      availability: '',
      maxPrice: '',
      sortBy: 'recent'
    };
  }

  loadData() {
    try {
      const stored = localStorage.getItem(DB_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error al cargar datos desde localStorage:', e);
    }
    // Guardar semilla inicial
    localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(SEED_DATA));
    return JSON.parse(JSON.stringify(SEED_DATA));
  }

  saveData() {
    try {
      localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.error('Error al guardar datos en localStorage:', e);
    }
  }

  loadSession() {
    try {
      const stored = localStorage.getItem(SESSION_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error al leer sesión:', e);
    }
    // Por defecto modo Visitante (null)
    return null;
  }

  setSession(user) {
    this.currentUser = user;
    if (user) {
      localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(SESSION_STORAGE_KEY);
    }
  }

  getUserById(id) {
    return this.data.users.find(u => u.id === id);
  }

  getProductById(id) {
    return this.data.products.find(p => p.id === id);
  }
}

const store = new Store();

// ==========================================================================
// 3. UTILIDADES DE RENDERIZADO Y NOTIFICACIONES
// ==========================================================================
function formatCurrency(amount) {
  return Number(amount).toFixed(2);
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.setAttribute('role', 'alert');

  let icon = '✓';
  if (type === 'error') icon = '✕';
  if (type === 'info') icon = 'ℹ';

  toast.innerHTML = `
    <span style="font-weight: 700; font-size: 1rem;">${icon}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    toast.style.transition = 'all 200ms ease';
    setTimeout(() => toast.remove(), 200);
  }, 3500);
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// 4. NAVEGACIÓN Y MANEJO DE VISTAS (SPA)
// ==========================================================================
function switchView(viewName, productId = null) {
  store.currentView = viewName;
  if (productId) {
    store.selectedProductId = productId;
  }

  // Ocultar todas las vistas
  document.querySelectorAll('.app-view').forEach(view => {
    view.classList.remove('view-active');
  });

  // Mostrar la vista activa
  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) {
    targetView.classList.add('view-active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Actualizar menús y renderizado según vista
  renderHeaderNav();
  renderRoleBar();

  if (viewName === 'home') {
    renderHomeView();
  } else if (viewName === 'explore') {
    renderExploreView();
  } else if (viewName === 'detail') {
    renderDetailView();
  } else if (viewName === 'student') {
    renderStudentDashboard();
  } else if (viewName === 'client') {
    renderClientDashboard();
  } else if (viewName === 'admin') {
    renderAdminDashboard();
  }
}

// Barra de roles (Simulador para probar todos los roles en 1 clic)
function renderRoleBar() {
  const nameEl = document.getElementById('active-user-name');
  const badgeEl = document.getElementById('active-user-role-badge');
  const buttons = document.querySelectorAll('.role-switch-btn');

  const user = store.currentUser;
  let activeRoleKey = 'visitante';

  if (!user) {
    nameEl.textContent = 'Visitante (Público)';
    badgeEl.textContent = 'Sin Sesión';
    activeRoleKey = 'visitante';
  } else {
    nameEl.textContent = user.name;
    if (user.role === 'cliente') {
      badgeEl.textContent = 'Cliente / Comprador';
      activeRoleKey = 'cliente';
    } else if (user.role === 'estudiante') {
      badgeEl.textContent = 'Estudiante Emprendedor';
      activeRoleKey = 'estudiante';
    } else if (user.role === 'admin') {
      badgeEl.textContent = 'Administrador Escolar';
      activeRoleKey = 'admin';
    }
  }

  buttons.forEach(btn => {
    if (btn.getAttribute('data-role') === activeRoleKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Menú de navegación según el rol
function renderHeaderNav() {
  const navContainer = document.getElementById('main-nav-links');
  const actionsContainer = document.getElementById('main-header-actions');
  const user = store.currentUser;

  let linksHtml = '';
  // Links básicos
  linksHtml += `<li><a class="nav-link ${store.currentView === 'home' ? 'active' : ''}" data-nav="home">Inicio</a></li>`;
  linksHtml += `<li><a class="nav-link ${store.currentView === 'explore' ? 'active' : ''}" data-nav="explore">Explorar</a></li>`;

  let actionsHtml = '';

  if (!user) {
    // Visitante
    actionsHtml = `
      <button type="button" class="btn btn-ghost btn-sm" id="btn-open-login">Iniciar Sesión</button>
      <button type="button" class="btn btn-primary btn-sm" id="btn-open-register">Registrarse</button>
    `;
  } else if (user.role === 'cliente') {
    // Cliente
    linksHtml += `<li><a class="nav-link ${store.currentView === 'client' ? 'active' : ''}" data-nav="client">Mis Pedidos</a></li>`;
    actionsHtml = `
      <button type="button" class="user-status-btn" data-nav="client">
        <span class="user-avatar-mini">${user.avatar || 'C'}</span>
        <span>${user.name.split(' ')[0]}</span>
      </button>
      <button type="button" class="btn btn-secondary btn-sm" id="btn-logout" title="Cerrar sesión">Salir</button>
    `;
  } else if (user.role === 'estudiante') {
    // Estudiante Emprendedor
    linksHtml += `<li><a class="nav-link ${store.currentView === 'student' ? 'active' : ''}" data-nav="student">Panel Emprendedor</a></li>`;
    actionsHtml = `
      <button type="button" class="user-status-btn" data-nav="student">
        <span class="user-avatar-mini" style="background: var(--primary); color: #fff;">${user.avatar || 'E'}</span>
        <span>${user.venture ? user.venture.name : user.name.split(' ')[0]}</span>
      </button>
      <button type="button" class="btn btn-secondary btn-sm" id="btn-logout" title="Cerrar sesión">Salir</button>
    `;
  } else if (user.role === 'admin') {
    // Administrador
    linksHtml += `<li><a class="nav-link ${store.currentView === 'admin' ? 'active' : ''}" data-nav="admin">Panel Admin</a></li>`;
    actionsHtml = `
      <button type="button" class="user-status-btn" data-nav="admin">
        <span class="user-avatar-mini" style="background: #0f172a; color: #fff;">${user.avatar || 'A'}</span>
        <span>Admin Escolar</span>
      </button>
      <button type="button" class="btn btn-secondary btn-sm" id="btn-logout" title="Cerrar sesión">Salir</button>
    `;
  }

  navContainer.innerHTML = linksHtml;
  actionsContainer.innerHTML = actionsHtml;

  // Asignar eventos de navegación
  navContainer.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const target = el.getAttribute('data-nav');
      switchView(target);
    });
  });

  const profileBtn = actionsContainer.querySelector('[data-nav]');
  if (profileBtn) {
    profileBtn.addEventListener('click', () => {
      switchView(profileBtn.getAttribute('data-nav'));
    });
  }

  const loginBtn = document.getElementById('btn-open-login');
  if (loginBtn) {
    loginBtn.addEventListener('click', () => openModal('modal-login'));
  }

  const registerBtn = document.getElementById('btn-open-register');
  if (registerBtn) {
    registerBtn.addEventListener('click', () => openModal('modal-register'));
  }

  const logoutBtn = document.getElementById('btn-logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      store.setSession(null);
      showToast('Sesión finalizada correctamente', 'info');
      switchView('home');
    });
  }
}

// ==========================================================================
// 5. VISTA 1: HOME (Inicio)
// ==========================================================================
function renderHomeView() {
  // Render de Categorías
  const catGrid = document.getElementById('home-categories-grid');
  if (catGrid) {
    const activeCats = store.data.categories.filter(c => c.active);
    catGrid.innerHTML = activeCats.map(cat => `
      <div class="category-card" data-cat-name="${cat.name}">
        <div class="category-icon" style="font-size: 1.35rem;">${cat.icon || '✨'}</div>
        <span class="category-name">${cat.name}</span>
      </div>
    `).join('');

    catGrid.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const catName = card.getAttribute('data-cat-name');
        store.filters.category = catName;
        switchView('explore');
      });
    });
  }

  // Render de Publicaciones Destacadas
  const featuredGrid = document.getElementById('home-featured-grid');
  if (featuredGrid) {
    const featuredList = store.data.products
      .filter(p => p.status === 'activo' && p.featured)
      .slice(0, 4);
    featuredGrid.innerHTML = featuredList.map(renderProductCardHtml).join('');
    bindProductCardEvents(featuredGrid);
  }

  // Render de Publicaciones Recientes
  const recentGrid = document.getElementById('home-recent-grid');
  if (recentGrid) {
    const recentList = store.data.products
      .filter(p => p.status === 'activo')
      .slice(0, 4);
    recentGrid.innerHTML = recentList.map(renderProductCardHtml).join('');
    bindProductCardEvents(recentGrid);
  }
}

function renderProductCardHtml(product) {
  const seller = store.getUserById(product.sellerId) || { name: 'Estudiante', venture: { name: 'Emprendimiento' } };
  const sellerTitle = seller.venture ? seller.venture.name : seller.name;
  const sellerInitial = (seller.name || 'E').charAt(0);

  const isAvailable = product.availability === 'disponible';
  const availText = isAvailable ? 'Disponible' : 'Por encargo';
  const availClass = isAvailable ? 'avail-in-stock' : 'avail-custom-order';

  const typeLabel = product.type === 'servicio' ? 'Servicio' : 'Producto';

  return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-card-media" data-open-detail="${product.id}">
        <img src="${product.image}" alt="${product.title}" loading="lazy" onerror="this.src='${ASSET_IMAGES.hero}'" />
        <span class="product-badge-type">${typeLabel}</span>
      </div>
      <div class="product-card-body">
        <div class="item-meta">
          <span class="product-card-category">${product.category}</span>
          <span class="meta-separator">·</span>
          <span class="availability-indicator ${availClass}">
            <span class="availability-dot"></span>
            ${availText}
          </span>
        </div>

        <h3 class="product-card-title" data-open-detail="${product.id}">${product.title}</h3>

        <div class="product-card-seller">
          <div class="seller-avatar-tiny">${sellerInitial}</div>
          <span class="seller-name" title="${sellerTitle}">${sellerTitle}</span>
        </div>

        <div class="product-card-footer">
          <div class="product-price-wrap">
            <span class="product-price-label">Precio</span>
            <span class="product-price tabular-nums">S/. ${formatCurrency(product.price)}</span>
          </div>
          <div class="product-card-actions">
            <button type="button" class="btn btn-secondary btn-sm" data-open-detail="${product.id}">Ver Detalle</button>
            <button type="button" class="btn btn-primary btn-sm" data-quick-order="${product.id}">Solicitar</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function bindProductCardEvents(container) {
  container.querySelectorAll('[data-open-detail]').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.getAttribute('data-open-detail');
      switchView('detail', id);
    });
  });

  container.querySelectorAll('[data-quick-order]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = el.getAttribute('data-quick-order');
      openOrderModal(id);
    });
  });
}

// ==========================================================================
// 6. VISTA 2: EXPLORAR / CATÁLOGO
// ==========================================================================
function renderExploreView() {
  // Poblar select de categorías en filtros
  const catSelect = document.getElementById('filter-category-select');
  if (catSelect && catSelect.children.length <= 1) {
    store.data.categories.filter(c => c.active).forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat.name;
      opt.textContent = `${cat.name}`;
      catSelect.appendChild(opt);
    });
  }

  // Sincronizar inputs con store.filters
  const searchInput = document.getElementById('filter-search-input');
  if (searchInput) searchInput.value = store.filters.search;
  if (catSelect) catSelect.value = store.filters.category;

  const typeSelect = document.getElementById('filter-type-select');
  if (typeSelect) typeSelect.value = store.filters.type;

  const availSelect = document.getElementById('filter-avail-select');
  if (availSelect) availSelect.value = store.filters.availability;

  const priceInput = document.getElementById('filter-max-price');
  if (priceInput) priceInput.value = store.filters.maxPrice;

  const sortSelect = document.getElementById('explore-sort-select');
  if (sortSelect) sortSelect.value = store.filters.sortBy;

  applyExploreFilters();
}

function applyExploreFilters() {
  let list = store.data.products.filter(p => p.status === 'activo');

  // Filtro de búsqueda
  if (store.filters.search.trim()) {
    const q = store.filters.search.toLowerCase().trim();
    list = list.filter(p => {
      const seller = store.getUserById(p.sellerId);
      const sellerName = seller ? (seller.name + ' ' + (seller.venture?.name || '')).toLowerCase() : '';
      return p.title.toLowerCase().includes(q) ||
             p.desc.toLowerCase().includes(q) ||
             p.category.toLowerCase().includes(q) ||
             sellerName.includes(q);
    });
  }

  // Categoría
  if (store.filters.category) {
    list = list.filter(p => p.category === store.filters.category);
  }

  // Tipo
  if (store.filters.type) {
    list = list.filter(p => p.type === store.filters.type);
  }

  // Disponibilidad
  if (store.filters.availability) {
    list = list.filter(p => p.availability === store.filters.availability);
  }

  // Precio Máximo
  if (store.filters.maxPrice && !isNaN(store.filters.maxPrice)) {
    const max = parseFloat(store.filters.maxPrice);
    list = list.filter(p => p.price <= max);
  }

  // Ordenamiento
  if (store.filters.sortBy === 'price-asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (store.filters.sortBy === 'price-desc') {
    list.sort((a, b) => b.price - a.price);
  } else if (store.filters.sortBy === 'title') {
    list.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    // Más recientes
    list.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  }

  // Render
  const grid = document.getElementById('explore-products-grid');
  const emptyState = document.getElementById('explore-empty-state');
  const countEl = document.getElementById('explore-results-count');

  if (countEl) {
    countEl.innerHTML = `Mostrando <strong>${list.length}</strong> publicación${list.length === 1 ? '' : 'es'}`;
  }

  if (list.length === 0) {
    if (grid) grid.innerHTML = '';
    if (emptyState) emptyState.style.display = 'flex';
  } else {
    if (emptyState) emptyState.style.display = 'none';
    if (grid) {
      grid.innerHTML = list.map(renderProductCardHtml).join('');
      bindProductCardEvents(grid);
    }
  }
}

// ==========================================================================
// 7. VISTA 3: DETALLE DE PUBLICACIÓN
// ==========================================================================
function renderDetailView() {
  const container = document.getElementById('detail-layout-container');
  if (!container) return;

  const product = store.getProductById(store.selectedProductId) || store.data.products[0];
  if (!product) {
    container.innerHTML = '<p>Publicación no encontrada.</p>';
    return;
  }

  const seller = store.getUserById(product.sellerId) || {
    name: 'Estudiante Emprendedor',
    venture: { name: 'Emprendimiento', grade: 'Secundaria', desc: '', contact: '', skills: '' }
  };

  const ventureName = seller.venture?.name || seller.name;
  const isAvailable = product.availability === 'disponible';
  const availText = isAvailable ? 'Disponible de inmediato' : 'Por encargo / A pedido';
  const availClass = isAvailable ? 'avail-in-stock' : 'avail-custom-order';
  const typeText = product.type === 'servicio' ? 'Servicio Educativo / Creativo' : 'Producto Físico Artesanal';

  container.innerHTML = `
    <div class="detail-gallery">
      <div class="detail-main-image">
        <img src="${product.image}" alt="${product.title}" onerror="this.src='${ASSET_IMAGES.hero}'" />
      </div>
    </div>

    <div class="detail-info">
      <div class="detail-header">
        <div class="item-meta">
          <span>${product.category}</span>
          <span class="meta-separator">·</span>
          <span>${typeText}</span>
          <span class="meta-separator">·</span>
          <span class="availability-indicator ${availClass}">
            <span class="availability-dot"></span>
            ${availText}
          </span>
        </div>

        <h1 class="detail-title">${product.title}</h1>

        <div class="detail-price-box">
          <span class="detail-price tabular-nums">S/. ${formatCurrency(product.price)}</span>
          <span style="font-size: 0.8125rem; color: var(--text-muted);">(Precio fijado por el estudiante)</span>
        </div>
      </div>

      <div class="detail-attributes">
        <div class="attribute-item">
          <span class="attribute-label">Tiempo estimado</span>
          <span class="attribute-value">${product.prepTime || 'Inmediato'}</span>
        </div>
        <div class="attribute-item">
          <span class="attribute-label">Forma de entrega</span>
          <span class="attribute-value">Entrega coordinada en el colegio</span>
        </div>
      </div>

      <div class="detail-description-block">
        <h3 class="detail-description-title">Descripción de la creación</h3>
        <p class="detail-description">${product.desc}</p>
      </div>

      <!-- Ficha del Estudiante Emprendedor -->
      <div class="seller-card-box">
        <div class="seller-profile-wrap">
          <div class="seller-avatar-large">${(seller.name || 'E').charAt(0)}</div>
          <div class="seller-info-text">
            <span class="seller-brand-name">${ventureName}</span>
            <span class="seller-student-name">Por ${seller.name} · ${seller.venture?.grade || 'Comunidad Escolar'}</span>
            <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">
              ${seller.venture?.skills ? 'Técnicas: ' + seller.venture.skills : ''}
            </span>
          </div>
        </div>
      </div>

      <div class="detail-action-buttons">
        <button type="button" class="btn btn-primary btn-lg" id="btn-detail-order-trigger">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          Solicitar Pedido
        </button>
        <button type="button" class="btn btn-secondary btn-sm" id="btn-detail-report-trigger">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
            <line x1="4" y1="22" x2="4" y2="15"></line>
          </svg>
          Reportar Publicación
        </button>
      </div>
    </div>
  `;

  document.getElementById('btn-detail-order-trigger').addEventListener('click', () => {
    openOrderModal(product.id);
  });

  document.getElementById('btn-detail-report-trigger').addEventListener('click', () => {
    openReportModal(product.id);
  });
}

// ==========================================================================
// 8. VISTA 4: PANEL DEL ESTUDIANTE EMPRENDEDOR
// ==========================================================================
function renderStudentDashboard() {
  const user = store.currentUser;
  if (!user || user.role !== 'estudiante') {
    showToast('Inicia sesión como Estudiante Emprendedor para acceder', 'error');
    switchView('home');
    return;
  }

  // Encabezado del perfil del emprendimiento
  const avatarBadge = document.getElementById('student-avatar-badge');
  const ventureTitle = document.getElementById('student-venture-name');
  const studentName = document.getElementById('student-user-name');
  const gradeBadge = document.getElementById('student-grade-badge');

  if (avatarBadge) avatarBadge.textContent = (user.name || 'M').charAt(0);
  if (ventureTitle) ventureTitle.textContent = user.venture?.name || 'Mi Emprendimiento';
  if (studentName) studentName.textContent = user.name;
  if (gradeBadge) gradeBadge.textContent = user.venture?.grade || 'Estudiante';

  // Poblar Pestaña 1: Mis Publicaciones
  const tbodyProducts = document.getElementById('student-products-tbody');
  if (tbodyProducts) {
    const myProducts = store.data.products.filter(p => p.sellerId === user.id);
    if (myProducts.length === 0) {
      tbodyProducts.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 2rem; color: var(--text-muted);">
            Aún no has publicado productos o servicios. ¡Haz clic en "Nueva Publicación" para empezar!
          </td>
        </tr>
      `;
    } else {
      tbodyProducts.innerHTML = myProducts.map(p => {
        const isPaused = p.status === 'pausado';
        const availText = p.availability === 'disponible' ? 'Inmediato' : 'Por encargo';
        return `
          <tr>
            <td>
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <img src="${p.image}" alt="" style="width: 40px; height: 40px; object-fit: cover; border-radius: var(--radius-xs);" onerror="this.src='${ASSET_IMAGES.hero}'" />
                <strong>${p.title}</strong>
              </div>
            </td>
            <td><span style="text-transform: capitalize;">${p.type}</span></td>
            <td>${p.category}</td>
            <td class="tabular-nums font-semibold">S/. ${formatCurrency(p.price)}</td>
            <td>${availText}</td>
            <td>
              <span class="role-badge" style="background: ${isPaused ? 'var(--surface-dim)' : 'var(--emerald-subtle)'}; color: ${isPaused ? 'var(--text-muted)' : 'var(--emerald)'};">
                ${isPaused ? 'Pausado' : 'Activo'}
              </span>
            </td>
            <td style="text-align: right;">
              <button type="button" class="btn btn-secondary btn-sm" data-edit-prod="${p.id}">Editar</button>
              <button type="button" class="btn btn-secondary btn-sm" data-toggle-prod="${p.id}">${isPaused ? 'Reanudar' : 'Pausar'}</button>
              <button type="button" class="btn btn-danger btn-sm" data-delete-prod="${p.id}">Eliminar</button>
            </td>
          </tr>
        `;
      }).join('');

      // Eventos de botones
      tbodyProducts.querySelectorAll('[data-edit-prod]').forEach(btn => {
        btn.addEventListener('click', () => openManageProductModal(btn.getAttribute('data-edit-prod')));
      });

      tbodyProducts.querySelectorAll('[data-toggle-prod]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-toggle-prod');
          const item = store.getProductById(id);
          if (item) {
            item.status = item.status === 'pausado' ? 'activo' : 'pausado';
            store.saveData();
            showToast(`Estado de la publicación actualizado`);
            renderStudentDashboard();
          }
        });
      });

      tbodyProducts.querySelectorAll('[data-delete-prod]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-delete-prod');
          if (confirm('¿Estás seguro de que deseas eliminar esta publicación del catálogo?')) {
            store.data.products = store.data.products.filter(p => p.id !== id);
            store.saveData();
            showToast('Publicación eliminada correctamente', 'info');
            renderStudentDashboard();
          }
        });
      });
    }
  }

  // Poblar Pestaña 2: Pedidos Recibidos
  const tbodyOrders = document.getElementById('student-orders-tbody');
  if (tbodyOrders) {
    const receivedOrders = store.data.orders.filter(o => o.sellerId === user.id);
    if (receivedOrders.length === 0) {
      tbodyOrders.innerHTML = `
        <tr>
          <td colspan="8" style="text-align: center; padding: 2rem; color: var(--text-muted);">
            No tienes pedidos entrantes por el momento.
          </td>
        </tr>
      `;
    } else {
      tbodyOrders.innerHTML = receivedOrders.map(o => {
        const product = store.getProductById(o.productId) || { title: 'Producto eliminado' };
        const client = store.getUserById(o.clientId) || { name: 'Cliente escolar' };
        return `
          <tr>
            <td><strong>#${o.id}</strong></td>
            <td>${product.title}</td>
            <td>
              <div><strong>${client.name}</strong></div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">${client.email}</div>
            </td>
            <td>${o.quantity}</td>
            <td class="tabular-nums font-semibold">S/. ${formatCurrency(o.totalAmount)}</td>
            <td>${o.deliveryDate}</td>
            <td>
              <span class="order-status-badge status-${o.status}">${getStatusLabel(o.status)}</span>
            </td>
            <td>
              <select class="form-select" data-order-status-select="${o.id}" style="padding: 0.25rem 0.5rem; font-size: 0.8125rem;">
                <option value="pendiente" ${o.status === 'pendiente' ? 'selected' : ''}>Pendiente</option>
                <option value="aceptado" ${o.status === 'aceptado' ? 'selected' : ''}>Aceptado</option>
                <option value="en-preparacion" ${o.status === 'en-preparacion' ? 'selected' : ''}>En preparación</option>
                <option value="listo" ${o.status === 'listo' ? 'selected' : ''}>Listo para entrega</option>
                <option value="entregado" ${o.status === 'entregado' ? 'selected' : ''}>Entregado</option>
                <option value="rechazado" ${o.status === 'rechazado' ? 'selected' : ''}>Rechazado</option>
              </select>
            </td>
          </tr>
        `;
      }).join('');

      tbodyOrders.querySelectorAll('[data-order-status-select]').forEach(select => {
        select.addEventListener('change', (e) => {
          const orderId = select.getAttribute('data-order-status-select');
          const newStatus = e.target.value;
          const order = store.data.orders.find(o => o.id === orderId);
          if (order) {
            order.status = newStatus;
            store.saveData();
            showToast(`Pedido #${orderId} actualizado a "${getStatusLabel(newStatus)}"`);
            renderStudentDashboard();
          }
        });
      });
    }
  }

  // Poblar Pestaña 3: Perfil del Emprendimiento
  const vNameInput = document.getElementById('prof-venture-name');
  const vDescInput = document.getElementById('prof-venture-desc');
  const vGradeInput = document.getElementById('prof-grade');
  const vContactInput = document.getElementById('prof-contact');
  const vSkillsInput = document.getElementById('prof-skills');

  if (vNameInput) vNameInput.value = user.venture?.name || '';
  if (vDescInput) vDescInput.value = user.venture?.desc || '';
  if (vGradeInput) vGradeInput.value = user.venture?.grade || '';
  if (vContactInput) vContactInput.value = user.venture?.contact || '';
  if (vSkillsInput) vSkillsInput.value = user.venture?.skills || '';
}

function getStatusLabel(status) {
  const map = {
    'pendiente': 'Pendiente',
    'aceptado': 'Aceptado',
    'en-preparacion': 'En preparación',
    'listo': 'Listo para entrega',
    'entregado': 'Entregado',
    'rechazado': 'Rechazado',
    'cancelado': 'Cancelado'
  };
  return map[status] || status;
}

// ==========================================================================
// 9. VISTA 5: PANEL DEL CLIENTE
// ==========================================================================
function renderClientDashboard() {
  const user = store.currentUser;
  if (!user || user.role !== 'cliente') {
    showToast('Inicia sesión como Cliente para ver tus pedidos', 'error');
    switchView('home');
    return;
  }

  const nameEl = document.getElementById('client-display-name');
  const emailEl = document.getElementById('client-email-display');
  const avatarEl = document.getElementById('client-avatar-badge');

  if (nameEl) nameEl.textContent = `Pedidos de ${user.name}`;
  if (emailEl) emailEl.textContent = user.email;
  if (avatarEl) avatarEl.textContent = (user.name || 'C').charAt(0);

  const tbody = document.getElementById('client-orders-tbody');
  if (tbody) {
    const myOrders = store.data.orders.filter(o => o.clientId === user.id);
    if (myOrders.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="8" style="text-align: center; padding: 2rem; color: var(--text-muted);">
            No tienes pedidos activos. ¡Explora el catálogo y apoya el talento escolar!
          </td>
        </tr>
      `;
    } else {
      tbody.innerHTML = myOrders.map(o => {
        const product = store.getProductById(o.productId) || { title: 'Publicación' };
        const seller = store.getUserById(o.sellerId) || { name: 'Estudiante', venture: { name: 'Emprendimiento' } };
        const sellerTitle = seller.venture?.name || seller.name;
        const canCancel = o.status === 'pendiente';

        return `
          <tr>
            <td><strong>#${o.id}</strong></td>
            <td><strong>${product.title}</strong></td>
            <td>${sellerTitle}</td>
            <td>${o.quantity}</td>
            <td class="tabular-nums font-semibold">S/. ${formatCurrency(o.totalAmount)}</td>
            <td>${o.deliveryDate}</td>
            <td>
              <span class="order-status-badge status-${o.status}">${getStatusLabel(o.status)}</span>
            </td>
            <td>
              ${canCancel ? `<button type="button" class="btn btn-danger btn-sm" data-cancel-order="${o.id}">Cancelar</button>` : `<span style="font-size: 0.75rem; color: var(--text-muted);">En proceso</span>`}
            </td>
          </tr>
        `;
      }).join('');

      tbody.querySelectorAll('[data-cancel-order]').forEach(btn => {
        btn.addEventListener('click', () => {
          const orderId = btn.getAttribute('data-cancel-order');
          if (confirm('¿Deseas cancelar esta solicitud de pedido?')) {
            const order = store.data.orders.find(o => o.id === orderId);
            if (order) {
              order.status = 'cancelado';
              store.saveData();
              showToast('Pedido cancelado', 'info');
              renderClientDashboard();
            }
          }
        });
      });
    }
  }
}

// ==========================================================================
// 10. VISTA 6: PANEL DE ADMINISTRADOR
// ==========================================================================
function renderAdminDashboard() {
  const user = store.currentUser;
  if (!user || user.role !== 'admin') {
    showToast('Acceso restringido: Se requiere rol de Administrador', 'error');
    switchView('home');
    return;
  }

  // Contadores estadísticos
  const totalUsers = store.data.users.length;
  const totalStudents = store.data.users.filter(u => u.role === 'estudiante').length;
  const totalProducts = store.data.products.length;
  const totalOrders = store.data.orders.length;
  const totalReports = store.data.reports.filter(r => r.status === 'pendiente').length;

  document.getElementById('stat-total-users').textContent = totalUsers;
  document.getElementById('stat-total-students').textContent = totalStudents;
  document.getElementById('stat-total-products').textContent = totalProducts;
  document.getElementById('stat-total-orders').textContent = totalOrders;
  document.getElementById('stat-total-reports').textContent = totalReports;

  // Tab 1: Usuarios
  const usersTbody = document.getElementById('admin-users-tbody');
  if (usersTbody) {
    usersTbody.innerHTML = store.data.users.map(u => {
      const isSuspended = u.status === 'suspendido';
      return `
        <tr>
          <td><strong>${u.name}</strong></td>
          <td>${u.email}</td>
          <td><span style="text-transform: capitalize;">${u.role}</span></td>
          <td>
            <span class="role-badge" style="background: ${isSuspended ? 'var(--rose-subtle)' : 'var(--emerald-subtle)'}; color: ${isSuspended ? 'var(--rose)' : 'var(--emerald)'};">
              ${isSuspended ? 'Suspendido' : 'Activo'}
            </span>
          </td>
          <td style="text-align: right;">
            ${u.role !== 'admin' ? `
              <button type="button" class="btn btn-secondary btn-sm" data-toggle-user="${u.id}">
                ${isSuspended ? 'Reactivar' : 'Suspender'}
              </button>
            ` : '<span style="font-size: 0.75rem; color: var(--text-muted);">Docente Admin</span>'}
          </td>
        </tr>
      `;
    }).join('');

    usersTbody.querySelectorAll('[data-toggle-user]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-toggle-user');
        const target = store.getUserById(id);
        if (target) {
          target.status = target.status === 'suspendido' ? 'activo' : 'suspendido';
          store.saveData();
          showToast(`Estado de usuario actualizado: ${target.name}`);
          renderAdminDashboard();
        }
      });
    });
  }

  // Tab 2: Publicaciones
  const prodTbody = document.getElementById('admin-products-tbody');
  if (prodTbody) {
    prodTbody.innerHTML = store.data.products.map(p => {
      const seller = store.getUserById(p.sellerId) || { name: 'Estudiante' };
      const isHidden = p.status === 'retirado';
      return `
        <tr>
          <td><strong>${p.title}</strong></td>
          <td>${seller.name}</td>
          <td><span style="text-transform: capitalize;">${p.type}</span></td>
          <td class="tabular-nums">S/. ${formatCurrency(p.price)}</td>
          <td>${p.featured ? '⭐ Destacado' : 'Estándar'}</td>
          <td>
            <span class="role-badge" style="background: ${isHidden ? 'var(--rose-subtle)' : 'var(--emerald-subtle)'}; color: ${isHidden ? 'var(--rose)' : 'var(--emerald)'};">
              ${isHidden ? 'Retirado' : 'Publicado'}
            </span>
          </td>
          <td style="text-align: right;">
            <button type="button" class="btn btn-secondary btn-sm" data-admin-feature="${p.id}">
              ${p.featured ? 'Quitar Destacado' : 'Destacar'}
            </button>
            <button type="button" class="btn btn-danger btn-sm" data-admin-toggle-prod="${p.id}">
              ${isHidden ? 'Restaurar' : 'Retirar'}
            </button>
          </td>
        </tr>
      `;
    }).join('');

    prodTbody.querySelectorAll('[data-admin-feature]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-admin-feature');
        const p = store.getProductById(id);
        if (p) {
          p.featured = !p.featured;
          store.saveData();
          showToast(`Visibilidad destacada modificada para "${p.title}"`);
          renderAdminDashboard();
        }
      });
    });

    prodTbody.querySelectorAll('[data-admin-toggle-prod]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-admin-toggle-prod');
        const p = store.getProductById(id);
        if (p) {
          p.status = p.status === 'retirado' ? 'activo' : 'retirado';
          store.saveData();
          showToast(`Moderación aplicada a "${p.title}"`);
          renderAdminDashboard();
        }
      });
    });
  }

  // Tab 3: Categorías
  const catTbody = document.getElementById('admin-categories-tbody');
  if (catTbody) {
    catTbody.innerHTML = store.data.categories.map(c => `
      <tr>
        <td><strong>${c.icon || '🏷️'} ${c.name}</strong></td>
        <td>
          <span class="role-badge" style="background: ${c.active ? 'var(--emerald-subtle)' : 'var(--surface-dim)'}; color: ${c.active ? 'var(--emerald)' : 'var(--text-muted)'};">
            ${c.active ? 'Activa' : 'Inactiva'}
          </span>
        </td>
        <td style="text-align: right;">
          <button type="button" class="btn btn-secondary btn-sm" data-toggle-cat="${c.id}">
            ${c.active ? 'Desactivar' : 'Activar'}
          </button>
        </td>
      </tr>
    `).join('');

    catTbody.querySelectorAll('[data-toggle-cat]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-toggle-cat');
        const cat = store.data.categories.find(c => c.id === id);
        if (cat) {
          cat.active = !cat.active;
          store.saveData();
          showToast(`Categoría "${cat.name}" actualizada`);
          renderAdminDashboard();
        }
      });
    });
  }

  // Tab 4: Reportes
  const repTbody = document.getElementById('admin-reports-tbody');
  if (repTbody) {
    if (store.data.reports.length === 0) {
      repTbody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding: 2rem;">No hay reportes de usuarios.</td></tr>';
    } else {
      repTbody.innerHTML = store.data.reports.map(r => {
        const product = store.getProductById(r.productId) || { title: 'ID: ' + r.productId };
        const reporter = store.getUserById(r.reporterId) || { name: 'Comunidad' };
        const isResolved = r.status === 'resuelto';
        return `
          <tr>
            <td><strong>#${r.id}</strong></td>
            <td>${product.title}</td>
            <td><strong style="color: var(--rose);">${r.reason}</strong></td>
            <td style="max-width: 200px;">${r.details}</td>
            <td>${reporter.name}</td>
            <td>
              <span class="role-badge" style="background: ${isResolved ? 'var(--emerald-subtle)' : 'var(--amber-subtle)'}; color: ${isResolved ? 'var(--emerald)' : 'var(--amber)'};">
                ${isResolved ? 'Resuelto' : 'Pendiente'}
              </span>
            </td>
            <td style="text-align: right;">
              ${!isResolved ? `
                <button type="button" class="btn btn-secondary btn-sm" data-resolve-rep="${r.id}">Marcar Resuelto</button>
              ` : '<span style="font-size: 0.75rem; color: var(--text-muted);">Completado</span>'}
            </td>
          </tr>
        `;
      }).join('');

      repTbody.querySelectorAll('[data-resolve-rep]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-resolve-rep');
          const report = store.data.reports.find(r => r.id === id);
          if (report) {
            report.status = 'resuelto';
            store.saveData();
            showToast(`Reporte #${id} marcado como resuelto`);
            renderAdminDashboard();
          }
        });
      });
    }
  }
}

// ==========================================================================
// 11. MODALES Y FORMULARIOS INTERACTIVOS
// ==========================================================================

// Modal de Solicitar Pedido
function openOrderModal(productId) {
  const product = store.getProductById(productId);
  if (!product) return;

  // Si no hay sesión activa, permitir probar como cliente rápidamente
  if (!store.currentUser) {
    if (confirm('Para solicitar un pedido necesitas estar identificado como Cliente. ¿Deseas iniciar sesión automáticamente como Camila Torres (Cliente de prueba)?')) {
      store.setSession(store.getUserById('user-client-1'));
      renderRoleBar();
      renderHeaderNav();
    } else {
      openModal('modal-login');
      return;
    }
  }

  const seller = store.getUserById(product.sellerId) || { name: 'Estudiante', venture: { name: 'Emprendimiento' } };
  const sellerTitle = seller.venture?.name || seller.name;

  document.getElementById('order-product-id').value = product.id;
  document.getElementById('order-product-name').textContent = product.title;
  document.getElementById('order-unit-price').textContent = formatCurrency(product.price);
  document.getElementById('order-seller-name').textContent = sellerTitle;

  const qtyInput = document.getElementById('order-quantity');
  qtyInput.value = '1';

  // Fecha mínima: mañana
  const dateInput = document.getElementById('order-date');
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  dateInput.min = tomorrow.toISOString().split('T')[0];
  dateInput.value = tomorrow.toISOString().split('T')[0];

  const updateCalculatedTotal = () => {
    const qty = parseInt(qtyInput.value, 10) || 1;
    const total = qty * product.price;
    document.getElementById('order-calculated-total').textContent = formatCurrency(total);
  };

  qtyInput.oninput = updateCalculatedTotal;
  updateCalculatedTotal();

  openModal('modal-order');
}

// Modal de Reportar Publicación
function openReportModal(productId) {
  document.getElementById('report-product-id').value = productId;
  document.getElementById('form-report').reset();
  openModal('modal-report');
}

// Modal de Crear / Editar Publicación
function openManageProductModal(productId = null) {
  const modalTitle = document.getElementById('create-modal-title');
  const form = document.getElementById('form-manage-product');
  const catSelect = document.getElementById('prod-form-category');

  // Poblar categorías activas
  catSelect.innerHTML = store.data.categories
    .filter(c => c.active)
    .map(c => `<option value="${c.name}">${c.name}</option>`)
    .join('');

  if (productId) {
    const p = store.getProductById(productId);
    if (!p) return;
    modalTitle.textContent = 'Editar Publicación';
    document.getElementById('manage-product-id').value = p.id;
    document.getElementById('prod-form-title').value = p.title;
    document.getElementById('prod-form-type').value = p.type;
    document.getElementById('prod-form-category').value = p.category;
    document.getElementById('prod-form-price').value = p.price;
    document.getElementById('prod-form-avail').value = p.availability;
    document.getElementById('prod-form-time').value = p.prepTime;
    document.getElementById('prod-form-desc').value = p.desc;
    document.getElementById('prod-form-image').value = p.image;
    document.getElementById('btn-save-product-submit').textContent = 'Guardar Cambios';
  } else {
    modalTitle.textContent = 'Nueva Publicación';
    form.reset();
    document.getElementById('manage-product-id').value = '';
    document.getElementById('btn-save-product-submit').textContent = 'Publicar en el Catálogo';
  }

  openModal('modal-create-product');
}

// ==========================================================================
// 12. INICIALIZACIÓN DE EVENTOS GENERALES
// ==========================================================================
function setupEventListeners() {
  // Cierre de modales con botón [x] y fondo
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-close-modal');
      closeModal(modalId);
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Selector de roles en barra superior
  document.querySelectorAll('.role-switch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const role = btn.getAttribute('data-role');
      if (role === 'visitante') {
        store.setSession(null);
        showToast('Cambiado a modo Visitante');
        switchView('home');
      } else if (role === 'cliente') {
        store.setSession(store.getUserById('user-client-1'));
        showToast('Sesión cambiada a Cliente (Camila Torres)');
        switchView('client');
      } else if (role === 'estudiante') {
        store.setSession(store.getUserById('user-student-1'));
        showToast('Sesión cambiada a Emprendedor (Mateo Rivas)');
        switchView('student');
      } else if (role === 'admin') {
        store.setSession(store.getUserById('user-admin-1'));
        showToast('Sesión cambiada a Administrador (Prof. Alberto)');
        switchView('admin');
      }
    });
  });

  // Marca / Logo principal
  document.getElementById('nav-brand-btn').addEventListener('click', (e) => {
    e.preventDefault();
    switchView('home');
  });

  // Menú móvil toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      document.body.classList.toggle('mobile-nav-active');
    });
  }

  // Hero CTAs
  document.getElementById('hero-btn-explore').addEventListener('click', () => {
    store.filters.category = '';
    store.filters.search = '';
    switchView('explore');
  });

  document.getElementById('hero-btn-publish').addEventListener('click', () => {
    if (!store.currentUser || store.currentUser.role !== 'estudiante') {
      store.setSession(store.getUserById('user-student-1'));
      showToast('Iniciando sesión como Estudiante Emprendedor');
    }
    switchView('student');
    openManageProductModal();
  });

  // Buscador rápido en Hero
  document.getElementById('hero-quick-search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const query = document.getElementById('hero-search-input').value;
    store.filters.search = query;
    store.filters.category = '';
    switchView('explore');
  });

  // Botones de secciones en Home
  document.getElementById('btn-see-all-categories').addEventListener('click', () => {
    store.filters.category = '';
    switchView('explore');
  });

  document.getElementById('btn-see-all-featured').addEventListener('click', () => {
    store.filters.category = '';
    switchView('explore');
  });

  // Volver desde detalle
  document.getElementById('btn-detail-back').addEventListener('click', () => {
    switchView('explore');
  });

  // Filtros del catálogo
  const searchInput = document.getElementById('filter-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      store.filters.search = e.target.value;
      applyExploreFilters();
    });
  }

  const catSelect = document.getElementById('filter-category-select');
  if (catSelect) {
    catSelect.addEventListener('change', (e) => {
      store.filters.category = e.target.value;
      applyExploreFilters();
    });
  }

  const typeSelect = document.getElementById('filter-type-select');
  if (typeSelect) {
    typeSelect.addEventListener('change', (e) => {
      store.filters.type = e.target.value;
      applyExploreFilters();
    });
  }

  const availSelect = document.getElementById('filter-avail-select');
  if (availSelect) {
    availSelect.addEventListener('change', (e) => {
      store.filters.availability = e.target.value;
      applyExploreFilters();
    });
  }

  const maxPriceInput = document.getElementById('filter-max-price');
  if (maxPriceInput) {
    maxPriceInput.addEventListener('input', (e) => {
      store.filters.maxPrice = e.target.value;
      applyExploreFilters();
    });
  }

  const sortSelect = document.getElementById('explore-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      store.filters.sortBy = e.target.value;
      applyExploreFilters();
    });
  }

  const resetBtn = document.getElementById('btn-reset-filters');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      store.filters = { search: '', category: '', type: '', availability: '', maxPrice: '', sortBy: 'recent' };
      renderExploreView();
      showToast('Filtros reiniciados', 'info');
    });
  }

  const emptyResetBtn = document.getElementById('btn-empty-reset');
  if (emptyResetBtn) {
    emptyResetBtn.addEventListener('click', () => {
      store.filters = { search: '', category: '', type: '', availability: '', maxPrice: '', sortBy: 'recent' };
      renderExploreView();
    });
  }

  // Pestañas (Tabs) en Paneles
  document.querySelectorAll('.tabs-nav').forEach(nav => {
    nav.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTabId = btn.getAttribute('data-tab');
        const container = nav.closest('.container');

        nav.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        container.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        const targetPanel = container.querySelector(`#tab-${targetTabId}`);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });
  });

  // Botón Crear Producto en Panel Estudiante
  const openCreateBtn = document.getElementById('btn-open-create-product');
  if (openCreateBtn) {
    openCreateBtn.addEventListener('click', () => openManageProductModal());
  }

  // Guardar Cambios de Perfil de Emprendimiento
  const profForm = document.getElementById('student-profile-form');
  if (profForm) {
    profForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = store.currentUser;
      if (!user) return;
      user.venture = {
        name: document.getElementById('prof-venture-name').value.trim(),
        desc: document.getElementById('prof-venture-desc').value.trim(),
        grade: document.getElementById('prof-grade').value.trim(),
        contact: document.getElementById('prof-contact').value.trim(),
        skills: document.getElementById('prof-skills').value.trim()
      };
      // Actualizar en store y en lista de usuarios
      const idx = store.data.users.findIndex(u => u.id === user.id);
      if (idx !== -1) store.data.users[idx] = user;
      store.saveData();
      store.setSession(user);
      showToast('Perfil de emprendimiento guardado con éxito');
      renderStudentDashboard();
      renderRoleBar();
      renderHeaderNav();
    });
  }

  // Explorar más desde Panel de Cliente
  const browseMoreBtn = document.getElementById('btn-client-browse-more');
  if (browseMoreBtn) {
    browseMoreBtn.addEventListener('click', () => switchView('explore'));
  }

  // Añadir Categoría por Administrador
  const addCatForm = document.getElementById('admin-add-category-form');
  if (addCatForm) {
    addCatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('new-cat-name').value.trim();
      const desc = document.getElementById('new-cat-desc').value.trim();
      if (!name) return;

      const newId = 'cat-' + (store.data.categories.length + 1);
      store.data.categories.push({
        id: newId,
        name,
        desc: desc || 'Categoría escolar',
        active: true,
        icon: '🏷️'
      });
      store.saveData();
      addCatForm.reset();
      showToast(`Categoría "${name}" creada y añadida al catálogo`);
      renderAdminDashboard();
    });
  }

  // Formulario de Envío de Pedido
  const orderForm = document.getElementById('form-submit-order');
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const prodId = document.getElementById('order-product-id').value;
      const product = store.getProductById(prodId);
      if (!product || !store.currentUser) return;

      const qty = parseInt(document.getElementById('order-quantity').value, 10) || 1;
      const date = document.getElementById('order-date').value;
      const notes = document.getElementById('order-notes').value;

      const newOrder = {
        id: 'ORD-' + Math.floor(1000 + Math.random() * 9000),
        productId: prodId,
        clientId: store.currentUser.id,
        sellerId: product.sellerId,
        quantity: qty,
        unitPrice: product.price,
        totalAmount: qty * product.price,
        deliveryDate: date,
        notes: notes,
        status: 'pendiente',
        createdAt: new Date().toISOString().split('T')[0]
      };

      store.data.orders.push(newOrder);
      store.saveData();

      closeModal('modal-order');
      showToast(`¡Solicitud #${newOrder.id} enviada al estudiante con éxito!`);
      if (store.currentUser.role === 'cliente') {
        switchView('client');
      }
    });
  }

  // Formulario de Reporte de Publicación
  const reportForm = document.getElementById('form-report');
  if (reportForm) {
    reportForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const prodId = document.getElementById('report-product-id').value;
      const reason = document.getElementById('report-reason').value;
      const details = document.getElementById('report-details').value;

      const newReport = {
        id: 'REP-' + Math.floor(100 + Math.random() * 900),
        productId: prodId,
        reporterId: store.currentUser ? store.currentUser.id : 'visitante',
        reason,
        details,
        status: 'pendiente',
        createdAt: new Date().toISOString().split('T')[0]
      };

      store.data.reports.push(newReport);
      store.saveData();

      closeModal('modal-report');
      showToast('Reporte enviado al equipo de administración para revisión', 'info');
    });
  }

  // Formulario de Publicar / Editar Producto
  const productForm = document.getElementById('form-manage-product');
  if (productForm) {
    productForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('manage-product-id').value;
      const title = document.getElementById('prod-form-title').value.trim();
      const type = document.getElementById('prod-form-type').value;
      const category = document.getElementById('prod-form-category').value;
      const price = parseFloat(document.getElementById('prod-form-price').value);
      const availability = document.getElementById('prod-form-avail').value;
      const prepTime = document.getElementById('prod-form-time').value.trim();
      const desc = document.getElementById('prod-form-desc').value.trim();
      let image = document.getElementById('prod-form-image').value.trim();

      if (!image) {
        if (category === 'Repostería') image = ASSET_IMAGES.cupcakes;
        else if (category === 'Diseño digital' || category === 'Manualidades') image = ASSET_IMAGES.toteBag;
        else if (category === 'Arte') image = ASSET_IMAGES.ceramicMug;
        else image = ASSET_IMAGES.hero;
      }

      if (id) {
        // Editar existente
        const existing = store.getProductById(id);
        if (existing) {
          existing.title = title;
          existing.type = type;
          existing.category = category;
          existing.price = price;
          existing.availability = availability;
          existing.prepTime = prepTime;
          existing.desc = desc;
          existing.image = image;
          showToast(`Publicación "${title}" actualizada`);
        }
      } else {
        // Crear nuevo
        const newProd = {
          id: 'prod-' + (store.data.products.length + 1),
          title,
          type,
          category,
          price,
          sellerId: store.currentUser.id,
          availability,
          prepTime,
          desc,
          image,
          featured: false,
          status: 'activo',
          createdAt: new Date().toISOString().split('T')[0]
        };
        store.data.products.unshift(newProd);
        showToast(`¡Tu publicación "${title}" ya está activa en el catálogo!`);
      }

      store.saveData();
      closeModal('modal-create-product');
      renderStudentDashboard();
    });
  }

  // Formulario de Login
  const loginForm = document.getElementById('form-login');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim().toLowerCase();
      const pass = document.getElementById('login-password').value;

      const user = store.data.users.find(u => u.email.toLowerCase() === email && u.password === pass);
      if (user) {
        if (user.status === 'suspendido') {
          showToast('Esta cuenta institucional ha sido suspendida. Contacta al docente tutor.', 'error');
          return;
        }
        store.setSession(user);
        closeModal('modal-login');
        loginForm.reset();
        showToast(`¡Bienvenido(a), ${user.name}!`);

        if (user.role === 'estudiante') switchView('student');
        else if (user.role === 'admin') switchView('admin');
        else switchView('client');
      } else {
        showToast('Credenciales incorrectas. Prueba con los accesos directos abajo.', 'error');
      }
    });
  }

  // Accesos directos de login rápido
  document.getElementById('btn-quick-login-client').addEventListener('click', () => {
    store.setSession(store.getUserById('user-client-1'));
    closeModal('modal-login');
    showToast('Ingresaste como Cliente (Camila Torres)');
    switchView('client');
  });

  document.getElementById('btn-quick-login-student').addEventListener('click', () => {
    store.setSession(store.getUserById('user-student-1'));
    closeModal('modal-login');
    showToast('Ingresaste como Estudiante Emprendedor (Mateo Rivas)');
    switchView('student');
  });

  document.getElementById('btn-quick-login-admin').addEventListener('click', () => {
    store.setSession(store.getUserById('user-admin-1'));
    closeModal('modal-login');
    showToast('Ingresaste como Administrador (Prof. Alberto)');
    switchView('admin');
  });

  // Formulario de Registro
  const regForm = document.getElementById('form-register');
  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-name').value.trim();
      const email = document.getElementById('reg-email').value.trim().toLowerCase();
      const pass = document.getElementById('reg-password').value;
      const role = document.getElementById('reg-role').value;

      const exists = store.data.users.some(u => u.email.toLowerCase() === email);
      if (exists) {
        showToast('Ese correo ya se encuentra registrado.', 'error');
        return;
      }

      const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
      const newUser = {
        id: 'user-' + (store.data.users.length + 1),
        name,
        email,
        password: pass,
        role,
        avatar: initials || 'CM',
        status: 'activo'
      };

      if (role === 'estudiante') {
        newUser.venture = {
          name: `Emprendimiento de ${name}`,
          desc: 'Creaciones artesanales de emprendimiento estudiantil.',
          grade: 'Educación Secundaria',
          contact: email,
          skills: 'Creatividad, artesanía y diseño'
        };
      }

      store.data.users.push(newUser);
      store.saveData();
      store.setSession(newUser);

      closeModal('modal-register');
      regForm.reset();
      showToast(`¡Cuenta creada con éxito! Bienvenido(a) ${name}`);

      if (role === 'estudiante') switchView('student');
      else switchView('client');
    });
  }

  // Olvidó contraseña modal
  const forgotBtn = document.getElementById('btn-forgot-password');
  if (forgotBtn) {
    forgotBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal('modal-login');
      openModal('modal-forgot');
    });
  }

  const forgotForm = document.getElementById('form-forgot');
  if (forgotForm) {
    forgotForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('forgot-email').value;
      closeModal('modal-forgot');
      showToast(`Instrucciones simuladas enviadas a ${email}`, 'info');
      forgotForm.reset();
    });
  }

  // Footer Links
  document.querySelector('.footer-nav-home')?.addEventListener('click', (e) => {
    e.preventDefault();
    switchView('home');
  });

  document.querySelector('.footer-nav-explore')?.addEventListener('click', (e) => {
    e.preventDefault();
    store.filters.category = '';
    switchView('explore');
  });

  document.querySelector('.footer-nav-categories')?.addEventListener('click', (e) => {
    e.preventDefault();
    switchView('explore');
  });
}

// ==========================================================================
// 13. ARRANQUE DE LA APLICACIÓN (INIT)
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  switchView('home');
  console.log('CREAMARKET iniciado correctamente.');
});
