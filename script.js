let products = [
    { id: 1, name: "ስማርት ስልክ (Smartphone)", price: 15000, category: "electronics", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300", description: "ጥራት ያለው ዘመናዊ ስማርት ስልክ።" },
    { id: 2, name: "ላፕቶፕ (Laptop)", price: 38000, category: "electronics", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300", description: "ፈጣን እና ለአሰራር ምቹ የሆነ ኮር i5 ላፕቶፕ።" },
    { id: 3, name: "ታብሌት (Tablet)", price: 12000, category: "electronics", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300", description: "ለጥናት እና ለመዝናኛ የሚሆን ታብሌት።" },
    { id: 4, name: "ስማርት ሰዓት (Smart Watch)", price: 3500, category: "electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300", description: "የጤና መቆጣጠሪያ ሰዓት።" },
    { id: 5, name: "ብሉቱዝ ድምጽ ማጉያ (Speaker)", price: 2800, category: "electronics", image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300", description: "ከፍተኛ ድምጽ ያለው ተንቀሳቃሽ ድምጽ ማጉያ።" },
    { id: 6, name: "ገመድ አልባ የጆሮ ማዳመጫ (Earbuds)", price: 2200, category: "electronics", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300", description: "ጥራት ያለው ድምጽ እና ረጅም ባትሪ።" },
    { id: 7, name: "ዴስክቶፕ ኮምፒዩተር (Desktop PC)", price: 45000, category: "electronics", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300", description: "ለከባድ ስራዎች የሚሆን ዴስክቶፕ ኮምፒዩተር።" },
    { id: 8, name: "ዲጂታል ካሜራ (Digital Camera)", price: 29000, category: "electronics", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300", description: "ከፍተኛ ጥራት ያላቸውን ፎቶዎች የሚቀዳ።" },
    { id: 9, name: "ጌምንግ ኮንሶል (Gaming Console)", price: 55000, category: "electronics", image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300", description: "ዘመናዊ የቪዲዮ ጨዋታዎችን ማጫወቻ።" },
    { id: 10, name: "ፓወር ባንክ 20000mAh (Power Bank)", price: 2500, category: "electronics", image: "https://images.unsplash.com/photo-1609592424155-235889745d13?w=300", description: "ሃይለኛ ፓወር ባንክ።" },
    { id: 11, name: "ኤክስተርናል ሀርድዲስክ 1TB (External HDD)", price: 4800, category: "electronics", image: "https://images.unsplash.com/photo-1531492740970-d79cbdf5d0a5?w=300", description: "ትላልቅ ፋይሎችን ደህንነቱ በተጠበቀ ሁኔታ መያዣ።" },
    { id: 12, name: "ዋይ ፋይ ራውተር (Wi-Fi Router)", price: 1900, category: "electronics", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=300", description: "ፈጣን እና ሰፊ የኢንተርኔት ሽፋን ራውተር።" },
    { id: 13, name: "ኤችዲ ፕሮጀክተር (HD Projector)", price: 18000, category: "electronics", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300", description: "ፊልሞችን በትልቅ ስክሪን ማሳያ።" },
    { id: 14, name: "ሞኒተር 24 ኢንች (Monitor 24\")", price: 11000, category: "electronics", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300", description: "ግልጽ የኤልዲ ማሳያ ሞኒተር።" },
    { id: 15, name: "ፕሪንተር (Printer)", price: 9500, category: "electronics", image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=300", description: "ሰነዶችን በፍጥነት ማተሚያ ማሽን።" },

    // --- አልባሳት (Clothing - 15 እቃዎች) ---
    { id: 16, name: "ወንድ ጃኬት (Men Jacket)", price: 2500, category: "clothing", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300", description: "ሞቅ የሚያደርግ የወንድ ጃኬት።" },
    { id: 17, name: "የስፖርት ጫማ (Sport Shoes)", price: 3200, category: "clothing", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300", description: "ለስፖርት ምቹ የሆነ ጫማ።" },
    { id: 18, name: "ክላሲክ ሱሪ (Classic Trouser)", price: 1800, category: "clothing", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=300", description: "ለስራ የሚሆን ውብ ሱሪ።" },
    { id: 19, name: "ጥራት ያለው ኮት (Formal Suit)", price: 7000, category: "clothing", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300", description: "ለሰርግ እና ስብሰባ የሚሆን ሙሉ ልብስ።" },
    { id: 20, name: "የክረምት ሁዲ (Winter Hoodie)", price: 2200, category: "clothing", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=300", description: "ምቹ እና ለስላሳ ሁዲ።" },
    { id: 21, name: "የቆዳ ጃኬት (Leather Jacket)", price: 4500, category: "clothing", image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=300", description: "ማራኪ እና ዘመናዊ ንጹህ የቆዳ ጃኬት።" },
    { id: 22, name: "ካዥዋል ቲሸርት (Casual T-Shirt)", price: 800, category: "clothing", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=300", description: "በዕለት ተዕለት እንቅስቃሴዎች ለመልበስ ምቹ ቲሸርት።" },
    { id: 23, name: "ጂንስ ሱሪ (Jeans Pant)", price: 1600, category: "clothing", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300", description: "ጠንካራ እና ዘላቂ ፋሽን ያለው ጂንስ ሱሪ።" },
    { id: 24, name: "የሴቶች ቀሚስ (Women Dress)", price: 3000, category: "clothing", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300", description: "ለድግስ እና ለልዩ ቀናት የሚሆን ማራኪ ቀሚስ።" },
    { id: 25, name: "የትራክ ሱት (Tracksuit)", price: 2400, category: "clothing", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300", description: "ለስፖርት እንቅስቃሴዎች የሚሆን ሙሉ የስፖርት ልብስ።" },
    { id: 26, name: "የክረምት ጃኬት (Puffer Jacket)", price: 3500, category: "clothing", image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=300", description: "ከፍተኛ ቅዝቃዜን የሚከላከል ውፍረት ያለው ጃኬት።" },
    { id: 27, name: "ፎርማል ጫማ (Formal Shoes)", price: 3800, category: "clothing", image: "https://images.unsplash.com/photo-1533867617858-e7d97e0afd8b?w=300", description: "ከእውነተኛ የቆዳ ዕቃ የተሰራ ውብ ፎርማል ጫማ።" },
    { id: 28, name: "የስፖርት ቲሸርት (Sport Jersey)", price: 1000, category: "clothing", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300", description: "አየር የሚያስገባ ቀላል የስፖርት ማልያ።" },
    { id: 29, name: "የጥጥ ሹራብ (Cotton Sweater)", price: 1700, category: "clothing", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300", description: "ቀላል እና ለሰውነት ምቹ የሆነ የጥጥ ሹራብ።" },
    { id: 30, name: "ባርኔጣ እና ሻርፕ (Cap & Scarf Set)", price: 600, category: "clothing", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=300", description: "ከፀሐይ እና ከቀዝቃዛ አየር መከላከያ ስብስብ።" },

    // --- የቤት እቃዎች (Furniture - 15 እቃዎች) ---
    { id: 31, name: "ዘመናዊ የቡና ጠረጴዛ (Coffee Table)", price: 4500, category: "furniture", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=300", description: "ለሳሎን የሚሆን ማራኪ ጠረጴዛ።" },
    { id: 32, name: "የመኝታ አልጋ (Bed Frame)", price: 22000, category: "furniture", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300", description: "ምቹ እና ጥራት ያለው አልጋ።" },
    { id: 33, name: "የቢሮ ወንበር (Office Chair)", price: 5500, category: "furniture", image: "https://images.unsplash.com/photo-1580481077494-e3299ac25b94?w=300", description: "የሚስተካከል የቢሮ ወንበር።" },
    { id: 34, name: "የሳሎን ሶፋ (Living Room Sofa)", price: 30000, category: "furniture", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300", description: "ሰፊ እና ለቤተሰብ መቀመጫ ሶፋ።" },
    { id: 35, name: "የመጻሕፍት መደርደሪያ (Bookshelf)", price: 6000, category: "furniture", image: "https://images.unsplash.com/photo-1594623930572-300a3011d9ae?w=300", description: "መጻሕፍትን በቅደም ተከተል መያዣ።" },
    { id: 36, name: "የመመገቢያ ጠረጴዛ (Dining Table Set)", price: 25000, category: "furniture", image: "https://images.unsplash.com/photo-1615066390971-00e4e1ca2b0d?w=300", description: "ቤተሰብ በጋራ ለመመገብ የሚያስችል ውብ ጠረጴዛ።" },
    { id: 37, name: "የቴሌቪዥን መደርደሪያ (TV Stand)", price: 7500, category: "furniture", image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=300", description: "ቴሌቪዥን እና ዲኮር እቃዎችን መጫኛ መደርደሪያ።" },
    { id: 38, name: "የልብስ መጋረጃ (Wardrobe Closet)", price: 18000, category: "furniture", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=300", description: "ልብሶችን በንጽህና መያዣ ካቢኔ።" },
    { id: 39, name: "የመኝታ ቤት ኮመዲኖ (Bedside Table)", price: 2000, category: "furniture", image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=300", description: "አልጋ አጠገብ ትናንሽ እቃዎችን ማስቀመጫ ጠረጴዛ።" },
    { id: 40, name: "የወጥ ቤት ካቢኔ (Kitchen Cabinet)", price: 15000, category: "furniture", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=300", description: "የወጥ ቤት እቃዎችን በስርዓት መያዣ ካቢኔ።" },
    { id: 41, name: "የእንግዳ ወንበር (Guest Chair)", price: 3000, category: "furniture", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300", description: "ለእንግዶች መቀመጫ የሚሆን ውብ እና ጽኑ ወንበር።" },
    { id: 42, name: "የጫማ መደርደሪያ (Shoe Rack)", price: 2500, category: "furniture", image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=300", description: "ጫማዎችን በንጽህና እና በቅደም ተከተል መያዣ።" },
    { id: 43, name: "የግድግዳ ዎል ዴኮር መስተዋት (Wall Mirror)", price: 3500, category: "furniture", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=300", description: "ግድግዳ ላይ የሚሰቀል ትልቅ እና ጥራት ያለው መስተዋት።" },
    { id: 44, name: "የሰነድ ካዝና (Safe Box)", price: 12000, category: "furniture", image: "https://images.unsplash.com/photo-1591123120675-6f77d3ae0286?w=300", description: "ገንዘብ እና ሚስጥራዊ ሰነዶችን በጥንቃቄ መቆለፊያ።" },
    { id: 45, name: "የመዝናኛ ላውንጅ ወንበር (Lounge Chair)", price: 8500, category: "furniture", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300", description: "ዘና ለማለት እና ለማንበብ ምቹ የሆነ ወንበር።" }
];

let cart = [];
let deliveryFee = 0;
let discountRate = 0;
let freeDelivery = false;
let appliedPromoCode = "";
let couponUsed = false; 
let adminDiscountAllowed = false; 
let adminGiftAllowed = false; // አድሚኑ ስጦታን እንዲታይ የፈቀደበት ሁኔታ

window.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    populateCompareSelectors();
    startBannerSlider();

    const urlParams = new URLSearchParams(window.location.search);
    const isAdmin = urlParams.get('admin');
    const adminModal = document.getElementById("admin-modal");
    
    if (isAdmin === 'true') {
        let password = prompt("🔒 እባክዎ የአስተዳዳሪ መግቢያ ቃል ያስገቡ:");
        if (password === "maki2026") {
            if (adminModal) adminModal.style.display = "flex";
            renderAdminManagementList();
        } else {
            alert("❌ የይለፍ ቃል ስህተት ነው!");
            window.location.href = window.location.pathname; 
        }
    } else {
        if (adminModal) adminModal.style.display = "none";
    }
});

function startBannerSlider() {
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 3000);
}

// --- አድሚን የበዓል ስጦታ ማስተካከያ እና ቁጥጥር ---
function toggleAdminGift(checkbox) {
    adminGiftAllowed = checkbox.checked;
    const giftSection = document.getElementById("holiday-gift-section");
    if (adminGiftAllowed) {
        giftSection.style.display = "block";
        alert("🎁 አድሚኑ የበዓል ስጦታ ማሽከርከሪያውን አበራ; ለደንበኞች ታይቷል።");
    } else {
        giftSection.style.display = "none";
        alert("🔒 አድሚኑ የበዓል ስጦታውን ዘጋው; ከጣቢያው ሙሉ በሙሉ ጠፋ።");
    }
}

function saveAdminGiftSettings() {
    const customText = document.getElementById("admin-gift-text-input").value.trim();
    const descEl = document.getElementById("admin-gift-description");
    if (customText) {
        descEl.innerText = customText;
        alert("✨ የስጦታው መግለጫ ተስተካክሏል!");
    } else {
        alert("⚠️ እባክዎ መግለጫ ጽሁፍ ያስገቡ!");
    }
}

// --- የደንበኛ ስጦታ ማሽከርከሪያ (Spin Game) ከቴሌግራም ማሳወቂያ ጋር ---
function spinHolidayGift() {
    const resultBox = document.getElementById("spin-result-display");
    resultBox.innerText = "🔄 በመሽከርከር ላይ...";
    
    setTimeout(() => {
        const possibleGifts = [
            "🎉 እንኳን ደስ አለዎት! 100 ብር የሽልማት ቦነስ አሸንፈዋል!",
            "🙏 እናመሰግናለን! ለዚህ ግዢዎ 50 ብር ቅናሽ ተሰጥቷል!",
            "✨ መልካም በዓል! ነፃ የዕቃ ማድረሻ (Free Delivery) ተሸልመዋል!",
            "🎈 እናመሰግናለን! ቀጣይ ዕድልዎን ይሞክሩ!"
        ];
        const randomGift = possibleGifts[Math.floor(Math.random() * possibleGifts.length)];
        resultBox.innerText = randomGift;

        // ደንበኛው ስጦታ ሲያሽከረክር ወደ ቴሌግራም ቦት ማሳወቂያ መላክ
        sendTelegramNotification(`🎁 አዲስ የስጦታ ማሽከርከር ሙከራ!\nየደረሰው ሽልማት: ${randomGift}`);
    }, 1000);
}

// --- የቴሌግራም ማሳወቂያ መላኪያ ፈንክሽን ---
function sendTelegramNotification(message) {
    const botToken = "8981438302:AAH19L3Uk-6XYCQRo86WEtI0-v59gSyf8AE";
    const chatId = "8885724020";
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => console.log("Telegram sent:", data))
        .catch(error => console.error("Telegram error:", error));
}
// --- አድሚን የቅናሽ ፈቃድ ማስተካከያ ---
function toggleAdminGift(checkbox) {
    adminGiftAllowed = checkbox.checked;
    const giftSection = document.getElementById("holiday-gift-section");
    if (!giftSection) return;
    
    if (adminGiftAllowed) {
        giftSection.style.setProperty('display', 'block', 'important');
        alert("🎁 አድሚኑ የበዓል ስጦታ ማሽከርከሪያውን አበራ; ለደንበኞች ታይቷል።");
    } else {
        giftSection.style.setProperty('display', 'none', 'important');
        alert("🔒 አድሚኑ የበዓል ስጦታውን ዘጋው; ከጣቢያው ሙሉ በሙሉ ጠፋ።");
    }
}
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const btn = document.getElementById('theme-btn');
    if (document.body.classList.contains('dark-mode')) {
        btn.innerText = "☀️";
    } else {
        btn.innerText = "🌙";
    }
}

function handleSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
    renderProducts(filtered);
}

function startVoiceSearch() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("⚠️ ብራውዘርዎ የድምጽ ፍለጋን አይደግፍም።");
        return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'am-ET';
    recognition.start();

    recognition.onresult = function(event) {
        const speechToText = event.results[0][0].transcript;
        document.getElementById('search-input').value = speechToText;
        handleSearch();
    };
}

function closeAdminPanel() {
    window.location.href = window.location.pathname;
}

function renderProducts(productsToDisplay) {
    const productContainer = document.getElementById("product-list");
    if (!productContainer) return;
    productContainer.innerHTML = "";
    
    if (productsToDisplay.length === 0) {
        productContainer.innerHTML = "<p style='grid-column: 1/-1; text-align:center;'>ምንም እቃዎች አልተገኙም።</p>";
        return;
    }

    productsToDisplay.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${product.image}" style="width:100%; height:120px; object-fit:cover; border-radius:4px;">
            <h3 style="font-size:14px; margin: 6px 0 3px 0;">${product.name}</h3>
            <p style="color: #007bff; font-weight: bold; font-size: 13px; margin-bottom: 6px;">${product.price} ብር</p>
            <div style="display: flex; gap: 4px;">
                <button onclick="showProductDetail(${product.id})" style="background: #17a2b8; color: white; border: none; padding: 5px; border-radius: 3px; cursor: pointer; flex: 1; font-size: 11px;">ዝርዝር 👁️</button>
                <button onclick="addToCart(${product.id})" style="background: #28a745; color: white; border: none; padding: 5px; border-radius: 3px; cursor: pointer; flex: 1; font-size: 11px;">ግዛ 🛒</button>
            </div>
        `;
        productContainer.appendChild(productCard);
    });
}

function filterCategory(category) {
    if (category === 'all') renderProducts(products);
    else renderProducts(products.filter(p => p.category === category));
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) cartItem.quantity += 1;
    else cart.push({ ...product, quantity: 1 });
    updateCartUI();
    alert(`✅ ${product.name} ተጨምሯል!`);
}

function updateCartUI() {
    const cartContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    if (!cartContainer) return;
    cartContainer.innerHTML = "";
    let subtotal = 0;

    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        cartContainer.innerHTML += `
            <div style="display:flex; justify-content:space-between; font-size:11px; margin:4px 0;">
                <span>${item.name} (${item.quantity})</span>
                <span>${itemTotal} ብር <button onclick="cart.splice(${index},1);updateCartUI();" style="color:red; border:none; background:none; cursor:pointer;">✕</button></span>
            </div>
        `;
    });

    let discount = subtotal * discountRate;
    let currentDelivery = freeDelivery ? 0 : deliveryFee;
    let grand = (subtotal - discount) + currentDelivery;

    cartTotalElement.innerHTML = `<b>ድምር:</b> ${subtotal} ብር<br>
        ${discountRate > 0 ? `<b>ቅናሽ:</b> -${discount} ብር<br>` : ''}
        <b>ማስረከቢያ:</b> ${currentDelivery} ብር ${freeDelivery ? '(ነፃ - Free Delivery)' : ''}<br>
        <b style="color:#28a745;">ጠቅላላ: ${grand} ብር</b>`;
}

function applyPromoCode() {
    if (!adminDiscountAllowed) {
        alert("❌ አስተዳዳሪው በአሁኑ ሰዓት ቅናሽ አልፈቀደም!");
        return;
    }

    const code = document.getElementById("promo-input").value.trim().toUpperCase();
    const msg = document.getElementById("promo-message");

    if (couponUsed) { 
        msg.style.color = "red"; 
        msg.innerText = "❌ ይህ ኩፖን በዚህ ትዕዛዝ ተጠቀሟል!"; 
        return; 
    }

    if (code === "MAKI5") {
        discountRate = 0.05;
        freeDelivery = false;
        couponUsed = true;
        msg.style.color = "green";
        msg.innerText = "🎉 5% ቅናሽ ተደረገ!";
    } else if (code === "FREEDEL") {
        discountRate = 0;
        freeDelivery = true;
        couponUsed = true;
        msg.style.color = "green";
        msg.innerText = "🎉 ነፃ ማድረሻ (Free Delivery) ተሰርቷል!";
    } else if (code === "MAKI2") {
        discountRate = 0.02;
        freeDelivery = false;
        couponUsed = true;
        msg.style.color = "green";
        msg.innerText = "🎉 2% ቅናሽ ተደረገ!";
    } else {
        msg.style.color = "red";
        msg.innerText = "❌ ትክክል ያልሆነ የኩፖን ኮድ!";
    }
    updateCartUI();
}

function updateDeliveryFee() {
    const sel = document.getElementById("customer-location");
    deliveryFee = parseInt(sel.options[sel.selectedIndex].getAttribute("data-fee")) || 0;
    updateCartUI();
}

function showPaymentDetails() {
    const method = document.getElementById("payment-method").value;
    const infoBox = document.getElementById("payment-info-box");
    
    let infoText = "";
    if (method === "Telebirr") {
        infoText = "📱 <b>የቴሌብር ቁጥር:</b> 0912345678 (ማክቤል ካሰዬ)";
    } else if (method === "CBE") {
        infoText = "🏦 <b>የንግድ ባንክ (CBE) ቁጥር:</b> 1000123456789 (ማክቤል ካሰዬ)";
    } else if (method === "Abyssinia") {
        infoText = "🏦 <b>የአቢሲኒያ ባንክ ቁጥር:</b> UT123456 (ማክቤል ካሰዬ)";
    } else if (method === "Dashen") {
        infoText = "🏦 <b>የዳሽን ባንክ ቁጥር:</b> 5000123456 (ማክቤል ካሰዬ)";
    } else if (method === "COD") {
        infoText = "💵 እቃው ሲደርሰዎት በጥሬ ገንዘብ መክፈል ይችላሉ። (Transaction ID አያስፈልግም)";
    }

    if (infoText) {
        infoBox.style.display = "block";
        infoBox.innerHTML = infoText;
    } else {
        infoBox.style.display = "none";
    }
}

function renderAdminManagementList() {
    const list = document.getElementById("admin-product-management-list");
    if (!list) return;
    list.innerHTML = "";
    products.forEach(p => {
        list.innerHTML += `
            <div style="display:flex; justify-content:space-between; font-size:11px; margin:4px 0; background:rgba(0,0,0,0.05); padding:4px;">
                <span><b>${p.name}</b> - ${p.price} ብር</span>
                <div>
                    <button onclick="adminEditProduct(${p.id})" style="background:#ffc107; border:none; padding:2px 5px; cursor:pointer;">አስተካክል ✍️</button>
                    <button onclick="adminDeleteProduct(${p.id})" style="background:#dc3545; color:white; border:none; padding:2px 5px; cursor:pointer;">ሰርዝ 🗑️</button>
                </div>
            </div>
        `;
    });
}

function adminAddProduct() {
    const name = document.getElementById("admin-product-name").value.trim();
    const price = parseFloat(document.getElementById("admin-product-price").value);
    const category = document.getElementById("admin-product-category").value;
    const image = document.getElementById("admin-product-image").value.trim() || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300";

    if (!name || isNaN(price)) { 
        alert("⚠️ እባክዎ ትክክለኛ የእቃ ስም እና ዋጋ ያስገቡ!"); 
        return; 
    }

    // አዲሱን እቃ ማከማቻው ላይ መጨመር
    const newProduct = {
        id: products.length + 1,
        name: name,
        price: price,
        category: category,
        image: image,
        description: "በአስተዳዳሪ የተጨመረ አዲስ እቃ"
    };

    products.push(newProduct);

    // ዌብሳይቱ እና አድሚን ዝርዝሩ አብረው እንዲታደሱ ማድረግ
    renderProducts(products);
    populateCompareSelectors();
    renderAdminManagementList();

    // ፎርሙን ባዶ ማድረግ
    document.getElementById("admin-product-name").value = "";
    document.getElementById("admin-product-price").value = "";
    document.getElementById("admin-product-image").value = "";

    alert("✅ አዲሱ ዕቃ ተጨመረ; አሁን በዌብሳይቱ ፊት ለፊት በግልጽ ይታያል!");
}

function adminEditProduct(id) {
    const p = products.find(x => x.id === id);
    const newName = prompt("አዲሱን ስም ያስገቡ:", p.name);
    const newPrice = prompt("አዲሱን ዋጋ ያስገቡ:", p.price);
    if (newName) p.name = newName;
    if (newPrice && !isNaN(newPrice)) p.price = parseFloat(newPrice);
    renderProducts(products);
    populateCompareSelectors();
    renderAdminManagementList();
    alert("✨ ተስተካክሏል!");
}

function adminDeleteProduct(id) {
    if (confirm("እርግጠኛ ኖት?")) {
        products = products.filter(x => x.id !== id);
        renderProducts(products);
        populateCompareSelectors();
        renderAdminManagementList();
    }
}

function populateCompareSelectors() {
    const s1 = document.getElementById("compare-1");
    const s2 = document.getElementById("compare-2");
    if(!s1 || !s2) return;
    s1.innerHTML = s2.innerHTML = '<option value="">እቃ ይምረጡ</option>';
    products.forEach(p => {
        s1.innerHTML += `<option value="${p.id}">${p.name}</option>`;
        s2.innerHTML += `<option value="${p.id}">${p.name}</option>`;
    });
}

function updateComparison() {
    const id1 = parseInt(document.getElementById("compare-1").value);
    const id2 = parseInt(document.getElementById("compare-2").value);
    const box = document.getElementById("compare-result-box");
    if (!id1 || !id2) return;
    const p1 = products.find(x => x.id === id1);
    const p2 = products.find(x => x.id === id2);
    let diff = p1.price - p2.price;
    box.innerHTML = `<b>${p1.name}</b> (${p1.price} ብር) እና <b>${p2.name}</b> (${p2.price} ብር)<br>ልዩነት: ${Math.abs(diff)} ብር`;
}
function checkout(e) {
    e.preventDefault();
    if (cart.length === 0) { alert("ከረጢቱ ባዶ ነው!"); return; }
    
    const name = document.getElementById("customer-name").value;
    const phone = document.getElementById("customer-phone").value;
    const location = document.getElementById("customer-location").value;
    const paymentMethod = document.getElementById("payment-method").value;
    const tx = document.getElementById("transaction-id").value;
    
    if (!name || !phone || !location || !paymentMethod || !tx) { 
        alert("እባክዎ ሙሉ መረጃ፣ ስልክ ቁጥር፣ የአዲስ አበባ አድራሻ እና የክፍያ ማረጋገጫ (Transaction ID) ያስገቡ!"); 
        return; 
    }
    
    // የዕቃዎቹን ዝርዝር እና ዋጋ ማስላት
    let itemsText = "";
    let subtotal = 0;
    cart.forEach(item => {
        let itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        itemsText += `- ${item.name} (${item.quantity} ብዛት) = ${itemTotal} ብር\n`;
    });

    let discount = subtotal * discountRate;
    let currentDelivery = freeDelivery ? 0 : deliveryFee;
    let grandTotal = (subtotal - discount) + currentDelivery;

    // ሙሉውን መረጃ የያዘ የቴሌግራም መልእክት
    let orderMessage = `🛒 አዲስ ትዕዛዝ መጣ!\n\n` +
                       `👤 ስም: ${name}\n` +
                       `📞 ስልክ: ${phone}\n` +
                       `📍 አድራሻ: ${location}\n\n` +
                       `📦 የተመረጡ እቃዎች:\n${itemsText}\n` +
                       `💰 ዕቃዎች ድምር: ${subtotal} ብር\n` +
                       `${discount > 0 ? `🏷️ ቅናሽ: -${discount} ብር\n` : ''}` +
                       `🚚 ማድረሻ ዋጋ: ${currentDelivery} ብር\n` +
                       `💵 ጠቅላላ ዋጋ: ${grandTotal} ብር\n\n` +
                       `💳 የክፍያ መንገድ: ${paymentMethod}\n` +
                       `🆔 የክፍያ ማረጋገጫ (TxID): ${tx}`;
    
    // ወደ ቴሌግራም ቦት መላክ
    sendTelegramNotification(orderMessage);

    alert("✅ ትዕዛዝዎ ዋጋውን ጨምሮ በተሳካ ሁኔታ ወደ ቴሌግራም ቦትዎ ተልኳል!");
    cart = [];
    updateCartUI();
}
function showProductDetail(id) {
    const p = products.find(x => x.id === id);
    alert(`ስም: ${p.name}\nዋጋ: ${p.price} ብር\nመግለጫ: ${p.description}`);
}
