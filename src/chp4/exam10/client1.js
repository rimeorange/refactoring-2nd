const aReading = aquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
