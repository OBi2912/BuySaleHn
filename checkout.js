// Sample product data with real images and delivery times (same as main page)
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
        deliveryTime: "1-2 business days"
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
        deliveryTime: "2-4 business days"
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
        deliveryTime: "2-3 business days"
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
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');
const registerLink = document.getElementById('registerLink');

// Cart Modal Elements
const cartModal = document.getElementById('cartModal');
const closeCartModal = document.getElementById('closeCartModal');
const cartItems = document.getElementById('cartItems');
const cartSummary = document.getElementById('cartSummary');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const continueShoppingBtn = document.getElementById('continueShoppingBtn');

// Checkout Elements
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

// Language state
let currentLanguage = localStorage.getItem('buysalehn_language') || 'en';

// Language translations (same as main page)
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
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    showNotification(`${product.title} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    updateCartModal();
}

function updateCartItemQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }

    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        updateCartCount();
        updateCartModal();
        updateCheckoutPage();
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
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateCartItemQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="updateCartItemQuantity(${item.id}, parseInt(this.value))">
                    <button class="quantity-btn" onclick="updateCartItemQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">
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
    cartModal.style.display = 'block';
}

function updateCheckoutPage() {
    // Update order items
    orderItems.innerHTML = cart.map(item => `
        <div class="order-item">
            <div class="order-item-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="order-item-details">
                <div class="order-item-title">${item.title} (x${item.quantity})</div>
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

// Language functions
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    localStorage.setItem('buysalehn_language', currentLanguage);
    updateLanguage();
    updateCheckoutContent();
}

function updateLanguage() {
    const langText = currentLanguage === 'en' ? 'EN' : 'ES';
    langBtn.innerHTML = `<i class="fas fa-globe"></i> ${langText}`;
}

function updateCheckoutContent() {
    const t = translations[currentLanguage];

    // Update header elements
    loginBtn.innerHTML = `<i class="fas fa-user"></i> ${t.login}`;

    // Update checkout form labels
    document.querySelector('label[for="firstName"]').textContent = t.firstName;
    document.querySelector('label[for="lastName"]').textContent = t.lastName;
    document.querySelector('label[for="email"]').textContent = t.email;
    document.querySelector('label[for="phone"]').textContent = t.phone;
    document.querySelector('label[for="address"]').textContent = t.address;
    document.querySelector('label[for="city"]').textContent = t.city;
    document.querySelector('label[for="zipCode"]').textContent = t.zipCode;

    // Update section headers
    document.querySelectorAll('.checkout-section h3')[0].textContent = t.shippingInfo;
    document.querySelectorAll('.checkout-section h3')[1].textContent = t.paymentMethod;

    // Update buttons
    backToCartBtn.innerHTML = `<i class="fas fa-arrow-left"></i> ${t.backToCart}`;
    placeOrderBtn.innerHTML = `<i class="fas fa-lock"></i> ${t.placeOrder}`;

}

// Setup event listeners
function setupEventListeners() {
    // Language toggle
    langBtn.addEventListener('click', toggleLanguage);

    // Escape key to close modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close any open modals
            if (loginModal.style.display === 'block') {
                loginModal.style.display = 'none';
            }
            if (cartModal.style.display === 'block') {
                cartModal.style.display = 'none';
            }
        }
    });

    // Cart button
    cartBtn.addEventListener('click', () => {
        showCartModal();
    });

    // Login modal
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    // Login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple validation (in a real app, this would be server-side)
        if (username && password) {
            alert(`Welcome back, ${username}! (This is a demo - login not actually processed)`);
            loginModal.style.display = 'none';
            loginForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Register link (placeholder)
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Registration feature coming soon! (This is a demo)');
    });

    // Cart modal buttons
    closeCartModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    checkoutBtn.addEventListener('click', () => {
        cartModal.style.display = 'none';
        // Stay on checkout page
    });

    continueShoppingBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    // Checkout page buttons
    backToCartBtn.addEventListener('click', () => {
        showCartModal();
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
        alert('Order placed successfully! (This is a demo - in a real app, this would process the payment and create an order)');
        cart = [];
        saveCart();
        updateCartCount();
        showNotification('Order placed successfully!');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
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

// Initialize the checkout page
function init() {
    setupEventListeners();
    updateCartCount();
    updateCheckoutPage();
    updateLanguage(); // Initialize language button
    updateCheckoutContent(); // Initialize checkout content with current language
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);