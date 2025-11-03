// Sample product data with real images and delivery times
const products = [
    {
        id: 1,
        title: "Wireless Bluetooth Headphones",
        price: 89.99,
        category: "electronics",
        description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
        deliveryTime: "2-3 business days"
    },
    {
        id: 2,
        title: "Cotton T-Shirt",
        price: 19.99,
        category: "clothing",
        description: "Comfortable 100% cotton t-shirt available in multiple colors and sizes.",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
        deliveryTime: "1-2 business days",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },
    {
        id: 3,
        title: "Garden Hose 50ft",
        price: 34.99,
        category: "home",
        description: "Durable garden hose with brass connectors and kink-resistant design.",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
        deliveryTime: "3-5 business days"
    },
    {
        id: 4,
        title: "Yoga Mat",
        price: 29.99,
        category: "sports",
        description: "Non-slip yoga mat perfect for home workouts and studio classes.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
        deliveryTime: "2-3 business days"
    },
    {
        id: 5,
        title: "Programming Book",
        price: 49.99,
        category: "books",
        description: "Comprehensive guide to modern web development with practical examples.",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
        deliveryTime: "1-2 business days"
    },
    {
        id: 6,
        title: "Car Air Freshener",
        price: 7.99,
        category: "automotive",
        description: "Long-lasting car air freshener with fresh linen scent.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        deliveryTime: "1-2 business days"
    },
    {
        id: 7,
        title: "Smartphone Stand",
        price: 15.99,
        category: "electronics",
        description: "Adjustable smartphone stand for desk or bedside use.",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop",
        deliveryTime: "1-2 business days"
    },
    {
        id: 8,
        title: "Running Shoes",
        price: 79.99,
        category: "sports",
        description: "Lightweight running shoes with cushioning and breathable mesh.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
        deliveryTime: "2-4 business days",
        sizes: ["6", "7", "8", "9", "10", "11", "12", "13"]
    },
    {
        id: 9,
        title: "Coffee Mug Set",
        price: 24.99,
        category: "home",
        description: "Set of 4 ceramic coffee mugs with modern design.",
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=300&fit=crop",
        deliveryTime: "2-3 business days"
    },
    {
        id: 10,
        title: "Wireless Mouse",
        price: 39.99,
        category: "electronics",
        description: "Ergonomic wireless mouse with customizable buttons and RGB lighting.",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop",
        deliveryTime: "1-2 business days"
    },
    {
        id: 11,
        title: "Denim Jeans",
        price: 59.99,
        category: "clothing",
        description: "Classic fit denim jeans with comfortable stretch fabric.",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop",
        deliveryTime: "2-3 business days",
        sizes: ["28", "30", "32", "34", "36", "38", "40"]
    },
    {
        id: 12,
        title: "Mystery Novel",
        price: 14.99,
        category: "books",
        description: "Gripping mystery novel with unexpected twists and turns.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
        deliveryTime: "1-2 business days"
    }
];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryBtns = document.querySelectorAll('.category-btn');
const loginBtn = document.getElementById('loginBtn');
const sellBtn = document.getElementById('sellBtn');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const langBtn = document.getElementById('langBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');
const registerLink = document.getElementById('registerLink');

// Product Modal Elements
const productModal = document.getElementById('productModal');
const closeProductModal = document.getElementById('closeProductModal');
const productDetailImage = document.getElementById('productDetailImage');
const productDetailTitle = document.getElementById('productDetailTitle');
const productDetailPrice = document.getElementById('productDetailPrice');
const productDetailCategory = document.getElementById('productDetailCategory');
const productDetailDelivery = document.getElementById('productDetailDelivery');
const productDetailDescription = document.getElementById('productDetailDescription');
const buyNowBtn = document.getElementById('buyNowBtn');
const contactSellerBtn = document.getElementById('contactSellerBtn');

// Cart Modal Elements
const cartModal = document.getElementById('cartModal');
const closeCartModal = document.getElementById('closeCartModal');
const cartItems = document.getElementById('cartItems');
const cartSummary = document.getElementById('cartSummary');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const continueShoppingBtn = document.getElementById('continueShoppingBtn');

