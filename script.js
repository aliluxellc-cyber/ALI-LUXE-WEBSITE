const pageLoader = document.getElementById('pageLoader');
const cursor = document.getElementById('customCursor');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
const cartCountElement = document.getElementById('cartCount');
const productDetailContainer = document.getElementById('productDetail');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');

const products = {
  'hydrating-glow-face-cream': {
    title: 'Hydrating Glow Face Cream',
    category: 'Beauty',
    price: 18.99,
    description: 'Deep hydration with hyaluronic acid and vitamin E for soft radiant skin.',
    details: ['Softening texture', 'Radiance boosting', 'Daily nourishment'],
    imageClass: 'hydrating-glow-face-cream',
  },
  'vitamin-c-brightening-serum': {
    title: 'Vitamin C Brightening Serum',
    category: 'Beauty',
    price: 16.99,
    description: 'Brightens skin tone while reducing fine lines and dark spots.',
    details: ['Vitamin C complex', 'Lightweight formula', 'Radiant finish'],
    imageClass: 'vitamin-c-brightening-serum',
  },
  'luxury-hair-repair-shampoo': {
    title: 'Luxury Hair Repair Shampoo',
    category: 'Beauty',
    price: 14.99,
    description: 'Strengthens damaged hair with argan oil and keratin.',
    details: ['Repairing formula', 'Soft lather', 'Sleek shine'],
    imageClass: 'luxury-hair-repair-shampoo',
  },
  'silk-touch-conditioner': {
    title: 'Silk Touch Conditioner',
    category: 'Beauty',
    price: 13.99,
    description: 'Restores shine and smoothness for luxurious hair.',
    details: ['Silky finish', 'Nourishing blend', 'Frizz control'],
    imageClass: 'silk-touch-conditioner',
  },
  'spf50-sun-protection-cream': {
    title: 'SPF50 Sun Protection Cream',
    category: 'Beauty',
    price: 15.99,
    description: 'Lightweight daily sunscreen with broad-spectrum protection.',
    details: ['SPF50 protection', 'Non-greasy', 'Hydrating finish'],
    imageClass: 'spf50-sun-protection-cream',
  },
  'natural-aloe-face-mask': {
    title: 'Natural Aloe Face Mask',
    category: 'Beauty',
    price: 12.99,
    description: 'Hydrating overnight facial mask.',
    details: ['Calming aloe', 'Deep hydration', 'Soft glow'],
    imageClass: 'natural-aloe-face-mask',
  },
  'premium-eyelash-kit': {
    title: 'Premium Eyelash Kit',
    category: 'Beauty',
    price: 11.99,
    description: 'Reusable luxury eyelashes with adhesive included.',
    details: ['Reusable lashes', 'Precision applicator', 'Subtle volume'],
    imageClass: 'premium-eyelash-kit',
  },
  'luxury-body-lotion': {
    title: 'Luxury Body Lotion',
    category: 'Beauty',
    price: 14.99,
    description: 'Soft fragrance and deep moisturization.',
    details: ['Velvety finish', 'Skin smoothing', 'Daily nourishment'],
    imageClass: 'luxury-body-lotion',
  },
  'luxury-womens-dress': {
    title: "Luxury Women's Dress",
    category: 'Fashion',
    price: 19.99,
    description: 'Elegant evening dress with premium breathable fabric.',
    details: ['Flowing silhouette', 'Soft fabric', 'Evening luxury'],
    imageClass: 'luxury-womens-dress',
  },
  'classic-mens-polo-shirt': {
    title: "Classic Men's Polo Shirt",
    category: 'Fashion',
    price: 17.99,
    description: 'Soft cotton blend for everyday luxury.',
    details: ['Breathable fabric', 'Refined collar', 'Relaxed fit'],
    imageClass: 'classic-mens-polo-shirt',
  },
  'luxury-leather-sneakers': {
    title: 'Luxury Leather Sneakers',
    category: 'Fashion',
    price: 19.99,
    description: 'Modern design with lightweight comfort.',
    details: ['Premium vegan leather', 'Cushioned sole', 'Minimal silhouette'],
    imageClass: 'luxury-leather-sneakers',
  },
  'premium-hoodie': {
    title: 'Premium Hoodie',
    category: 'Fashion',
    price: 18.99,
    description: 'Minimalist oversized luxury hoodie.',
    details: ['Soft cotton blend', 'Relaxed fit', 'Minimal design'],
    imageClass: 'premium-hoodie',
  },
  'luxury-handbag': {
    title: 'Luxury Handbag',
    category: 'Fashion',
    price: 19.99,
    description: 'Premium vegan leather with gold hardware.',
    details: ['Structured finish', 'Gold accents', 'Versatile design'],
    imageClass: 'luxury-handbag',
  },
  'leather-wallet': {
    title: 'Leather Wallet',
    category: 'Fashion',
    price: 15.99,
    description: 'Slim modern design.',
    details: ['Compact fit', 'Premium leather', 'Organized pockets'],
    imageClass: 'leather-wallet',
  },
  'classic-mens-watch': {
    title: "Classic Men's Watch",
    category: 'Watches',
    price: 19.99,
    description: 'Japanese movement with a gold-finished dial.',
    details: ['Scratch-resistant glass', 'Water resistant', 'Timeless luxury'],
    imageClass: 'classic-mens-watch',
  },
  'luxury-womens-watch': {
    title: "Luxury Women's Watch",
    category: 'Watches',
    price: 18.99,
    description: 'Minimal elegant design with gold finish.',
    details: ['Gold finish', 'Elegant dial', 'Daily luxury'],
    imageClass: 'luxury-womens-watch',
  },
  'luxury-necklace': {
    title: 'Luxury Necklace',
    category: 'Jewelry',
    price: 16.99,
    description: 'Gold plated elegance with a delicate finish.',
    details: ['Fine chain', 'Subtle shine', 'Versatile layering piece'],
    imageClass: 'luxury-necklace',
  },
  'luxury-earrings': {
    title: 'Luxury Earrings',
    category: 'Jewelry',
    price: 12.99,
    description: 'Crystal finish.',
    details: ['Delicate sparkle', 'Modern shape', 'Everyday glamour'],
    imageClass: 'luxury-earrings',
  },
  'bracelet-collection': {
    title: 'Bracelet Collection',
    category: 'Jewelry',
    price: 14.99,
    description: 'Luxury layered bracelets.',
    details: ['Stackable style', 'Mixed textures', 'Premium finish'],
    imageClass: 'bracelet-collection',
  },
  'luxury-rings': {
    title: 'Luxury Rings',
    category: 'Jewelry',
    price: 13.99,
    description: 'Minimal premium finish.',
    details: ['Sleek metal', 'Modern style', 'Stackable design'],
    imageClass: 'luxury-rings',
  },
  'royal-oud': {
    title: 'Royal Oud',
    category: 'Perfumes',
    price: 19.99,
    description: 'Rich oriental fragrance.',
    details: ['Long-lasting scent', 'Creamy oud base', 'Elegant packaging'],
    imageClass: 'royal-oud',
  },
  'ocean-breeze': {
    title: 'Ocean Breeze',
    category: 'Perfumes',
    price: 17.99,
    description: 'Fresh aquatic notes.',
    details: ['Sea air accord', 'Light drydown', 'Pure clarity'],
    imageClass: 'ocean-breeze',
  },
  'midnight-rose': {
    title: 'Midnight Rose',
    category: 'Perfumes',
    price: 18.99,
    description: 'Luxury floral perfume.',
    details: ['Velvety rose', 'Soft musk', 'Evening elegance'],
    imageClass: 'midnight-rose',
  },
  'amber-gold': {
    title: 'Amber Gold',
    category: 'Perfumes',
    price: 19.99,
    description: 'Warm amber and vanilla.',
    details: ['Golden amber', 'Creamy vanilla', 'Rich finish'],
    imageClass: 'amber-gold',
  },
};

