// --- 1. ሙሉ 45 የምርት ዝርዝሮች (እያንዳንዱ ምድብ 15 እቃዎች) ---
let products = [
    // --- ኤሌክትሮኒክስ (Electronics) ---
    { id: 1, name: "ስማርት ስልክ (Smartphone)", price: 15000, category: "electronics", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300", description: "ጥራት ያለው ዘመናዊ ስማርት ስልክ ከረጅም ባትሪ ጋር።" },
    { id: 2, name: "ላፕቶፕ (Laptop)", price: 38000, category: "electronics", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300", description: "ፈጣን እና ለአሰራር ምቹ የሆነ ኮር i5 ላፕቶፕ።" },
    { id: 3, name: "ታብሌት (Tablet)", price: 12000, category: "electronics", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300", description: "ለጥናት እና ለመዝናኛ የሚሆን ትልቅ ስክሪን ያለው ታብሌት።" },
    { id: 4, name: "ስማርት ሰዓት (Smart Watch)", price: 3500, category: "electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300", description: "የጤና መቆጣጠሪያ እና ስልክ ጥሪ መቀበያ ሰዓት።" },
    { id: 5, name: "ብሉቱዝ ድምጽ ማጉያ (Bluetooth Speaker)", price: 2800, category: "electronics", image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300", description: "ጥሩ ባስ እና ከፍተኛ ድምጽ ያለው ተንቀሳቃሽ ድምጽ ማጉያ።" },
    { id: 6, name: "ገመድ አልባ የጆሮ ማዳመጫ (Wireless Earbuds)", price: 2200, category: "electronics", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300", description: "ጥራት ያለው ድምጽ እና ረጅም ሰዓታት የሚቆይ ባትሪ።" },
    { id: 7, name: "ዴስክቶፕ ኮምፒዩተር (Desktop PC)", price: 45000, category: "electronics", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300", description: "ለከባድ ስራዎች እና ጌምንግ የሚሆን ዴስክቶፕ ኮምፒዩተር።" },
    { id: 8, name: "ዲጂታል ካሜራ (Digital Camera)", price: 29000, category: "electronics", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300", description: "ከፍተኛ ጥራት ያላቸውን ፎቶዎች እና ቪዲዮዎች የሚቀዳ።" },
    { id: 9, name: "ጌምንግ ኮንሶል (Gaming Console)", price: 55000, category: "electronics", image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300", description: "ዘመናዊ የቪዲዮ ጨዋታዎችን ያለ ምንም ማቋረጥ ማጫወቻ።" },
    { id: 10, name: "ፓወር ባንክ 20000mAh (Power Bank)", price: 2500, category: "electronics", image: "https://images.unsplash.com/photo-1609592424155-235889745d13?w=300", description: "ስልክዎን በርካታ ጊዜ መሙላት የሚችል ሃይለኛ ፓወር ባንክ።" },
    { id: 11, name: "ኤክስተርናል ሀርድዲስክ 1TB (External HDD)", price: 4800, category: "electronics", image: "https://images.unsplash.com/photo-1531492740970-d79cbdf5d0a5?w=300", description: "ትላልቅ ፋይሎችን እና መረጃዎችን ደህንነቱ በተጠበቀ ሁኔታ መያዣ።" },
    { id: 12, name: "ዋይ ፋይ ራውተር (Wi-Fi Router)", price: 1900, category: "electronics", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=300", description: "ፈጣን እና ሰፊ የइन्ተርኔት ሽፋን የሚሰጥ ራውተር።" },
    { id: 13, name: "ኤችዲ ፕሮጀክተር (HD Projector)", price: 18000, category: "electronics", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300", description: "ፊልሞችን እና ትምህርቶችን በትልቅ ስክሪን ማሳያ።" },
    { id: 14, name: "ሞኒተር 24 ኢንች (Monitor 24\")", price: 11000, category: "electronics", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300", description: "ለகண் የማይሰቀቅ ግልጽ የኤልዲ ማሳያ ሞኒተር።" },
    { id: 15, name: "ፕሪንተር (Printer)", price: 9500, category: "electronics", image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=300", description: "ሰነዶችን በግልጽ እና በፍጥነት ማተሚያ ማሽን።" },

    // --- አልባሳት (Clothing) ---
    { id: 16, name: "ወንድ ጃኬት (Men Jacket)", price: 2500, category: "clothing", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300", description: "ጥራት ያለው እና ሞቅ የሚያደርግ የወንድ ጃኬት።" },
    { id: 17, name: "የስፖርት ጫማ (Sport Shoes)", price: 3200, category: "clothing", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300", description: "ለእግር ጉዞ እና ስፖርት ምቹ የሆነ ቀላል ጫማ።" },
    { id: 18, name: "ክላሲክ ሱሪ (Classic Trouser)", price: 1800, category: "clothing", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=300", description: "ለስራ እና ለተለያዩ ኑሮዎች የሚሆን ውብ ሱሪ።" },
    { id: 19, name: "ጥራት ያለው ኮት (Formal Suit)", price: 7000, category: "clothing", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300", description: "ለሰርግ እና ለከፍተኛ ስብሰባዎች የሚሆን ሙሉ ልብስ።" },
    { id: 20, name: "የክረምት ሁዲ (Winter Hoodie)", price: 2200, category: "clothing", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=300", description: "ለቀዝቃዛ ቀናት የሚሆን ምቹ እና ለስላሳ ሁዲ።" },
    { id: 21, name: "የቆዳ ጃኬት (Leather Jacket)", price: 4500, category: "clothing", image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=300", description: "ይግባኝ የሚል ዘመናዊ ንጹህ የቆዳ ጃኬት።" },
    { id: 22, name: "ካዥዋል ቲሸርት (Casual T-Shirt)", price: 800, category: "clothing", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=300", description: "በዕለት ተዕለት እንቅስቃሴዎች ለመልበስ ምቹ ቲሸርት።" },
    { id: 23, name: "ጂንስ ሱሪ (Jeans Pant)", price: 1600, category: "clothing", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300", description: "ጠንካራ እና ዘላቂ ፋሽን ያለው ጂንስ ሱሪ።" },
    { id: 24, name: "የሴቶች ቀሚስ (Women Dress)", price: 3000, category: "clothing", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300", description: "ለድግስ እና ለልዩ ቀናት የሚሆን ማራኪ ቀሚስ።" },
    { id: 25, name: "የትራክ ሱት (Tracksuit)", price: 2400, category: "clothing", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300", description: "ለስፖርት እንቅስቃሴዎች የሚሆን ሙሉ የስፖርት ልብስ።" },
    { id: 26, name: "የክረምት ጃኬት (Puffer Jacket)", price: 3500, category: "clothing", image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=300", description: "ከፍተኛ ቅዝቃዜን የሚከላከል ውፍረት ያለው ጃኬት።" },
    { id: 27, name: "ፎርማል ጫማ (Formal Shoes)", price: 3800, category: "clothing", image: "https://images.unsplash.com/photo-1533867617858-e7d97e0afd8b?w=300", description: "ከእውነተኛ የቆዳ ዕቃ የተሰራ ውብ ፎርማል ጫማ።" },
    { id: 28, name: "የስፖርት ቲሸርት (Sport Jersey)", price: 1000, category: "clothing", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300", description: "አየር የሚያስገባ ቀላል የስፖርት ማልያ።" },
    { id: 29, name: "የጥጥ ሹራብ (Cotton Sweater)", price: 1700, category: "clothing", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300", description: "ቀላል እና ለሰውነት ምቹ የሆነ የጥጥ ሹራብ።" },
    { id: 30, name: "ባርኔጣ እና ሻርፕ (Cap & Scarf Set)", price: 600, category: "clothing", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=300", description: "ከፀሐይ እና ከቀዝቃዛ አየር መከላከያ ስብስብ።" },

    // --- የቤት እቃዎች (Furniture) ---
    { id: 31, name: "ዘመናዊ የቡና ጠረጴዛ (Coffee Table)", price: 4500, category: "furniture", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=300", description: "ለሳሎን የሚሆን ማራኪ እና ጽኑ የቡና ጠረጴዛ።" },
    { id: 32, name: "የመኝታ አልጋ (Bed Frame)", price: 22000, category: "furniture", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300", description: "ምቹ እና ጥራት ካለው እንጨት የተሰራ አልጋ።" },
    { id: 33, name: "የቢሮ ወንበር (Office Chair)", price: 5500, category: "furniture", image: "https://images.unsplash.com/photo-1580481077494-e3299ac25b94?w=300", description: "ጀርባ ላለማመም የሚያስችል የሚስተካከል የቢሮ ወንበር።" },
    { id: 34, name: "የሳሎን ሶፋ (Living Room Sofa)", price: 30000, category: "furniture", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300", description: "ሰፊ እና ለቤተሰብ መቀመጫ የሚመች ሶፋ።" },
    { id: 35, name: "የመጻሕፍት መደርደሪያ (Bookshelf)", price: 6000, category: "furniture", image: "https://images.unsplash.com/photo-1594623930572-300a3011d9ae?w=300", description: "መጻሕፍትን እና እቃዎችን በቅደም ተከተል መያዣ።" },
    { id: 36, name: "የመመገቢያ ጠረጴዛ (Dining Table Set)", price: 25000, category: "furniture", image: "https://images.unsplash.com/photo-1615066390971-00e4e1ca2b0d?w=300", description: "ቤተሰብTogether ለመመገብ የሚያስችል ውብ ጠረጴዛ።" },
    { id: 37, name: "የቴሌቪዥን መደርደሪያ (TV Stand)", price: 7500, category: "furniture", image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=300", description: "ቴሌቪዥን እና ዲኮር እቃዎችን መጫኛ መደርደሪያ።" },
    { id: 38, name: "የልብስ መጋረጃ (Wardrobe Closet)", price: 18000, category: "furniture", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=300", description: "ልብሶችን እና ፖርቶጆዎችን በንጽህና መያዣ ካቢኔ።" },
    { id: 39, name: "የመኝታ ቤት ኮመዲኖ (Bedside Table)", price: 2000, category: "furniture", image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=300", description: "አልጋ አጠገብ ትናንሽ እቃዎችን ማስቀመጫ ጠረጴዛ።" },
    { id: 40, name: "የወጥ ቤት ካቢኔ (Kitchen Cabinet)", price: 15000, category: "furniture", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=300", description: "የወጥ ቤት እቃዎችን በስርዓት መያዣ ካቢኔ።" },
    { id: 41, name: "የእንግዳ ወንበር (Guest Chair)", price: 3000, category: "furniture", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300", description: "ለဧንግዶች መቀመጫ የሚሆን ውብ እና ጽኑ ወንበር።" },
    { id: 42, name: "የጫማ መደርደሪያ (Shoe Rack)", price: 2500, category: "furniture", image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=300", description: "ጫማዎችን በንጽህና እና በቅደም ተከተል መያዣ።" },
    { id: 43, name: "የግድግዳ ዎል ዴኮር መስተዋት (Wall Mirror)", price: 3500, category: "furniture", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=300", description: "ግድግዳ ላይ የሚሰቀል ትልቅ እና ጥራት ያለው መስተዋት።" },
    { id: 44, name: "የሰነድ ካዝና (Safe Box)", price: 12000, category: "furniture", image: "https://images.unsplash.com/photo-1591123120675-6f77d3ae0286?w=300", description: "ገንዘብ እና ሚስጥራዊ ሰነዶችን በጥንቃቄ መቆለፊያ።" },
    { id: 45, name: "የመዝናኛ ላውንጅ ወንበር (Lounge Chair)", price: 8500, category: "furniture", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300", description: "ዘና ለማለት እና ለማንበብ ምቹ የሆነ ወንበር።" }
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
    const adminModal = document.getElementById("admin-modal") || document.getElementById("admin-panel");
    
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

// --- 4. ምርቶችን ፊት ለፊት ማሳያ እና የምድብ (Category) ማጣሪያ ---
function renderProducts(productsToDisplay) {
    const productContainer = document.getElementById("product-list");
    if (!productContainer) return;

    productContainer.innerHTML = "";
    const list = Array.isArray(productsToDisplay) ? productsToDisplay : products;

    if (list.length === 0) {
        productContainer.innerHTML = "<p style='grid-column: 1/-1; text-align:center;'>ምንም እቃዎች አልተገኙም።</p>";
        return;
    }

    list.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${product.image || 'https://via.placeholder.com/150'}" alt="${product.name}" style="width:100%; height:140px; object-fit:cover; border-radius:6px;" onerror="this.src='https://via.placeholder.com/150'">
            <h3 style="font-size:16px; margin: 10px 0 5px 0;">${product.name}</h3>
            <p style="color: #666; font-size: 13px; margin-bottom: 5px;">ምድብ: ${product.category}</p>
            <p style="color: #555; font-size: 12px; margin-bottom: 8px; height: 35px; overflow: hidden;">${product.description || 'ጥራት ያለው እቃ'}</p>
            <p style="color: #007bff; font-weight: bold; margin-bottom: 10px;">${product.price} ብር</p>
            <div style="display: flex; gap: 5px;">
                <button onclick="showProductDetail(${product.id})" style="background: #17a2b8; color: white; border: none; padding: 8px; border-radius: 4px; cursor: pointer; flex: 1; font-size: 12px;">ዝርዝር 👁️</button>
                <button onclick="addToCart(${product.id})" style="background: #28a745; color: white; border: none; padding: 8px; border-radius: 4px; cursor: pointer; flex: 1; font-size: 12px;">ግዛ 🛒</button>
            </div>
        `;
        productContainer.appendChild(productCard);
    });
}

// በምድብ (Category) ለማጣራት የሚያስችል ፋንክሽን
function filterCategory(categoryName) {
    if (categoryName === 'all' || !categoryName) {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category.toLowerCase() === categoryName.toLowerCase());
        renderProducts(filtered);
    }
}

// --- 5. ስለ እቃው ዝርዝር (Details & Related Products) ማሳያ ---
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // ተዛማጅ እቃዎች (Related products ከዚሁ ምድብ)
    const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

    let relatedHtml = relatedProducts.map(rp => `
        <div style="border: 1px solid #ddd; padding: 5px; border-radius: 4px; text-align: center; width: 90px; cursor: pointer;" onclick="showProductDetail(${rp.id})">
            <img src="${rp.image}" style="width: 100%; height: 60px; object-fit: cover; border-radius: 3px;">
            <p style="font-size: 10px; margin: 3px 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${rp.name}</p>
            <p style="font-size: 10px; color: #007bff; font-weight: bold; margin: 0;">${rp.price} ብር</p>
        </div>
    `).join('');

    // ሞዳል ወይም ፖፕአፕ አሳይቶ መረጃውን ማሳየት
    let detailModal = document.getElementById("product-detail-modal");
    if (!detailModal) {
        detailModal = document.createElement("div");
        detailModal.id = "product-detail-modal";
        detailModal.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); display: flex; justify-content: center; align-items: center; z-index: 1000;";
        document.body.appendChild(detailModal);
    }

    detailModal.innerHTML = `
        <div style="background: white; padding: 20px; border-radius: 8px; width: 90%; max-width: 450px; position: relative; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
            <button onclick="document.getElementById('product-detail-modal').style.display='none'" style="position: absolute; top: 10px; right: 10px; background: #dc3545; color: white; border: none; padding: 5px 10px; border-radius: 50%; cursor: pointer; font-weight: bold;">✕</button>
            <img src="${product.image}" style="width: 100%; height: 180px; object-fit: cover; border-radius: 6px;">
            <h2 style="margin: 10px 0 5px 0; font-size: 20px;">${product.name}</h2>
            <p style="color: #666; font-size: 13px; margin-bottom: 5px;">ምድብ: <b>${product.category}</b></p>
            <p style="color: #007bff; font-weight: bold; font-size: 18px; margin-bottom: 10px;">${product.price} ብር</p>
            <p style="background: #f8f9fa; padding: 10px; border-radius: 5px; font-size: 14px; color: #333; margin-bottom: 15px;"><b>መግለጫ:</b> ${product.description || 'ምንም መግለጫ አልተሰጠም።'}</p>
            
            <h4 style="margin: 10px 0 5px 0; font-size: 14px; color: #444;">🔗 ተዛማጅ እቃዎች (Related Products)</h4>
            <div style="display: flex; gap: 10px; margin-bottom: 15px; overflow-x: auto;">
                ${relatedHtml || '<p style="font-size: 12px; color: #777;">ምንም ተዛማጅ እቃዎች የሉም።</p>'}
            </div>

            <button onclick="addToCart(${product.id}); document.getElementById('product-detail-modal').style.display='none';" style="background: #28a745; color: white; border: none; padding: 10px; border-radius: 4px; width: 100%; cursor: pointer; font-weight: bold;">ወደ ከረጢት ጨምር 🛒</button>
        </div>
    `;
    detailModal.style.display = "flex";
}

// --- 6. እቃዎችን ማወዳደሪያ (Compare Logic) ---
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
                <img src="${p1.image}" style="width:100%; height:80px; object-fit:cover; border-radius:4px;">
                <h4 style="margin:5px 0; font-size:14px;">${p1.name}</h4>
                <p style="margin:2px 0; font-size:12px;"><b>ዋጋ:</b> ${p1.price} ብር</p>
                <p style="margin:2px 0; font-size:12px;"><b>ምድብ:</b> ${p1.category}</p>
            </div>
            <div style="flex: 1; background: #f8f9fa; padding: 10px; border-radius: 6px;">
                <img src="${p2.image}" style="width:100%; height:80px; object-fit:cover; border-radius:4px;">
                <h4 style="margin:5px 0; font-size:14px;">${p2.name}</h4>
                <p style="margin:2px 0; font-size:12px;"><b>ዋጋ:</b> ${p2.price} ብር</p>
                <p style="margin:2px 0; font-size:12px;"><b>ምድብ:</b> ${p2.category}</p>
            </div>
        </div>
        <p style="margin-top: 15px; text-align: center; font-weight: bold; color: #007bff; font-size: 13px;">📊 የዋጋ ንጽጽር ውጤት: ${priceComparisonText}</p>
    `;
}

// --- 7. እቃዎችን ወደ ከረጢት (Cart) መጨመር ---
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

// --- 8. የካርት (Cart) ማስተካከያ ---
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

// --- 9. የኩፖን ኮድ ማረጋገጫ (MAKI2026 - 5% ቅናሽ ለአንድ ጊዜ) ---
function applyPromoCode() {
    const promoInput = document.getElementById("promo-input");
    if (!promoInput) return;
    
    const promoValue = promoInput.value.trim().toUpperCase();
    const messageElement = document.getElementById("promo-message");
    const validPromoCode = "MAKI2026";

    if (couponUsed) {
        if (messageElement) {
            messageElement.style.color = "red";
            messageElement.innerText = "❌ ይህ የኩፖን ኮድ በዚህ ትዕዛዝ አስቀድሞ ጥቅም ላይ ውሏል!";
        }
        return;
    }

    if (adminAllowedDiscountRate > 0 && promoValue === validPromoCode) {
        discountRate = adminAllowedDiscountRate; 
        appliedPromoCode = validPromoCode;
        couponUsed = true; 
        
        if (messageElement) {
            messageElement.style.color = "green";
            messageElement.innerText = "🎉 የኩፖን ኮድ ተቀባይነት አግኝቷል! 5% ቅናሽ ተደርጓል።";
        }
        promoInput.disabled = true;
    } else {
        discountRate = 0;
        appliedPromoCode = "";
        if (messageElement) {
            messageElement.style.color = "red";
            messageElement.innerText = "❌ ያስገቡት የኩፖን ኮድ ትክክል አይደለም!";
        }
    }
    updateCartUI(); 
}

// --- 10. የማስረከቢያ ክፍያ ማስተካከያ ---
function updateDeliveryFee() {
    const locationSelect = document.getElementById("customer-location");
    if (!locationSelect) return;
    const selectedOption = locationSelect.options[locationSelect.selectedIndex];
    deliveryFee = parseInt(selectedOption.getAttribute("data-fee")) || 0;
    updateCartUI();
}

// --- 11. አድሚን ፓነል (መጨመር፣ ማስተካከል እና መሰረዝ) ---
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
            <span><b>${product.name}</b> (${product.category}) - ${product.price} ብር</span>
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
        image: image,
        description: "በአስተዳዳሪ የተጨመረ አዲስ እቃ።"
    };

    products.push(newProduct);
    renderProducts(products);
    populateCompareSelectors();
    renderAdminManagementList();

    alert("✅ አዲሱ እቃ በተሳካ ሁኔታ ተጨመረ!");

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

    alert("✨ እቃው በተሳካ ሁኔታ ተስተካክሏል!");
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

// --- 12. ትዕዛዝ ማረጋገጫ (Transaction ID የግዴታ የሆነበት) ---
function checkout(event) {
    if (event) event.preventDefault();

    if (cart.length === 0) {
        alert("እባክዎ ትዕዛዝ ከመላክዎ በፊት ቢያንስ አንድ እቃ ይምረጡ!");
        return;
    }

    const name = document.getElementById("customer-name").value.trim();
    const phone = document.getElementById("customer-phone").value.trim();
    const locationSelect = document.getElementById("customer-location");
    const location = locationSelect ? locationSelect.value : "";
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
    if (locationSelect) locationSelect.selectedIndex = 0;
    
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

// --- 13. መረጃውን ወደ ቴሌግራም ቦት የሚልከው ፋንክሽን ---
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
