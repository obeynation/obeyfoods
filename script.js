
// Food Data
const foodItems = [
    {
        id: '1',
        name: 'Jollof Rice',
        price: 5500,
        image: 'https://media.istockphoto.com/id/2201077840/photo/jollof-rice-served-with-garnished-goat-meat.webp?a=1&b=1&s=612x612&w=0&k=20&c=bCmirQ92qdqlpRx7Gy4t9WLkvpH4mhCxrqUj2shH3xA=',
        category: 'main',
        description: 'Perfectly seasoned Nigerian jollof rice with vegetables and spices'
    },
    {
        id: '2',
        name: 'Pounded Yam & Egusi',
        price: 6200,
        image: 'https://media.istockphoto.com/id/1174341228/photo/nigerian-pounded-yam-served-with-spicy-bitter-leaf-soup.webp?a=1&b=1&s=612x612&w=0&k=20&c=FwO1BgtsapNzGIibmvgKD2mGBIVHZjf9o2cVJbV5LBc=',
        category: 'main',
        description: 'Traditional pounded yam served with rich egusi soup'
    },
    {
        id: '3',
        name: 'Rice and Beans',
        price: 3000,
        image: 'https://media.istockphoto.com/id/1407604838/photo/jollof-rice-with-veggie-bowl-african-style.webp?a=1&b=1&s=612x612&w=0&k=20&c=QfydtZXTlBqR_0pNi5kMB381Kb6meGCRmTMcVOsPJHc=',
        category: 'main',
        description: 'Tasty Rice and beans with stew'
    },
    {
        id: '4',
        name: 'Pepper Soup',
        price: 2000,
        image: 'https://images.unsplash.com/photo-1708782344071-35ed44b849a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5pZ2VyaWElMjBtZWF0JTIwc291cHxlbnwwfHwwfHx8MA%3D%3D',
        category: 'main',
        description: 'Hot and spicy Nigerian pepper soup with assorted meat'
    },
    {
        id: '5',
        name: 'Fried Rice',
        price: 5000,
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZWQlMjByaWNlfGVufDB8fDB8fHww',
        category: 'main',
        description: 'Nigerian-style fried rice with vegetables and chicken'
    },
    {
        id: '6',
        name: 'Amala & Egusi',
        price: 2800,
        image: 'https://media.istockphoto.com/id/1398351215/photo/egusi-soup-with-fufu-pounded-yam.webp?a=1&b=1&s=612x612&w=0&k=20&c=bpowb3HCg76MVl13_tkTih9ByUbnfLby2163db1qXso=',
        category: 'main',
        description: 'Traditional amala served with egusi and stew'
    },
    {
        id: '7',
        name: 'Puff Puff',
        price: 500,
        image: 'https://images.unsplash.com/photo-1664993085274-80c6ba725ccc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVmZiUyMHB1ZmZ8ZW58MHx8MHx8fDA%3D',
        category: 'snack',
        description: 'Sweet deep-fried dough balls, perfect for snacking'
    },
    {
        id: '8',
        name: 'Meat Pie',
        price: 1000,
        image: 'https://images.unsplash.com/photo-1608039783021-6116a558f0c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhdCUyMHBpZXxlbnwwfHwwfHx8MA%3D%3D',
        category: 'snack',
        description: 'Flaky pastry filled with seasoned minced meat'
    },
    {
        id: '9',
        name: 'Chin Chin',
        price: 600,
        image: 'https://images.unsplash.com/photo-1665554837563-3782d21a676b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbiUyMGNoaW58ZW58MHx8MHx8fDA%3D',
        category: 'snack',
        description: 'Crunchy fried cubes of sweet dough'
    },
    {
        id: '10',
        name: 'Plantain Chips',
        price: 700,
        image: 'https://media.istockphoto.com/id/515708863/photo/plantain-chips.webp?a=1&b=1&s=612x612&w=0&k=20&c=lo2Q-Ow9qY--tEq1nlH5ETmJdE70gswDb3-og596UY8=',
        category: 'snack',
        description: 'Crispy fried plantain chips, lightly salted'
    },
    {
        id: '11',
        name: 'Akara',
        price: 400,
        image: 'https://images.unsplash.com/photo-1647162264554-5f60af27f052?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhbnMlMjBjYWtlfGVufDB8fDB8fHww',
        category: 'snack',
        description: 'Deep-fried fresh Akara'
    },
    {
        id: '12',
        name: 'Boli',
        price: 900,
        image: 'https://media.istockphoto.com/id/2196303330/photo/grilled-plantains.webp?a=1&b=1&s=612x612&w=0&k=20&c=llMFxP5pWazzUriHJWjlSP5rsbtCSpe04Lmtowy-5EM=',
        category: 'snack',
        description: 'Roasted plantain served with groundnut'
    },
    {
        id: '13',
        name: 'Coke',
        price: 1000,
        image: 'https://images.unsplash.com/photo-1624552184280-9e9631bbeee9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29rZXxlbnwwfHwwfHx8MA%3D%3D',
        category: 'drink',
        description: 'Refreshing Coca Cola drink with natural flavors'
    },
    {
        id: '14',
        name: 'Tiger Nut Drink',
        price: 1200,
        image: 'https://media.istockphoto.com/id/827684230/photo/glass-of-refreshing-horchata-de-chufa-drink-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=uE1G5nvOWcnf0Cb9xs1ow5Gyp3YcCQlS2eMKYRPVSj0=',
        category: 'drink',
        description: 'Creamy and nutritious tiger nut drink'
    },
    {
        id: '15',
        name: 'Chapman',
        price: 1500,
        image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400',
        category: 'drink',
        description: 'Nigerian non-alcoholic cocktail with fruits'
    },
    {
        id: '16',
        name: 'Pepsi',
        price: 800,
        image: 'https://images.unsplash.com/photo-1502389743708-d00f658638bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGVwc2l8ZW58MHx8MHx8fDA%3D',
        category: 'drink',
        description: 'Best served chilled, refreshing Pepsi drink'
    },
    {
        id: '17',
        name: 'Fresh Orange Juice',
        price: 1000,
        image:'https://plus.unsplash.com/premium_photo-1667543228378-ec4478ab2845?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3JhbmdlJTIwSnVpY2V8ZW58MHx8MHx8fDA%3D',
        category: 'drink',
        description: 'Freshly squeezed orange juice'
    },
    {
        id: '18',
        name: 'Pizza',
        price: 3900,
        image: 'https://plus.unsplash.com/premium_photo-1679924471066-dd984e92f395?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8fDA%3D',
        category: 'Snack',
        description: 'Delicious pizza with fresh toppings and cheese'
    },
     {
        id: '19',
        name: 'shawarma',
        price: 4000,
        image: 'https://media.istockphoto.com/id/2217665832/photo/honey-glazed-lamb-shawarma-wrap.webp?a=1&b=1&s=612x612&w=0&k=20&c=0eee8cgsDurqt_mzR9vL1KPnTwLLN6-7v7aQS31gcqQ=',
        category: 'Snack',
        description: 'Delicious shawarma with fresh toppings and cheese'
    },
     {
        id: '20',
        name: 'Burger',
        price: 4000,
        image: 'https://media.istockphoto.com/id/2148672887/photo/beef-patty-burger-with-vegetables-and-lettuce-on-white-background-file-contains-clipping-path.webp?a=1&b=1&s=612x612&w=0&k=20&c=IvStCpZWDpamsaQi6fJLQXoHO9mgdN9crpsZSb7bBgI=',
        category: 'Snack',
        description: 'Delicious burger with fresh toppings and cheese'
    },
     {
        id: '21',
        name: 'Chicken and Chips',
        price: 4000,
        image: 'https://media.istockphoto.com/id/1502970173/photo/fried-chicken-wings-plate.webp?a=1&b=1&s=612x612&w=0&k=20&c=j2QFyeFfy9FZfTpocBP64XvdBsPK-o0pl9qrGeivn-I=',
        category: 'Snack',
        description: 'Delicious chicken and chips '
    }
];

