// የመጀመሪያ ምርቶች መረጃ (Initial Products Data)
let products = [
    { id: 1, name: "ስማርት ስልክ (Smartphone)", price: 25000, category: "electronics", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500" },
    { id: 2, name: "ላፕቶፕ (Laptop)", price: 65000, category: "electronics", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500" },
    { id: 3, name: "ዘመናዊ ጃኬት (Jacket)", price: 3500, category: "clothing", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500" },
    { id: 4, name: "የቡና ማፍያ (Coffee Maker)", price: 8000, category: "home", image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500" }
];

let cart = [];

// DOM Elements
const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
const cartItemsList = document.getElementById("cartItemsList");
const cartTotalPrice = document.getElementById("cartTotalPrice");
const searchInput = document.getElementById("searchInput");

// Sections
const catalogSection = document.getElementById("catalogSection");
const cartSection = document.getElementById("cartSection");
const adminSection = document.getElementById("adminSection");

// Nav Buttons
document.getElementById("homeBtn").addEventListener("click", () => switchSection(catalogSection, "homeBtn"));
document.getElementById("cartBtn").addEventListener("click", () => {
    switchSection(cartSection, "cartBtn");
    renderCart();
});

// አድሚን ቁልፍ ሲጫን የይለፍ ቃል መጠየቂያ (Password Protection)
document.getElementById("adminBtn").addEventListener("click", () => {
    let password = prompt("እባክዎ የአድሚን የይለፍ ቃል ያስገቡ (ነባሪው: 1234):");
    if (password === "1234") {
        switchSection(adminSection, "adminBtn");
        renderAdminProducts();
    } else if (password !== null) {
        alert("የገባጉት የይለፍ ቃል ስህተት ነው!");
    }
});

document.getElementById("adminLogoutBtn").addEventListener("click", () => {
    switchSection(catalogSection, "homeBtn");
});

function switchSection(section, btnId) {
    document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
    document.querySelectorAll(".nav-link").forEach(btn => btn.classList.remove("active"));
    
    section.classList.add("active");
    const activeBtn = document.getElementById(btnId);
    if(activeBtn) activeBtn.classList.add("active");
}

// ምርቶችን በስክሪኑ ላይ ማሳየት (Render Products)
function renderProducts(itemsToDisplay) {
    productGrid.innerHTML = "";
    if(itemsToDisplay.length === 0) {
        productGrid.innerHTML = "<p style='grid-column: 1/-1; text-align: center;'>ምንም ምርት አልተገኘም</p>";
        return;
    }
    
    itemsToDisplay.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="price">${product.price} ብር</div>
                <button onclick="addToCart(${product.id})" class="btn-primary">ወደ ከረጢት ጨምር</button>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// ምርቶችን ወደ ከረጢት መጨመር (Add to Cart)
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartCount();
    alert("ምርቱ ወደ ከረጢት ተጨምሯል!");
}

function updateCartCount() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = totalCount;
}

// የግዢ ከረጢቱን ማሳየት (Render Cart)
function renderCart() {
    cartItemsList.innerHTML = "";
    if (cart.length === 0) {
        cartItemsList.innerHTML = "<p>ከረጢትዎ ባዶ ነው።</p>";
        cartTotalPrice.innerText = "0.00 ብር";
        return;
    }

    let total = 0;
    cart.forEach(item => {
        let itemTotal = item.price * item.quantity;
        total += itemTotal;

        const row = document.createElement("div");
        row.classList.add("cart-item-row");
        row.innerHTML = `
            <div class="cart-item-info">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h4>${item.name}</h4>
                    <p>${item.price} ብር x ${item.quantity}</p>
                </div>
            </div>
            <button onclick="removeFromCart(${item.id})" class="btn-danger" style="width:auto; padding:5px 10px;"><i class="fa-solid fa-trash"></i></button>
        `;
        cartItemsList.appendChild(row);
    });

    cartTotalPrice.innerText = `${total.toLocaleString()} ብር`;
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart();
    updateCartCount();
}

// ማጣሪያዎች (Filtering & Search)
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
        
        const category = e.target.getAttribute("data-category");
        if (category === "all") {
            renderProducts(products);
        } else {
            const filtered = products.filter(p => p.category === category);
            renderProducts(filtered);
        }
    });
});

searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term));
    renderProducts(filtered);
});

// የክፍያ እና ሞዳል ክፍት/ዝግ (Checkout & Modals)
const checkoutModal = document.getElementById("checkoutModal");
const receiptModal = document.getElementById("receiptModal");

document.getElementById("checkoutBtn").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("እባክዎ መጀመሪያ እቃዎችን ወደ ከረጢት ያስገቡ!");
        return;
    }
    checkoutModal.style.display = "flex";
});

document.querySelector(".close-modal").addEventListener("click", () => {
    checkoutModal.style.display = "none";
});

document.getElementById("checkoutForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("custName").value;
    const phone = document.getElementById("custPhone").value;
    const address = document.getElementById("custAddress").value;
    const method = document.getElementById("paymentMethod").value;

    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    let receiptHTML = `
        <p><b>ገዢ:</b> ${name}</p>
        <p><b>ስልክ:</b> ${phone}</p>
        <p><b>አድራሻ:</b> ${address}</p>
        <p><b>የክፍያ መንገድ:</b> ${method}</p>
        <hr style="margin:10px 0; border:0; border-top:1px solid #ddd;">
        <p><b>ጠቅላላ የተከፈለ:</b> ${total.toLocaleString()} ብር</p>
    `;

    document.getElementById("receiptDetails").innerHTML = receiptHTML;
    
    checkoutModal.style.display = "none";
    receiptModal.style.display = "flex";

    // ከረጢቱን ባዶ ማድረግ
    cart = [];
    updateCartCount();
});

function closeReceipt() {
    receiptModal.style.display = "none";
    switchSection(catalogSection, "homeBtn");
}

// አድሚን ምርት መጨመር እና ማስተዳደር (Admin Functions)
document.getElementById("addProductForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("prodName").value;
    const price = Number(document.getElementById("prodPrice").value);
    const category = document.getElementById("prodCategory").value;
    const image = document.getElementById("prodImage").value;

    const newProduct = {
        id: Date.now(),
        name,
        price,
        category,
        image
    };

    products.push(newProduct);
    renderProducts(products);
    renderAdminProducts();
    document.getElementById("addProductForm").reset();
    alert("ምርቱ በተሳካ ሁኔታ ተጨምሯል!");
});

function renderAdminProducts() {
    const adminList = document.getElementById("adminProductList");
    adminList.innerHTML = "";
    
    products.forEach(product => {
        const item = document.createElement("div");
        item.classList.add("admin-prod-item");
        item.innerHTML = `
            <span>${product.name} - <b>${product.price} ብር</b></span>
            <button onclick="deleteProduct(${product.id})" class="btn-danger" style="width:auto; padding:5px 10px;">ሰርዝ</button>
        `;
        adminList.appendChild(item);
    });
}

function deleteProduct(id) {
    products = products.filter(p => p.id !== id);
    renderProducts(products);
    renderAdminProducts();
}

// መተግበሪያው ሲከፈት ነባሪ ምርቶችን ማሳየት
renderProducts(products);
// የተለግራም ቦት መረጃ 
const botToken="8981438302:AAH19L3Uk-6XYCQRo86WEtI0-v59gSyf8AE";
const chatId="8885724020";