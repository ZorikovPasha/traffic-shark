jQuery.validator.addMethod("isEmail", function (value, element) {
  return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
});

function formValidate(selector) {
  $(selector).validate({
    rules: {
      name: {
        required: true,
        isEmail: true,
      },
    },
    messages: {
      name: {
        required: "Enter your name",
        isName: "Please, enter the correct name",
      },
      email: {
        required: "Enter your phone number",
        isPhone: "Please, enter the correct phone number",
      },
    },
  });
}

export default formValidate