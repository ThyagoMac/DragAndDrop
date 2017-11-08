$(function () {
    $('.objeto').bind('mousedown', function () {
        $('.objeto').bind('mousemove', function (e) {
            var largura = ($(this).width() / 2);
            var altura = ($(this).height() / 2);

            var eixoX = (e.originalEvent.pageX - largura);
            var eixoY = (e.originalEvent.pageY - altura);

            $(this).css('left', (eixoX) + 'px');
            $(this).css('top', (eixoY) + 'px');

            if ((eixoX > 200 && eixoX < 300) && (eixoY > 300 && eixoY < 400)) {
                $(this).removeClass().addClass('verde');
            }else {
                $(this).removeClass().addClass('objeto');
            };
        });
    });
    $('.objeto').bind('mouseup', function () {
        $('.objeto').unbind('mousemove');
    });
});