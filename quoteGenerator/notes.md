# 📓 Project Notes: Quote Generator Web App

## 🟢 Project Initiation

The project started as a simple idea to build a **Quote Generator Web App** using basic HTML, CSS, and JavaScript. The original goal was to display a random motivational quote with an author and allow users to get a new one by clicking a button.

## 🎯 Initial Functional Requirements

At the beginning, the app was intended to have the following features:

- Display random quotes
- Show author of the quote
- "New Quote" button to generate another
- Responsive layout for all devices

## 🔁 Evolving Requirements

As the project progressed, more features were requested and added incrementally:

1. **Dark Mode Support** – Added a toggle to switch between light and dark themes (affecting both container and full body background).
2. **Real-Time API Integration** – Initially planned to use public quote APIs like `quotable.io` and `zenquotes.io`.
3. **Share Functionality** – Enable universal sharing to platforms like Telegram, SMS, KakaoTalk, Twitter, etc.
4. **Daily Quote** – Originally added daily quote generation based on date hash, later removed by user request.
5. **Quote Saving** – Allow users to save favorite quotes locally using `localStorage`.
6. **Language Support** – Added multilingual functionality: English 🇬🇧, Uzbek 🇺🇿, Korean 🇰🇷 with a language selector.

## 🔍 Research & Exploration

Several APIs were explored:

- ✅ `https://type.fit/api/quotes` – worked but returns a full list (not ideal for dynamic quote updates).
- ❌ `https://api.quotable.io/random` – did not work due to SSL certificate expiration.
- ❌ `https://zenquotes.io/api/random` – failed intermittently.

Due to these inconsistencies, we decided to switch to a **local quote dataset**, ensuring full offline support and reliability.

## ⚠️ Challenges Faced

- **Broken APIs**: Most public APIs either failed or returned certificate errors (`ERR_CERT_DATE_INVALID`).
- **Quote Repetition**: Avoiding repetition without an API was solved using randomized local arrays.
- **Dark mode inconsistency**: Initial dark mode applied only to container, not body. This was fixed by extending CSS variables and logic to the whole page.
- **Multilingual formatting**: Required careful structuring to maintain consistency and encoding across Uzbek, Korean, and English.

## ✅ Final Features Overview

- Responsive web layout (HTML, CSS)
- Random quote generation from local array
- Language selector (English, Uzbek, Korean)
- Dark mode toggle
- Twitter share button
- Universal share using `navigator.share()` or copy-to-clipboard fallback
- Save quotes locally
- View and clear saved quotes via modal

## 🧠 Lessons Learned

- Offline apps can be more reliable than API-dependent ones.
- LocalStorage is powerful for simple user-specific features like bookmarking.
- Building for multilingual support requires early planning of data structure and character sets.
- Progressive enhancement (mobile sharing, fallback handling) is essential for user experience.

---

✨ This project has evolved from a simple motivational quote generator into a robust, user-friendly multilingual web app.
