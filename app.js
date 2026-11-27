const params = new URLSearchParams(window.location.search);
const box = document.getElementById("greeting");
box.innerHTML = "Hello, " + params.get("name");
