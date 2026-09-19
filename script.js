// --- 1. ሙሉ የምርት ዝርዝሮች (እያንዳንዱ ምድብ 15 ዓይነት እቃዎች አሉት) ---
let products = [
    // --- 1. ኤሌክትሮኒክስ (Electronics - 15 እቃዎች) ---
    { id: 1, name: "ስማርት ስልክ (Smartphone)", price: 15000, category: "electronics", image: "https://via.placeholder.com/150" },
    { id: 2, name: "ላፕቶፕ (Laptop)", price: 38000, category: "electronics", image: "https://via.placeholder.com/150" },
    { id: 3, name: "ታብሌት (Tablet)", price: 12000, category: "electronics", image: "https://via.placeholder.com/150" },
    { id: 4, name: "ስማርት ሰዓት (Smart Watch)", price: 3500, category: "electronics", image: "https://via.placeholder.com/150" },
    { id: 5, name: "ብሉቱዝ ድምጽ ማጉያ (Bluetooth Speaker)", price: 2800, category: "electronics", image: "https://via.placeholder.com/150" },
    { id: 6, name: "ገመድ አልባ የጆሮ ማዳመጫ (Wireless Earbuds)", price: 2200, category: "electronics", image: "https://via.placeholder.com/150" },
    { id: 7, name: "ዴስክቶፕ ኮምፒዩተር (Desktop PC)", price: 45000, category: "electronics", image: "https://via.placeholder.com/150" },
    { id: 8, name: "ዲጂታል ካሜራ (Digital Camera)", price: 29000, category: "electronics", image: "https://via.placeholder.com/150" },
    { id: 9, name: "ጌምንግ ኮንሶል (Gaming Console)", price: 55000, category: "electronics", image: "https://via.placeholder.com/150" },
    { id: 10, name: "ፓወር ባንክ 20000mAh (Power Bank)", price: 2500, category: "electronics", image: "https://via.placeholder.com/150" },
    { id: 11, name: "ኤክስተርናል ሀርድዲስክ 1TB (External HDD)", price: 4800, category: "electronics", image: "https://via.placeholder.com/150" },
    { id: 12, name: "ዋይ ፋይ ራውተር (Wi-Fi Router)", price: 1900, category: "electronics", image: "https://via.placeholder.com/150" },
    { id: 13, name: "ኤችዲ ፕሮጀክተር (HD Projector)", price: 18000, category: "electronics", image: "https://via.placeholder.com/150" },
    { id: 14, name: "ሞኒተር 24 ኢንች (Monitor 24\")", price: 11000, category: "electronics", image: "https://via.placeholder.com/150" },
    { id: 15, name: "ፕሪንተር (Printer)", price: 9500, category: "electronics", image: "https://via.placeholder.com/150" },

    // --- 2. አልባሳት (Clothing - 15 እቃዎች) ---
    { id: 16, name: "ወንድ ጃኬት (Men Jacket)", price: 2500, category: "clothing", image: "https://via.placeholder.com/150" },
    { id: 17, name: "የስፖርት ጫማ (Sport Shoes)", price: 3200, category: "clothing", image: "https://via.placeholder.com/150" },
    { id: 18, name: "ክላሲክ ሱሪ (Classic Trouser)", price: 1800, category: "clothing", image: "https://via.placeholder.com/150" },
    { id: 19, name: "ጥራት ያለው ኮት (Formal Suit)", price: 7000, category: "clothing", image: "https://via.placeholder.com/150" },
    { id: 20, name: "የክረምት ሁዲ (Winter Hoodie)", price: 2200, category: "clothing", image: "https://via.placeholder.com/150" },
    { id: 21, name: "የቆዳ ጃኬት (Leather Jacket)", price: 4500, category: "clothing", image: "https://via.placeholder.com/150" },
    { id: 22, name: "ካዥዋል  ቲሸርት (Casual T-Shirt)", price: 800, category: "clothing", image: "https://via.placeholder.com/150" },
    { id: 23, name: "ጂንስ ሱሪ (Jeans Pant)", price: 1600, category: "clothing", image: "https://via.placeholder.com/150" },
    { id: 24, name: "የሴቶች ቀሚስ (Women Dress)", price: 3000, category: "clothing", image: "https://via.placeholder.com/150" },
    { id: 25, name: "የትራክ ሱት (Tracksuit)", price: 2400, category: "clothing", image: "https://via.placeholder.com/150" },
    { id: 26, name: "የክረምት ጃኬት (Puffer Jacket)", price: 3500, category: "clothing", image: "https://via.placeholder.com/150" },
    { id: 27, name: "ፎርማል ጫማ (Formal Shoes)", price: 3800, category: "clothing", image: "https://via.placeholder.com/150" },
    { id: 28, name: "የስፖርት ቲሸርት (Sport Jersey)", price: 1000, category: "clothing", image: "https://via.placeholder.com/150" },
    { id: 29, name: "የጥጥ ሹራብ (Cotton Sweater)", price: 1700, category: "clothing", image: "https://via.placeholder.com/150" },
    { id: 30, name: "ባርኔጣ እና ሻርፕ (Cap & Scarf Set)", price: 600, category: "clothing", image: "https://via.placeholder.com/150" },

    // --- 3. የቤት እቃዎች (Furniture - 15 እቃዎች) ---
    { id: 31, name: "ዘመናዊ የቡና ጠረጴዛ (Coffee Table)", price: 4500, category: "furniture", image: "https://via.placeholder.com/150" },
    { id: 32, name: "የመኝታ አልጋ (Bed Frame)", price: 22000, category: "furniture", image: "https://via.placeholder.com/150" },
    { id: 33, name: "የቢሮ ወንበር (Office Chair)", price: 5500, category: "furniture", image: "https://via.placeholder.com/150" },
    { id: 34, name: "የሳሎን ሶፋ (Living Room Sofa)", price: 30000, category: "furniture", image: "https://via.placeholder.com/150" },
    { id: 35, name: "የመጻሕፍት መደርደሪያ (Bookshelf)", price: 6000, category: "furniture", image: "https://via.placeholder.com/150" },
    { id: 36, name: "የመመገቢያ ጠረጴዛ (Dining Table Set)", price: 25000, category: "furniture", image: "https://via.placeholder.com/150" },
    { id: 37, name: "የቴሌቪዥን መደርደሪያ (TV Stand)", price: 7500, category: "furniture", image: "https://via.placeholder.com/150" },
    { id: 38, name: "የልብስ መጋረጃ (Wardrobe Closet)", price: 18000, category: "furniture", image: "https://via.placeholder.com/150" },
    { id: 39, name: "የመኝታ ቤት ኮመዲኖ (Bedside Table)", price: 2000, category: "furniture", image: "https://via.placeholder.com/150" },
    { id: 40, name: "የወጥ ቤት ካቢኔ (Kitchen Cabinet)", price: 15000, category: "furniture", image: "https://via.placeholder.com/150" },
    { id: 41, name: "የእንግዳ ወንበር (Guest Chair)", price: 3000, category: "furniture", image: "https://via.placeholder.com/150" },
    { id: 42, name: "የጫማ መደርደሪያ (Shoe Rack)", price: 2500, category: "furniture", image: "https://via.placeholder.com/150" },
    { id: 43, name: "የግድግዳ ዎል ዴኮር መስተዋት (Wall Mirror)", price: 3500, category: "furniture", image: "https://via.placeholder.com/150" },
    { id: 44, name: "የሰነድ ካዝና (Safe Box)", price: 12000, category: "furniture", image: "https://via.placeholder.com/150" },
    { id: 45, name: "የመዝናኛ ላውንጅ ወንበር (Lounge Chair)", price: 8500, category: "furniture", image: "https://via.placeholder.com/150" }
];

