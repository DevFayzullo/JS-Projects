
# 💬 Multilingual Quote Generator

A sleek and simple **motivational quote generator** built with **HTML, CSS, and JavaScript**.  
Supports **three languages** (🇬🇧 English, 🇺🇿 Uzbek, 🇰🇷 Korean), **dark mode**, quote saving, and social sharing.

---

## 🚀 Features

- 🌐 Multilingual support (English, Uzbek, Korean)
- 🌓 Toggle between **Light / Dark Mode**
- 🔁 Generate **random quotes**
- ⭐ Save favorite quotes using `localStorage`
- 📤 Universal share (Telegram, SMS, KakaoTalk, etc.)
- 🐦 Twitter sharing
- 📱 100% responsive – works on all screen sizes

---

## 📸 Preview

> 📌(`./screenshot.png`) 

---

## 🧠 How It Works

- Quotes are stored locally in `script.js` in `quotesByLang` object
- Language is selected via dropdown (`<select>`)
- A random quote is chosen from the selected language’s list
- Saved quotes are stored in browser's `localStorage` and shown in a modal
- Sharing uses `navigator.share()` on mobile, or copy-to-clipboard fallback

---

## 📂 Folder Structure

```
QuoteGenerator/
├── index.html       # HTML structure
├── style.css        # Responsive and themed design
├── script.js        # Main app logic (quotes, sharing, save, dark mode)
├── notes.md         # Developer notes and planning
└── README.md        # Project overview and instructions
```

---

## 🛠 Tech Stack

- HTML5
- CSS3 (with CSS variables for themes)
- JavaScript (DOM, localStorage, navigator.share)

---

## 📦 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/QuoteGenerator.git
```

2. Open the project:

```bash
cd QuoteGenerator
```

3. Run:

Open `index.html` in your browser (no server required).

✅ No build tools, no dependencies – pure frontend.


---

## 📄 License

This project is open-source under the **MIT License**.

---

## 👨‍💻 Author

Made with ❤️ by [DevFayzullo](https://github.com/DevFayzullo)

---

Enjoy your daily motivation! ✨
