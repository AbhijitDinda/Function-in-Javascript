function calculateTax() {
    const taxRates = [
        { incomeRange: 1000000, rate: 0.1 },
        { incomeRange: 500000, rate: 0.15 },
        { incomeRange: 100000, rate: 0.2 },
        { incomeRange: 50000, rate: 0.25 }
    ];

    return function(income) {
        let payableTax = 0;

        for (let i = 0; i < taxRates.length; i++) {
            if (income <= taxRates[i].incomeRange) {
                payableTax += income * taxRates[i].rate;
                break;
            } else {
                payableTax += taxRates[i].incomeRange * taxRates[i].rate;
                income -= taxRates[i].incomeRange;
            }
        }

        return payableTax;
    };
}

const calculateTaxFromIncome = calculateTax();

console.log(`Tax for Rs 500,000 is: Rs ${calculateTaxFromIncome(500000).toFixed(2)}`);
console.log(`Tax for Rs 30,000 is: Rs ${calculateTaxFromIncome(30000).toFixed(2)}`);
console.log(`Tax for Rs 70,000 is: Rs ${calculateTaxFromIncome(70000).toFixed(2)}`);
console.log(`Tax for Rs 100,000 is: Rs ${calculateTaxFromIncome(100000).toFixed(2)}`);
