// DOM Elements
const sellForm = document.getElementById('sellForm');
const imageUpload = document.getElementById('imageUpload');
const uploadPlaceholder = document.getElementById('uploadPlaceholder');
const imagePreview = document.getElementById('imagePreview');
const successModal = document.getElementById('successModal');
const viewListingBtn = document.getElementById('viewListingBtn');
const listAnotherBtn = document.getElementById('listAnotherBtn');
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

        // Sell page
        sellYourItems: 'Sell Your Items',
        listItemsDescription: 'List your items for sale and reach thousands of buyers in Honduras',
        itemInformation: 'Item Information',
        itemTitle: 'Item Title',
        category: 'Category',
        price: 'Price (HNL)',
        condition: 'Condition',
        description: 'Description',
        itemPhotos: 'Item Photos',
        dragDropPhotos: 'Drag & drop photos here',
        browseFiles: 'browse files',
        uploadLimit: 'Upload up to 8 photos (JPG, PNG, max 5MB each)',
        locationContact: 'Location & Contact',
        location: 'Location',
        preferredContact: 'Preferred Contact Method',
        yourName: 'Your Name',
        phoneNumber: 'Phone Number',
        emailAddress: 'Email Address',
        termsAgreement: 'Terms & Agreement',
        listItemForSale: 'List Item for Sale',
        cancel: 'Cancel',

        // Messages
        loginSuccess: 'Welcome back',
        demoMessage: ' (This is a demo - login not actually processed)',
        itemListedSuccess: 'Item Listed Successfully!',
        itemListedMessage: 'Your item has been listed for sale on BuySaleHn.',
        whatHappensNext: 'What happens next?',
        reviewWithin24: 'Your listing will be reviewed within 24 hours',
        receiveNotifications: 'You\'ll receive notifications when interested buyers contact you',
        manageListings: 'You can manage your listings from your account',
        viewMyListings: 'View My Listings',
        listAnotherItem: 'List Another Item'
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

        // Sell page
        sellYourItems: 'Vende Tus Artículos',
        listItemsDescription: 'Lista tus artículos en venta y llega a miles de compradores en Honduras',
        itemInformation: 'Información del Artículo',
        itemTitle: 'Título del Artículo',
        category: 'Categoría',
        price: 'Precio (HNL)',
        condition: 'Condición',
        description: 'Descripción',
        itemPhotos: 'Fotos del Artículo',
        dragDropPhotos: 'Arrastra y suelta fotos aquí',
        browseFiles: 'explorar archivos',
        uploadLimit: 'Sube hasta 8 fotos (JPG, PNG, máximo 5MB cada una)',
        locationContact: 'Ubicación y Contacto',
        location: 'Ubicación',
        preferredContact: 'Método de Contacto Preferido',
        yourName: 'Tu Nombre',
        phoneNumber: 'Número de Teléfono',
        emailAddress: 'Dirección de Correo',
        termsAgreement: 'Términos y Acuerdo',
        listItemForSale: 'Listar Artículo en Venta',
        cancel: 'Cancelar',

        // Messages
        loginSuccess: 'Bienvenido de vuelta',
        demoMessage: ' (Esto es una demo - el inicio de sesión no se procesa realmente)',
        itemListedSuccess: '¡Artículo Listado Exitosamente!',
        itemListedMessage: 'Tu artículo ha sido listado en venta en BuySaleHn.',
        whatHappensNext: '¿Qué sucede ahora?',
        reviewWithin24: 'Tu listado será revisado dentro de 24 horas',
        receiveNotifications: 'Recibirás notificaciones cuando compradores interesados te contacten',
        manageListings: 'Puedes gestionar tus listados desde tu cuenta',
        viewMyListings: 'Ver Mis Listados',
        listAnotherItem: 'Listar Otro Artículo'
    }
};

// Cart state - load from localStorage if available
let cart = JSON.parse(localStorage.getItem('buysalehn_cart')) || [];

// Image handling
let selectedImages = [];

// Initialize the sell page
function init() {
    setupEventListeners();
    updateCartCount();
    updateLanguage();
    updateSellPageContent();
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

    // Image upload
    uploadPlaceholder.addEventListener('click', () => {
        imageUpload.click();
    });

    uploadPlaceholder.addEventListener('dragover', handleDragOver);
    uploadPlaceholder.addEventListener('drop', handleDrop);
    imageUpload.addEventListener('change', handleFileSelect);

    // Form submission
    sellForm.addEventListener('submit', handleFormSubmit);

    // Success modal buttons
    viewListingBtn.addEventListener('click', () => {
        successModal.style.display = 'none';
        alert('View listings feature coming soon! (This is a demo)');
    });

    listAnotherBtn.addEventListener('click', () => {
        successModal.style.display = 'none';
        resetForm();
    });

    // Cancel button
    cancelBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to cancel? All entered information will be lost.')) {
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
        alert('Registration feature coming soon! (This is a demo)');
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
    updateSellPageContent();
}

function updateLanguage() {
    const langText = currentLanguage === 'en' ? 'EN' : 'ES';
    langBtn.innerHTML = `<i class="fas fa-globe"></i> ${langText}`;
}

