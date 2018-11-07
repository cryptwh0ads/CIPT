(function ($) {
    
    // Inicia
    wow = new WOW( {
        animateClass: 'animated',
        offset:       100
    });
    wow.init();
    
    // Contador
    if ($('#countdown').length) { 
        $('#countdown').countdown({
            render: function(data) {
                if (data.years >= 1) {
                    var $days = (data.years*365)+data.days;
                } else {
                    var $days = data.days;
                }
                $(this.el).html(
                    '<div class="day">' + this.leadingZeros($days) + ' <span>Dias</span></div>'+
                    '<div class="hour">' + this.leadingZeros(data.hours, 2) + ' <span>Horas</span></div>'+
                    '<div class="min">' + this.leadingZeros(data.min, 2) + ' <span>Minutos</span></div>'+
                    '<div class="sec">' + this.leadingZeros(data.sec, 2) + ' <span>Segundos</span></div>'
                );
            }
        });
    }
    
})(jQuery);