function getCart() {
  try {
    return JSON.parse(localStorage.getItem('aliLuxeCart') || '{}');
  } catch (error) {
    return {};
  }
}

function saveCart(cart) {
  localStorage.setItem('aliLuxeCart', JSON.stringify(cart));
}

function updateCartCount() {
  const cart = getCart();
  const quantity = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
  if (cartCountElement) {
    cartCountElement.textContent = quantity;
  }
}
function bindCartButtons() {
  document.body.addEventListener('click', (event) => {
    const button = event.target.closest('.add-cart');
    if (!button) return;
    const slug = button.dataset.product;
    if (!slug) return;
    addToCart(slug);
    const originalText = button.textContent;
    button.textContent = 'Added';
    button.disabled = true;
    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 900);
  });
}



function addToCart(slug) {
  const cart = getCart();
  if (!products[slug]) return;
  if (!cart[slug]) {
    cart[slug] = { ...products[slug], qty: 1 };
  } else {
    cart[slug].qty += 1;
  }
  saveCart(cart);
  updateCartCount();
}

function renderProductDetail() {
  if (!productDetailContainer) return;
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('product');
  const product = products[slug];
  if (!product) {
    productDetailContainer.innerHTML = '<p class="detail-fallback">Product not found. Please choose another luxury item.</p>';
    return;
  }
  productDetailContainer.innerHTML = `
    <div class="product-hero ${product.imageClass}"></div>
    <div class="detail-copy">
      <span class="eyebrow">${product.category}</span>
      <h1>${product.title}</h1>
      <p>${product.description}</p>
      <div class="product-price">$${product.price.toFixed(2)}</div>
      <button class="button button-primary add-cart" data-product="${slug}">Add to Cart</button>
      <div class="product-features">
        ${product.details.map((detail) => `<div>${detail}</div>`).join('')}
      </div>
    </div>
  `;
}

