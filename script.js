// Cart Array jahan select kiye hue products save honge
let cart = [];

// 1. Cart mein item add karne ka function
function addToCart(productName, productPrice) {
    // Naya item cart mein dalein
    cart.push({ name: productName, price: productPrice });
    
    // UI update karein
    updateCartUI();
}

// 2. Cart ki screen ko update karne ka function
function updateCartUI() {
    // Total items count update karein
    document.getElementById('cart-count').innerText = cart.length;

    const cartItemsContainer = document.getElementById('cart-items');
    const totalContainer = document.getElementById('cart-total-price');

    // Agar cart khali hai
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        totalContainer.innerText = "0";
        return;
    }

    // Cart items ki list dikhane ke liye
    cartItemsContainer.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((item) => {
        totalPrice += item.price;
        cartItemsContainer.innerHTML += `
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <span>${item.name}</span>
                <span>Rs. ${item.price}</span>
            </div>
        `;
    });

    // Total price show karein
    totalContainer.innerText = totalPrice;
}

// 3. Order Process karne ka function
function processOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty! Please add a product first.");
    } else {
        alert("Thank you! Your order has been successfully processed.");
        cart = []; // Cart khali kar dein
        updateCartUI();
    }
}

// 4. Details Popup dikhane ka function 
function showDetails(name, description, price) {
    document.getElementById('modal-product-name').innerText = name;
    document.getElementById('modal-product-desc').innerText = description;
    document.getElementById('modal-product-price').innerText = "Price: Rs. " + price;
    
    // Popup ke andar wale button ko working banaya
    document.getElementById('modal-add-btn').onclick = function() {
        addToCart(name, price);
        closeDetails();
    };
    
    document.getElementById('product-detail-modal').style.display = 'flex';
}

// 5. Popup band karne ka function
function closeDetails() {
    document.getElementById('product-detail-modal').style.display = 'none';
}