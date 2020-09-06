//From https://blog.logrocket.com/how-to-handle-data-validation-in-node-using-validatorjs/
const Validator = require('validatorjs');
const validator =  (body, rules, customMessages, callback) => {
    const validation = new Validator(body, rules, customMessages);
    validation.passes(() => callback(null, true));
    validation.fails(() => callback(validation.errors, false));
};

module.exports = validator;