function updateSellPageContent() {
    const t = translations[currentLanguage];

    // Update header elements
    searchInput.placeholder = t.searchPlaceholder;
    loginBtn.innerHTML = `<i class="fas fa-user"></i> ${t.login}`;

    // Update sell page content
    document.querySelector('.sell-header h1').textContent = t.sellYourItems;
    document.querySelector('.sell-header p').textContent = t.listItemsDescription;

    // Update form sections
    document.querySelectorAll('.form-section h3')[0].textContent = t.itemInformation;
    document.querySelectorAll('.form-section h3')[1].textContent = t.itemPhotos;
    document.querySelectorAll('.form-section h3')[2].textContent = t.locationContact;
    document.querySelectorAll('.form-section h3')[3].textContent = t.termsAgreement;

    // Update form labels
    document.querySelector('label[for="itemTitle"]').textContent = `${t.itemTitle} *`;
    document.querySelector('label[for="itemCategory"]').textContent = `${t.category} *`;
    document.querySelector('label[for="itemPrice"]').textContent = `${t.price} *`;
    document.querySelector('label[for="itemCondition"]').textContent = `${t.condition} *`;
    document.querySelector('label[for="itemDescription"]').textContent = `${t.description} *`;
    document.querySelector('label[for="itemLocation"]').textContent = `${t.location} *`;
    document.querySelector('label[for="contactMethod"]').textContent = `${t.preferredContact} *`;
    document.querySelector('label[for="contactName"]').textContent = `${t.yourName} *`;
    document.querySelector('label[for="contactPhone"]').textContent = `${t.phoneNumber} *`;
    document.querySelector('label[for="contactEmail"]').textContent = t.emailAddress;

    // Update upload placeholder
    document.querySelector('.upload-placeholder h4').textContent = t.dragDropPhotos;
    document.querySelector('.upload-placeholder p').innerHTML = `or <span class="upload-link">${t.browseFiles}</span>`;
    document.querySelector('.upload-placeholder small').textContent = t.uploadLimit;

    // Update buttons
    document.querySelector('.submit-listing-btn').innerHTML = `<i class="fas fa-paper-plane"></i> ${t.listItemForSale}`;
    cancelBtn.innerHTML = `<i class="fas fa-times"></i> ${t.cancel}`;

    // Update success modal
    document.querySelector('.success-content h2').textContent = t.itemListedSuccess;
    document.querySelector('.success-content p').textContent = t.itemListedMessage;
    document.querySelector('.success-details p strong').textContent = t.whatHappensNext;
    document.querySelectorAll('.success-details ul li')[0].textContent = t.reviewWithin24;
    document.querySelectorAll('.success-details ul li')[1].textContent = t.receiveNotifications;
    document.querySelectorAll('.success-details ul li')[2].textContent = t.manageListings;
    viewListingBtn.innerHTML = `<i class="fas fa-eye"></i> ${t.viewMyListings}`;
    listAnotherBtn.innerHTML = `<i class="fas fa-plus"></i> ${t.listAnotherItem}`;
}

// Image handling functions
function handleDragOver(e) {
    e.preventDefault();
    uploadPlaceholder.classList.add('dragover');
}

function handleDrop(e) {
    e.preventDefault();
    uploadPlaceholder.classList.remove('dragover');
    const files = e.dataTransfer.files;
    handleFiles(files);
}

function handleFileSelect(e) {
    const files = e.target.files;
    handleFiles(files);
}

function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Validate file type
        if (!file.type.startsWith('image/')) {
            alert('Please select only image files.');
            continue;
        }

        // Validate file size (5MB max)
        if (file.size > 5 * 1024 * 1024) {
            alert('File size must be less than 5MB.');
            continue;
        }

        // Check limit
        if (selectedImages.length >= 8) {
            alert('Maximum 8 images allowed.');
            break;
        }

        selectedImages.push(file);
        displayImagePreview(file);
    }
}

function displayImagePreview(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const previewItem = document.createElement('div');
        previewItem.className = 'image-preview-item';

        previewItem.innerHTML = `
            <img src="${e.target.result}" alt="Preview">
            <button class="image-remove" onclick="removeImage(this)">
                <i class="fas fa-times"></i>
            </button>
        `;

        imagePreview.appendChild(previewItem);
    };
    reader.readAsDataURL(file);
}

function removeImage(button) {
    const previewItem = button.parentElement;
    const index = Array.from(imagePreview.children).indexOf(previewItem);
    selectedImages.splice(index, 1);
    previewItem.remove();
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
    const title = document.getElementById('itemTitle').value.trim();
    const description = document.getElementById('itemDescription').value.trim();

    if (title.length < 5) {
        alert('Title must be at least 5 characters long.');
        return false;
    }

    if (description.length < 20) {
        alert('Description must be at least 20 characters long.');
        return false;
    }

    if (selectedImages.length === 0) {
        alert('Please upload at least one image.');
        return false;
    }

    return true;
}

function showSuccessModal() {
    successModal.style.display = 'block';
}

function resetForm() {
    sellForm.reset();
    selectedImages = [];
    imagePreview.innerHTML = '';
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