const productData = [
  {
    slug: 'hydrating-glow-face-cream',
    title: 'Hydrating Glow Face Cream',
    category: 'Beauty',
    price: 48,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    description: 'A luxurious daily moisturizer enriched with botanical extracts to revive skin with a luminous, velvet finish.',
    details: ['Hyaluronic glow', 'Radiant hydration', 'Lightweight, non-greasy finish'],
    sizes: ['50ml', '100ml'],
    colors: ['Ivory', 'Champagne'],
  },
  {
    slug: 'vitamin-c-brightening-serum',
    title: 'Vitamin C Brightening Serum',
    category: 'Beauty',
    price: 52,
    image: 'https://images.unsplash.com/photo-1512418490979-92798cec0f6e?auto=format&fit=crop&w=1200&q=80',
    description: 'A potent antioxidant serum that helps reduce discoloration and reveal a youthful, luminous complexion.',
    details: ['Radiance booster', 'Even skin tone', 'Silky absorbent formula'],
    sizes: ['30ml', '60ml'],
    colors: ['Pearl', 'Gold'],
  },
  {
    slug: 'silk-satin-scarf',
    title: 'Silk Satin Scarf',
    category: 'Fashion',
    price: 68,
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80',
    description: 'A premium silk scarf with a gentle sheen designed to dress up any ensemble with elegant movement.',
    details: ['Sumptuous silk', 'Versatile styling', 'Golden finish'],
    sizes: ['Standard'],
    colors: ['Midnight', 'Dune'],
  },
  {
    slug: 'luxury-leather-sneakers',
    title: 'Luxury Leather Sneakers',
    category: 'Fashion',
    price: 148,
    image: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d8?auto=format&fit=crop&w=1200&q=80',
    description: 'Minimalist, soft-leather sneakers designed for elevated everyday dressing and effortless comfort.',
    details: ['Premium leather', 'Cushioning sole', 'Refined silhouette'],
    sizes: ['7', '8', '9', '10', '11'],
    colors: ['Ivory', 'Slate'],
  },
  {
    slug: 'suede-shoulder-handbag',
    title: 'Suede Shoulder Handbag',
    category: 'Fashion',
    price: 198,
    image: 'https://images.unsplash.com/photo-1534280213174-3e0eaaafabc0?auto=format&fit=crop&w=1200&q=80',
    description: 'A sculptural shoulder bag with soft suede texture and polished gold hardware.',
    details: ['Structured design', 'Soft suede', 'Luxurious hardware'],
    sizes: ['One size'],
    colors: ['Caramel', 'Onyx'],
  },
  {
    slug: 'signature-gold-necklace',
    title: 'Signature Gold Necklace',
    category: 'Jewelry',
    price: 128,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    description: 'A delicate gold chain necklace crafted with precision for understated luxury.',
    details: ['Fine chain', 'Subtle shine', 'Timeless wear'],
    sizes: ['16 in', '18 in'],
    colors: ['Gold'],
  },
  {
    slug: 'crystal-drop-earrings',
    title: 'Crystal Drop Earrings',
    category: 'Jewelry',
    price: 98,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
    description: 'Elegant drop earrings with shimmering crystals for an evening-ready glow.',
    details: ['Draping silhouette', 'Sparkling crystals', 'Polished finish'],
    sizes: ['One size'],
    colors: ['Pearl', 'Gold'],
  },
  {
    slug: 'minimalist-gold-ring',
    title: 'Minimalist Gold Ring',
    category: 'Jewelry',
    price: 72,
    image: 'https://images.unsplash.com/photo-1516594798945-5f3b91bc7f11?auto=format&fit=crop&w=1200&q=80',
    description: 'A slim gold ring with refined geometry for everyday luxury and stacking elegance.',
    details: ['Sleek profile', 'Polished metal', 'Stackable design'],
    sizes: ['5', '6', '7', '8'],
    colors: ['Gold'],
  },
  {
    slug: 'royal-oud-parfum',
    title: 'Royal Oud Parfum',
    category: 'Perfumes',
    price: 122,
    image: 'https://images.unsplash.com/photo-1517457373958-d6f2b0a1b7d0?auto=format&fit=crop&w=1200&q=80',
    description: 'A rich oud fragrance layered with amber and cedarwood for a bold luxury signature.',
    details: ['Warm oud', 'Amber depth', 'Refined finish'],
    sizes: ['50ml', '100ml'],
    colors: ['Noir'],
  },
  {
    slug: 'midnight-rose-parfum',
    title: 'Midnight Rose Parfum',
    category: 'Perfumes',
    price: 112,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    description: 'A floral evening fragrance combining velvety rose with soft musk and vanilla.',
    details: ['Velvet rose', 'Soft musk', 'Elegant drydown'],
    sizes: ['50ml', '100ml'],
    colors: ['Blush'],
  },
  {
    slug: 'amber-gold-parfum',
    title: 'Amber Gold Parfum',
    category: 'Perfumes',
    price: 118,
    image: 'https://images.unsplash.com/photo-1520975915894-0912d7178f41?auto=format&fit=crop&w=1200&q=80',
    description: 'A golden amber fragrance with warm vanilla, satin woods, and luminous character.',
    details: ['Amber warmth', 'Velvet vanilla', 'Radiant finish'],
    sizes: ['50ml', '100ml'],
    colors: ['Gold'],
  },
  {
    slug: 'velvet-cuff-bracelet',
    title: 'Velvet Cuff Bracelet',
    category: 'Jewelry',
    price: 88,
    image: 'https://images.unsplash.com/photo-1516594798945-5f3b91bc7f11?auto=format&fit=crop&w=1200&q=80',
    description: 'A bold cuff bracelet with polished metal and soft details for dramatic layering.',
    details: ['Statement design', 'Polished metal', 'Comfort fit'],
    sizes: ['One size'],
    colors: ['Gold', 'Silver'],
  },
];

