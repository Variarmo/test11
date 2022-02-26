$(document).ready(function () {

    $(document).on("click", ".header-top-block__burger", function() {
        let stat = $(this).attr('data-status')
        let menu = $('.header__main-menu')

        switch (stat) {
            case 'close':
                $(this).attr('data-status', 'open')
                menu.slideDown()
                break;
            case 'open':
                $(this).attr('data-status', 'close')
                menu.slideUp()
                break;
            default:
                $(this).attr('data-status', 'open')
                menu.slideDown()
        }
    });

    $(document).on("click", ".header-top-block__help", function() {
        let stat = $(this).attr('data-status')
        let helper = $('.header__help-popup')

        switch (stat) {
            case 'close':
                $(this).attr('data-status', 'open')
                helper.slideDown()
                break;
            case 'open':
                $(this).attr('data-status', 'close')
                helper.slideUp()
                break;
            default:
                $(this).attr('data-status', 'open')
                helper.slideDown()
        }
    });

    $(document).on("click", ".open-popup", function() {
        $('.modal-wrap').show()
        let popup = $(this).children('a').attr('href')
        $(popup).show()
    });

    $(document).on("click", ".form-closer", function() {
        $('.modal-wrap').hide()
    })

    if ($(window).width() < 800) {
        $(".content-block__text-wrap>:not(.content-block__main-title, .mobile-serv-img)").hide()

        $(document).on("click", ".content-block__main-title", function() {
            let stat = $(this).attr('data-status')
            let serv = $(this).nextAll()

            switch (stat) {
                case 'close':
                    $(this).attr('data-status', 'open')
                    serv.slideDown()
                    break;
                case 'open':
                    $(this).attr('data-status', 'close')
                    serv.slideUp()
                    break;
                default:
                    $(this).attr('data-status', 'open')
                    serv.slideDown()
            }
        });

    }


})