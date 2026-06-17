function getData() { return JSON.parse(localStorage.getItem("students")) || []; }
function saveData(data) { localStorage.setItem("students", JSON.stringify(data)); }