const CART_KEY = 'aliLuxeCart';

const elements = {
  cartCount: document.getElementById('cartCount'),
  cartToggle: document.getElementById('cartToggle'),
  cartPanel: document.getElementById('cartPanel'),
  cartClose: document.getElementById('cartClose'),
  cartItems: document.getElementById('cartItems'),
  cartSubTotal: document.getElementById('cartSubTotal'),
  productGrid: document.getElementById('productGrid'),
  categoryProducts: document.getElementById('categoryProducts'),
  productDetail: document.getElementById('productDetail'),
  checkoutCartItems: document.getElementById('checkoutCartItems'),
  checkoutTotal: document.getElementById('checkoutTotal'),
  checkoutForm: document.getElementById('checkoutForm'),
  checkoutSteps: document.querySelectorAll('.checkout-step'),
  pageTitle: document.querySelector('.page-title'),
};

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || '{}');
  } catch (error) {
    return {};
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function formatMoney(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

function getCartQuantity() {
  const cart = getCart();
  return Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
}

function updateCartCount() {
  if (!elements.cartCount) return;
  const count = getCartQuantity();
  elements.cartCount.textContent = count;
}

function openCart() {
  if (elements.cartPanel) {
    elements.cartPanel.classList.add('open');
  }
}

function closeCart() {
  if (elements.cartPanel) {
    elements.cartPanel.classList.remove('open');
  }
}

function toggleCart() {
  if (elements.cartPanel) {
    elements.cartPanel.classList.toggle('open');
  }
}

function addToCart(slug, metadata = {}) {
  const product = productData.find((item) => item.slug === slug);
  if (!product) return;
  const cart = getCart();
  const key = slug + JSON.stringify(metadata);
  if (!cart[key]) {
    cart[key] = {
      ...product,
      qty: 1,
      variant: metadata,
    };
  } else {
    cart[key].qty += 1;
  }
  saveCart(cart);
  updateCartCount();
  renderCartPanel();
}

function removeFromCart(key) {
  const cart = getCart();
  delete cart[key];
  saveCart(cart);
  updateCartCount();
  renderCartPanel();
  renderCheckoutCart();
}

function changeCartQty(key, delta) {
  const cart = getCart();
  if (!cart[key]) return;
  cart[key].qty = Math.max(1, cart[key].qty + delta);
  saveCart(cart);
  updateCartCount();
  renderCartPanel();
  renderCheckoutCart();
}

function renderCartPanel() {
  if (!elements.cartItems) return;
  const cart = getCart();
  const entries = Object.entries(cart);
  if (!entries.length) {
    elements.cartItems.innerHTML = '<p class="cart-empty">Your cart is currently empty. Add a signature item to begin.</p>';
    if (elements.cartSubTotal) elements.cartSubTotal.textContent = formatMoney(0);
    return;
  }

  let total = 0;
  elements.cartItems.innerHTML = entries
    .map(([key, item]) => {
      const itemTotal = item.price * item.qty;
      total += itemTotal;
      const variantLabel = item.variant && Object.keys(item.variant).length
        ? Object.entries(item.variant).map(([name, value]) => `${name}: ${value}`).join(' · ')
        : '';
      return `
        <div class="cart-item">
          <div class="cart-item-image" style="background-image:url('${item.image}')"></div>
          <div class="cart-item-body">
            <p class="cart-item-title">${item.title}</p>
            <p class="cart-item-meta">${variantLabel || item.category}</p>
            <div class="cart-item-quantity">
              <div class="quantity-controls">
                <button class="quantity-button cart-decrease" data-key='${key}' aria-label="Decrease quantity">-</button>
                <span>${item.qty}</span>
                <button class="quantity-button cart-increase" data-key='${key}' aria-label="Increase quantity">+</button>
              </div>
              <span class="cart-item-price">${formatMoney(itemTotal)}</span>
            </div>
            <button class="button button-secondary product-action" data-remove='${key}'>Remove</button>
          </div>
        </div>
      `;
    })
    .join('');

  if (elements.cartSubTotal) {
    elements.cartSubTotal.textContent = formatMoney(total);
  }
}

function renderProductCards(products, container) {
  if (!container) return;
  if (!products.length) {
    container.innerHTML = '<p class="section-copy">No products match your search criteria. Please try another filter.</p>';
    return;
  }
  container.innerHTML = products
    .map((product) => `
      <article class="product-card">
        <div class="product-image" style="background-image:url('${product.image}')"></div>
        <div class="product-copy">
          <span class="product-category">${product.category}</span>
          <h3><a href="product.html?product=${product.slug}">${product.title}</a></h3>
          <p>${product.description}</p>
          <div class="product-meta">
            <span class="product-price">${formatMoney(product.price)}</span>
            <button class="button button-primary product-action add-to-cart" data-product="${product.slug}">Add to Cart</button>
          </div>
        </div>
      </article>
    `)
    .join('');
}

function renderCategoryProducts(category) {
  if (!elements.categoryProducts) return;
  const filtered = productData.filter((product) => product.category === category);
  renderProductCards(filtered, elements.categoryProducts);
}

function renderAllProducts() {
  if (!elements.productGrid) return;
  renderProductCards(productData, elements.productGrid);
}

function renderCheckoutCart() {
  if (!elements.checkoutCartItems) return;
  const cart = getCart();
  const entries = Object.entries(cart);
  if (!entries.length) {
    elements.checkoutCartItems.innerHTML = '<p class="section-copy">Your cart is empty. Add a few items before continuing to checkout.</p>';
    if (elements.checkoutTotal) elements.checkoutTotal.textContent = formatMoney(0);
    return;
  }

  let total = 0;
  elements.checkoutCartItems.innerHTML = entries
    .map(([key, item]) => {
      const itemTotal = item.price * item.qty;
      total += itemTotal;
      const variantLabel = item.variant && Object.keys(item.variant).length
        ? Object.entries(item.variant).map(([name, value]) => `${name}: ${value}`).join(' · ')
        : '';
      return `
        <div class="checkout-summary-item">
          <span>${item.title}${variantLabel ? ` • ${variantLabel}` : ''}</span>
          <span>${formatMoney(itemTotal)}</span>
        </div>
      `;
    })
    .join('');
  if (elements.checkoutTotal) elements.checkoutTotal.textContent = formatMoney(total);
}

function bindAddToCartButtons() {
  document.body.addEventListener('click', (event) => {
    const button = event.target.closest('.add-to-cart');
    if (!button) return;
    const slug = button.dataset.product;
    if (!slug) return;
    addToCart(slug);
    button.textContent = 'Added';
    button.disabled = true;
    setTimeout(() => {
      button.textContent = 'Add to Cart';
      button.disabled = false;
    }, 900);
  });
}

function bindCartControls() {
  if (elements.cartToggle) {
    elements.cartToggle.addEventListener('click', toggleCart);
  }
  if (elements.cartClose) {
    elements.cartClose.addEventListener('click', closeCart);
  }

  document.body.addEventListener('click', (event) => {
    const decrease = event.target.closest('.cart-decrease');
    const increase = event.target.closest('.cart-increase');
    const remove = event.target.closest('[data-remove]');
    if (decrease) {
      changeCartQty(decrease.dataset.key, -1);
    }
    if (increase) {
      changeCartQty(increase.dataset.key, 1);
    }
    if (remove) {
      removeFromCart(remove.dataset.remove);
    }
  });
}

function initializeMobileMenu() {
  const mobileToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');
  if (!mobileToggle || !mobileMenu || !mobileClose) return;
  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.add('open');
  });
  mobileClose.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
}

