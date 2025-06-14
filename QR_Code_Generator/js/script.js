let input = document.querySelector("#qr-input");
let btnGenerateQr = document.querySelector("#generateQR");
let imageQr = document.querySelector("#imageQR");

function generateQrCode() {
  if (input.value === "") {
    alert("Please enter a value to generate a QR code.");
    return;
  }

  imageQr.setAttribute(
    "src",
    `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
  );
  imageQr.style.display = "block"; // Show QR image
}

document.querySelector("#qr-form").addEventListener("submit", function (e) {
  e.preventDefault();
  generateQrCode();
});
