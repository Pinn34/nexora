const langSelect = document.getElementById("langSelect");

langSelect.addEventListener("change", () => {
  loadLang(langSelect.value);
});

function loadLang(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("appTitle").innerText = data.title;
    });
}

loadLang("en");
