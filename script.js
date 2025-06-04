// Application State
const state = {
    products: [],
    categories: [],
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    filters: {
        category: '',
        priceRange: '',
        search: '',
        sort: 'name'
    }
};

// Product Data with actual stock photos
const productData = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        description: "Premium noise-cancelling wireless headphones with superior sound quality",
        price: 89.99,
        category: "electronics",
        image: "https://pixabay.com/get/ge51c17ef055648ff50e665c76643c575e84645f163df837d501caee7b5c6d2f44625fb5c7175144d80f5a925d61bdf80e00479eea88c8cdf2e82cf939d10e9f3_1280.jpg",
        rating: 4.5,
        stock: 15
    },
    {
        id: 2,
        name: "Stylish Running Shoes",
        description: "Comfortable and durable running shoes for all terrains",
        price: 129.99,
        category: "clothing",
        image: "https://pixabay.com/get/gd403041b91dec8560680598cc9791cc5f9297d3e0028e9847d8e4e786682b76ac6b0ee4ca7ebcae975cdb4a3dc464d80f7cb66322fed97c2e630f392aee4b960_1280.jpg",
        rating: 4.7,
        stock: 8
    },
    {
        id: 3,
        name: "Smart Fitness Watch",
        description: "Advanced fitness tracking with heart rate monitor and GPS",
        price: 199.99,
        category: "electronics",
        image: "https://pixabay.com/get/g9fd10b4c397743a857caa0c6af8cc8fe0b72cd38b2270bdffcfa0a930fc2169a1862b417fec0230af96579e893cec5e232960645ab6bf8f4793e9fb2ab905a1a_1280.jpg",
        rating: 4.3,
        stock: 12
    },
    {
        id: 4,
        name: "Organic Coffee Beans",
        description: "Premium organic coffee beans, freshly roasted to perfection",
        price: 24.99,
        category: "home",
        image: "https://pixabay.com/get/g2a90b836b9c02d8e4d2a8564d0139742383623b0ffe89b6318d110201b31ba50f524ba7f2a041d3da7486aa40d244f488724b4268340e8ed0aa742b20b7b4ca4_1280.jpg",
        rating: 4.8,
        stock: 25
    },
    {
        id: 5,
        name: "Professional Camera Lens",
        description: "High-quality telephoto lens for professional photography",
        price: 449.99,
        category: "electronics",
        image: "https://pixabay.com/get/gfa8b2d5aee19b3b9e7f6fd532b902c5c59edd756616e964c727ae5db5b774c119a2b8f4ac37db3b8aed954516b537293deee6822356b4b8e646f41aaa6030a53_1280.jpg",
        rating: 4.9,
        stock: 5
    },
    {
        id: 6,
        name: "Cozy Knit Sweater",
        description: "Soft and warm knit sweater perfect for cold weather",
        price: 79.99,
        category: "clothing",
        image: "https://pixabay.com/get/g522810fb18f124841fe80c43d8e8519d53f4e1431b6d879494c60bd465d071cffb1087632faa2a18d7152e11e85c86c1870fa623712a151a3d719f52d74e5e71_1280.jpg",
        rating: 4.4,
        stock: 18
    },
    {
        id: 7,
        name: "Vintage Reading Glasses",
        description: "Stylish vintage-inspired reading glasses with blue light protection",
        price: 39.99,
        category: "beauty",
        image: "https://pixabay.com/get/gca083cbbb454592a7a10accb63d3f99f46d18d3133e647f2756eb7519323aca08360e5d21d0032bd68834b4d3e06309a90d1d60ad987ff54e28b137dcd8707b0_1280.jpg",
        rating: 4.2,
        stock: 30
    },
    {
        id: 8,
        name: "Artisan Wooden Bowl",
        description: "Handcrafted wooden bowl perfect for salads and serving",
        price: 54.99,
        category: "home",
        image: "https://pixabay.com/get/g5df8bfb2b54b261e5ab16198002a07f4a50b2d961a127b900eb4741b178e2ec1e94910e67ecec592d86dea810cdab1e4dc9acadca37f4c77afe845ae0f18c9e2_1280.jpg",
        rating: 4.6,
        stock: 10
    }
];

