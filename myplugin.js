(function($) {

    $.fn.errorBlur = function() {

        return this.each(function() {
            $(this).blur(function() {
                if ($(this).val() == "") {
                    $(this).addClass("error");
                }

            });
        });
    };

})(jQuery);
