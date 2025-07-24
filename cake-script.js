function launchBalloons() {
  const container = document.getElementById('balloonsContainer');
  for (let i = 0; i < 10; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = `${Math.random() * 100}vw`;
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    balloon.style.animationDuration = `${5 + Math.random() * 5}s`;
    container.appendChild(balloon);
  }
}