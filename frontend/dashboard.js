let chartInstance = null;

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
    resultTitle.innerText = "Market Overview";
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
      <h4>${stock.name}</h4>
      <p>Price: ₹${stock.price}</p>
      <p>Category: ${resultTitle.innerText}</p>
    </div>
  `;
});


  drawChart(stocks);
}

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
        label: "Stock Price (₹)",
        data: stocks.map(s => s.price),
        backgroundColor: "#00c6ff"
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true }
      }
    }
  });
}
function showSection(sectionName) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.classList.remove('active'));

  const activeSection = document.getElementById(`section-${sectionName}`);
  if (activeSection) {
    activeSection.classList.add('active');
  }
}
function logout() {
  alert("You have been logged out successfully");
  window.location.href = "login.html";
}

