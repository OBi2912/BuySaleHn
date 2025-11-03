// DOM Elements
const registerForm = document.getElementById('registerForm');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const strengthFill = document.getElementById('strengthFill');
const strengthText = document.getElementById('strengthText');
const successModal = document.getElementById('successModal');
const startShoppingBtn = document.getElementById('startShoppingBtn');
const setupProfileBtn = document.getElementById('setupProfileBtn');
const cancelBtn = document.getElementById('cancelBtn');

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

        // Registration page
        createAccount: 'Create Your Account',
        joinBuysalehn: 'Join BuySaleHn and start buying and selling in Honduras',
        personalInfo: 'Personal Information',
        firstName: 'First Name',
        lastName: 'Last Name',
        emailAddress: 'Email Address',
        emailHelp: 'This will be your username for logging in',
        phoneNumber: 'Phone Number',
        dateOfBirth: 'Date of Birth',
        location: 'Location',
        city: 'City',
        neighborhood: 'Neighborhood',
        accountSecurity: 'Account Security',
        password: 'Password',
        passwordHelp: 'Minimum 8 characters with letters and numbers',
        confirmPassword: 'Confirm Password',
        passwordStrength: 'Password strength',
        weak: 'Weak',
        fair: 'Fair',
        good: 'Good',
        accountType: 'Account Type',
        buyerAccount: 'Buyer Account',
        buyerDesc: 'Shop for items and make purchases',
        sellerAccount: 'Seller Account',
        sellerDesc: 'List items for sale and manage your store',
        bothAccount: 'Both Buyer & Seller',
        bothDesc: 'Shop and sell items on the platform',
        communicationPrefs: 'Communication Preferences',
        emailNotifications: 'Email notifications for new messages and offers',
        smsNotifications: 'SMS notifications for important updates',
        marketingEmails: 'Marketing emails and special offers',
        termsPrivacy: 'Terms & Privacy',
        termsAgree: 'I agree to the Terms of Service and Privacy Policy',
        ageConfirm: 'I confirm I am 18 years or older',
        dataProcessing: 'I consent to the processing of my personal data for account purposes',
        cancel: 'Cancel',
        createAccount: 'Create Account',

        // Success modal
        accountCreated: 'Account Created Successfully!',
        welcomeMessage: 'Welcome to BuySaleHn! Your account has been created and you can now start buying and selling.',
        whatsNext: "What's next?",
        completeProfile: 'Complete your profile with a photo',
        verifyEmail: 'Verify your email address',
        startBrowsing: 'Start browsing or listing items',
        setupPayments: 'Set up payment methods for buying/selling',
        startShopping: 'Start Shopping',
        setupProfile: 'Setup Profile',

        // Validation messages
        passwordsDontMatch: 'Passwords do not match',
        passwordTooWeak: 'Password is too weak. Please use at least 8 characters with letters and numbers.',
        emailExists: 'An account with this email already exists.',
        registrationSuccess: 'Registration successful! Welcome to BuySaleHn.',
        fillAllFields: 'Please fill in all required fields.',
        invalidEmail: 'Please enter a valid email address.',
        invalidPhone: 'Please enter a valid phone number.',
        underage: 'You must be 18 years or older to register.'
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

        // Registration page
        createAccount: 'Crea Tu Cuenta',
        joinBuysalehn: 'Únete a BuySaleHn y comienza a comprar y vender en Honduras',
        personalInfo: 'Información Personal',
        firstName: 'Nombre',
        lastName: 'Apellido',
        emailAddress: 'Dirección de Correo',
        emailHelp: 'Este será tu nombre de usuario para iniciar sesión',
        phoneNumber: 'Número de Teléfono',
        dateOfBirth: 'Fecha de Nacimiento',
        location: 'Ubicación',
        city: 'Ciudad',
        neighborhood: 'Barrio',
        accountSecurity: 'Seguridad de la Cuenta',
        password: 'Contraseña',
        passwordHelp: 'Mínimo 8 caracteres con letras y números',
        confirmPassword: 'Confirmar Contraseña',
        passwordStrength: 'Fortaleza de la contraseña',
        weak: 'Débil',
        fair: 'Regular',
        good: 'Fuerte',
        accountType: 'Tipo de Cuenta',
        buyerAccount: 'Cuenta de Comprador',
        buyerDesc: 'Compra artículos y realiza compras',
        sellerAccount: 'Cuenta de Vendedor',
        sellerDesc: 'Lista artículos en venta y administra tu tienda',
        bothAccount: 'Comprador y Vendedor',
        bothDesc: 'Compra y vende artículos en la plataforma',
        communicationPrefs: 'Preferencias de Comunicación',
        emailNotifications: 'Notificaciones por email de nuevos mensajes y ofertas',
        smsNotifications: 'Notificaciones SMS para actualizaciones importantes',
        marketingEmails: 'Emails de marketing y ofertas especiales',
        termsPrivacy: 'Términos y Privacidad',
        termsAgree: 'Acepto los Términos de Servicio y la Política de Privacidad',
        ageConfirm: 'Confirmo que tengo 18 años o más',
        dataProcessing: 'Consiento el procesamiento de mis datos personales para fines de cuenta',
        cancel: 'Cancelar',
        createAccount: 'Crear Cuenta',

        // Success modal
        accountCreated: '¡Cuenta Creada Exitosamente!',
        welcomeMessage: '¡Bienvenido a BuySaleHn! Tu cuenta ha sido creada y ahora puedes comenzar a comprar y vender.',
        whatsNext: '¿Qué sigue?',
        completeProfile: 'Completa tu perfil con una foto',
        verifyEmail: 'Verifica tu dirección de email',
        startBrowsing: 'Comienza a navegar o listar artículos',
        setupPayments: 'Configura métodos de pago para comprar/vender',
        startShopping: 'Comenzar a Comprar',
        setupProfile: 'Configurar Perfil',

        // Validation messages
        passwordsDontMatch: 'Las contraseñas no coinciden',
        passwordTooWeak: 'La contraseña es demasiado débil. Por favor usa al menos 8 caracteres con letras y números.',
        emailExists: 'Ya existe una cuenta con este email.',
        registrationSuccess: '¡Registro exitoso! Bienvenido a BuySaleHn.',
        fillAllFields: 'Por favor completa todos los campos requeridos.',
        invalidEmail: 'Por favor ingresa un email válido.',
        invalidPhone: 'Por favor ingresa un número de teléfono válido.',
        underage: 'Debes tener 18 años o más para registrarte.'
    }
};

