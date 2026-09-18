// የምርት ዝርዝሮች (Products)
let products = [
    { id: 1, name: "የምግብ ዘይት (Cooking Oil)", price: 950, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop&q=60" }
    // ሌሎች ምርቶችዎ እዚህ ይቀጥላሉ
];

let cart = [];

// የቴሌግራም ቦት መረጃዎች (ትክክለኛው የ Chat ID እና Token የተካተቱበት)
const botToken = "8981438302:AAH19L3Uk-6XYCQRo86WEtI0-v59gSyf8AE";
const chatId = "8885724820";

// ትዕዛዝ ወደ ቴሌግራም ቦት የሚልክ ፊንክሽን
function sendOrderToTelegram(orderDetails) {
    const messageText = `🛒 አዲስ ትዕዛዝ መጥቷል!\n\n${orderDetails}`;
    
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(messageText)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("ትዕዛዙ በትክክል ተልኳል:", data);
            alert("ትዕዛዝዎ በሳካ ሁኔታ ወደ ቴሌግራም ተልኳል!");
        })
        .catch(error => {
            console.error("የትዕዛዝ መላክ ስህተት:", error);
            alert("ትዕዛዙን መላክ አልተቻለም, እባክዎ እንደገና ይሞክሩ።");
        });
}

// የትዕዛዝ ማረጋገጫ (Checkout) ፊንክሽን
function checkout(event) {
    if (event) event.preventDefault();

    let orderSummary = "የተመረጡ እቃዎች ዝርዝር:\n";
    let total = 0;
    
    if (cart.length > 0) {
        cart.forEach(item => {
            orderSummary += `- ${item.name}: ${item.price} ብር\n`;
            total += item.price;
        });
        orderSummary += `\nጠቅላላ ዋጋ: ${total} ብር`;
    } else {
        orderSummary += "ፈጣን የዌብሳይት ትዕዛዝ ተሰጥቷል!";
    }

    sendOrderToTelegram(orderSummary);
    cart = [];
}