// Checkout Page Elements
const checkoutPage = document.getElementById('checkoutPage');
const backToCartBtn = document.getElementById('backToCartBtn');
const shippingForm = document.getElementById('shippingForm');
const paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');
const cardDetails = document.getElementById('cardDetails');
const orderItems = document.getElementById('orderItems');
const orderSubtotal = document.getElementById('orderSubtotal');
const orderShipping = document.getElementById('orderShipping');
const orderTax = document.getElementById('orderTax');
const orderTotal = document.getElementById('orderTotal');
const placeOrderBtn = document.getElementById('placeOrderBtn');

// Cart state - load from localStorage if available
let cart = JSON.parse(localStorage.getItem('buysalehn_cart')) || [];

// Size selection state
let selectedSize = null;

// Language state
let currentLanguage = localStorage.getItem('buysalehn_language') || 'en';

// Language translations
const translations = {
    en: {
        // Header
        sellItem: 'Sell Item',
        searchPlaceholder: 'Search items...',
        login: 'Login',
        allItems: 'All Items',
        electronics: 'Electronics',
        clothing: 'Clothing',
        homeGarden: 'Home & Garden',
        sports: 'Sports',
        books: 'Books',
        automotive: 'Automotive',
        other: 'Other',

        // Product details
        addToCart: 'Add to Cart',
        contactSeller: 'Contact Seller',
        delivery: 'Estimated delivery',

        // Cart
        shoppingCart: 'Shopping Cart',
        yourCartEmpty: 'Your cart is empty',
        addItemsMessage: 'Add some items to get started!',
        total: 'Total',
        proceedToCheckout: 'Proceed to Checkout',
        continueShopping: 'Continue Shopping',

        // Checkout
        checkout: 'Checkout',
        backToCart: 'Back to Cart',
        shippingInfo: 'Shipping Information',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        phone: 'Phone Number',
        address: 'Address',
        city: 'City',
        zipCode: 'ZIP Code',
        paymentMethod: 'Payment Method',
        placeOrder: 'Place Order',

        // Footer
        aboutUs: 'About Us',
        howToBuy: 'How to Buy',
        howToSell: 'How to Sell',
        contactUs: 'Contact Us',
        terms: 'Terms of Service',
        privacy: 'Privacy Policy',
        quickLinks: 'Quick Links',
        contactInfo: 'Contact Info',

        // Messages
        loginSuccess: 'Welcome back',
        demoMessage: ' (This is a demo - login not actually processed)',
        orderSuccess: 'Order placed successfully!',
        itemAdded: 'added to cart!'
    },
    es: {
        // Header
        sellItem: 'Vender Artículo',
        searchPlaceholder: 'Buscar artículos...',
        login: 'Iniciar Sesión',
        allItems: 'Todos los Artículos',
        electronics: 'Electrónicos',
        clothing: 'Ropa',
        homeGarden: 'Hogar y Jardín',
        sports: 'Deportes',
        books: 'Libros',
        automotive: 'Automotriz',
        other: 'Otros',

        // Product details
        addToCart: 'Agregar al Carrito',
        contactSeller: 'Contactar Vendedor',
        delivery: 'Entrega estimada',

        // Cart
        shoppingCart: 'Carrito de Compras',
        yourCartEmpty: 'Tu carrito está vacío',
        addItemsMessage: '¡Agrega algunos artículos para comenzar!',
        total: 'Total',
        proceedToCheckout: 'Proceder al Pago',
        continueShopping: 'Continuar Comprando',

        // Checkout
        checkout: 'Pagar',
        backToCart: 'Volver al Carrito',
        shippingInfo: 'Información de Envío',
        firstName: 'Nombre',
        lastName: 'Apellido',
        email: 'Correo Electrónico',
        phone: 'Número de Teléfono',
        address: 'Dirección',
        city: 'Ciudad',
        zipCode: 'Código Postal',
        paymentMethod: 'Método de Pago',
        placeOrder: 'Realizar Pedido',

        // Footer
        aboutUs: 'Sobre Nosotros',
        howToBuy: 'Cómo Comprar',
        howToSell: 'Cómo Vender',
        contactUs: 'Contáctanos',
        terms: 'Términos de Servicio',
        privacy: 'Política de Privacidad',
        quickLinks: 'Enlaces Rápidos',
        contactInfo: 'Información de Contacto',

        // Messages
        loginSuccess: 'Bienvenido de vuelta',
        demoMessage: ' (Esto es una demo - el inicio de sesión no se procesa realmente)',
        orderSuccess: '¡Pedido realizado exitosamente!',
        itemAdded: '¡agregado al carrito!'
    }
};

