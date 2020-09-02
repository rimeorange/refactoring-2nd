const aReading = aquireReading();
const baseChargeAmount = calulateBaseCharge(aReading);

function calulateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
}


