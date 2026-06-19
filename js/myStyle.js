const enquiryType = document.getElementById("enquiry-type");
const productGroup = document.getElementById("product-group");
const qtyGroup = document.getElementById("qty-group");
const product = document.getElementById("product");
const quantity = document.getElementById("quantity");
const vip = document.getElementById("vip");
const btn = document.getElementById("btn-get-quote");
const result = document.getElementById("result");

// Show product + qty only when "Product Quote" is selected
enquiryType.onchange = function() {
  if (enquiryType.value === "product") {
    productGroup.style.display = "block";
    qtyGroup.style.display = "block";
  } else {
    productGroup.style.display = "none";
    qtyGroup.style.display = "none";
  }
}

// When button is clicked
btn.onclick = function() {
  result.style.color = "red";
  
  // Check if fields are filled
  if (document.getElementById("name").value.trim() === "") {
    result.innerText = "Error: Please enter your name";
    return;
  }
  if (document.getElementById("email").value.trim() === "") {
    result.innerText = "Error: Please enter your email";
    return;
  }
  if (enquiryType.value === "") {
    result.innerText = "Error: Please select enquiry type";
    return;
  }
  if (enquiryType.value === "product" && product.value === "") {
    result.innerText = "Error: Please select a product";
    return;
  }
  if (enquiryType.value === "product" && Number(quantity.value) < 1) {
    result.innerText = "Error: Quantity must be 1 or more";
    return;
  }

  // Show result on page
  result.style.color = "green";
  
  if (enquiryType.value === "product") {
    let price = 0;
    if (product.value === "catering") price = 1500;
    if (product.value === "pillows") price = 300;
    if (product.value === "toiletry") price = 150;
    if (product.value === "door-stopper") price = 180;
    if (product.value === "multiple") {
      result.innerText = "Response: For multiple products we’ll email you a custom quote within 24hrs";
      return;
    }
    
    let total = Number(quantity.value) * price;
    if (vip.checked) {
      total = total * 0.9;
      result.innerText = "Response: Total R" + total.toFixed(2) + " | VIP 10% discount applied ✓ | In stock";
    } else {
      result.innerText = "Response: Total R" + total.toFixed(2) + " | In stock";
    }
  }
  
  if (enquiryType.value === "service") {
    result.innerText = "Response: Catering quote available on request. We’ll contact you within 24hrs";
  }
  if (enquiryType.value === "volunteer") {
    result.innerText = "Response: Thank you for volunteering! Next steps sent to your email";
  }
  if (enquiryType.value === "sponsor") {
    result.innerText = "Response: Thank you for sponsoring! Sponsorship pack sent to your email";
  }
}