// Cart state - load from localStorage if available
let cart = JSON.parse(localStorage.getItem('buysalehn_cart')) || [];

// Initialize the registration page
function init() {
    setupEventListeners();
    updateCartCount();
    updateLanguage();
    updateRegisterPageContent();

    // Initialize password strength checker
    passwordInput.addEventListener('input', checkPasswordStrength);
}

// Setup event listeners
function setupEventListeners() {
    // Language toggle
    langBtn.addEventListener('click', toggleLanguage);

    // Escape key to close modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (loginModal.style.display === 'block') {
                loginModal.style.display = 'none';
            }
            if (cartModal.style.display === 'block') {
                cartModal.style.display = 'none';
            }
            if (successModal.style.display === 'block') {
                successModal.style.display = 'none';
            }
        }
    });

    // Form submission
    registerForm.addEventListener('submit', handleFormSubmit);

    // Password confirmation validation
    confirmPasswordInput.addEventListener('input', validatePasswordMatch);

    // Success modal buttons
    startShoppingBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    setupProfileBtn.addEventListener('click', () => {
        successModal.style.display = 'none';
        alert('Profile setup feature coming soon! (This is a demo)');
    });

    // Cancel button
    cancelBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to cancel registration?')) {
            window.location.href = 'index.html';
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
        if (e.target === successModal) {
            successModal.style.display = 'none';
        }
    });

    // Login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            alert(`${translations[currentLanguage].loginSuccess}, ${username}!${translations[currentLanguage].demoMessage}`);
            loginModal.style.display = 'none';
            loginForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Register link (placeholder)
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'none';
        // Already on register page
    });

    // Cart modal buttons
    closeCartModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    checkoutBtn.addEventListener('click', () => {
        localStorage.setItem('buysalehn_cart', JSON.stringify(cart));
        window.location.href = 'checkout.html';
    });

    continueShoppingBtn.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });
}

