(function($) {
    var validate = [true, true, true];
    $.fn.nameValidate = function(options) {
        return this.each(function() {
            $(this).blur(function() {
                var regex = new RegExp(options.pattern);
                if (regex.test($(this).val())) {
                    validate[0] = true;
                    $(".errorName").css("display", "none");
                    $(this).removeClass("error");
                    if (wholeFormValidates()) {
                        $("#submit").prop("disabled", false);
                    }
                } else {
                    validate[0] = false;
                    $(this).addClass("error");
                    $(".errorName").css("display", "block");
                    validate[0] = false;
                    if (!wholeFormValidates()) {
                        $("#submit").prop("disabled", true);
                    }
                }
            });
        });
    };

    $.fn.emailValidate = function() {
        return this.each(function() {
            $(this).blur(function() {
                var regex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
                if (regex.test($(this).val())) {
                    validate[1] = true;
                    $(".errorEmail").css("display", "none");
                    $("#submit").prop("disabled", false);
                    $(this).removeClass("error");
                    if (wholeFormValidates()) {
                        $("#submit").prop("disabled", false);
                    }
                } else {
                    validate[1] = false;
                    $(this).addClass("error");
                    $(".errorEmail").css("display", "block");
                    $("#submit").prop("disabled", true);
                    if (!wholeFormValidates()) {
                        $("#submit").prop("disabled", true);
                    }

                }
            });
        });
    };

    $.fn.passwordValidate = function(options) {
        return this.each(function() {
            $(this).blur(function() {
                var passwordArray = $(this).val().split("");
                // http://stackoverflow.com/questions/11246758/how-to-get-unique-values-in-an-array/23282057#23282057
                var unique = passwordArray.filter(function(item, i, ar) {
                    return ar.indexOf(item) === i;
                });
                var sum = 0.0;
                for (var i = 0; i < unique.length; i++) {
                    var regex = new RegExp("[a-z]");
                    if (regex.test(unique[i])) {
                        sum += 1;
                        continue;
                    }
                    regex = new RegExp("[A-Z]");
                    if (regex.test(unique[i])) {
                        sum += 1.3;
                        continue;
                    }
                    regex = new RegExp("[0-9]");
                    if (regex.test(unique[i])) {
                        sum += 1.5;
                        continue;
                    }

                    regex = new RegExp("[^a-zA-Z0-9]");
                    if (regex.test(unique[i])) {
                        sum += 2;
                        continue;
                    }

                }
                sum += (passwordArray.length - unique.length) * 0.2;
                console.log(sum);
                if (sum >= options.value) {
                    validate[2] = true;
                    $(".errorPassword").css("display", "none");
                    $(this).removeClass("error");
                    if (wholeFormValidates()) {
                        $("#submit").prop("disabled", false);
                    }
                } else {
                    $(this).addClass("error");
                    $(".errorPassword").css("display", "block");
                    validate[2] = false;
                    if (!wholeFormValidates()) {
                        $("#submit").prop("disabled", true);
                    }
                }
            });
        });
    };

    function wholeFormValidates() {
        var result = true;
        for (var i = 0; i < validate.length; i++) {
            result = result && validate[i];
        }
        return result;
    }
})(jQuery);
