// የምርት ዝርዝሮች
let products = [
    { id: 1, name: "ስማርት ስልኮች (Smartphones)", price: 15000, category: "electronics", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60" },
    { id: 2, name: "ላፕቶፕ (Laptop)", price: 35000, category: "electronics", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60" },
    { id: 3, name: "የወንዶች ጃኬት (Jacket)", price: 2500, category: "clothes", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60" },
    { id: 4, name: "የሴቶች ቀሚስ (Dress)", price: 1800, category: "clothes", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=60" },
    { id: 5, name: "የማቀዝቀዣ ማሽን (Refrigerator)", price: 45000, category: "appliances", image: "https://images.unsplash.com/photo-1584568694244-14fbdf82bd1e?w=500&auto=format&fit=crop&q=60" },
    { id: 6, name: "ብለንደር (Blender)", price: 3200, category: "appliances", image: "https://images.unsplash.com/photo-1570222094114-d074f7e2455c?w=500&auto=format&fit=crop&q=60" }
];

let cart = [];

// የቴሌግራም ቦት መረጃዎች (ትክክለኛው ቶከን እና Chat ID: 8885724020)
const botToken = "8981438302:AAH19L3Uk-6XYCQRo86WEtI0-v59gSyf8AE";
const chatId = "8885724020";

// ምርቶችን በዌብሳይት ላይ ማሳያ
function renderProducts(items) {
    const productList = document.getElementById("product-list");
    if (!productList) return;
    
    productList.innerHTML = "";
    items.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} ብር</p>
            <button onclick="addToCart(${product.id})">ወደ ካርት ጨምር</button>
        `;
        productList.appendChild(card);
    });
}

// በምድብ (Category) ማጣሪያ
function filterProducts(category) {
    if (category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

// በሰርች (Search) መፈለጊያ
function searchProducts() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(filtered);
}

// ምርቶችን ወደ ካርት ማከያዎች
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartUI();
        alert(`${product.name} ወደ ካርት ገብቷል!`);
    }
}

// የካርት ማሳያን ማስተካከል
function updateCartUI() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "ካርቱ ባዶ ነው።";
        totalPriceElement.innerHTML = "ጠቅላላ ዋጋ: 0 ብር";
        return;
    }

    let html = "<ul>";
    let total = 0;
    cart.forEach((item, index) => {
        html += `<li>${item.name} - ${item.price} ብር</li>`;
        total += item.price;
    });
    html += "</ul>";
    
    cartItemsContainer.innerHTML = html;
    totalPriceElement.innerHTML = `ጠቅላላ ዋጋ: ${total} ብር`;
}

// ትዕዛዝ ወደ ቴሌግራም ቦት የሚልክ ፊንክሽን
function sendOrderToTelegram(orderDetails) {
    const messageText = `🛒 አዲስ ትዕዛዝ መጥቷል!\n\n${orderDetails}`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(messageText)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("ትዕዛዙ በትክክል ተልኳል:", data);
            alert("ትዕዛዝዎ በስኬት ወደ ቴሌግራም ቦት ተልኳል!");
        })
        .catch(error => {
            console.error("የትዕዛዝ መላክ ስህተት:", error);
            alert("ትዕዛዙን መላክ አልተቻለም, እባክዎ እንደገና ይሞክሩ።");
        });
}

// የትዕዛዝ ማረጋገጫ (Checkout) ፊንክሽን
function checkout(event) {
    if (event) event.preventDefault();

    if (cart.length === 0) {
        alert("እባክዎ ከመዘዝዎ በፊት ቢያንስ አንድ እቃ ይምረጡ!");
        return;
    }

    let orderSummary = "የተመረጡ እቃዎች ዝርዝር:\n";
    let total = 0;
    
    cart.forEach(item => {
        orderSummary += `- ${item.name}: ${item.price} ብር\n`;
        total += item.price;
    });
    orderSummary += `\nጠቅላላ ዋጋ: ${total} ብር`;

    sendOrderToTelegram(orderSummary);
    
    // ካርቱን ባዶ ማድረግ
    cart = [];
    updateCartUI();
}

// ገጹ ሲከፈት ምርቶችን መጫን
window.onload = function() {
    renderProducts(products);
};