function setupPageNavigation() {
  const currentPath = window.location.pathname.split('/').pop();
  const links = document.querySelectorAll('.main-nav a');
  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    }
    if (currentPath === '' && href === 'index.html') {
      link.classList.add('active');
    }
  });
}

function renderProductDetailPage() {
  if (!elements.productDetail) return;
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('product');
  const product = productData.find((item) => item.slug === slug);
  if (!product) {
    elements.productDetail.innerHTML = `
      <section class="page-hero">
        <div class="container">
          <div class="page-copy">
            <span class="eyebrow">Product not found</span>
            <h1>We couldn\'t locate this item.</h1>
            <p>Browse the collection to discover premium products crafted for luxury living.</p>
            <a class="button button-primary" href="all-products.html">Browse All Products</a>
          </div>
        </div>
      </section>
    `;
    return;
  }

  elements.productDetail.innerHTML = `
    <section class="page-hero">
      <div class="container page-hero-inner">
        <div class="page-copy">
          <span class="eyebrow">${product.category}</span>
          <h1>${product.title}</h1>
          <p>${product.description}</p>
          <div class="product-detail-meta">
            <span class="product-price">${formatMoney(product.price)}</span>
          </div>
          <div class="product-detail-panel">
            <div class="product-detail-copy">
              <label class="form-label" for="productSize">Size</label>
              <select id="productSize" class="checkout-select">
                ${product.sizes.map((size) => `<option value="${size}">${size}</option>`).join('')}
              </select>
              <label class="form-label" for="productColor">Color</label>
              <select id="productColor" class="checkout-select">
                ${product.colors.map((color) => `<option value="${color}">${color}</option>`).join('')}
              </select>
              <button class="button button-primary product-action add-to-cart" data-product="${product.slug}">Add to Cart</button>
            </div>
          </div>
        </div>
        <div class="product-detail-image" style="background-image:url('${product.image}')"></div>
      </div>
    </section>
    <section class="container">
      <div class="section-heading">
        <h2>Details & Ingredients</h2>
        <p class="section-subtitle">A refined blend of premium materials, inspired for everyday elegance.</p>
      </div>
      <div class="special-grid">
        ${product.details.map((detail) => `
          <div class="feature-card">
            <h3>${detail}</h3>
            <p>A luxurious finish designed to elevate your daily ritual with premium sensibility.</p>
          </div>
        `).join('')}
      </div>
    </section>
  `;

  const detailButton = document.querySelector('.product-detail-copy .add-to-cart');
  if (detailButton) {
    detailButton.addEventListener('click', () => {
      const size = document.getElementById('productSize')?.value || product.sizes[0];
      const color = document.getElementById('productColor')?.value || product.colors[0];
      addToCart(product.slug, { size, color });
    });
  }
}

