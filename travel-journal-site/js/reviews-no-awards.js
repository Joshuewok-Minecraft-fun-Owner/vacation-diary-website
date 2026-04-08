document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".star-bar").forEach(bar => {
    const rating = parseFloat(bar.dataset.rating || "0");
    const percentage = Math.max(0, Math.min(5, rating)) / 5 * 100;
    bar.style.setProperty("--fill", percentage + "%");
  });
});
