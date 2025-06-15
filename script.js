  AOS.init();
  
  const toggleBtn = document.getElementById("theme-toggle");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    // كمان نغيّر شكل الأيقونة
    if (document.body.classList.contains("light-mode")) {
      toggleBtn.textContent = "🌞";
    } else {
      toggleBtn.textContent = "🌙";
    }
  });
  const words = ["Web Developer", "Data Analytics", "Pharmacist"];
  let wordIndex = 0;
  let charIndex = 0;
  const typedText = document.querySelector(".typed-text");

  function typeEffect() {
    if (charIndex < words[wordIndex].length) {
      typedText.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      setTimeout(eraseEffect, 2000);
    }
  }

  function eraseEffect() {
    if (charIndex > 0) {
      typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseEffect, 50);
    } else {
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 500);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (words.length) typeEffect();
  });
  document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let message = document.getElementById('message').value;

  if (name === "" || email === "" || phone === "" || message === "") {
    alert("Please fill out all fields.");
  } else {
    document.getElementById('responseMessage').innerText = "Thank you for your message, we will get back to you soon!";
  }
});
