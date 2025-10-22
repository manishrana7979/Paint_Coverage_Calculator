function calculateCoverage() {
    const liters = document.getElementById("liters").value;
    const price = document.getElementById("price").value;
    const coverageMin = document.getElementById("coverageMin").value;
    const coverageMax = document.getElementById("coverageMax").value;
    const coats = document.getElementById("coats").value;

    // Validate input
    if (!liters || !price || !coverageMin || !coverageMax || !coats) {
        alert("Please fill in all fields.");
        return;
    }

    // Calculate coverage for the given number of coats
    const minCoverage = (liters * coverageMin) / coats;
    const maxCoverage = (liters * coverageMax) / coats;

    // Calculate price per liter and total price
    const pricePerLiter = price / liters;
    const totalPrice = pricePerLiter * liters;

    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p>Minimum Coverage for ${coats} coat(s): ${minCoverage.toFixed(2)} sqft</p>
        <p>Maximum Coverage for ${coats} coat(s): ${maxCoverage.toFixed(2)} sqft</p>
        <p>Price per Liter: ₹${pricePerLiter.toFixed(2)}</p>
        <p>Total Price for ${liters} Liters: ₹${totalPrice.toFixed(2)}</p>
    `;
}

// Function to listen for the Enter key press
document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission or page reload
        calculateCoverage(); // Trigger the calculate function
    }
});
