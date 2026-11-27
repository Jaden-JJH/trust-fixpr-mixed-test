const params = new URLSearchParams(window.location.search);
const box = document.getElementById("greeting");
box.textContent = "Hello, " + params.get("name");
