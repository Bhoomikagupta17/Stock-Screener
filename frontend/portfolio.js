document.addEventListener("DOMContentLoaded", function () {

  const portfolio = [
    { name: "TCS", invested: 16000, current: 17250 },
    { name: "INFY", invested: 14000, current: 15200 },
    { name: "Reliance", invested: 7800, current: 8250 },
    { name: "HDFC", invested: 6000, current: 6720 }
  ];

  let totalInvested = 0;
  let currentValue = 0;

  portfolio.forEach(stock => {
    totalInvested += stock.invested;
    currentValue += stock.current;
  });

  const totalPL = currentValue - totalInvested;
  const returnPercent = ((totalPL / totalInvested) * 100).toFixed(2);
  const todayGain = (Math.random() * 500).toFixed(0);

  animateValue("totalInvested", 0, totalInvested, 1500);
  animateValue("currentValue", 0, currentValue, 1500);
  animateValue("totalPL", 0, totalPL, 1500);
  animateValue("todayGain", 0, todayGain, 1500);

  document.getElementById("returnPercent").innerText = returnPercent + "%";

  // Diversification Score
  const diversification = Math.min(100, portfolio.length * 20);
  document.getElementById("divScore").innerText = diversification + "%";

  // Risk Logic
  const riskLevel = diversification > 60 ? "Low Risk" : "Moderate Risk";
  document.getElementById("riskLevel").innerText = riskLevel;

  // Growth Chart
  new Chart(document.getElementById("growthChart"), {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [{
        label: "Portfolio Growth",
        data: [40000, 42000, 45000, 47000, 48000, currentValue],
        borderColor: "#00ff88",
        fill: false
      }]
    }
  });

  // Allocation Chart
  new Chart(document.getElementById("allocationChart"), {
    type: "doughnut",
    data: {
      labels: portfolio.map(s => s.name),
      datasets: [{
        data: portfolio.map(s => s.current),
        backgroundColor: ["#00c853", "#ff5252", "#ffb300", "#2979ff"]
      }]
    }
  });

});

// Counter Animation
function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  let current = start;
  const timer = setInterval(function () {
    current += increment * Math.ceil(range / 100);
    obj.innerText = "₹" + current;
    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      obj.innerText = "₹" + end;
      clearInterval(timer);
    }
  }, 20);
}
