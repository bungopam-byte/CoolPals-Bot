const year = new Date().getFullYear();
document.documentElement.style.setProperty("--current-year", `"${year}"`);

const statStatus = document.querySelector('[data-stat="status"]');
if (statStatus) {
  statStatus.textContent = "Ready";
}