function initCheckoutForm() {
  if (!elements.checkoutForm) return;
  const steps = Array.from(elements.checkoutSteps);
  let activeStep = 0;
  const updateSteps = () => {
    steps.forEach((step, index) => {
      step.classList.toggle('active', index === activeStep);
    });
  };

  const nextButtons = elements.checkoutForm.querySelectorAll('[data-next]');
  const prevButtons = elements.checkoutForm.querySelectorAll('[data-prev]');

  nextButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeStep = Math.min(steps.length - 1, activeStep + 1);
      updateSteps();
    });
  });

  prevButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeStep = Math.max(0, activeStep - 1);
      updateSteps();
    });
  });

  elements.checkoutForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const orderSection = document.getElementById('orderComplete');
    if (orderSection) {
      orderSection.innerHTML = `
        <div class="checkout-step active">
          <div class="section-heading">
            <span class="eyebrow">Order Confirmed</span>
            <h2>Thank you for choosing ALI LUXE.</h2>
            <p>Your order has been received and will be processed shortly.</p>
          </div>
          <p class="section-copy">We have sent a confirmation to the email address provided. Your luxury shipment will arrive in premium packaging.</p>
        </div>
      `;
    }
    localStorage.removeItem(CART_KEY);
    updateCartCount();
    renderCartPanel();
    renderCheckoutCart();
  });

  updateSteps();
}

