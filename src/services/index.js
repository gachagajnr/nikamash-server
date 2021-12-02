const users = require('./users/users.service.js');
// eslint-disable-next-line no-unused-vars
const products = require('./products/products.service.js');
const sales = require('./sales/sales.service.js');
const orders = require('./orders/orders.service.js');
const expenses = require('./expenses/expenses.service.js');
module.exports = function (app) {
 app.configure(users);
 app.configure(products);
 app.configure(sales);
 app.configure(orders);
 app.configure(expenses);
};
