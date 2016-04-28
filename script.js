$(document).ready(function() {
    $("#name").nameValidate({
        pattern: /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłóńśźż]*$/
    });
    $("#email").emailValidate();
    $("#password").passwordValidate({
      value: 11
    });
});
