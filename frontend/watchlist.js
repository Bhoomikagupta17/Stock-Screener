document.addEventListener("DOMContentLoaded", function () {

  const mockWatchlist = [
    { name: "TCS", price: 3450, change: 1.2 },
    { name: "INFY", price: 1520, change: -0.8 },
    { name: "HDFC Bank", price: 1680, change: 2.1 },
    { name: "Reliance", price: 2750, change: -1.1 },
    { name: "Wipro", price: 450, change: 3.0 }
  ];

  const container = document.getElementById("watchlistContainer");

  let totalValue = 0;
  let totalProfit = 0;

  mockWatchlist.forEach((stock, index) => {

    totalValue += stock.price;
    totalProfit += stock.price * (stock.change / 100);

    const card = document.createElement("div");
    card.className = "stock-card";

    card.innerHTML = `
      <div class="stock-name">
        ${stock.name}
        <span class="live-indicator"></span>
      </div>

      <div class="stock-price">₹${stock.price}</div>

      <div class="${stock.change >= 0 ? 'positive' : 'negative'}">
        ${stock.change >= 0 ? '+' : ''}${stock.change}%
      </div>

      <div class="chart-container">
        <canvas id="chart${index}"></canvas>
      </div>

      <div class="card-buttons">
        <button class="buy-btn">Buy</button>
        <button class="sell-btn">Sell</button>
        <button class="remove-btn">Remove</button>
      </div>
    `;

    container.appendChild(card);

    // Mini Line Graph
    const ctx = document.getElementById(`chart${index}`).getContext("2d");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [{
          data: [
            stock.price * 0.95,
            stock.price * 0.97,
            stock.price,
            stock.price * 1.02,
            stock.price * (1 + stock.change / 100)
          ],
          borderColor: stock.change >= 0 ? "#00ff88" : "#ff4d6d",
          borderWidth: 2,
          tension: 0.4,
          pointRadius: 0
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          x: { display: false },
          y: { display: false }
        }
      }
    });

  });

  animateValue("totalValue", 0, totalValue, 1000);
  animateValue("totalProfit", 0, totalProfit, 1000);

});


// Animated Counter Function
function animateValue(id, start, end, duration) {
  let range = end - start;
  let current = start;
  let increment = range / 50;
  let stepTime = Math.abs(Math.floor(duration / 50));
  let obj = document.getElementById(id);

  let timer = setInterval(function () {
    current += increment;
    obj.innerHTML = "₹" + Math.floor(current);
    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      obj.innerHTML = "₹" + Math.floor(end);
      clearInterval(timer);
    }
  }, stepTime);
}