// Language functions
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    localStorage.setItem('buysalehn_language', currentLanguage);
    updateLanguage();
    updateRegisterPageContent();
}

function updateLanguage() {
    const langText = currentLanguage === 'en' ? 'EN' : 'ES';
    langBtn.innerHTML = `<i class="fas fa-globe"></i> ${langText}`;
}

function updateRegisterPageContent() {
    const t = translations[currentLanguage];

    // Update header elements
    searchInput.placeholder = t.searchPlaceholder;
    loginBtn.innerHTML = `<i class="fas fa-user"></i> ${t.login}`;

    // Update registration page content
    document.querySelector('.register-header h1').textContent = t.createAccount;
    document.querySelector('.register-header p').textContent = t.joinBuysalehn;

    // Update form sections
    document.querySelectorAll('.form-section h3')[0].textContent = t.personalInfo;
    document.querySelectorAll('.form-section h3')[1].textContent = t.location;
    document.querySelectorAll('.form-section h3')[2].textContent = t.accountSecurity;
    document.querySelectorAll('.form-section h3')[3].textContent = t.accountType;
    document.querySelectorAll('.form-section h3')[4].textContent = t.communicationPrefs;
    document.querySelectorAll('.form-section h3')[5].textContent = t.termsPrivacy;

    // Update form labels
    document.querySelector('label[for="firstName"]').textContent = `${t.firstName} *`;
    document.querySelector('label[for="lastName"]').textContent = `${t.lastName} *`;
    document.querySelector('label[for="email"]').textContent = `${t.emailAddress} *`;
    document.querySelector('small[style*="email"]').textContent = t.emailHelp;
    document.querySelector('label[for="phone"]').textContent = `${t.phoneNumber} *`;
    document.querySelector('label[for="dateOfBirth"]').textContent = t.dateOfBirth;
    document.querySelector('label[for="city"]').textContent = `${t.city} *`;
    document.querySelector('label[for="neighborhood"]').textContent = t.neighborhood;
    document.querySelector('label[for="password"]').textContent = `${t.password} *`;
    document.querySelector('small[style*="password"]').textContent = t.passwordHelp;
    document.querySelector('label[for="confirmPassword"]').textContent = `${t.confirmPassword} *`;

    // Update password strength text
    updatePasswordStrengthText();

    // Update account type labels
    document.querySelectorAll('.account-type label div strong')[0].textContent = t.buyerAccount;
    document.querySelectorAll('.account-type label div small')[0].textContent = t.buyerDesc;
    document.querySelectorAll('.account-type label div strong')[1].textContent = t.sellerAccount;
    document.querySelectorAll('.account-type label div small')[1].textContent = t.sellerDesc;
    document.querySelectorAll('.account-type label div strong')[2].textContent = t.bothAccount;
    document.querySelectorAll('.account-type label div small')[2].textContent = t.bothDesc;

    // Update communication preferences
    document.querySelectorAll('.preference-item label')[0].textContent = t.emailNotifications;
    document.querySelectorAll('.preference-item label')[1].textContent = t.smsNotifications;
    document.querySelectorAll('.preference-item label')[2].textContent = t.marketingEmails;

    // Update terms and privacy
    document.querySelectorAll('.terms-checkbox label')[0].innerHTML = `${t.termsAgree} <a href="#" target="_blank">Terms of Service</a> and <a href="#" target="_blank">Privacy Policy</a>`;
    document.querySelectorAll('.terms-checkbox label')[1].textContent = t.ageConfirm;
    document.querySelectorAll('.terms-checkbox label')[2].textContent = t.dataProcessing;

    // Update buttons
    cancelBtn.innerHTML = `<i class="fas fa-times"></i> ${t.cancel}`;
    document.querySelector('.register-btn').innerHTML = `<i class="fas fa-user-plus"></i> ${t.createAccount}`;

    // Update success modal
    document.querySelector('.success-content h2').textContent = t.accountCreated;
    document.querySelector('.success-content p').textContent = t.welcomeMessage;
    document.querySelector('.success-details p strong').textContent = t.whatsNext;
    document.querySelectorAll('.success-details ul li')[0].textContent = t.completeProfile;
    document.querySelectorAll('.success-details ul li')[1].textContent = t.verifyEmail;
    document.querySelectorAll('.success-details ul li')[2].textContent = t.startBrowsing;
    document.querySelectorAll('.success-details ul li')[3].textContent = t.setupPayments;
    startShoppingBtn.innerHTML = `<i class="fas fa-shopping-bag"></i> ${t.startShopping}`;
    setupProfileBtn.innerHTML = `<i class="fas fa-user-cog"></i> ${t.setupProfile}`;
}

