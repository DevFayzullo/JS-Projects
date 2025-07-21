// Elementlar
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const shareBtn = document.getElementById("share");
const saveBtn = document.getElementById("save");
const viewSavedBtn = document.getElementById("view-saved");
const savedModal = document.getElementById("saved-modal");
const savedList = document.getElementById("saved-list");
const clearSavedBtn = document.getElementById("clear-saved");
const closeSavedBtn = document.getElementById("close-saved");
const darkToggle = document.getElementById("toggle-dark");
const langSelect = document.getElementById("lang");

const quotesByLang = {
  en: [
    {
      text: "Success is not final, failure is not fatal.",
      author: "Winston Churchill",
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "Don't let yesterday take up too much of today.",
      author: "Will Rogers",
    },
    {
      text: "Push yourself, because no one else is going to do it for you.",
      author: "Unknown",
    },
    { text: "Great things never come from comfort zones.", author: "Unknown" },
    { text: "Dream it. Wish it. Do it.", author: "Unknown" },
    {
      text: "Success doesn’t just find you. You have to go out and get it.",
      author: "Unknown",
    },
    {
      text: "The harder you work for something, the greater you’ll feel when you achieve it.",
      author: "Unknown",
    },
    {
      text: "Don’t stop when you’re tired. Stop when you’re done.",
      author: "Unknown",
    },
    {
      text: "Wake up with determination. Go to bed with satisfaction.",
      author: "Unknown",
    },
    {
      text: "Do something today that your future self will thank you for.",
      author: "Unknown",
    },
    { text: "Little things make big days.", author: "Unknown" },
    {
      text: "It’s going to be hard, but hard does not mean impossible.",
      author: "Unknown",
    },
    { text: "Don’t wait for opportunity. Create it.", author: "Unknown" },
    {
      text: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
      author: "Unknown",
    },
    {
      text: "The key to success is to focus on goals, not obstacles.",
      author: "Unknown",
    },
    { text: "You are stronger than you think.", author: "Unknown" },
    {
      text: "Work hard in silence, let success make the noise.",
      author: "Frank Ocean",
    },
    { text: "Stay positive, work hard, make it happen.", author: "Unknown" },
    {
      text: "Success is what happens after you have survived all your mistakes.",
      author: "Anora Lee",
    },
    {
      text: "Don’t watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    {
      text: "It always seems impossible until it’s done.",
      author: "Nelson Mandela",
    },
    {
      text: "Everything you’ve ever wanted is on the other side of fear.",
      author: "George Addair",
    },
    {
      text: "Act as if what you do makes a difference. It does.",
      author: "William James",
    },
    {
      text: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky",
    },
    {
      text: "Start where you are. Use what you have. Do what you can.",
      author: "Arthur Ashe",
    },
    {
      text: "The best time to start was yesterday. The next best time is now.",
      author: "Unknown",
    },
  ],

  uz: [
    {
      text: "Omad — yakun emas, muvaffaqiyatsizlik — fojia emas.",
      author: "Uinston Cherchill",
    },
    {
      text: "Ishonching bo‘lsa, yo‘lning yarmi o‘tilgan.",
      author: "Teodor Ruzvelt",
    },
    {
      text: "Tasavvur qilganing — mavjud bo‘lishi mumkin.",
      author: "Pablo Pikasso",
    },
    {
      text: "Zo‘r ishlar faqat sevib bajarilganda amalga oshadi.",
      author: "Stiv Jobs",
    },
    {
      text: "Kechaning tashvishini bugunga olib o‘tma.",
      author: "Uill Rojers",
    },
    {
      text: "Oldinga intil, chunki hech kim sen o‘rniga harakat qilmaydi.",
      author: "Noma’lum",
    },
    {
      text: "Buyuk ishlar qulaylik zonasidan tashqarida boshlanadi.",
      author: "Noma’lum",
    },
    { text: "Orzu qil. Istak bildir. Amalda ko‘rsat.", author: "Noma’lum" },
    {
      text: "Muvaffaqiyat seni o‘zi topmaydi — sen uni topishing kerak.",
      author: "Noma’lum",
    },
    {
      text: "Ko‘p mehnat qilgan — g‘alabani qattiqroq his qiladi.",
      author: "Noma’lum",
    },
    {
      text: "Charchaganingda emas — tugatganingda to‘xta.",
      author: "Noma’lum",
    },
    { text: "Azm bilan uyg‘on, mamnuniyat bilan uxla.", author: "Noma’lum" },
    {
      text: "Bugun qilganing — ertangi o‘zing uchun sovg‘a.",
      author: "Noma’lum",
    },
    { text: "Kichik qadamlar — katta kunlarni yaratadi.", author: "Noma’lum" },
    { text: "Bu oson bo‘lmaydi, lekin mumkin.", author: "Noma’lum" },
    { text: "Imkoniyat kutma — uni o‘zing yarat.", author: "Noma’lum" },
    {
      text: "Biz ba’zida kuchsizligimizni emas, kuchimizni bilish uchun sinovdan o‘tamiz.",
      author: "Noma’lum",
    },
    {
      text: "Muvaffaqiyat siri — maqsadlarga emas, to‘siqlarga e’tibor bermaslikdir.",
      author: "Noma’lum",
    },
    { text: "Sen o‘ylagandan kuchlisan.", author: "Noma’lum" },
    {
      text: "Tinchlikda mehnat qil, muvaffaqiyat ovoz chiqaradi.",
      author: "Frank Oushen",
    },
    { text: "Ijobiy bo‘l, harakat qil, natijani ko‘r.", author: "Noma’lum" },
    { text: "Xatolardan o‘tgachgina muvaffaqiyat keladi.", author: "Anora Li" },
    { text: "Soatga qaram — u kabi oldinga yurgin.", author: "Sem Levenson" },
    { text: "Jarohatlaringni donolikka aylantir.", author: "Opra Uinfri" },
    {
      text: "Imkonsiz tuyulgan narsalar bajarilgach, oddiy bo‘lib qoladi.",
      author: "Nelson Mandela",
    },
    { text: "Qo‘rquv ortida istaklaring turibdi.", author: "Jorj Addair" },
    {
      text: "Sen qilayotgan harakat ahamiyatli. Bu muhim.",
      author: "Uilyam Jeyms",
    },
    {
      text: "Urmagan to‘plaring 100% golli bo‘lmaydi.",
      author: "Ueyn Gretski",
    },
    { text: "Qaerdan bo‘lishing muhim emas — boshlagin!", author: "Artur Esh" },
    {
      text: "Eng yaxshi vaqt kecha edi. Keyingisi — bugun.",
      author: "Noma’lum",
    },
  ],

  ko: [
    {
      text: "성공은 끝이 아니고, 실패는 치명적이지 않다.",
      author: "윈스턴 처칠",
    },
    {
      text: "할 수 있다고 믿으면, 이미 반은 이룬 것이다.",
      author: "시어도어 루스벨트",
    },
    { text: "상상할 수 있는 모든 것은 현실이다.", author: "파블로 피카소" },
    { text: "좋은 일을 하려면 그 일을 사랑해야 한다.", author: "스티브 잡스" },
    { text: "어제에 머무르지 말고 오늘을 살아라.", author: "윌 로저스" },
    { text: "자신을 밀어붙여라. 아무도 대신 해주지 않는다.", author: "익명" },
    { text: "위대한 일은 안락한 곳에서 나오지 않는다.", author: "익명" },
    { text: "꿈꾸고, 바라고, 실행하라.", author: "익명" },
    { text: "성공은 저절로 오지 않는다. 직접 잡아라.", author: "익명" },
    {
      text: "더 열심히 노력할수록, 성취할 때 더 큰 기쁨을 느낀다.",
      author: "익명",
    },
    { text: "피곤할 때 멈추지 말고, 끝냈을 때 멈춰라.", author: "익명" },
    { text: "결단력으로 일어나고, 만족감으로 잠들어라.", author: "익명" },
    { text: "오늘 한 일이 내일의 나를 만든다.", author: "익명" },
    { text: "작은 행동이 큰 변화를 만든다.", author: "익명" },
    { text: "어렵다고 포기하지 마라. 가능성은 항상 있다.", author: "익명" },
    { text: "기회를 기다리지 말고 만들어라.", author: "익명" },
    {
      text: "시험은 약점을 보여주기 위함이 아니라, 강점을 찾기 위함이다.",
      author: "익명",
    },
    {
      text: "성공의 열쇠는 장애물이 아니라 목표에 집중하는 것이다.",
      author: "익명",
    },
    { text: "당신은 생각보다 강하다.", author: "익명" },
    { text: "조용히 노력하고, 성공이 말하게 하라.", author: "프랭크 오션" },
    {
      text: "긍정적으로 생각하고, 열심히 일하라, 그리고 이루어라.",
      author: "익명",
    },
    { text: "실패 후에 오는 것이 진정한 성공이다.", author: "아노라 리" },
    { text: "시계를 보지 말고, 시계처럼 나아가라.", author: "샘 레벤슨" },
    { text: "상처를 지혜로 바꿔라.", author: "오프라 윈프리" },
    { text: "불가능해 보여도 결국 해낼 수 있다.", author: "넬슨 만델라" },
    { text: "두려움 너머에 당신이 원하는 것이 있다.", author: "조지 애드에어" },
    {
      text: "당신의 행동은 의미 있다. 그것은 중요하다.",
      author: "윌리엄 제임스",
    },
    { text: "시도하지 않은 것은 100% 실패다.", author: "웨인 그레츠키" },
    { text: "지금 있는 곳에서, 가진 것들로 시작하라.", author: "아서 애쉬" },
    {
      text: "시작하기에 가장 좋은 시간은 어제였다. 다음은 바로 지금이다.",
      author: "익명",
    },
  ],
};

