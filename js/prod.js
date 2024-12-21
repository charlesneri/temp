const addProductBtn = document.getElementById('addProductBtn');
const addProductForm = document.getElementById('addProductForm');
const saveProductBtn = document.getElementById('saveProduct');
const selectButton = document.getElementById('selectButton');
const productTableBody = document.querySelector('#productTable tbody');

// Toggle the Add Product Form
addProductBtn.addEventListener('click', function (e) {
    e.preventDefault();
    addProductForm.style.display = addProductForm.style.display === 'block' ? 'none' : 'block';
});

// Save Product to the Table
saveProductBtn.addEventListener('click', function () {
    const productName = document.getElementById('productName').value;
    const serialNo = document.getElementById('serialNo').value;
    const category = document.getElementById('category').value;
    const quantity = document.getElementById('quantity').value;

    if (productName && serialNo && category && quantity) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${productName}</td>
            <td>${quantity}</td>
            <td>${category}</td>
        `;
        productTableBody.appendChild(row);

        // Clear form fields after adding the product
        document.getElementById('addProductFormFields').reset();

        // Hide the form
        addProductForm.style.display = 'none';

        // Enable the Select button
        checkProductList();
    }
});

// Check if the table has items to enable or disable the Select button
function checkProductList() {
    const items = productTableBody.querySelectorAll('tr').length;
    if (items > 0) {
        selectButton.classList.remove('disabled');
    } else {
        selectButton.classList.add('disabled');
    }
}

// Initialize: Ensure Select button state is correct on load
checkProductList();

// Action for the Select Button
selectButton.addEventListener('click', function () {
    if (!this.classList.contains('disabled')) {
        alert('Select button clicked!');
    }
});
function calculateTotal() {
    // Get the values from input fields
    const qty = parseFloat(document.getElementById("qty").value) || 0;
    const costPrice =
      parseFloat(document.getElementById("cost-price").value) || 0;
    const pesoAdd = parseFloat(document.getElementById("peso-add").value) || 0;
    const wholesale = parseFloat(document.getElementById("wholesale").value) || 0;
    const sellingPrice =
      parseFloat(document.getElementById("selling-price").value) || 0;
    const unitPeso = document.getElementById("unit-peso").value;
    const unitWholesale = document.getElementById("unit-wholesale").value;
  
    // Calculate the final selling price after adding %/Peso
    let finalSellingPrice = sellingPrice;
    if (unitPeso === "percent") {
      finalSellingPrice += sellingPrice * (pesoAdd / 100);
    } else if (unitPeso === "Peso") {
      finalSellingPrice += pesoAdd;
    }
  
    // Calculate wholesale if selected
    if (unitWholesale && wholesale > 0) {
      if (unitWholesale === "percent") {
        finalSellingPrice += sellingPrice * (wholesale / 100);
      } else if (unitWholesale === "Peso") {
        finalSellingPrice += wholesale;
      }
    }
  
    // Calculate total based on Quantity and Cost Price
    const totalByQuantity = qty * costPrice;
  
    // Display results
    const resultDisplay = document.getElementById("result-display");
    resultDisplay.innerHTML = `Selling Price: ${finalSellingPrice.toFixed(
      2
    )} <br> QTY / Cost Price: ${totalByQuantity.toFixed(2)}`;
  }
  
  // Event listener for input changes to trigger calculation
  document.querySelectorAll("input, select").forEach((element) => {
    element.addEventListener("input", calculateTotal);
  });
  