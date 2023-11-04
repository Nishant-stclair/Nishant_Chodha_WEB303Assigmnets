$(document).ready(function() {
    // Accordion
    $('.accordion-header').click(function() {
        $(this).parent().siblings().find('.accordion-content').slideUp();
        $(this).next('.accordion-content').slideToggle();
    });

    // Tabbed Sections
    $('.tab-control').click(function() {
        $('.tab-control').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();
        $($(this).attr('href')).show();
        return false;
    });
});
