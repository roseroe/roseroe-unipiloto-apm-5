"use strict";
var sales_invoice_mock_1 = require('../mock/sales-invoice-mock');
exports.CUSTOMERS = [
    {
        id: 1032,
        name: "Edison Rosero",
        salesInvoice: [sales_invoice_mock_1.SALESINVOICES[0], sales_invoice_mock_1.SALESINVOICES[1]]
    },
    {
        id: 1033,
        name: "Juan Valdez",
        salesInvoice: [sales_invoice_mock_1.SALESINVOICES[1]]
    },
    {
        id: 1034,
        name: "Lina Maria",
        salesInvoice: [sales_invoice_mock_1.SALESINVOICES[2]]
    }
];
//# sourceMappingURL=customer-mock.js.map