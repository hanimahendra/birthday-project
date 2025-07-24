function showGiftBox() {
  app.innerHTML = `
    <div class="screen book-screen">
      <img id="giftBox" src="gift-box-closed.png" />
      <button onclick="openGiftBox()">Open</button>
    </div>
  `;
}

function openGiftBox() {
  document.getElementById('giftBox').src = 'gift-box-open.png';

  setTimeout(() => {
    const bookImg = document.createElement('img');
    bookImg.src = 'animated-book.png';
    bookImg.id = "book";
    document.querySelector('.book-screen').appendChild(bookImg);

    const openBookBtn = document.createElement('button');
    openBookBtn.textContent = 'Open Book';
    openBookBtn.onclick = () => showPhotoPages(0);
    document.querySelector('.book-screen').appendChild(openBookBtn);
  }, 1000);
}

const photos = [
  { src: 'photo1.jpg', caption: '“Soft smile, bold energy. That’s how you steal a scene." ✨' },
  { src: 'photo2.jpg', caption: '“Even the breeze paused for her entrance.”💕' },
  { src: 'photo3.jpg', caption: '“No sparkle added — she came like that.” 📸' },
  { src: 'photo4.jpg', caption: '“Did you borrow the wind’s charm or is it just your natural talent?”🌟' },
  { src: 'photo5.jpg', caption: '. “We weren’t just classmates — we were a headline act in each other’s stories.” 🧚' },
  { src: 'photo6.jpg', caption: 'do you remember this? the place where cried...' },
  { src: 'photo7.jpg', caption: 'From school chaos to video calls. 🥹' },
];

function showFinalWish() {
  document.getElementById('app').innerHTML = `
    <div class="screen final-wish" style="background-color: #0b0c2a; color: white; text-align: center; padding: 50px;">
      <h1 style="font-size: 2em;">💖 Once again, Happy Birthday, Nayii! 🎉</h1>
      <p style="margin-top: 30px; font-size: 1.3em;">
        Just one smile from you… and my whole world feels right. <br><br>
        May this day be as special as you are. <br><br>
        <strong>I’m here — to share everything with you. 😘</strong><br><br>
        <em>I hope you liked it. 💌</em>
      </p>
    </div>
  `;
}

  app.innerHTML = `
    <div class="screen book-screen">
      <div class="page-container">
        <img id="photoPage" src="${photos[index].src}" />
      </div>
      <p class="caption">${photos[index].caption}</p>
      <button onclick="animateAndNext(${index})">Turn Page</button>
    </div>
  `;
}

function animateAndNext(index) {
  const image = document.getElementById('photoPage');
  image.classList.add('page-turn');

  setTimeout(() => {
    showPhotoPages(index + 1);
  }, 600); // Match animation duration in CSS
}
