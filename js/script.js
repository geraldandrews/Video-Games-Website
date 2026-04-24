// Navbar
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', function(e) {
  hamburger.classList.toggle('cross');
});

navToggle.addEventListener("click", function () {
   if (links.classList.contains("show-links")) {
     links.classList.remove("show-links");
   } else {
     links.classList.add("show-links");
   }
});

// Modal
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');
const gameImgs = document.querySelectorAll('.game-img')

gameImgs.forEach(img => {
  img.addEventListener('click', async (e) => {
    const clickedId = e.target.getAttribute('data-id');

    const response = await fetch('games.json');
    const data = await response.json();

    const item = data.find(obj => obj.id == clickedId);

    document.querySelector('.modal-img').src = item.image;
    document.querySelector('.modal-title').innerText = item.title;
    document.querySelector('.release-date').innerText = item.release;
    document.querySelector('.console').innerText = item.console;

    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
  
