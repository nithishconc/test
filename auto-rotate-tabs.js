// var Webflow = Webflow || [];
// Webflow.push(function () {
// var tabTimeout;
// clearTimeout(tabTimeout);
// tabLoop();

// function tabLoop() {
// tabTimeout = setTimeout(function() {
// var $next = $('.tab-menu').children('.w--current:first').next();
// if($next.length) {
// if ($(".menu-button").hasClass("w--open")) {
// tabLoop();
// }else{
// $next.removeAttr("href").click();
// }
// } else {
// if ($(".menu-button").hasClass("w--open")){
// tabLoop();
// }else{
// $('.auto-tab-link:first').removeAttr("href").click();
// }
// }
// }, 10000); // 6 seconds
// }

// $('.auto-tab-link').click(function() {
// clearTimeout(tabTimeout);
// tabLoop();
// });
// });


<script>
var Webflow = Webflow || [];
Webflow.push(function () {
    var tabTimeout;
    clearTimeout(tabTimeout);

    // Function to check if the device is mobile
    function isMobile() {
        return $(window).width() <= 768; // Adjust this threshold according to your design
    }

    function tabLoop() {
        tabTimeout = setTimeout(function() {
            var $next = $('.tab-menu').children('.w--current:first').next();
            if ($next.length) {
                if ($(".menu-button").hasClass("w--open") || isMobile()) {
                    tabLoop();
                } else {
                    $next.removeAttr("href").click();
                }
            } else {
                if ($(".menu-button").hasClass("w--open") || isMobile()) {
                    tabLoop();
                } else {
                    $('.auto-tab-link:first').removeAttr("href").click();
                }
            }
        }, 10000); // 10 seconds
    }

    $('.auto-tab-link').click(function() {
        clearTimeout(tabTimeout);
        tabLoop();
    });

    // Call tabLoop initially if it's not on a mobile screen
    if (!isMobile()) {
        tabLoop();
    }
});

</script>