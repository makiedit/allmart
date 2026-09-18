// እያንዳንዱ ምድብ ከ15 በላይ እቃዎች እንዲኖሩት የተደረገ የተሟላ ዝርዝር
let products = [
    // --- ኤሌክትሮኒክስ (Electronics) - 15 እቃዎች ---
    { id: 1, name: "ስማርት ስልክ (Smartphone)", price: 15000, category: "electronics", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60" },
    { id: 2, name: "ኮር አምስት ላፕቶፕ (Core i5 Laptop)", price: 38000, category: "electronics", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60" },
    { id: 3, name: "ታብሌት (Tablet)", price: 12000, category: "electronics", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=60" },
    { id: 4, name: "ስማርት ሰዓት (Smart Watch)", price: 3500, category: "electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60" },
    { id: 5, name: "ብሉቱዝ ስፒከር (Bluetooth Speaker)", price: 2800, category: "electronics", image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop&q=60" },
    { id: 6, name: "ዋየርለስ የጆሮ ማዳመጫ (Wireless Earbuds)", price: 2200, category: "electronics", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60" },
    { id: 7, name: "ዴስክቶፕ ኮምፒዩተር (Desktop PC)", price: 45000, category: "electronics", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60" },
    { id: 8, name: "ዲጂታል ካሜራ (Digital Camera)", price: 29000, category: "electronics", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60" },
    { id: 9, name: "ጌሚንግ ኮንሶል (Gaming Console)", price: 55000, category: "electronics", image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=60" },
    { id: 10, name: "ፖወር ባንክ 20000mAh (Power Bank)", price: 2500, category: "electronics", image: "https://images.unsplash.com/photo-1609592424104-1baf45b8e99a?w=500&auto=format&fit=crop&q=60" },
    { id: 11, name: "ውጫዊ ሃርድዲስክ 1TB (External HDD)", price: 4800, category: "electronics", image: "https://images.unsplash.com/photo-1531492755568-256b857a9159?w=500&auto=format&fit=crop&q=60" },
    { id: 12, name: "ዋይፋይ ራውተር (Wi-Fi Router)", price: 1900, category: "electronics", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop&q=60" },
    { id: 13, name: "ኤችዲ ፕሮጀክተር (HD Projector)", price: 18000, category: "electronics", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60" },
    { id: 14, name: "የኮምፒዩተር ሞኒተር (Monitor 24\")", price: 11000, category: "electronics", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60" },
    { id: 15, name: "የጌሚንግ ኪቦርድ እና ማውስ (Gaming Keyboard)", price: 2400, category: "electronics", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60" },

    // --- ልብስ (Clothes) - 15 እቃዎች ---
    { id: 16, name: "የወንዶች የክረምት ጃኬት (Jacket)", price: 2800, category: "clothes", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60" },
    { id: 17, name: "የሴቶች ዘመናዊ ቀሚስ (Dress)", price: 1900, category: "clothes", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=60" },
    { id: 18, name: "ጥራት ያለው ጂንስ ሱሪ (Jeans Pants)", price: 1500, category: "clothes", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=60" },
    { id: 19, name: "የስፖርት ጫማ ኒክ (Sneakers)", price: 3200, category: "clothes", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60" },
    { id: 20, name: "ጥጥ ቲ-ሸርት (Cotton T-Shirt)", price: 700, category: "clothes", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60" },
    { id: 21, name: "ሁዲ ከፖት (Hoodie)", price: 1800, category: "clothes", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=60" },
    { id: 22, name: "የባህላዊ ሀበሻ ልብስ (Habesha Kemis)", price: 4500, category: "clothes", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=60" },
    { id: 23, name: "የофициал ሱፍ ልብስ (Formal Suit)", price: 7500, category: "clothes", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop&q=60" },
    { id: 24, name: "የቆዳ ጃኬት (Leather Jacket)", price: 4200, category: "clothes", image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500&auto=format&fit=crop&q=60" },
    { id: 25, name: "የশሚዝ ቱታ (Formal Shirt)", price: 1100, category: "clothes", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=60" },
    { id: 26, name: "የሴቶች በእጅ ቦርሳ (Handbag)", price: 2100, category: "clothes", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop&q=60" },
    { id: 27, name: "የፀሐይ መነጽር (Sunglasses)", price: 800, category: "clothes", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60" },
    { id: 28, name: "የክረምት ሻርፕ (Scarf)", price: 500, category: "clothes", image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500&auto=format&fit=crop&q=60" },
    { id: 29, name: "የስፖርት ማልያ (Sport Jersey)", price: 950, category: "clothes", image: "https://images.unsplash.com/photo-1589785213123-149b5c328906?w=500&auto=format&fit=crop&q=60" },
    { id: 30, name: "የመዋኛ ልብስ / የስፖርት ጫማ (Running Shoes)", price: 2600, category: "clothes", image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&auto=format&fit=crop&q=60" },

    // --- የቤት እቃዎች (Home Appliances) - 15 እቃዎች ---
    { id: 31, name: "ባለ ሁለት በር ማቀዝቀዣ (Refrigerator)", price: 48000, category: "appliances", image: "https://images.unsplash.com/photo-1584568694244-14fbdf82bd1e?w=500&auto=format&fit=crop&q=60" },
    { id: 32, name: "የፍራፍሬ ብለንደር (Blender)", price: 3200, category: "appliances", image: "https://images.unsplash.com/photo-1570222094114-d074f7e2455c?w=500&auto=format&fit=crop&q=60" },
    { id: 33, name: "ማይክሮዌቭ ኦቨን (Microwave Oven)", price: 9500, category: "appliances", image: "https://images.unsplash.com/photo-1585659722983-380ff077b749?w=500&auto=format&fit=crop&q=60" },
    { id: 34, name: "ስማርት ቲቪ 43 ኢንች (Smart TV)", price: 26000, category: "appliances", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format&fit=crop&q=60" },
    { id: 35, name: "የልብስ ማጠቢያ ማሽን (Washing Machine)", price: 34000, category: "appliances", image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500&auto=format&fit=crop&q=60" },
    { id: 36, name: "ኤሌክትሪክ ምድጃ (Electric Stove)", price: 5500, category: "appliances", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop&q=60" },
    { id: 37, name: "የቡና ማፍያ ማሽን (Coffee Maker)", price: 4200, category: "appliances", image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&auto=format&fit=crop&q=60" },
    { id: 38, name: "የውሃ ማጣሪያ እና ማከፋፈያ (Water Dispenser)", price: 7800, category: "appliances", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500&auto=format&fit=crop&q=60" },
    { id: 39, name: "የእትኮር ብረት (Electric Iron)", price: 1600, category: "appliances", image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500&auto=format&fit=crop&q=60" },
    { id: 40, name: "ቫኩም ማጽጃ (Vacuum Cleaner)", price: 8500, category: "appliances", image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&auto=format&fit=crop&q=60" },
    { id: 41, name: "ኤር ኮንዲሽነር (Air Conditioner)", price: 42000, category: "appliances", image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&auto=format&fit=crop&q=60" },
    { id: 42, name: "ኤሌክትሪክ ማንቆርቆሪያ (Electric Kettle)", price: 1400, category: "appliances", image: "https://images.unsplash.com/photo-1594806786411-d4d1a12003fd?w=500&auto=format&fit=crop&q=60" },
    { id: 43, name: "የዳቦ መጋገሪያ ቶስተር (Toaster)", price: 2100, category: "appliances", image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbc04?w=500&auto=format&fit=crop&q=60" },
    { id: 44, name: "የጠረጴዛ ማራገቢያ ፋን (Table Fan)", price: 2300, category: "appliances", image: "https://images.unsplash.com/photo-1617117839759-4d3de07c1b3e?w=500&auto=format&fit=crop&q=60" },
    { id: 45, name: "የአትክልት መቁረጫ ማሽን (Food Chopper)", price: 1900, category: "appliances", image: "https://images.unsplash.com/photo-1590794056226-79ef3a8117e6?w=500&auto=format&fit=crop&q=60" }
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

    let html = "<ul style='padding-left: 20px; margin: 0;'>";
    let total = 0;
    cart.forEach((item) => {
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
