// Calculate total cost to put down tiles on the whole floor
// Helper function to calculate area

function calculateArea(length, width) {
    return length * width;
}

// Helper function to calculate tile cost
function calculateTileCost(area, costPerSquareFoot) {
    return area * costPerSquareFoot;
}

// Main function to calculate total cost
function calculateTotalCost(length, width, costPerSquareFoot) {
    let area = calculateArea(length, width);
    let totalCost = calculateTileCost(area, costPerSquareFoot);
    return totalCost;
}

// Example Usage
let bathroomLength = 10; 
let bathroomWidth = 8;
let tileCostPerSquareFoot = 5;

let totalCost = calculateTotalCost(bathroomLength, bathroomWidth, tileCostPerSquareFoot);
console.log(`Total cost to tile the bathroom floor: $${totalCost}`);