const aReading = aquireReading();
const base = (baseRate(aReading.menth, aReading.year) * aReading.quantity);
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));
