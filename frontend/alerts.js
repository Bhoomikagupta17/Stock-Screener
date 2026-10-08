let alerts = [];

function addAlert() {
  const stock = document.getElementById("stockName").value;
  const target = parseFloat(document.getElementById("targetPrice").value);
  const condition = document.getElementById("condition").value;

  if (!stock || !target) {
    alert("Please fill all fields");
    return;
  }

  const newAlert = {
    id: Date.now(),
    stock,
    target,
    condition,
    currentPrice: (Math.random() * 3000).toFixed(2),
    status: "active"
  };

  alerts.push(newAlert);
  renderAlerts();
}

function renderAlerts() {
  const activeDiv = document.getElementById("activeAlerts");
  const triggeredDiv = document.getElementById("triggeredAlerts");

  activeDiv.innerHTML = "";
  triggeredDiv.innerHTML = "";

  alerts.forEach(alert => {

    // Simulate price change
    alert.currentPrice = (Math.random() * 3000).toFixed(2);

    if (
      (alert.condition === "above" && alert.currentPrice >= alert.target) ||
      (alert.condition === "below" && alert.currentPrice <= alert.target)
    ) {
      alert.status = "triggered";
    }

    const card = document.createElement("div");
    card.className = "alert-card";

    card.innerHTML = `
      <div class="alert-info">
        <strong>${alert.stock}</strong><br>
        Target: ₹${alert.target} (${alert.condition})<br>
        Current: ₹${alert.currentPrice}
      </div>
      <div>
        <span class="${alert.status === 'active' ? 'active-status' : 'triggered-status'}">
          ${alert.status.toUpperCase()}
        </span>
        <button class="delete-btn" onclick="deleteAlert(${alert.id})">Delete</button>
      </div>
    `;

    if (alert.status === "active") {
      activeDiv.appendChild(card);
    } else {
      triggeredDiv.appendChild(card);
    }

  });
}

function deleteAlert(id) {
  alerts = alerts.filter(alert => alert.id !== id);
  renderAlerts();
}

// Auto refresh every 5 seconds (simulate live monitoring)
setInterval(renderAlerts, 5000);

