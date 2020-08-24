
function printOwing(invoice) {

    printBanner();

    // 미해결 채무(outstanding)를 계산한다.
    const outstatnding = calculateOutstanding(invoice);

    // 마감일(dueDate)을 기록한다.
    recordDueDate(invoice);

    // 세부 사항을 출력한다.
    printDetails(invoice, outstatnding);

}

function calculateOutstanding(invoice) {
    let result = 0;
    for (const o of invoice.orders) {
        outstatnding += o.amount;
    }
    return result;
}

function recordDueDate(invoice) {
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printBanner() {
    console.log("****************");
    console.log("**** 고객 채무 ****")
    console.log("****************");
}

function printDetails(invoice, outstatnding) {
    console.log('고객명 : ${invoice.customer}');
    console.log('채무액 : ${outstanding}');
    console.log('마감일 : ${invoice.dueDate.toLocalDateString()}');
}


