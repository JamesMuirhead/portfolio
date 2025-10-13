// Set current year in footer (safe without optional chaining on LHS)
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();
