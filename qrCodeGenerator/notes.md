# QR Code Generator

A simple web application to generate QR codes from user-provided text or URLs using an external API.

---

## 🔧 Features

- Enter any text or URL to generate a QR code
- QR code is fetched from a public API (`api.qrserver.com`)
- Responsive and modern UI design
- Instant QR display without page reload

---

## 🗂 Project Structure

project/
│
├── index.html # Main HTML file with form and UI layout
├── css/
│ └── style.css # All styles for layout and design
├── js/
│ └── script.js # JavaScript for QR generation logic
└── notes.md # Project documentation (this file)

---

## 🧪 How It Works

1. User enters text or a URL in the input field.
2. On form submission:
   - JavaScript prevents default form behavior.
   - Calls the QR code API with the input value.
   - Sets the returned QR image URL as the `src` of the image element.
3. QR image is displayed below the button.

---

## 🌐 API Used

- **QR Code API**:  
  `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=YOUR_TEXT`

---

## 🖼️ Styling Notes

- Clean card-style layout with centered content
- Gradient background for the page
- Modern button hover effects
- Responsive design up to `350px` container width

---

## 📌 To-Do / Future Improvements

- Add QR code download button
- Validate input (e.g., valid URL format)
- Add dark mode toggle
- Offline QR generation (e.g., using a library like `qrcode.js`)

---

## ✅ Dependencies

None — purely HTML, CSS, and vanilla JavaScript

---

## 📎 Author

Built by [DevFayzullo]
