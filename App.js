let balance = 0;

function addTransaction() {
  const title = document.getElementById("title").value.trim();
  const amount = Number(document.getElementById("amount").value);
  const type = document.getElementById("type").value;

  if (title === "" || amount === 0 || type === "") {
    alert("Please fill all fields");
    return;
  }

  if (type === "income") {
    balance += amount;
  } else {
    balance -= amount;
  }

  document.getElementById("balance").innerText = "Balance: ₹" + balance;

  const row = `
    <tr>
      <td>${title}</td>
      <td>₹${amount}</td>
      <td>${type}</td>
    </tr>
  `;

  document.getElementById("list").innerHTML += row;

  document.getElementById("title").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("type").value = "";
}
