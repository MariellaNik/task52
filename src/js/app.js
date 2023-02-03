import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button");
  const body = document.querySelector('body');

  button.addEventListener("click", () => {
    alert("💣");
  });

  body.addEventListener('click', () => {
    for (let i = 0; i < 5; i++) {
      const article = document.createElement('article');
      article.classList.add('message');
      article.textContent = `This is message ${i + 1}`;
      body.appendChild(article);
    }
  });
});