// Password strength checking
function checkPasswordStrength() {
    const password = passwordInput.value;
    let strength = 0;
    let feedback = [];

    // Length check
    if (password.length >= 8) strength += 1;
    else feedback.push('At least 8 characters');

    // Lowercase check
    if (/[a-z]/.test(password)) strength += 1;
    else feedback.push('Lowercase letter');

    // Uppercase check
    if (/[A-Z]/.test(password)) strength += 1;
    else feedback.push('Uppercase letter');

    // Number check
    if (/\d/.test(password)) strength += 1;
    else feedback.push('Number');

    // Special character check
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) strength += 1;
    else feedback.push('Special character');

    // Update UI
    strengthFill.className = 'strength-fill';
    if (strength <= 2) {
        strengthFill.classList.add('weak');
        strengthText.textContent = `${translations[currentLanguage].passwordStrength}: ${translations[currentLanguage].weak}`;
    } else if (strength <= 4) {
        strengthFill.classList.add('fair');
        strengthText.textContent = `${translations[currentLanguage].passwordStrength}: ${translations[currentLanguage].fair}`;
    } else {
        strengthFill.classList.add('good');
        strengthText.textContent = `${translations[currentLanguage].passwordStrength}: ${translations[currentLanguage].good}`;
    }
}

function updatePasswordStrengthText() {
    const t = translations[currentLanguage];
    const currentStrength = strengthText.textContent.split(': ')[1];
    if (currentStrength === 'Weak' || currentStrength === 'Débil') {
        strengthText.textContent = `${t.passwordStrength}: ${t.weak}`;
    } else if (currentStrength === 'Fair' || currentStrength === 'Regular') {
        strengthText.textContent = `${t.passwordStrength}: ${t.fair}`;
    } else if (currentStrength === 'Good' || currentStrength === 'Fuerte') {
        strengthText.textContent = `${t.passwordStrength}: ${t.good}`;
    }
}

function validatePasswordMatch() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (confirmPassword && password !== confirmPassword) {
        confirmPasswordInput.setCustomValidity(translations[currentLanguage].passwordsDontMatch);
    } else {
        confirmPasswordInput.setCustomValidity('');
    }
}

// Form handling
function handleFormSubmit(e) {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
        return;
    }

    // Simulate form submission
    showSuccessModal();
}

function validateForm() {
    const t = translations[currentLanguage];
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;

    // Check password strength
    if (password.length < 8 || !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
        alert(t.passwordTooWeak);
        return false;
    }

    // Check password match
    if (password !== confirmPassword) {
        alert(t.passwordsDontMatch);
        return false;
    }

    // Check age (if provided)
    if (dateOfBirth) {
        const birthDate = new Date(dateOfBirth);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        if (age < 18) {
            alert(t.underage);
            return false;
        }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert(t.invalidEmail);
        return false;
    }

    // Phone validation (basic)
    const phoneRegex = /^\+?[\d\s\-\(\)]{8,}$/;
    if (!phoneRegex.test(phone)) {
        alert(t.invalidPhone);
        return false;
    }

    return true;
}

function showSuccessModal() {
    successModal.style.display = 'block';
}

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

function showNotification(message) {
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

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);