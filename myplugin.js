(function($) {
    var validate = true;
    $.fn.errorBlur = function() {
        return this.each(function() {
            $(this).blur(function() {
                if ($(this).val() == "") {
                    $(this).addClass("error");
                    $("#submit").prop("disabled", true);
                    validate = false;
                } else {
                    $("#submit").prop("disabled", false);
                    $(this).removeClass("error");
                }

            });
        });
    };

    $.fn.emailValidate = function() {
        $(this).blur(function() {
            var regex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
            if (regex.test($(this).val())) {
                $("#submit").prop("disabled", false);
                $(this).removeClass("error");
            } else {
                $(this).addClass("error");
                $("#submit").prop("disabled", true);
                validete = false;
            }
        });
    };
})(jQuery);
