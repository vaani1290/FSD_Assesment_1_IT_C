function updateTotalPrice() {
    const productPrice = parseFloat(document.getElementById("productPrice").textContent);
    const quantity = parseInt(document.getElementById("quantity").value);
    const totalPrice = productPrice * quantity;
    document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
  }
  
  function updateCart() {
    const quantity = document.getElementById("quantity").value;
    const totalPrice = document.getElementById("totalPrice").textContent;
    alert(You added ${quantity} item(s) to your cart for Rs. ${totalPrice});
  }
  
  document.getElementById("quantity").addEventListener("input", updateTotalPrice);
  