// Cart functionality
let cart = [];
let isCartOpen = false;

// DOM Elements
const cartBtn = document.querySelector('.cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.querySelector('.checkout-btn');
const checkoutModal = document.getElementById('checkout-modal');
const checkoutForm = document.getElementById('checkout-form');

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    updateCartUI();
    initializePage();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Mobile navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Category filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const category = e.target.dataset.category;
            filterItems(category);
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Initialize page based on current page
function initializePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch (currentPage) {
        case 'index.html':
        case '':
            loadFeaturedItems();
            break;
        case 'kitchen.html':
            loadKitchenItems();
            break;
        case 'order.html':
            loadOrderItems();
            break;
    }
}

// Load featured items for home page
function loadFeaturedItems() {
    const container = document.getElementById('featured-items');
    if (!container) return;
    
    const featuredItems = foodItems.slice(0, 6);
    container.innerHTML = featuredItems.map(item => createFoodCard(item)).join('');
}

// Load all items for kitchen page
function loadKitchenItems() {
    const container = document.getElementById('kitchen-items');
    if (!container) return;
    
    container.innerHTML = foodItems.map(item => createFoodCard(item)).join('');
}

// Load all items for order page
function loadOrderItems() {
    const container = document.getElementById('order-items');
    if (!container) return;
    
    container.innerHTML = foodItems.map(item => createFoodCard(item, true)).join('');
}