// Cart functions
function addToCart(productId, selectedSize = null) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // For items with sizes, we need to treat different sizes as separate items
    const cartItemKey = selectedSize ? `${productId}-${selectedSize}` : productId.toString();
    const existingItem = cart.find(item =>
        selectedSize ? (item.id === productId && item.selectedSize === selectedSize) : item.id === productId
    );

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1,
            selectedSize: selectedSize,
            cartItemKey: cartItemKey
        });
    }

    saveCart();
    updateCartCount();
    const sizeText = selectedSize ? ` (${selectedSize})` : '';
    showNotification(`${product.title}${sizeText} ${translations[currentLanguage].itemAdded}`);
}

function removeFromCart(cartItemKey) {
    cart = cart.filter(item => item.cartItemKey !== cartItemKey);
    saveCart();
    updateCartCount();
    updateCartModal();
}

function updateCartItemQuantity(cartItemKey, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(cartItemKey);
        return;
    }

    const item = cart.find(item => item.cartItemKey === cartItemKey);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        updateCartCount();
        updateCartModal();
    }
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
}

function saveCart() {
    localStorage.setItem('buysalehn_cart', JSON.stringify(cart));
}

function updateCartModal() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <small>Add some items to get started!</small>
            </div>
        `;
        cartSummary.style.display = 'none';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.title}${item.selectedSize ? ` (${item.selectedSize})` : ''}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateCartItemQuantity('${item.cartItemKey}', ${item.quantity - 1})">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="updateCartItemQuantity('${item.cartItemKey}', parseInt(this.value))">
                    <button class="quantity-btn" onclick="updateCartItemQuantity('${item.cartItemKey}', ${item.quantity + 1})">+</button>
                    <button class="remove-item" onclick="removeFromCart('${item.cartItemKey}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
    cartSummary.style.display = 'block';
}

function showCartModal() {
    updateCartModal();
    cartModal.classList.add('show');
}

function showCheckoutPage() {
    cartModal.style.display = 'none';
    checkoutPage.style.display = 'block';
    updateCheckoutPage();
}

function hideCheckoutPage() {
    checkoutPage.style.display = 'none';
    showCartModal();
}

function updateCheckoutPage() {
    // Update order items
    orderItems.innerHTML = cart.map(item => `
        <div class="order-item">
            <div class="order-item-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="order-item-details">
                <div class="order-item-title">${item.title}${item.selectedSize ? ` (${item.selectedSize})` : ''} (x${item.quantity})</div>
                <div class="order-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
            </div>
        </div>
    `).join('');

    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 5.99; // Free shipping over $50
    const tax = subtotal * 0.12; // 12% tax
    const total = subtotal + shipping + tax;

    orderSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    orderShipping.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    orderTax.textContent = `$${tax.toFixed(2)}`;
    orderTotal.innerHTML = `<strong>$${total.toFixed(2)}</strong>`;
}

function showNotification(message) {
    // Simple notification (could be enhanced with a proper notification system)
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        font-weight: 500;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function showNotificationTranslated(key) {
    const message = translations[currentLanguage][key] || key;
    showNotification(message);
}

// Language functions
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    localStorage.setItem('buysalehn_language', currentLanguage);
    updateLanguage();
    updatePageContent();
}

function updateLanguage() {
    const langText = currentLanguage === 'en' ? 'EN' : 'ES';
    langBtn.innerHTML = `<i class="fas fa-globe"></i> ${langText}`;
}

function updatePageContent() {
    const t = translations[currentLanguage];

    // Update header elements
    sellBtn.innerHTML = `<i class="fas fa-plus"></i> ${t.sellItem}`;
    searchInput.placeholder = t.searchPlaceholder;
    loginBtn.innerHTML = `<i class="fas fa-user"></i> ${t.login}`;

    // Update category buttons
    const categoryMap = {
        'all': t.allItems,
        'electronics': t.electronics,
        'clothing': t.clothing,
        'home': t.homeGarden,
        'sports': t.sports,
        'books': t.books,
        'automotive': t.automotive,
        'other': t.other
    };

    categoryBtns.forEach(btn => {
        const category = btn.dataset.category;
        if (categoryMap[category]) {
            btn.textContent = categoryMap[category];
        }
    });

    // Update footer if it exists
    const footerSections = document.querySelectorAll('.footer-section h4');
    footerSections.forEach(section => {
        switch(section.textContent) {
            case 'Quick Links':
            case 'Enlaces Rápidos':
                section.textContent = t.quickLinks;
                break;
            case 'Contact Info':
            case 'Información de Contacto':
                section.textContent = t.contactInfo;
                break;
        }
    });

    // Update footer links
    const footerLinks = document.querySelectorAll('.footer-section ul li a');
    footerLinks.forEach(link => {
        const linkText = link.textContent;
        if (linkText.includes('About Us') || linkText.includes('Sobre Nosotros')) {
            link.textContent = t.aboutUs;
        } else if (linkText.includes('How to Buy') || linkText.includes('Cómo Comprar')) {
            link.textContent = t.howToBuy;
        } else if (linkText.includes('How to Sell') || linkText.includes('Cómo Vender')) {
            link.textContent = t.howToSell;
        } else if (linkText.includes('Contact Us') || linkText.includes('Contáctanos')) {
            link.textContent = t.contactUs;
        } else if (linkText.includes('Terms') || linkText.includes('Términos')) {
            link.textContent = t.terms;
        } else if (linkText.includes('Privacy') || linkText.includes('Privacidad')) {
            link.textContent = t.privacy;
        }
    });

}

// Add notification styles
const notificationStyles = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Current filter state
let currentCategory = 'all';
let currentSearchTerm = '';

// Initialize the application
function init() {
    displayProducts(products);
    setupEventListeners();
    updateCartCount(); // Initialize cart count display
    updateLanguage(); // Initialize language button
    updatePageContent(); // Initialize page content with current language
}

// Display products in the grid
function displayProducts(productsToShow) {
    productsGrid.innerHTML = '';

    if (productsToShow.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <h3>No products found</h3>
                <p>Try adjusting your search or category filter.</p>
            </div>
        `;
        return;
    }

    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create a product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.title}" loading="lazy">
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <span class="product-category">${capitalizeFirstLetter(product.category)}</span>
            <p class="product-description">${product.description}</p>
        </div>
    `;

    // Add click event listener to show product details
    card.addEventListener('click', () => {
        showProductDetails(product);
    });

    return card;
}

// Filter products based on category and search term
function filterProducts() {
    let filteredProducts = products;

    // Filter by category
    if (currentCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === currentCategory);
    }

    // Filter by search term
    if (currentSearchTerm.trim() !== '') {
        const searchTerm = currentSearchTerm.toLowerCase();
        filteredProducts = filteredProducts.filter(product =>
            product.title.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }

    displayProducts(filteredProducts);
}

// Setup event listeners
function setupEventListeners() {
    // Language toggle
    langBtn.addEventListener('click', toggleLanguage);

    // Escape key to close modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close any open modals
            if (loginModal.classList.contains('show')) {
                loginModal.classList.remove('show');
            }
            if (cartModal.classList.contains('show')) {
                cartModal.classList.remove('show');
            }
            if (productModal.classList.contains('show')) {
                productModal.classList.remove('show');
            }
        }
    });

    // Search functionality
    searchBtn.addEventListener('click', () => {
        currentSearchTerm = searchInput.value;
        filterProducts();
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            currentSearchTerm = searchInput.value;
            filterProducts();
        }
    });

    // Category filtering
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            currentCategory = btn.dataset.category;
            filterProducts();
        });
    });

    // Sell button
    sellBtn.addEventListener('click', () => {
        window.location.href = 'sell.html';
    });

    // Login modal
    loginBtn.addEventListener('click', () => {
        loginModal.classList.add('show');
    });

    closeModal.addEventListener('click', () => {
        loginModal.classList.remove('show');
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.classList.remove('show');
        }
    });

    // Login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple validation (in a real app, this would be server-side)
        if (username && password) {
            alert(`${translations[currentLanguage].loginSuccess}, ${username}!${translations[currentLanguage].demoMessage}`);
            loginModal.classList.remove('show');
            loginForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Register link
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.classList.remove('show');
        window.location.href = 'register.html';
    });

    // Product modal
    closeProductModal.addEventListener('click', () => {
        productModal.classList.remove('show');
    });

    // Close product modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === productModal) {
            productModal.classList.remove('show');
        }
    });

    // Cart button
    cartBtn.addEventListener('click', () => {
        showCartModal();
    });

    // Buy now button (in product modal)
    buyNowBtn.addEventListener('click', () => {
        const productTitle = productDetailTitle.textContent;
        const product = products.find(p => p.title === productTitle);
        if (product) {
            // Check if product requires size selection
            if (product.sizes && product.sizes.length > 0 && !selectedSize) {
                alert('Please select a size before adding to cart.');
                return;
            }

            addToCart(product.id, selectedSize);
            productModal.classList.remove('show');
        }
    });

    // Contact seller button
    contactSellerBtn.addEventListener('click', () => {
        alert('Contact seller feature coming soon! (This is a demo - you would be redirected to messaging)');
    });

    // Cart modal buttons
    closeCartModal.addEventListener('click', () => {
        cartModal.classList.remove('show');
    });

    checkoutBtn.addEventListener('click', () => {
        // Save cart to localStorage before navigating
        localStorage.setItem('buysalehn_cart', JSON.stringify(cart));
        window.location.href = 'checkout.html';
    });

    continueShoppingBtn.addEventListener('click', () => {
        cartModal.classList.remove('show');
    });

    // Checkout page buttons
    backToCartBtn.addEventListener('click', () => {
        hideCheckoutPage();
    });

    placeOrderBtn.addEventListener('click', () => {
        // Validate form
        if (!shippingForm.checkValidity()) {
            alert('Please fill in all required shipping information.');
            return;
        }

        // Check if cart is empty
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        // Simulate order placement
        alert(`${translations[currentLanguage].orderSuccess} (This is a demo - in a real app, this would process the payment and create an order)`);
        cart = [];
        saveCart();
        updateCartCount();
        checkoutPage.style.display = 'none';
        showNotification(translations[currentLanguage].orderSuccess);
    });

    // Payment method selection
    paymentMethods.forEach(method => {
        method.addEventListener('change', () => {
            if (method.value === 'card') {
                cardDetails.style.display = 'block';
            } else {
                cardDetails.style.display = 'none';
            }
        });
    });
}

// Show product details in modal
function showProductDetails(product) {
    productDetailImage.src = product.image;
    productDetailImage.alt = product.title;
    productDetailTitle.textContent = product.title;
    productDetailPrice.textContent = `$${product.price.toFixed(2)}`;
    productDetailCategory.textContent = capitalizeFirstLetter(product.category);
    productDetailDelivery.textContent = product.deliveryTime;
    productDetailDescription.textContent = product.description;

    // Handle size selection for clothing/footwear
    const sizeSelector = document.getElementById('sizeSelector');
    const sizeOptions = document.getElementById('sizeOptions');

    if (product.sizes && product.sizes.length > 0) {
        // Show size selector
        sizeSelector.style.display = 'block';
        selectedSize = product.sizes[0]; // Default to first size

        // Create size options
        sizeOptions.innerHTML = product.sizes.map(size => `
            <button class="size-option ${size === selectedSize ? 'selected' : ''}" data-size="${size}">
                ${size}
            </button>
        `).join('');

        // Add click handlers for size selection
        sizeOptions.querySelectorAll('.size-option').forEach(option => {
            option.addEventListener('click', () => {
                // Remove selected class from all options
                sizeOptions.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('selected'));
                // Add selected class to clicked option
                option.classList.add('selected');
                selectedSize = option.dataset.size;
            });
        });
    } else {
        // Hide size selector for products without sizes
        sizeSelector.style.display = 'none';
        selectedSize = null;
    }

    productModal.classList.add('show');
}

// Function for footer category links
function filterByCategory(category) {
    // Update current category
    currentCategory = category;

    // Update UI - remove active class from all category buttons
    categoryBtns.forEach(btn => btn.classList.remove('active'));

    // Add active class to the corresponding category button
    const categoryBtn = document.querySelector(`[data-category="${category}"]`);
    if (categoryBtn) {
        categoryBtn.classList.add('active');
    }

    // Clear search and filter products
    currentSearchTerm = '';
    searchInput.value = '';
    filterProducts();

    // Scroll to top to show results
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Utility function to capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);