jQuery(document).ready(function() {
    $(function() {
        $('#defaultCountdown').countdown({
            until: new Date(2023, 8, 16, 10)
        }); // year, month, date, hour
    });
});