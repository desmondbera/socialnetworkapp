const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // data.email = !isEmpty(data.email) ? data.email : '';
  // data.password = !isEmpty(data.password) ? data.password : '';
  //
  // if(!validator.isEmpty(data.name)) {
  //   errors.name = 'Name is required';
  // }
  //
  // if(validator.isEmpty(data.email)) {
  //   errors.email = 'Email field is required';
  // }
  //
  // if(!validator.isEmail(data.email)) {
  //   errors.name = 'Email is invalid';
  // }
  //
  // if(validator.isEmpty(data.password)) {
  //   errors.password = 'Password field is required';
  // }

    if(!validator.isLength(data.name, {min: 2, max: 30})) {
      errors.name = 'Name must be between 2 and 30 chars.'
    }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}