function showRandomQuote(lang) {
  const quotes = quotesByLang[lang] || quotesByLang.en;
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = `"${random.text}"`;
  authorText.textContent = `— ${random.author}`;
}

newQuoteBtn.addEventListener("click", () => {
  showRandomQuote(langSelect.value);
});

shareBtn.addEventListener("click", () => {
  const fullQuote = `${quoteText.textContent} ${authorText.textContent}`;
  if (navigator.share) {
    navigator.share({
      title: "Quote",
      text: fullQuote,
      url: window.location.href,
    });
  } else {
    navigator.clipboard.writeText(`${fullQuote}\n${window.location.href}`);
    shareBtn.textContent = "✅ Copied!";
    setTimeout(() => (shareBtn.textContent = "📤 Share"), 1500);
  }
});

saveBtn.addEventListener("click", () => {
  const fullQuote = `${quoteText.textContent} ${authorText.textContent}`;
  let saved = JSON.parse(localStorage.getItem("savedQuotes")) || [];
  if (!saved.includes(fullQuote)) {
    saved.push(fullQuote);
    localStorage.setItem("savedQuotes", JSON.stringify(saved));
    saveBtn.textContent = "✅ Saved";
  } else {
    saveBtn.textContent = "⚠️ Already Saved";
  }
  setTimeout(() => (saveBtn.textContent = "⭐ Save"), 1500);
});

viewSavedBtn.addEventListener("click", () => {
  savedList.innerHTML = "";
  const saved = JSON.parse(localStorage.getItem("savedQuotes")) || [];
  if (saved.length === 0) {
    savedList.innerHTML = "<li>No saved quotes yet.</li>";
  } else {
    saved.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      savedList.appendChild(li);
    });
  }
  savedModal.style.display = "flex";
});

clearSavedBtn.addEventListener("click", () => {
  localStorage.removeItem("savedQuotes");
  savedList.innerHTML = "<li>All quotes cleared.</li>";
});

closeSavedBtn.addEventListener("click", () => {
  savedModal.style.display = "none";
});

// Dark mode
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkToggle.textContent = document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";
});

langSelect.addEventListener("change", () => {
  const selectedLang = langSelect.value;
  localStorage.setItem("preferredLang", selectedLang);
  showRandomQuote(selectedLang);
});

const savedLang = localStorage.getItem("preferredLang") || "en";
langSelect.value = savedLang;
showRandomQuote(savedLang);
