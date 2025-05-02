const translations = {
    en: {
        "page-title": "Dream Interpretation: Dreaming of an Elephant",
        "main-title": "Dream Interpretation: Dreaming of an Elephant",
        "interpretation-title": "Meaning of Dreaming of an Elephant",
        "interpretation-text": "In Thai culture, elephants symbolize power, wisdom, and good fortune. Dreaming of an elephant may indicate a significant change or a stroke of luck.",
        "lottery-title": "Lucky Numbers from Dreaming of an Elephant",
        "lottery-numbers-text": "3-digit: 669<br>2-digit: 18, 83"
    },
    th: {
        "page-title": "ทำนายฝัน: ฝันว่าเห็นช้าง",
        "main-title": "ทำนายฝัน: ฝันว่าเห็นช้าง",
        "interpretation-title": "ความหมายของการฝันเห็นช้าง",
        "interpretation-text": "ช้างเป็นสัญลักษณ์ของพลัง ความฉลาด และโชคลาภในวัฒนธรรมไทย การฝันเห็นช้างอาจหมายถึงการได้รับโชคใหญ่หรือการเริ่มต้นใหม่ที่ดี",
        "lottery-title": "เลขเด็ดจากการฝันเห็นช้าง",
        "lottery-numbers-text": "เลขสามตัว: 669<br>เลขสองตัว: 18, 83"
    }
};

function switchLanguage(lang) {
    document.getElementById("page-title").textContent = translations[lang]["page-title"];
    document.getElementById("main-title").textContent = translations[lang]["main-title"];
    document.getElementById("interpretation-title").textContent = translations[lang]["interpretation-title"];
    document.getElementById("interpretation-text").innerHTML = translations[lang]["interpretation-text"];
    document.getElementById("lottery-title").textContent = translations[lang]["lottery-title"];
    document.getElementById("lottery-numbers-text").innerHTML = translations[lang]["lottery-numbers-text"];
}