// Category Data with actual stock photos
const categoryData = [
    {
        id: 1,
        name: "Electronics",
        slug: "electronics",
        image: "https://pixabay.com/get/g7e5127e150d94165306904bff07d108e61c608b2e009cc3d984ca4c30d8b98ec5050033954ff13d38eada5caaf1a37c75dcca367c0aac8e32c08eab0b52aeb68_1280.jpg"
    },
    {
        id: 2,
        name: "Clothing",
        slug: "clothing",
        image: "https://pixabay.com/get/g6d4882716fab63039fec2750774020623ff3d9ea5281aaa173f95332b94aaadd83e9fb53b12819f2d4a038a3a9ddbc203e84e5e09b77135e5bbdb9bbcd5caeec_1280.jpg"
    },
    {
        id: 3,
        name: "Home & Garden",
        slug: "home",
        image: "https://pixabay.com/get/g807ea052835a6061bd03b111b79ae0990abf982daf6f3c4d8559e7db5e718ea2caeaffd1c0326bc5e69ce2158ab0c24d94b367ce2a9c8162573f8fecb740198f_1280.jpg"
    },
    {
        id: 4,
        name: "Sports & Outdoors",
        slug: "sports",
        image: "https://pixabay.com/get/gfe642a66e24ce384dcde9d5dad8aaf887d4a55bd5bf00000b18ffbc26f3ac1fc69e4c977cf42d1222d3faff370e9218cf9af2cddf598bf691a6dfed1787a9e71_1280.jpg"
    },
    {
        id: 5,
        name: "Beauty & Health",
        slug: "beauty",
        image: "https://pixabay.com/get/g67e24f311c70a9ad7142f5ed6bd12186c9425fd75c361b5d4e6e6e037c203386a786df90392506c8431103907a6c78ac956364d1a3b41653be53252b059821b2_1280.jpg"
    },
    {
        id: 6,
        name: "Books & Media",
        slug: "books",
        image: "https://pixabay.com/get/g65f8257d4177816aaa1da09228e8b02452a05d9fb6fdd0b1610b7e1b33714de63e0a2f85e43628b7d5968755ebab7c75c9076b7f04a1906de3f7b0ef034b537d_1280.jpg"
    }
];

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Cart Functions
function addToCart(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = state.cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity += 1;
            showNotification(`Added another ${product.name} to cart`, 'success');
        } else {
            showNotification(`Sorry, only ${product.stock} items available`, 'warning');
            return;
        }
    } else {
        state.cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
            stock: product.stock
        });
        showNotification(`${product.name} added to cart`, 'success');
    }
    
    saveCart();
    updateCartCount();
}

function removeFromCart(productId) {
    const itemIndex = state.cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        const item = state.cart[itemIndex];
        state.cart.splice(itemIndex, 1);
        showNotification(`${item.name} removed from cart`, 'success');
        saveCart();
        updateCartCount();
        
        // If on cart page, re-render cart
        if (window.location.pathname.includes('cart.html')) {
            renderCartItems();
        }
    }
}

function updateCartQuantity(productId, newQuantity) {
    const item = state.cart.find(item => item.id === productId);
    if (!item) return;

    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }

    if (newQuantity > item.stock) {
        showNotification(`Sorry, only ${item.stock} items available`, 'warning');
        return;
    }

    item.quantity = newQuantity;
    saveCart();
    updateCartCount();
    
    // If on cart page, re-render cart
    if (window.location.pathname.includes('cart.html')) {
        renderCartItems();
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(state.cart));
}

function updateCartCount() {
    const cartCount = state.cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

function getCartTotal() {
    return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const messageElement = document.getElementById('notificationMessage');
    
    if (!notification || !messageElement) return;
    
    messageElement.textContent = message;
    notification.className = `notification ${type} show`;
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Product Functions
function filterProducts() {
    let filteredProducts = [...state.products];
    
    // Category filter
    if (state.filters.category) {
        filteredProducts = filteredProducts.filter(product => 
            product.category === state.filters.category
        );
    }
    
    // Search filter
    if (state.filters.search) {
        const searchTerm = state.filters.search.toLowerCase();
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // Price range filter
    if (state.filters.priceRange) {
        const [min, max] = state.filters.priceRange.split('-').map(Number);
        if (max) {
            filteredProducts = filteredProducts.filter(product => 
                product.price >= min && product.price <= max
            );
        } else {
            filteredProducts = filteredProducts.filter(product => 
                product.price >= min
            );
        }
    }
    
    // Sort products
    switch (state.filters.sort) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'name':
        default:
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    return filteredProducts;
}

function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const loading = document.getElementById('loading');
    const emptyState = document.getElementById('emptyState');
    
    if (!productsGrid) return;
    
    // Show loading
    if (loading) loading.style.display = 'block';
    if (emptyState) emptyState.style.display = 'none';
    productsGrid.innerHTML = '';
    
    // Simulate loading delay
    setTimeout(() => {
        if (loading) loading.style.display = 'none';
        
        const filteredProducts = filterProducts();
        
        if (filteredProducts.length === 0) {
            if (emptyState) emptyState.style.display = 'block';
            return;
        }
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card fade-in';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image" onclick="viewProduct(${product.id})">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-rating">
                        <div class="rating-stars">${generateStars(product.rating)}</div>
                        <span class="rating-text">(${product.rating})</span>
                    </div>
                    <div class="product-footer">
                        <span class="product-price">${formatPrice(product.price)}</span>
                        <button class="add-to-cart-btn" onclick="addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                            <i class="fas fa-cart-plus"></i>
                            ${product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                        </button>
                    </div>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });
    }, 500);
}

function renderCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (!categoriesGrid) return;
    
    state.categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card fade-in';
        categoryCard.innerHTML = `
            <img src="${category.image}" alt="${category.name}" class="category-image">
            <div class="category-info">
                <h3 class="category-name">${category.name}</h3>
            </div>
        `;
        categoryCard.addEventListener('click', () => {
            document.getElementById('categoryFilter').value = category.slug;
            state.filters.category = category.slug;
            renderProducts();
            document.getElementById('products').scrollIntoView();
        });
        categoriesGrid.appendChild(categoryCard);
    });
}

