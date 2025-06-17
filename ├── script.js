// Import Firebase modules (ES6 Module style)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// ✅ Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCWI4njR31bAXnZ3NmUr31QgeP3teD6VGs",
    authDomain: "quickmart-76484.firebaseapp.com",
    projectId: "quickmart-76484",
    storageBucket: "quickmart-76484.firebasestorage.app",
    messagingSenderId: "450744017441",
    appId: "1:450744017441:web:b8d72c8666f01662cfb960",
    measurementId: "G-B4YGQ0PKVB"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Sign Up
window.signUp = function () {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            document.getElementById("message").innerText = "✅ Sign up successful!";
        })
        .catch((error) => {
            document.getElementById("message").innerText = `❌ ${error.message}`;
        });
};

// ✅ Login
window.login = function () {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            document.getElementById("message").innerText = "✅ Login successful!";
        })
        .catch((error) => {
            document.getElementById("message").innerText = `❌ ${error.message}`;
        });
};

// ✅ Forgot Password
window.forgotPassword = function () {
    const email = document.getElementById("login-email").value;

    sendPasswordResetEmail(auth, email)
        .then(() => {
            document.getElementById("message").innerText = "📧 Reset email sent!";
        })
        .catch((error) => {
            document.getElementById("message").innerText = `❌ ${error.message}`;
        });
};

let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ৳${item.price}`;
        cartItems.appendChild(li);
        total += parseFloat(item.price);
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = `৳${total.toFixed(2)}`;
}

function toggleCart() {
    const cartBox = document.getElementById("cart-box");
    cartBox.style.display = cartBox.style.display === "none" ? "block" : "none";
}


// ============== NEW CODE FOR CATEGORY MENU TOGGLE ============
document.addEventListener('DOMContentLoaded', function() {
    const menuToggleButton = document.getElementById('menuToggleButton');
    const categoryMenu = document.getElementById('categoryMenu');

    if (menuToggleButton && categoryMenu) {
        menuToggleButton.addEventListener('click', function() {
            categoryMenu.classList.toggle('show');
        });

        // Optional: Close the dropdown if the user clicks outside of it
        document.addEventListener('click', function(event) {
            // Check if the clicked target is neither the menu button nor inside the category menu
            if (!categoryMenu.contains(event.target) && !menuToggleButton.contains(event.target)) {
                categoryMenu.classList.remove('show');
            }
        });
    }
});
// ============ END NEW CODE FOR CATEGORY MENU TOGGLE ==========