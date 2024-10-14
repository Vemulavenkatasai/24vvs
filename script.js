// Function to Add Items to Cart
function addToCart(item) {
    // Get existing cart from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the selected item to the cart
    cart.push(item);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${item} added to the cart!`);
}

// Function to Display Cart Items on 'cart.html'
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-container');

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty!</p>';
    } else {
        cartContainer.innerHTML = cart.map(item => `<li>${item}</li>`).join('');
    }
}

// Function to Clear the Cart
function clearCart() {
    localStorage.removeItem('cart');
    alert('Cart cleared!');
    displayCart(); // Refresh the cart display
}

