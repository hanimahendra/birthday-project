function blowCandles() {
  const candles = document.querySelectorAll(".candle");
  candles.forEach((candle) => {
    candle.classList.remove("flicker");
    candle.style.opacity = 0;
  });

  // Hide the Blow Off button
  document.getElementById("blowButton").style.display = "none";

  // Trigger balloons and confetti
  triggerBalloons();
  triggerConfetti();

  // ✅ Create and show the Next button
  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.className = "next-button";
  nextButton.onclick = showFinalWish;

  document.querySelector(".cake-screen").appendChild(nextButton);
}
