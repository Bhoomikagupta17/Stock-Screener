function searchStocks() {
  const query = document.getElementById("query").value.toLowerCase();
  const resultsDiv = document.getElementById("results");

  resultsDiv.innerHTML = "";

  // Dummy data (acts like backend response)
  const stocks = [
    { name: "Infosys", symbol: "INFY", pe: 9, sector: "IT" },
    { name: "TCS", symbol: "TCS", pe: 8, sector: "IT" },
    { name: "Wipro", symbol: "WIPRO", pe: 12, sector: "IT" }
  ];

  const filtered = stocks.filter(stock => {
    if (query.includes("pe") && query.includes("less")) {
      return stock.pe < 10;
    }
    return false;
  });

  if (filtered.length === 0) {
    resultsDiv.innerHTML =
      "<p class='placeholder'>No stocks matched your criteria.</p>";
    return;
  }

  filtered.forEach(stock => {
    const card = document.createElement("div");
    card.className = "stock-card";

    card.innerHTML = `
      <div>
        <div class="stock-name">${stock.name} (${stock.symbol})</div>
        <div class="stock-meta">Sector: ${stock.sector}</div>
      </div>
      <div class="stock-meta">PE Ratio: ${stock.pe}</div>
    `;

    resultsDiv.appendChild(card);
  });
}
function runScreener() {
  const query = document.getElementById("screenerQuery").value.toLowerCase();
  const resultTitle = document.getElementById("resultTitle");
  const stockResults = document.getElementById("stockResults");

  let stocks = [];

  if (query.includes("pe")) {
    resultTitle.innerText = "Low PE Stocks";
    stocks = [
      { name: "TCS", price: 3450 },
      { name: "INFY", price: 1520 }
    ];
  } 
  else if (query.includes("roe")) {
    resultTitle.innerText = "High ROE Stocks";
    stocks = [
      { name: "HDFC Bank", price: 1680 },
      { name: "ICICI Bank", price: 980 }
    ];
  } 
  else if (query.includes("it")) {
    resultTitle.innerText = "IT Sector Stocks";
    stocks = [
      { name: "Wipro", price: 450 },
      { name: "Tech Mahindra", price: 1250 }
    ];
  } 
  else if (query.includes("bank")) {
    resultTitle.innerText = "Banking Stocks";
    stocks = [
      { name: "Axis Bank", price: 1090 },
      { name: "SBI", price: 620 }
    ];
  } 
  else {
    resultTitle.innerText = "Market Trend Analysis";
    stocks = [
      { name: "Reliance", price: 2750 },
      { name: "L&T", price: 3650 }
    ];
  }

  // Show stock list
  stockResults.innerHTML = "";
  stocks.forEach(stock => {
    stockResults.innerHTML += `
      <div class="stock-card">
        <strong>${stock.name}</strong> — ₹${stock.price}
      </div>
    `;
  });

  drawChart(stocks);
}
let chartInstance = null;

function drawChart(stocks) {
  const ctx = document.getElementById("stockChart").getContext("2d");

  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: stocks.map(s => s.name),
      datasets: [{
        label: "Stock Price",
        data: stocks.map(s => s.price),
        backgroundColor: "#2563eb"
      }]
    }
  });
}


function addWatch() {
  document.getElementById("watchlist").innerHTML = `
    ⭐ INFY <br>
    ⭐ TCS
  `;
}

