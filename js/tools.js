function tiktokDownloader() {
  const url = prompt("Masukkan link TikTok:");
  if (!url) return;
  alert("TikTok link diterima:\n" + url + "\n\n(Download engine akan dihubungkan)");
}

function igDownloader() {
  const url = prompt("Masukkan link Instagram:");
  if (!url) return;
  alert("Instagram link diterima:\n" + url + "\n\n(Download engine akan dihubungkan)");
}

function videoToMp3() {
  alert("Fitur Video → MP3 (v1.1)");
}

function qrGenerator() {
  const text = prompt("Masukkan teks atau URL:");
  if (!text) return;

  const qr =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
    encodeURIComponent(text);

  window.open(qr, "_blank");
}

function sendAI() {
  const input = document.getElementById("aiInput").value;
  if (!input) return;

  document.getElementById("aiResult").innerText =
    "AI Response (demo):\n\n" + input;
    }
