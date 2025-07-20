
const countDownDate = new Date("July 30, 2025 09:00:00").getTime();
const countdown = document.getElementById("countdown");
setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  if (distance < 0) {
    countdown.innerHTML = "Acara sedang berlangsung!";
    return;
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  countdown.innerHTML = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
}, 1000);
