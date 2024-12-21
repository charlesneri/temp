/*// Barcode scanning setup with QuaggaJS
    function startBarcodeScanner() {
        Quagga.init(
          {
            inputStream: {
              name: "Live",
              type: "LiveStream",
              target: document.querySelector("#barcode-video"),
              constraints: {
                facingMode: "environment", // Use rear camera
              },
            },
            decoder: {
              readers: ["code_128_reader", "ean_reader", "ean_8_reader", "upc_reader"],
            },
          },
          function (err) {
            if (err) {
              console.error(err);
              return;
            }
            Quagga.start();
          }
        );

        Quagga.onDetected(function (data) {
          const barcode = data.codeResult.code;
          document.getElementById("bar").value = barcode; // Populate barcode input
          console.log("Scanned Barcode: " + barcode);
        });
      }

// Call the function to start scanning when the page loads
window.onload = startBarcodeScanner;
*/
// Calculation logic
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
