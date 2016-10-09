jQuery(document).ready(function() {
    jQuery('#someDiv input, #someDiv select').attr("id", function(arr) {
        return jQuery(this).get(0).id;
    }).on({
        input: function() {
            var a = this.value;
            jQuery('#otherDiv #' + this.id).each(function() {
                jQuery(this).val(a);
            });
        },
        blur: function() {
            var a = this.value;
            jQuery('#otherDiv #' + this.id).each(function() {
                jQuery(this).val(a);
            });
        }
    });
});