// Create food card HTML
function createFoodCard(item, showAddButton = false) {
    return `
        <div class="food-card fade-in">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="food-card-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="food-card-footer">
                    <span class="food-price">₦${item.price.toLocaleString()}</span>
                    <span class="category-badge">${item.category}</span>
                </div>
                ${showAddButton ? `<button class="btn btn-add" onclick="addToCart('${item.id}')">
                    <i class="fas fa-plus"></i> Add to Cart
                </button>` : ''}
            </div>
        </div>
    `;
}

// Filter items by category
function filterItems(category) {
    const containers = [
        document.getElementById('kitchen-items'),
        document.getElementById('order-items')
    ];
    
    containers.forEach(container => {
        if (!container) return;
        
        const filteredItems = category === 'all' ? foodItems : foodItems.filter(item => item.category === category);
        const isOrderPage = container.id === 'order-items';
        container.innerHTML = filteredItems.map(item => createFoodCard(item, isOrderPage)).join('');
        
        // Re-animate filtered items
        container.querySelectorAll('.fade-in').forEach(el => {
            el.classList.remove('visible');
            setTimeout(() => el.classList.add('visible'), 100);
        });
    });
}

// Cart functions
function addToCart(itemId) {
    const item = foodItems.find(food => food.id === itemId);
    if (!item) return;

    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }
    
    updateCartUI();
    saveCartToStorage();
    showAddToCartAnimation();
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartUI();
    saveCartToStorage();
}

function updateQuantity(itemId, quantity) {
    if (quantity <= 0) {
        removeFromCart(itemId);
        return;
    }
    
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (item) {
        item.quantity = quantity;
        updateCartUI();
        saveCartToStorage();
    }
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Update cart count
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
    
    // Update cart total
    if (cartTotal) {
        cartTotal.textContent = totalPrice.toLocaleString();
    }
    
    // Update cart items
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; color: #7f8c8d; padding: 20px;">Your cart is empty</p>';
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <div class="cart-item-price">₦${item.price.toLocaleString()}</div>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                            <button class="remove-item" onclick="removeFromCart('${item.id}')">Remove</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }
    
    // Show/hide checkout button
    if (checkoutBtn) {
        checkoutBtn.style.display = cart.length > 0 ? 'block' : 'none';
    }
}

function toggleCart() {
    isCartOpen = !isCartOpen;
    
    if (isCartOpen) {
        cartSidebar.classList.add('open');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function showAddToCartAnimation() {
    cartBtn.classList.add('pulse');
    setTimeout(() => cartBtn.classList.remove('pulse'), 600);
}

// Local storage functions
function saveCartToStorage() {
    localStorage.setItem('obeyfoods_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('obeyfoods_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Checkout functions
function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    toggleCart();
    showCheckoutModal();
}

function showCheckoutModal() {
    if (!checkoutModal) return;
    
    checkoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Update checkout items
    const checkoutItems = document.getElementById('checkout-items');
    const checkoutTotal = document.getElementById('checkout-total');
    
    if (checkoutItems) {
        checkoutItems.innerHTML = cart.map(item => `
            <div class="checkout-item">
                <span>${item.name} x ${item.quantity}</span>
                <span>₦${(item.price * item.quantity).toLocaleString()}</span>
            </div>
        `).join('');
    }
    
    if (checkoutTotal) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        checkoutTotal.textContent = total.toLocaleString();
    }
}

function closeCheckout() {
    if (checkoutModal) {
        checkoutModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function handleCheckoutSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const orderData = {
        customer: {
            name: formData.get('name'),
            address: formData.get('address'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            paymentMethod: formData.get('payment'),
            notes: formData.get('notes')
        },
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        orderDate: new Date().toISOString()
    };
    
    console.log('Order placed:', orderData);
    
    // Simulate order processing
    alert('Order placed successfully! We will contact you shortly to confirm your order.');
    
    // Clear cart
    cart = [];
    updateCartUI();
    saveCartToStorage();
    closeCheckout();
    
    // Reset form
    e.target.reset();
    
    // Redirect to home page
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const contactData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        date: new Date().toISOString()
    };
    
    console.log('Contact form submitted:', contactData);
    
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
}

// Close modals when clicking outside
document.addEventListener('click', (e) => {
    if (e.target === checkoutModal) {
        closeCheckout();
    }
    
    if (e.target === cartOverlay) {
        toggleCart();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (checkoutModal && checkoutModal.classList.contains('active')) {
            closeCheckout();
        } else if (isCartOpen) {
            toggleCart();
        }
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Back to top functionality
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Service Worker registration (for PWA functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export functions for global access
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.toggleCart = toggleCart;
window.proceedToCheckout = proceedToCheckout;
window.closeCheckout = closeCheckout;