function viewProduct(productId) {
    // Store product ID for product page
    localStorage.setItem('selectedProductId', productId);
    window.location.href = 'product.html';
}

// Event Listeners
function initializeEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        const debouncedSearch = debounce((value) => {
            state.filters.search = value;
            renderProducts();
        }, 300);
        
        searchInput.addEventListener('input', (e) => {
            debouncedSearch(e.target.value);
        });
    }
    
    // Filter functionality
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', (e) => {
            state.filters.category = e.target.value;
            renderProducts();
        });
    }
    
    const priceFilter = document.getElementById('priceFilter');
    if (priceFilter) {
        priceFilter.addEventListener('change', (e) => {
            state.filters.priceRange = e.target.value;
            renderProducts();
        });
    }
    
    const sortFilter = document.getElementById('sortFilter');
    if (sortFilter) {
        sortFilter.addEventListener('change', (e) => {
            state.filters.sort = e.target.value;
            renderProducts();
        });
    }
    
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            // Mobile menu implementation would go here
            console.log('Mobile menu clicked');
        });
    }
    
    // Notification close
    const notificationClose = document.getElementById('notificationClose');
    if (notificationClose) {
        notificationClose.addEventListener('click', () => {
            document.getElementById('notification').classList.remove('show');
        });
    }
}

// Initialize Application
function init() {
    // Load data
    state.products = productData;
    state.categories = categoryData;
    
    // Initialize UI
    updateCartCount();
    
    // Check which page we're on and initialize accordingly
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch (currentPage) {
        case 'index.html':
        case '':
            renderCategories();
            renderProducts();
            break;
        case 'product.html':
            initializeProductPage();
            break;
        case 'cart.html':
            initializeCartPage();
            break;
        case 'checkout.html':
            initializeCheckoutPage();
            break;
    }
    
    // Initialize event listeners
    initializeEventListeners();
}

// Cart Page Functions
function renderCartItems() {
    const cartItems = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');
    
    if (!cartItems) return;
    
    if (state.cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started</p>
                <a href="index.html" class="cta-button">Continue Shopping</a>
            </div>
        `;
        if (cartSummary) cartSummary.style.display = 'none';
        return;
    }
    
    cartItems.innerHTML = state.cart.map(item => `
        <div class="cart-item slide-in">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <h3 class="cart-item-name">${item.name}</h3>
                <p class="cart-item-price">${formatPrice(item.price)}</p>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})" ${item.quantity <= 1 ? 'disabled' : ''}>
                    <i class="fas fa-minus"></i>
                </button>
                <span class="cart-item-quantity">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})" ${item.quantity >= item.stock ? 'disabled' : ''}>
                    <i class="fas fa-plus"></i>
                </button>
                <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    // Update cart summary
    if (cartSummary) {
        const subtotal = getCartTotal();
        const shipping = subtotal > 100 ? 0 : 9.99;
        const total = subtotal + shipping;
        
        cartSummary.innerHTML = `
            <h3>Cart Summary</h3>
            <div class="summary-row">
                <span>Subtotal:</span>
                <span>${formatPrice(subtotal)}</span>
            </div>
            <div class="summary-row">
                <span>Shipping:</span>
                <span>${shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
            </div>
            <div class="summary-row summary-total">
                <span>Total:</span>
                <span>${formatPrice(total)}</span>
            </div>
            <button class="checkout-btn" onclick="proceedToCheckout()">
                Proceed to Checkout
            </button>
        `;
        cartSummary.style.display = 'block';
    }
}

function proceedToCheckout() {
    if (state.cart.length === 0) {
        showNotification('Your cart is empty', 'warning');
        return;
    }
    window.location.href = 'checkout.html';
}

function initializeCartPage() {
    renderCartItems();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Global functions for onclick handlers
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.viewProduct = viewProduct;
window.proceedToCheckout = proceedToCheckout;