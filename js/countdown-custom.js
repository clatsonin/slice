jQuery(document).ready(function() {
    $(function() {
        $('#defaultCountdown').countdown({
            until: new Date(2023, 9, 16, 10)
        }); // year, month, date, hour
    });
});