function setupAllProductsPage() {
  const filterInput = document.getElementById('productSearch');
  const categorySelect = document.getElementById('productCategory');
  const sortSelect = document.getElementById('productSort');
  const counter = document.getElementById('productCount');

  if (!elements.productGrid || !filterInput || !categorySelect || !sortSelect) return;

  const applyFilters = () => {
    const query = filterInput.value.toLowerCase();
    const category = categorySelect.value;
    const sort = sortSelect.value;
    let filtered = productData.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category;
      const matchesText = product.title.toLowerCase().includes(query) || product.description.toLowerCase().includes(query);
      return matchesCategory && matchesText;
    });
    if (sort === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sort === 'name-asc') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }
    renderProductCards(filtered, elements.productGrid);
    if (counter) counter.textContent = `${filtered.length} items`;    
  };

  categorySelect.innerHTML = ['All', 'Beauty', 'Fashion', 'Jewelry', 'Perfumes']
    .map((option) => `<option value="${option}">${option}</option>`)
    .join('');

  filterInput.addEventListener('input', applyFilters);
  categorySelect.addEventListener('change', applyFilters);
  sortSelect.addEventListener('change', applyFilters);
  applyFilters();
}

function initPage() {
  setupPageNavigation();
  updateCartCount();
  renderCartPanel();
  bindAddToCartButtons();
  bindCartControls();
  initializeMobileMenu();

  const pageType = document.body.dataset.page;

  switch (pageType) {
    case 'all-products':
      setupAllProductsPage();
      break;
    case 'beauty':
    case 'fashion':
    case 'jewelry':
    case 'perfumes':
      renderCategoryProducts(pageType === 'all-products' ? 'Beauty' : pageType.charAt(0).toUpperCase() + pageType.slice(1));
      break;
    case 'product':
      renderProductDetailPage();
      break;
    case 'checkout':
      renderCheckoutCart();
      initCheckoutForm();
      break;
    case 'shop':
      setupAllProductsPage();
      break;
    default:
      break;
  }
}

window.addEventListener('DOMContentLoaded', initPage);