// --- 2. ግሎባል ተለዋዋጮች ---
let cart = [];
let deliveryFee = 0;
let discountRate = 0;
let appliedPromoCode = "";
let couponUsed = false; 
let adminAllowedDiscountRate = 0.05; // 5% ቅናሽ

// --- 3. ዌብሳይቱ ሲከፈት ---
window.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    populateCompareSelectors();

    const urlParams = new URLSearchParams(window.location.search);
    const isAdmin = urlParams.get('admin');
    const adminModal = document.getElementById("admin-modal");
    
    if (isAdmin === 'true') {
        let password = prompt("🔒 እባክዎ የአስተዳዳሪ (Admin) መግቢያ ቃል ያስገቡ:");
        
        if (password === "maki2026") {
            if (adminModal) {
                adminModal.style.display = "block";
            }
            alert("✨ እንኳን ደህና መጡ! ወደ አድሚን ፓነል ገብተዋል።");
            renderAdminManagementList();
        } else {
            alert("❌ የሰጡት የይለፍ ቃል ስህተት ነው!");
            window.location.href = window.location.pathname; 
        }
    } else {
        if (adminModal) {
            adminModal.style.display = "none";
        }
    }
});

// --- 4. ምርቶችን ፊት ለፊት ማሳያ ፋንክሽን ---
function renderProducts(productsToDisplay) {
    const productContainer = document.getElementById("product-list");
    if (!productContainer) return;

    productContainer.innerHTML = "";
    const list = Array.isArray(productsToDisplay) ? productsToDisplay : products;

    list.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${product.image || 'https://via.placeholder.com/150'}" alt="${product.name}" style="width:100%; height:140px; object-fit:cover; border-radius:6px;">
            <h3 style="font-size:16px; margin: 10px 0 5px 0;">${product.name}</h3>
            <p style="color: #666; font-size: 13px; margin-bottom: 5px;">ምድብ: ${product.category}</p>
            <p style="color: #007bff; font-weight: bold; margin-bottom: 10px;">${product.price} ብር</p>
            <button onclick="addToCart(${product.id})" style="background: #28a745; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; width: 100%;">ወደ ከረጢት ጨምር 🛒</button>
        `;
        productContainer.appendChild(productCard);
    });
}

// --- 5. እቃዎችን ማወዳደሪያ (Compare Logic) ---
function populateCompareSelectors() {
    const select1 = document.getElementById("compare-1");
    const select2 = document.getElementById("compare-2");
    
    if (!select1 || !select2) return;

    select1.innerHTML = '<option value="">እቃ 1 ይምረጡ</option>';
    select2.innerHTML = '<option value="">እቃ 2 ይምረጡ</option>';

    products.forEach(product => {
        select1.innerHTML += `<option value="${product.id}">${product.name} (${product.price} ብር)</option>`;
        select2.innerHTML += `<option value="${product.id}">${product.name} (${product.price} ብር)</option>`;
    });
}

function updateComparison() {
    const select1 = document.getElementById("compare-1");
    const select2 = document.getElementById("compare-2");
    const resultBox = document.getElementById("compare-result-box");

    if (!select1 || !select2 || !resultBox) return;

    const id1 = parseInt(select1.value);
    const id2 = parseInt(select2.value);

    if (!id1 || !id2) {
        resultBox.innerHTML = "<p style='color: #777; text-align:center;'>እባክዎ ለማወዳደር ሁለቱንም እቃዎች ይምረጡ።</p>";
        return;
    }

    const p1 = products.find(p => p.id === id1);
    const p2 = products.find(p => p.id === id2);

    if (!p1 || !p2) return;

    let priceDiff = p1.price - p2.price;
    let priceComparisonText = "";
    
    if (priceDiff > 0) {
        priceComparisonText = `<b>${p1.name}</b> ከ <b>${p2.name}</b> በ <b>${priceDiff} ብር</b> ውድ ነው።`;
    } else if (priceDiff < 0) {
        priceComparisonText = `<b>${p1.name}</b> ከ <b>${p2.name}</b> በ <b>${Math.abs(priceDiff)} ብር</b> ርካሽ ነው።`;
    } else {
        priceComparisonText = `ሁለቱም እቃዎች <b>እኩል ዋጋ</b> አላቸው።`;
    }

    resultBox.innerHTML = `
        <div style="display: flex; justify-content: space-around; text-align: left; gap: 15px;">
            <div style="flex: 1; background: #f8f9fa; padding: 10px; border-radius: 6px;">
                <h4>${p1.name}</h4>
                <p><b>ዋጋ:</b> ${p1.price} ብር</p>
                <p><b>ምድብ:</b> ${p1.category}</p>
            </div>
            <div style="flex: 1; background: #f8f9fa; padding: 10px; border-radius: 6px;">
                <h4>${p2.name}</h4>
                <p><b>ዋጋ:</b> ${p2.price} ብር</p>
                <p><b>ምድብ:</b> ${p2.category}</p>
            </div>
        </div>
        <p style="margin-top: 15px; text-align: center; font-weight: bold; color: #007bff;">📊 የዋጋ ንጽጽር ውጤት: ${priceComparisonText}</p>
    `;
}

// --- 6. እቃዎችን ወደ ከረጢት (Cart) መጨመር ---
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
    alert(`✅ ${product.name} ወደ ከረጢት ተጨምሯል!`);
}

// --- 7. የካርት (Cart) እቃዎችን እና ዋጋ ማደስ ---
function updateCartUI() {
    const cartContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    if (!cartContainer) return;

    cartContainer.innerHTML = "";
    let subtotal = 0;

    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const cartRow = document.createElement("div");
        cartRow.style.display = "flex";
        cartRow.style.justifyContent = "space-between";
        cartRow.style.alignItems = "center";
        cartRow.style.margin = "8px 0";
        cartRow.style.borderBottom = "1px solid #ddd";
        cartRow.style.paddingBottom = "5px";

        cartRow.innerHTML = `
            <span>${item.name} (${item.quantity})</span>
            <span>${itemTotal} ብር</span>
            <button onclick="removeFromCart(${index})" style="background: #dc3545; color: white; border: none; padding: 3px 6px; border-radius: 3px; cursor: pointer;">✕</button>
        `;
        cartContainer.appendChild(cartRow);
    });

    let discountAmount = subtotal * discountRate;
    let discountedSubtotal = subtotal - discountAmount;
    let grandTotal = discountedSubtotal + deliveryFee;

    if (cartTotalElement) {
        cartTotalElement.innerHTML = `
            <b>ዕቃዎች ድምር:</b> ${subtotal} ብር<br>
            ${discountRate > 0 ? `<b>ቅናሽ (5%):</b> -${discountAmount} ብር<br>` : ''}
            <b>ማስረከቢያ:</b> ${deliveryFee} ብር<br>
            <b style="color: #28a745; font-size: 16px;">ጠቅላላ የሚከፈል: ${grandTotal} ብር</b>
        `;
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// --- 8. የኩፖን ኮድ ማረጋገጫ (አንድ ጊዜ ብቻ የሚሰራ እና 5% ቅናሽ) ---
function applyPromoCode() {
    const promoInput = document.getElementById("promo-input").value.trim().toUpperCase();
    const messageElement = document.getElementById("promo-message");
    const validPromoCode = "MAKI2026";

    if (couponUsed) {
        messageElement.style.color = "red";
        messageElement.innerText = "❌ ይህ የኩፖን ኮድ በዚህ ትዕዛዝ አስቀድሞ ጥቅም ላይ ውሏል!";
        return;
    }

    if (adminAllowedDiscountRate > 0 && promoInput === validPromoCode) {
        discountRate = adminAllowedDiscountRate; 
        appliedPromoCode = validPromoCode;
        couponUsed = true; 
        
        messageElement.style.color = "green";
        messageElement.innerText = "🎉 የኩፖን ኮድ ተቀባይነት አግኝቷል! 5% ቅናሽ ተደርጓል።";
        document.getElementById("promo-input").disabled = true;
    } else {
        discountRate = 0;
        appliedPromoCode = "";
        messageElement.style.color = "red";
        messageElement.innerText = "❌ ያስገቡት የኩፖን ኮድ ትክክል አይደለም ወይም አስተዳዳሪው አልፈቀደም!";
    }
    updateCartUI(); 
}

// --- 9. የማስረከቢያ ክፍያ ማስተካከያ ---
function updateDeliveryFee() {
    const locationSelect = document.getElementById("customer-location");
    const selectedOption = locationSelect.options[locationSelect.selectedIndex];
    deliveryFee = parseInt(selectedOption.getAttribute("data-fee")) || 0;
    updateCartUI();
}

// --- 10. አድሚን ፓነል (እቃዎችን መጨመር፣ ማስተካከል እና መሰረዝ) ---
function renderAdminManagementList() {
    const managementListContainer = document.getElementById("admin-product-management-list");
    if (!managementListContainer) return;

    managementListContainer.innerHTML = "";
    
    if (products.length === 0) {
        managementListContainer.innerHTML = "<p>ምንም እቃዎች የሉም።</p>";
        return;
    }

    products.forEach((product) => {
        const itemRow = document.createElement("div");
        itemRow.style.display = "flex";
        itemRow.style.justifyContent = "space-between";
        itemRow.style.alignItems = "center";
        itemRow.style.padding = "8px";
        itemRow.style.margin = "5px 0";
        itemRow.style.background = "#f8f9fa";
        itemRow.style.border = "1px solid #dee2e6";
        itemRow.style.borderRadius = "4px";

        itemRow.innerHTML = `
            <span><b>${product.name}</b> - ${product.price} ብር</span>
            <div>
                <button onclick="adminEditProduct(${product.id})" style="background: #ffc107; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer; margin-right: 5px; font-weight: bold;">አስተካክል ✍️</button>
                <button onclick="adminDeleteProduct(${product.id})" style="background: #dc3545; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">ሰርዝ 🗑️</button>
            </div>
        `;
        managementListContainer.appendChild(itemRow);
    });
}

function adminAddProduct() {
    const nameInput = document.getElementById("admin-product-name");
    const priceInput = document.getElementById("admin-product-price");
    const categoryInput = document.getElementById("admin-product-category");
    const imageInput = document.getElementById("admin-product-image");

    const name = nameInput ? nameInput.value.trim() : "";
    const price = priceInput ? parseFloat(priceInput.value) : NaN;
    const category = categoryInput ? categoryInput.value : "electronics";
    const image = imageInput && imageInput.value.trim() !== "" ? imageInput.value.trim() : "https://via.placeholder.com/150";

    if (!name || isNaN(price) || price <= 0) {
        alert("⚠️ እባክዎ ትክክለኛ የእቃ ስም እና የዋጋ ቁጥር ያስገቡ!");
        return;
    }

    const newProduct = {
        id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
        name: name,
        price: price,
        category: category,
        image: image
    };

    products.push(newProduct);
    renderProducts(products);
    populateCompareSelectors();
    renderAdminManagementList();

    alert("✅ አዲሱ እቃ እና ዋጋው በተሳካ ሁኔታ ተጨመረ!");

    if (nameInput) nameInput.value = "";
    if (priceInput) priceInput.value = "";
    if (imageInput) imageInput.value = "";
}

function adminEditProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const newName = prompt("አዲሱን የእቃ ስም ያስገቡ:", product.name);
    if (newName === null) return;

    const newPriceStr = prompt("አዲሱን ዋጋ (በብር) ያስገቡ:", product.price);
    if (newPriceStr === null) return;
    
    const newPrice = parseFloat(newPriceStr);
    if (isNaN(newPrice) || newPrice < 0) {
        alert("❌ ያስገቡት ዋጋ ትክክል አይደለም!");
        return;
    }

    product.name = newName.trim();
    product.price = newPrice;

    renderProducts(products);
    populateCompareSelectors();
    renderAdminManagementList();

    alert("✨ እቃው እና ዋጋው በተሳካ ሁኔታ ተስተካክለዋል!");
}

function adminDeleteProduct(productId) {
    if (confirm("እርግጠኛ ኖት ይህንን እቃ መሰረዝ ይፈልጋሉ?")) {
        products = products.filter(p => p.id !== productId);
        renderProducts(products);
        populateCompareSelectors();
        renderAdminManagementList();
        alert("🗑️ እቃው ተሰርዟል!");
    }
}

// --- 11. ትዕዛዝ ማረጋገጫ (Transaction ID የግዴታ የሆነበት) ---
function checkout(event) {
    if (event) event.preventDefault();

    if (cart.length === 0) {
        alert("እባክዎ ትዕዛዝ ከመላክዎ በፊት ቢያንስ አንድ እቃ ይምረጡ!");
        return;
    }

    const name = document.getElementById("customer-name").value.trim();
    const phone = document.getElementById("customer-phone").value.trim();
    const locationSelect = document.getElementById("customer-location");
    const location = locationSelect.value;
    const paymentMethod = document.getElementById("payment-method").value;
    const transactionId = document.getElementById("transaction-id").value.trim();

    if (!name || !phone || !location || !transactionId) {
        alert("⚠️ ስህተት፡ እባክዎ ሙሉ ስምዎን፣ ስልክ ቁጥርዎን፣ አካባቢዎን እና የክፍያ ማረጋገጫ (Transaction ID) በትክክል ያስገቡ! ያለ ክፍያ ማረጋገጫ ትዕዛዝ ማስተላለፍ አይቻልም።");
        return;
    }

    let orderSummary = `👤 የደንበኛ ስም: ${name}\n`;
    orderSummary += `📞 ስልክ ቁጥር: ${phone}\n`;
    orderSummary += `📍 አካባቢ: ${location}\n`;
    orderSummary += `💳 የክፍያ አማራጭ: ${paymentMethod}\n`;
    orderSummary += `🧾 የክፍያ ማረጋገጫ (TxID): ${transactionId}\n\n`;
    orderSummary += `📦 የተመረጡ እቃዎች ዝርዝር:\n`;
    
    let subtotal = 0;
    cart.forEach(item => {
        let itemTotal = item.price * item.quantity;
        orderSummary += `- ${item.name} (${item.quantity} ብዛት) = ${itemTotal} ብር\n`;
        subtotal += itemTotal;
    });

    let discountAmount = subtotal * discountRate;
    let discountedSubtotal = subtotal - discountAmount;
    let grandTotal = discountedSubtotal + deliveryFee;

    orderSummary += `\n🏷️ የእቃዎች ድምር: ${subtotal} ብር`;
    if (discountRate > 0) {
        orderSummary += `\n🎟️ የተጠቀመበት ኩፖን: ${appliedPromoCode} (5% ቅናሽ: -${discountAmount} ብር)`;
        orderSummary += `\n✨ ከቅናሽ በኋላ ያለው ዋጋ: ${discountedSubtotal} ብር`;
    }
    orderSummary += `\n🚚 የማስረከቢያ ክፍያ: ${deliveryFee} ብር`;
    orderSummary += `\n💰 ጠቅላላ የሚከፈል: ${grandTotal} ብር`;

    sendOrderToTelegram(orderSummary);
    
    // ማጽዳት
    cart = [];
    deliveryFee = 0;
    discountRate = 0;
    appliedPromoCode = "";
    couponUsed = false;
    locationSelect.selectedIndex = 0;
    
    const promoInput = document.getElementById("promo-input");
    if(promoInput) { promoInput.value = ""; promoInput.disabled = false; }
    const promoMsg = document.getElementById("promo-message");
    if(promoMsg) promoMsg.innerText = "";
    const txInput = document.getElementById("transaction-id");
    if(txInput) txInput.value = "";
    
    updateCartUI();
    
    const nameInput = document.getElementById("customer-name");
    const phoneInput = document.getElementById("customer-phone");
    if(nameInput) nameInput.value = "";
    if(phoneInput) phoneInput.value = "";
}

// --- 12. መረጃውን ወደ ቴሌግራም ቦት የሚልከው ፋንክሽን ---
function sendOrderToTelegram(message) {
    const botToken = "8981438302:AAH19L3Uk-6XYCQRo86WEtI0-v59gSyf8AE";
    const chatId = "8885724020";
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const data = {
        chat_id: chatId,
        text: message
    };

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert("✅ ትዕዛዝዎ በተሳካ ሁኔታ ተልኳል! እናመሰግናለን።");
        } else {
            alert("❌ ትዕዛዙን መላክ አልተቻለም። እባክዎ እንደገና ይሞክሩ።");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("❌ ከኔትወርክ ጋር የተያያዘ ስህተት አጋጥሟል!");
    });
}
