const reading = {customer:"ivan", quantity: 10, month:5, year:2017};

function enrichReading(original) {
    const result = _.cloneDeep(original);
    result.baseCharge = calulateBaseCharge(result);
    result.taxableCharge = Math.max(0, result.baseCharge - taxThreshjold(result.year));
    return result;
}
