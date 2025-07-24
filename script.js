const app = document.getElementById('app');

function showWelcome() {
  app.innerHTML = `
    <div class="screen welcome">
      <img src="cute-dog.jpg" alt="Cute Dog" />
      <h1>Hey Nayii, Today is your day</h1>
      <button onclick="showEnvelope()">Next</button>
    </div>
  `;
}

function showEnvelope() {
  app.innerHTML = `
    <div class="screen envelope">
      <img src="envelope.jpg" alt="Envelope" />
      <h1>There is something for you</h1>
      <button onclick="showLetter()">Open</button>
    </div>
  `;
}

function showLetter() {
  app.innerHTML = `
    <div class="screen letter-screen">
      <div class="letter-text" id="letterText"></div>
      <button id="continueToCake" onclick="showCake()">Continue</button>
    </div>
  `;
  typeLetter();
}

const letterContent = `Hii dear, 🥰

I still remember the first time I saw you back in 7th standard. Funny enough, I didn’t like you at all 😅. I used to scold you in my mind, thinking “Why is this fat girl always near Adhi?” 😆 We barely spoke… and to be honest, I was even glad when the teachers scolded you. 🙈

But life had other plans 🌌.

One day, when the class was empty, we finally talked. Just a few words — and maybe that was the turning point 💫. In 8th, destiny placed us on the same bench, in the same section. And suddenly, our conversations grew — from serial stories to our deepest worries 💬💖.

Slowly but surely, we became inseparable 🤗. But with that closeness came a strange kind of jealousy 😜. You hated it when I spoke with others, and I felt the same when you did 😏. I still remember the day you cried — not from anger, but because you cared so much 🥺.
That’s when I knew — this was no ordinary friendship 💕.

In school, we couldn’t bear to be apart even for an hour 😍. But now, life took us on different paths, different streams. We rarely talk, just the occasional phone call 📞...
But still, nothing has changed in my heart ❤. I love you, Nayii. I truly do 💖.
🎂 Happy Birthday, Nagii! 🎉
You deserve all the love, laughter, and joy in this world 🌸✨. Just like you brought light into my life, I hope your life stays just as beautiful 🌈.

With love, 
Hani 🫶`;;

function typeLetter() {
  const letter = document.getElementById("letterText");
  const words = letterContent.split(" ");
  let i = 0;
  const interval = setInterval(() => {
    if (i < words.length) {
      letter.innerHTML += words[i] + " ";
      i++;
    } else {
      clearInterval(interval);
    }
  }, 200);
}

function showCake() {
  app.innerHTML = `
    <div class="screen cake-screen">
      <h1 class="glow">Happy Birthday Nayii 🎈</h1>
      <div class="cake">
        <div class="candle" id="candle1"><div class="flame"></div></div>
        <div class="candle" id="candle2"><div class="flame"></div></div>
        <div class="candle" id="candle3"><div class="flame"></div></div>
        <div class="cake-body"></div>
      </div>
      <div class="balloons-container" id="balloonsContainer"></div>
      <button onclick="showBlowButton()">Make a wish!</button>
    </div>
  `;
}

function showBlowButton() {
  const cakeScreen = document.querySelector('.cake-screen');
  const blowBtn = document.createElement('button');
  blowBtn.textContent = "Blow Off Candles";
  blowBtn.onclick = blowCandles;
  cakeScreen.appendChild(blowBtn);
}

function blowCandles() {
  document.querySelectorAll('.flame').forEach(f => f.style.display = 'none');
  launchBalloons();

  const nextBtn = document.createElement('button');
  nextBtn.textContent = "Next";
  nextBtn.onclick = showGiftBox;
  document.querySelector('.cake-screen').appendChild(nextBtn);
}

// Start the project
showWelcome();