function renderCart() {
  if (!cartItemsContainer || !cartTotalElement) return;
  const cart = getCart();
  const entries = Object.entries(cart);
  if (!entries.length) {
    cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is currently empty.</p>';
    cartTotalElement.textContent = '$0.00';
    return;
  }
  let total = 0;
  cartItemsContainer.innerHTML = entries
    .map(([slug, item]) => {
      const lineTotal = item.price * item.qty;
      total += lineTotal;
      return `
        <div class="cart-item">
          <div class="cart-item-image ${item.imageClass}"></div>
          <div class="cart-item-copy">
            <h3>${item.title}</h3>
            <span>Qty: ${item.qty}</span>
            <span>Price: $${lineTotal.toFixed(2)}</span>
          </div>
        </div>
      `;
    })
    .join('');
  cartTotalElement.textContent = `$${total.toFixed(2)}`;
}

window.addEventListener('load', () => {
  if (pageLoader) {
    pageLoader.classList.add('loaded');
    setTimeout(() => {
      pageLoader.style.display = 'none';
    }, 800);
  }
  updateCartCount();
  renderProductDetail();
  renderCart();
  bindCartButtons();
});

document.addEventListener('mousemove', (event) => {
  if (cursor) {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  }
});

menuToggle?.addEventListener('click', () => {
  mobileMenu?.classList.add('active');
  mobileMenu?.setAttribute('aria-hidden', 'false');
});

mobileClose?.addEventListener('click', () => {
  mobileMenu?.classList.remove('active');
  mobileMenu?.setAttribute('aria-hidden', 'true');
});

mobileMenu?.addEventListener('click', (event) => {
  if (event.target === mobileMenu) {
    mobileMenu.classList.remove('active');
    mobileMenu.setAttribute('aria-hidden', 'true');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    mobileMenu?.classList.remove('active');
    mobileMenu?.setAttribute('aria-hidden', 'true');
  }
});

document.addEventListener('mouseover', (event) => {
  if (event.target.closest('button, a, .product-card, .category-card, .newsletter-form input')) {
    cursor.style.width = '34px';
    cursor.style.height = '34px';
  }
});

document.addEventListener('mouseout', (event) => {
  if (event.target.closest('button, a, .product-card, .category-card, .newsletter-form input')) {
    cursor.style.width = '18px';
    cursor.style.height = '18px';
  }
});

const revealElements = document.querySelectorAll('.fade-up');
const options = {
  threshold: 0.15,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, options);

revealElements.forEach((element) => observer.observe(element));
