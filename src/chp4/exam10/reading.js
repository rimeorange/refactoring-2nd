const reading = {customer:"ivan", quantity: 10, month:5, year:2017};

function enrichReading(original) {
    const result = _.cloneDeep(original);
    return result;
}
