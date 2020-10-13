$(document).ready(function () {


    var rev = $('.index-video-slider');
    rev.on('init', function(event, slick, currentSlide) {
        var
            cur = $(slick.$slides[slick.currentSlide]),
            next = cur.next(),
            prev = cur.prev();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        cur.removeClass('slick-snext').removeClass('slick-sprev');
        slick.$prev = prev;
        slick.$next = next;
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        // console.log('beforeChange');
        var
            cur = $(slick.$slides[nextSlide]);
        // console.log(slick.$prev, slick.$next);
        slick.$prev.removeClass('slick-sprev');
        slick.$next.removeClass('slick-snext');
        next = cur.next(),
            prev = cur.prev();
        prev.prev();
        prev.next();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        slick.$prev = prev;
        slick.$next = next;
        cur.removeClass('slick-next').removeClass('slick-sprev');
    });

    rev.slick({
        speed: 1000,
        arrows: true,
        prevArrow: '.index-video-slider--prev',
        nextArrow: '.index-video-slider--next',
        //dots: true,
        //appendDots: '.index-video-slider-dots--wrap',
        focusOnSelect: true,
        infinite: true,
        // centerMode: true,
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0',
        swipe: true,
        variableWidth: true,
        rows: 0,
        useTransform: true,
        customPaging: function (slider, i) {
            return '<a class="index-video-slider__dots"></a>';
        },
        responsive: [
            {
                breakpoint: 576,
                settings: "unslick",
            },

        ]
        /*infinite: false,*/
    });


    $('.index-video-slider-mobile').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.mobile-video-slider--prev',
        nextArrow: '.mobile-video-slider--next',
        //dots: true,
        //appendDots: '.mobile-video-dots--wrap',
        //variableWidth: true,
        rows: 0,
        // variableWidth: true,
        // centerMode: true,
        customPaging: function () {
            return '<a class="js-index-slider__dots"></a>';
        },
        responsive: [
            {
                breakpoint: 576,
                settings: {

                }
            },

        ]

    });

    $('.js-main-page-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: '.js-slider-dots--wrap',
        rows: 0,
        //variableWidth: true,
        //centerMode: true,
        customPaging: function () {
            return '<a class="js-slider__dots"></a>';
        },
        // responsive: [
        //     {
        //         breakpoint: 576,
        //         settings: {
        //             slidesToScroll: 1,
        //             slidesToShow: 1,
        //             dots: false,
        //             centerMode: true
        //         }
        //     },
        //
        // ]
    });
    $("#thumb-slider").on("init", function(event, slick){
        var currentSlide = slick.currentSlide + 1;
        var slideCount = slick.slideCount;
        $(this).find('.slider-wave--count').html('0'+currentSlide +'<span>/</span><span>0'+ slideCount +'</span>');

    });

    $("#thumb-slider").on("afterChange", function(event, slick, currentSlide){
        var currentSlide = slick.currentSlide + 1;
        var slideCount = slick.slideCount;
        $(this).find('.slider-wave--count').html('0'+currentSlide +'<span>/</span><span>0'+ slideCount +'</span>');

    });
    $('#slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.wave-slider--prev',
        nextArrow: '.wave-slider--next',
        dots: false,
        rows: 0,
        infinite: false,
        asNavFor: '#thumb-slider'
    });

    $('#thumb-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: false,
        asNavFor: '#slider'
    });

    $("#thumb-slider2").on("init", function(event, slick){
        var currentSlide = slick.currentSlide + 1;
        var slideCount = slick.slideCount;
        $(this).find('.slider-wave--count').html('0'+currentSlide +'<span>/</span><span>0'+ slideCount +'</span>');

    });

    $("#thumb-slider2").on("afterChange", function(event, slick, currentSlide){
        var currentSlide = slick.currentSlide + 1;
        var slideCount = slick.slideCount;
        $(this).find('.slider-wave--count').html('0'+currentSlide +'<span>/</span><span>0'+ slideCount +'</span>');

    });
    $('#slider2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.wave-slider--prev2',
        nextArrow: '.wave-slider--next2',
        dots: false,
        rows: 0,
        infinite: false,
        asNavFor: '#thumb-slider2'
    });

    $('#thumb-slider2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: false,
        asNavFor: '#slider2'
    });

    $('.datepicker-pick-1').each(function(){
        $(this).datepicker({
            //autoShow: true,
            //autoPick: true,
            language: 'ru-RU',
            autoHide: true,
            //trigger: '.data-exam-popup',
            //inline: true,
            // container: '.ur-show-calendar',
            pickedClass: 'picked-day-ur',
            highlightedClass: 'today-day-ur',
            zIndex: 1050,
            startDate: function(date){
                date.valueOf() < now ? true : false;
            },
            // template: '<div class="datepicker-container" id="datepicker-id-trip">' + '<div class="datepicker-panel" data-view="years picker">' + '<ul class="gogocar-ul-navbar">' + '<li data-view="years prev">&lsaquo;</li>' + '<li data-view="years current"></li>' + '<li data-view="years next">&rsaquo;</li>' + '</ul>' + '<ul data-view="years"></ul>' + '</div>' + '<div class="datepicker-panel" data-view="months picker">' + '<ul>' + '<li data-view="year prev">&lsaquo;</li>' + '<li data-view="year current"></li>' + '<li data-view="year next">&rsaquo;</li>' + '</ul>' + '<ul data-view="months"></ul>' + '</div>' + '<div class="datepicker-panel" data-view="days picker">' + '<ul class="gogocar-ul-navbar">' + '<li data-view="month prev" class="gogocar-calendar-prev"><svg xmlns="http://www.w3.org/2000/svg" class="icon" id="Слой_1" data-name="Слой 1" viewBox="0 0 10 18">\n' +
            //     '  <path d="M9,17,1,9,9,1" style="fill: none;stroke: #BEBEBE;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>\n' +
            //     '</svg></li>' + '<li data-view="month current" class="gogocar-calendar-current"></li>' + '<li data-view="month next" class="gogocar-calendar-next"><svg xmlns="http://www.w3.org/2000/svg" class="icon" id="Слой_1" data-name="Слой 1" viewBox="0 0 10 18">\n' +
            //     '  <path d="M1,1,9,9,1,17" style="fill: none;stroke: #BEBEBE;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>\n' +
            //     '</svg></li>' + '</ul>' + '<ul data-view="week"></ul>' + '<ul data-view="days"></ul>' + '</div>' + '</div>',
        });

    });

    $('.datepicker-pick-2').each(function(){
        $(this).datepicker({
            //autoShow: true,
            //autoPick: true,
            language: 'ru-RU',
            autoHide: true,
            //trigger: '.data-exam-popup',
            //inline: true,
            //container: '.ur-show-calendar',
            pickedClass: 'picked-day-ur',
            highlightedClass: 'today-day-ur',
            zIndex: 1050,
            startDate: function(date){
                date.valueOf() < now ? true : false;
            },
            // template: '<div class="datepicker-container" id="datepicker-id-trip">' + '<div class="datepicker-panel" data-view="years picker">' + '<ul class="gogocar-ul-navbar">' + '<li data-view="years prev">&lsaquo;</li>' + '<li data-view="years current"></li>' + '<li data-view="years next">&rsaquo;</li>' + '</ul>' + '<ul data-view="years"></ul>' + '</div>' + '<div class="datepicker-panel" data-view="months picker">' + '<ul>' + '<li data-view="year prev">&lsaquo;</li>' + '<li data-view="year current"></li>' + '<li data-view="year next">&rsaquo;</li>' + '</ul>' + '<ul data-view="months"></ul>' + '</div>' + '<div class="datepicker-panel" data-view="days picker">' + '<ul class="gogocar-ul-navbar">' + '<li data-view="month prev" class="gogocar-calendar-prev"><svg xmlns="http://www.w3.org/2000/svg" class="icon" id="Слой_1" data-name="Слой 1" viewBox="0 0 10 18">\n' +
            //     '  <path d="M9,17,1,9,9,1" style="fill: none;stroke: #BEBEBE;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>\n' +
            //     '</svg></li>' + '<li data-view="month current" class="gogocar-calendar-current"></li>' + '<li data-view="month next" class="gogocar-calendar-next"><svg xmlns="http://www.w3.org/2000/svg" class="icon" id="Слой_1" data-name="Слой 1" viewBox="0 0 10 18">\n' +
            //     '  <path d="M1,1,9,9,1,17" style="fill: none;stroke: #BEBEBE;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>\n' +
            //     '</svg></li>' + '</ul>' + '<ul data-view="week"></ul>' + '<ul data-view="days"></ul>' + '</div>' + '</div>',
        });

    });
    var array_files2 = [];


    $(function () {

        var itemG;
        $('.migdex-add-file input').on('change', function (e) {
            e.preventDefault;
            //$('.chat-container--edit--message--file--add').addClass('active');

            // пушим файлы в массив
            for (var i = 0; i < e.target.files.length; i++) {
                array_files2.push(e.target.files[i]);
                itemG = i;
            }

            var data = new FormData(); var count = 0;
            $.each(array_files2, function(i, file,ndx){
                data.append(count, file);
                count++;

            });

            // удаляем все старые иконки файлов на JS
            var x = document.getElementsByClassName("popup-load--file--wrap");
            for (var i = 0; i < x.length; i++) {

                // удаляем с конца!!!
                for (var y = x[i].childNodes.length - 1; y >= 0; y--) {
                    if (x[i].childNodes[y].className == "popup-load-loaded--file")
                        x[i].removeChild(x[i].childNodes[y]);



                }


            }


            // здесь ты получал расширение только певого файла
            // поэтому иконки для всех файлов были одинаковые


            Array.from(array_files2).forEach(file => {



                var file_name = file.name;
                var substr = file_name.split('.').shift().substring(0,15);

                // теперь расширение файла получается здесь
                // поэтому иконки файлов правильные
                var ext = file_name.split('.').pop();
                var file_format = ext;
                
                $('.popup-load-loaded--file').each(function(ndx){
                    $(this).attr('id',ndx);

                })
                if(file_format == 'pdf'){
                    $('.popup-load--file--wrap').append('<div class="popup-load-loaded--file"><div class="popup-load-icon-loaded--appeal__wrap"><div class="popup-load-icon-loaded--appeal"><svg class="icon icon-pdf"><use xlink:href="./static/img/svg/symbol/sprite.svg#pdf"></use></svg></div><span class="popup-load-loaded--file__name">' + substr + '</span></div><div class="popup-delete-this--file"><svg class="icon icon-close"><use xlink:href="./static/img/svg/symbol/sprite.svg#close"></use></svg></div></div>')
                } else if(file_format == 'png'){
                    $('.popup-load--file--wrap').append('<div class="popup-load-loaded--file"><div class="popup-load-icon-loaded--appeal__wrap"><div class="popup-load-icon-loaded--appeal"><svg class="icon icon-png"><use xlink:href="./static/img/svg/symbol/sprite.svg#png"></use></svg></div><span class="popup-load-loaded--file__name">' + substr + '</span></div><div class="popup-delete-this--file"><svg class="icon icon-close"><use xlink:href="./static/img/svg/symbol/sprite.svg#close"></use></svg></div></div>')
                } else if(file_format == 'jpg'){
                    $('.popup-load--file--wrap').append('<div class="popup-load-loaded--file"><div class="popup-load-icon-loaded--appeal__wrap"><div class="popup-load-icon-loaded--appeal"><svg class="icon icon-jpg"><use xlink:href="./static/img/svg/symbol/sprite.svg#jpg"></use></svg></div><span class="popup-load-loaded--file__name">' + substr + '</span></div><div class="popup-delete-this--file"><svg class="icon icon-close"><use xlink:href="./static/img/svg/symbol/sprite.svg#close"></use></svg></div></div>')
                } else if(file_format == 'docx'){
                    $('.popup-load--file--wrap').append('<div class="popup-load-loaded--file"><div class="popup-load-icon-loaded--appeal__wrap"><div class="popup-load-icon-loaded--appeal"><svg class="icon icon-doc"><use xlink:href="./static/img/svg/symbol/sprite.svg#doc"></use></svg></div><span class="popup-load-loaded--file__name">' + substr + '</span></div><div class="popup-delete-this--file"><svg class="icon icon-close"><use xlink:href="./static/img/svg/symbol/sprite.svg#close"></use></svg></div></div>')
                } else if(file_format == 'zip'){
                    $('.popup-load--file--wrap').append('<div class="popup-load-loaded--file"><div class="popup-load-icon-loaded--appeal__wrap"><div class="popup-load-icon-loaded--appeal"><svg class="icon icon-zip"><use xlink:href="./static/img/svg/symbol/sprite.svg#zip"></use></svg></div><span class="popup-load-loaded--file__name">' + substr + '</span></div><div class="popup-delete-this--file"><svg class="icon icon-close"><use xlink:href="./static/img/svg/symbol/sprite.svg#close"></use></svg></div></div>')
                } else if(file_format == 'rar'){
                    $('.popup-load--file--wrap').append('<div class="popup-load-loaded--file"><div class="popup-load-icon-loaded--appeal__wrap"><div class="popup-load-icon-loaded--appeal"><svg class="icon icon-zip"><use xlink:href="./static/img/svg/symbol/sprite.svg#zip"></use></svg></div><span class="popup-load-loaded--file__name">' + substr + '</span></div><div class="popup-delete-this--file"><svg class="icon icon-close"><use xlink:href="./static/img/svg/symbol/sprite.svg#close"></use></svg></div></div>')
                } else if(file_format == 'txt'){
                    $('.popup-load--file--wrap').append('<div class="popup-load-loaded--file"><div class="popup-load-icon-loaded--appeal__wrap"><div class="popup-load-icon-loaded--appeal"><svg class="icon icon-txt"><use xlink:href="./static/img/svg/symbol/sprite.svg#txt"></use></svg></div><span class="popup-load-loaded--file__name">' + substr + '</span></div><div class="popup-delete-this--file"><svg class="icon icon-close"><use xlink:href="./static/img/svg/symbol/sprite.svg#close"></use></svg></div></div>')
                } else if(file_format == 'svg'){
                    $('.popup-load--file--wrap').append('<div class="popup-load-loaded--file"><div class="popup-load-icon-loaded--appeal__wrap"><div class="popup-load-icon-loaded--appeal"><svg class="icon icon-svg"><use xlink:href="./static/img/svg/symbol/sprite.svg#svg"></use></svg></div><span class="popup-load-loaded--file__name">' + substr + '</span></div><div class="popup-delete-this--file"><svg class="icon icon-close"><use xlink:href="./static/img/svg/symbol/sprite.svg#close"></use></svg></div></div>')
                }


            });

        });

        $('.popup-load--file--wrap').on('click','.popup-load-loaded--file',function() {
            var this_id = $(this).attr('id');
            array_files2[this_id] = [];
            $(this).remove();
        });

    });
    $('.section-migdex-tab').click(function () {
        var get_tab = $(this).attr('data-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('.section-migdex-tabs-content .' + get_tab).addClass('active').siblings().removeClass('active');
    });

    $('.migdex-people-count span').click(function () {
       $(this).addClass('active').siblings().removeClass('active')
    });

    $(function () {
        $('.sidebar-services--list__depth2').attr('style', 'display:none;');

        $('.sidebar-services--item').on('click',function () {
            $(this).children().next().slideToggle(200);

        });

        $('.sidebar-services--item').click('next', function () {
            $(this).prevAll().children().next().slideUp(200);

        });

        $('.sidebar-services--item').click('prev', function () {
            $(this).nextAll().children().next().slideUp(200);
        });

    });


    // ================= Checked Inputs ====================//
    $('.migdex-checkbox').click(function () {
        $(this).toggleClass('checked');
        var $checked = $(this);
        if ($checked.next('.migdex-checkbox--input').attr('checked')) {
            $checked.next('.migdex-checkbox--input').removeAttr('checked', false);
        } else {
            $checked.next('.migdex-checkbox--input').attr('checked', true);
        }
    });

    $('.migdex-nds-check').click(function () {
        $(this).addClass('checked').siblings().removeClass('checked');
    });

    $('.basket-content-top-dot__item').on('click',function () {
        $(this).toggleClass('checked');
        var $checked = $(this);
        if ($checked.children('.basket-input-item').attr('checked')) {
            $checked.children('.basket-input-item').removeAttr('checked', false);
        } else {
            $checked.children('.basket-input-item').attr('checked', true);
        }

    });
    $('.basket-content-top-dot').on('click',function () {
        $(this).toggleClass('checked');


    });

    $(function () {
        function checkAll1() {

            var inputs = document.querySelectorAll('.basket-input-item');
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].checked = true;
            }
            $('.basket-content-top-dot__item').addClass('checked');

            this.onclick = uncheckAll1;
        }

        function uncheckAll1() {
            var inputs = document.querySelectorAll('.basket-input-item');
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].checked = false;
            }
            $('.basket-content-top-dot__item').removeClass('checked');
            this.onclick = checkAll1;
        }

        var el1 = document.getElementById("check-all");
        el1.onclick = checkAll1;
    });






    $('.basket-content-item--count__plus').click(function () {
        if ($(this).prev().val()) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.basket-content-item--count__minus').click(function () {
        if ($(this).next().val() > 0) {
            if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
        }
    });

    $("#change-lk").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.migdex-lk-content--profile__img').attr('style', 'background-image:url("'+ e.target.result +'");');

            };
            reader.readAsDataURL(this.files[0]);
        }

    });

    $('.migdex-lk-content--box__top--arrow').click(function () {
       $(this).toggleClass('active');
       $(this).parent().next('.migdex-lk-content--box__bottom').slideToggle(200);
    });

    $('.migdex-popup-input--flex').click(function () {
        $(this).children().next().next().slideToggle(200);
        $(this).toggleClass('active');
    });
    $('.migdex-input-item--input').click(function () {
        var get_item = $(this).text();
        $(this).parents('.migdex-popup-input--flex').children().children('.migdex-input--div__span').text(get_item);
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".migdex-popup-input--flex,.migdex-input-list--wrap").length) {
            $('.migdex-input-list--wrap').slideUp(200);
            $('.migdex-popup-input--flex').removeClass('active');
        }
        e.stopPropagation();
    });



    var datePickerContainer = $('.date-start');
    var datePickerContainer1 = $('.date-end');


    $(datePickerContainer1).each(function(){

        $(this).datepicker({
            autoShow: false,
            autoPick: true,
            language: 'ru-RU',
            autoHide: true,
            //trigger: '.data-exam-popup',
            container: '.popup-calendar',
            pickedClass: 'picked-day-gogocar',
            highlightedClass: 'today-day-gogocar',
            zIndex: 1050,
            startView: 0,
            // startDate: function (date) {
            //     //date.valueOf(getDate() - 1);
            //     date.valueOf() < now - 1 ? true : false;
            // }
        });
    });



    $(datePickerContainer).each(function(){
        $(this).datepicker({
            //autoShow: true,
            autoPick: true,
            language: 'ru-RU',
            autoHide: true,
            //trigger: '.data-exam-popup',
            inline: true,
            //container: '.trip-show-calendar',
            pickedClass: 'picked-day-gogocar',
            highlightedClass: 'today-day-gogocar',
            zIndex: 1050,
            startView: 0,
            // startDate: function(date){
            //     date.valueOf() < now ? true : false;
            // },
            // template: '<div class="datepicker-container" id="datepicker-id-trip">' + '<div class="datepicker-panel" data-view="years picker">' + '<ul class="gogocar-ul-navbar">' + '<li data-view="years prev"><svg xmlns="http://www.w3.org/2000/svg" class="icon" id="Слой_1" data-name="Слой 1" viewBox="0 0 10 18">\n' +
            //     '  <path d="M9,17,1,9,9,1" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>\n' +
            //     '</svg></li>' + '<li data-view="years current"></li>' + '<li data-view="years next"><svg xmlns="http://www.w3.org/2000/svg" class="icon" id="Слой_1" data-name="Слой 1" viewBox="0 0 10 18">\n' +
            //     '  <path d="M1,1,9,9,1,17" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>\n' +
            //     '</svg></li>' + '</ul>' + '<ul data-view="years"></ul>' + '</div>' + '<div class="datepicker-panel" data-view="months picker">' + '<ul class="gogocar-ul-navbar">' + '<li data-view="year prev"><svg xmlns="http://www.w3.org/2000/svg" class="icon" id="Слой_1" data-name="Слой 1" viewBox="0 0 10 18">\n' +
            //     '  <path d="M9,17,1,9,9,1" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>\n' +
            //     '</svg></li>' + '<li data-view="year current"></li>' + '<li data-view="year next"><svg xmlns="http://www.w3.org/2000/svg" class="icon" id="Слой_1" data-name="Слой 1" viewBox="0 0 10 18">\n' +
            //     '  <path d="M1,1,9,9,1,17" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>\n' +
            //     '</svg></li>' + '</ul>' + '<ul data-view="months"></ul>' + '</div>' + '<div class="datepicker-panel" data-view="days picker">' + '<ul class="gogocar-ul-navbar">' + '<li data-view="month prev" class="gogocar-calendar-prev"><svg xmlns="http://www.w3.org/2000/svg" class="icon" id="Слой_1" data-name="Слой 1" viewBox="0 0 10 18">\n' +
            //     '  <path d="M9,17,1,9,9,1" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>\n' +
            //     '</svg></li>' + '<li data-view="month current" class="gogocar-calendar-current"></li>' + '<li data-view="month next" class="gogocar-calendar-next"><svg xmlns="http://www.w3.org/2000/svg" class="icon" id="Слой_1" data-name="Слой 1" viewBox="0 0 10 18">\n' +
            //     '  <path d="M1,1,9,9,1,17" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>\n' +
            //     '</svg></li>' + '</ul>' + '<ul data-view="week"></ul>' + '<ul data-view="days"></ul>' + '</div>' + '</div>',
        });

    });


    function setCalendaryDates(id) {
        if (id > -1) {
            var dateStart = new Date();
            var dateEnd = new Date();
            var dateType = id;
            switch(dateType) {
                case 0:
                    dateStart.setDate(dateStart.getDate() - 1);
                    break;
                case 1:
                    dateStart.setMonth(dateStart.getMonth() - 1);
                    break;
                case 2:
                    dateStart.setFullYear(dateStart.getFullYear() - 1);
                    break;
            }
            $(datePickerContainer).datepicker("setDate", dateStart);
            $(datePickerContainer1).datepicker("setDate", dateEnd);
        }
    }

    var x = document.querySelectorAll(".calendar-destroy");
    if (x) for (let item of x) item.addEventListener("click", function() {
        let flag = 0;
        let interval = this.parentNode.parentNode.parentNode;
        if (interval.querySelector("label").textContent == "Интервал:") {
            var range = this.innerHTML;
            switch(range) {
                case "День": flag = 0; break;
                case "Месяц": flag = 1; break;
                case "Год": flag = 2; break;
            }
        }
        setCalendaryDates(flag);
    });
    $('.migdex-lk-content--top--tab').click(function () {
       var get_tab = $(this).attr('data-tab');
       $(this).toggleClass('active').siblings().removeClass('active');
       $('.migdex-lk-content--box__bottom2 .' + get_tab).addClass('active').siblings().removeClass('active');
    });

    $('.migdex-lk-settings-dot--item2').on('click',function () {
        $(this).addClass('checked').siblings().removeClass('checked');
        var $checked = $(this);
        if ($checked.hasClass('checked')) {
            $checked.children().children().prop('checked', true);
        } else {
            $checked.children().children().prop('checked', false);
        }
    });



    // ========================== Chat ======================================//

    var x = document.getElementsByClassName("chat-container-message--name--button")
    if (x.length > 0)
        for (let item of x)
            item.addEventListener("click", showChangeMsg);
    function showChangeMsg(){ // Изменить или удалить сообщение
        $('.chat-container-option--message').fadeOut(200);
        $('.chat-container-message--name--button').removeClass('active');
        $(this).toggleClass('active');
        $(this).next().fadeToggle(200).toggleClass('active');
        // if($(this).hasClass('active') && $(window).width() < 576){
        //     $('body').css('overflow','hidden');
        // } else {
        //     $('body').css('overflow-y','scroll');
        // }
        if($(this).hasClass('active')){
            $('.header-panel--fixed').addClass('anim-bottom');
        }
    }
    $(document).click(function (e) {
        if (!$(e.target).closest(".chat-container-option--message,.chat-container-message--name--button").length) {
            $('.chat-container-option--message').fadeOut(200);
            $('.chat-container-message--name--button').removeClass('active');
            //$('body').css('overflow-y','scroll');
        }
        e.stopPropagation();
    });
    $('.chat-container-option--message--item--cancel,.chat-change-message,.chat-answer-message').click(function () {
        $('.chat-container-option--message,.chat-delete-out-msg').fadeOut(200);
        $('.chat-container-message--name--button').removeClass('active');
        //$('body').css('overflow-y','scroll');
        $('.header-panel--fixed').removeClass('anim-bottom');

    });
    var x = document.getElementsByClassName("chat-change-message")
    if (x.length > 0)
        for (let item of x)
            item.addEventListener("click", changeMsg);
    function changeMsg(){ // Удаление сообщений отправителя
        $('#chat-edit-msg').fadeIn(150).css('display','flex');
        var get_text_edit = $(this).parents('.chat-container-message--date__name').next().text();
        $('#chat-edit-text').text(get_text_edit);
        $('.chat-show-message-out--mobile').fadeOut(150);
        $('.header-panel--fixed').removeClass('anim-bottom');
    }
    var x = document.getElementsByClassName("chat-delete-message")
    if (x.length > 0)
        for (let item of x)
            item.addEventListener("click", deleteMsg);
    function deleteMsg(){ // Удаление сообщений отправителя
        $(this).parents('.chat-container-message-out').remove();
        $('.header-panel--fixed').removeClass('anim-bottom');
    }
    var x = document.getElementsByClassName("chat-answer-message")
    if (x.length > 0)
        for (let item of x)
            item.addEventListener("click", shareMsg);
    function shareMsg(){ // Удаление сообщений отправителя
        $('#chat-edit-msg').fadeIn(150).css('display','flex').addClass('chat-edit-now');

        var get_text_share = $(this).parents('.chat-container-message--date__name').next().text();
        var get_name_share = $(this).parents('.chat-container-option--message').next().text();
        $('#chat-edit-text').text(get_text_share);
        $('.chat-container--edit--title').text(get_name_share);

    }
    var x = document.getElementsByClassName("cab-chat-emoji")
    if (x.length > 0)
        for (let item of x)
            item.addEventListener("click", handleClickEmoji);

    function handleClickEmoji() {

        var x = document.getElementById("chat-get-text");
        if (x) {
            var img = document.createElement("img");
            img = this.cloneNode(true);
            img.className = 'gogocar-emoji--in-input';
            x.appendChild(img);
        }

    }
    $('.chat-container-footer--input__text').click(function () {
        $('.chat-container-footer--placeholder').fadeOut(150);
    });
    if (!$('.chat-container-footer--input__text').is(':empty')){
        $('.chat-container-footer--placeholder').fadeOut(200);
    }


    $(document).click(function (e) {

        if (!$(e.target).closest(".chat-container-footer--input__text,.chat-container-footer--file__input,.chat-container-footer--smiles,.gogocar-emoji,.chat-container-footer--emoji").length) {
            $('.chat-container-footer--placeholder').fadeIn(200);
        }
        if ($('.chat-container-footer--input__text').html()) {
            $('.chat-container-footer--placeholder').hide();
        }
        e.stopPropagation();
    });
    // создём массив ВНЕ функции, чтобы он каждый раз не затирался
    var array_files = [];


    $(function () {


        $('.personal-upload-files--input,.chat-container-footer--input__file').on('change', function (e) {
            $('.chat-container--edit--message--file--add').addClass('active');

            // пушим файлы в массив
            for (var i = 0; i < e.target.files.length; i++) {
                array_files.push(e.target.files[i]);
            }

            var data = new FormData(); var count = 0;
            $.each(array_files, function(i, file){
                data.append(count, file);
                count++;
            });

            // удаляем все старые иконки файлов на JS
            var x = document.getElementsByClassName("personal-appear--file--wrap");
            for (var i = 0; i < x.length; i++) {
                // удаляем с конца!!!
                for (var y = x[i].childNodes.length - 1; y >= 0; y--) {
                    if (x[i].childNodes[y].className == "personal-loaded--file")
                        x[i].removeChild(x[i].childNodes[y]);

                }
            }

            // здесь ты получал расширение только певого файла
            // поэтому иконки для всех файлов были одинаковые


            Array.from(array_files).forEach(file => {



                var file_name = file.name;
                var substr = file_name.split('.').shift().substring(0,15);

                // теперь расширение файла получается здесь
                // поэтому иконки файлов правильные
                var ext = file_name.split('.').pop();
                var file_format = ext;


                if(file_format == 'pdf'){
                    $('.personal-appear--file--wrap').append('<div class="personal-loaded--file"><div class="gogocar-gray-icons personal-icon-loaded--appeal"><svg class="icon icon-pdf"><use xlink:href="/static/img/svg/symbol/sprite.svg#pdf"></use></svg></div><span class="personal-loaded--file__name">' + substr + '</span></div>')
                } else if(file_format == 'png'){
                    $('.personal-appear--file--wrap').append('<div class="personal-loaded--file"><div class="gogocar-gray-icons personal-icon-loaded--appeal"><svg class="icon icon-png"><use xlink:href="/static/img/svg/symbol/sprite.svg#png"></use></svg></div><span class="personal-loaded--file__name">' + substr + '</span></div>')
                } else if(file_format == 'jpg' || 'jpeg'){
                    $('.personal-appear--file--wrap').append('<div class="personal-loaded--file"><div class="gogocar-gray-icons personal-icon-loaded--appeal"><svg class="icon icon-jpg"><use xlink:href="/static/img/svg/symbol/sprite.svg#jpg"></use></svg></div><span class="personal-loaded--file__name">' + substr + '</span></div>')
                } else if(file_format == 'docx'){
                    $('.personal-appear--file--wrap').append('<div class="personal-loaded--file"><div class="gogocar-gray-icons personal-icon-loaded--appeal"><svg class="icon icon-doc"><use xlink:href="/static/img/svg/symbol/sprite.svg#doc"></use></svg></div><span class="personal-loaded--file__name">' + substr + '</span></div>')
                } else if(file_format == 'zip'){
                    $('.personal-appear--file--wrap').append('<div class="personal-loaded--file"><div class="gogocar-gray-icons personal-icon-loaded--appeal"><svg class="icon icon-zip"><use xlink:href="/static/img/svg/symbol/sprite.svg#zip"></use></svg></div><span class="personal-loaded--file__name">' + substr + '</span></div>')
                } else if(file_format == 'txt'){
                    $('.personal-appear--file--wrap').append('<div class="personal-loaded--file"><div class="gogocar-gray-icons personal-icon-loaded--appeal"><svg class="icon icon-txt"><use xlink:href="/static/img/svg/symbol/sprite.svg#txt"></use></svg></div><span class="personal-loaded--file__name">' + substr + '</span></div>')
                }
            });

        });

    });

    $('.personal-loaded--file__icon').click(function () {
        $('.personal-loaded--file').remove();
        array_files = [];
        // $(".chat-container-footer")[0].reset();
        $('.chat-container--edit--message--file--add').removeClass('active');
    });



    $('.chat-answer-message').on('click',function () {
        $('#chat-edit-msg').fadeIn(150).css('display','flex');
    });
    $('#chat-edit-close').click(function () {
        $('#chat-edit-msg').fadeOut(150).removeClass('chat-edit-now');

    });
    $('.chat-container-footer--smiles').on('click',function () {
        $('.chat-container-footer--emoji--list').fadeToggle(200).css('display','flex');
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".chat-container-footer--smiles,.chat-container-footer--emoji--list").length) {
            $('.chat-container-footer--emoji--list').fadeOut(200);
        }
        e.stopPropagation();
    });
    $(document).click(function (e) {
        if (!$(e.target).closest(".chat-container--edit--message--file--add").length) {
            $('.chat-container--edit--message--file--add').removeClass('active');
        }
        e.stopPropagation();
    });
    $(function () {


        $('.chat-answer-message').on('click',function () {
            $('#chat-edit-msg').fadeIn(150).css('display','flex');
        });
        $('#chat-edit-close').click(function () {
            $('#chat-edit-msg').fadeOut(150).removeClass('chat-edit-now');

        });



        var x = document.getElementsByClassName("chat-change-message")
        if (x.length > 0)
            for (let item of x)
                item.addEventListener("click", changeMsg);
        function changeMsg(){ // Удаление сообщений отправителя
            $('#chat-edit-msg').fadeIn(150).css('display','flex');
            var get_text_edit = $(this).parents('.chat-container-message--date__name').next().text();
            $('#chat-edit-text').text(get_text_edit);
            $('.chat-show-message-out--mobile').fadeOut(150);
            $('.header-panel--fixed').removeClass('anim-bottom');
        }

        var x = document.getElementsByClassName("chat-answer-message")
        if (x.length > 0)
            for (let item of x)
                item.addEventListener("click", shareMsg);
        function shareMsg(){ // Удаление сообщений отправителя
            $('#chat-edit-msg').fadeIn(150).css('display','flex').addClass('chat-edit-now');

            var get_text_share = $(this).parents('.chat-container-message--date__name').next().text();
            var get_name_share = $(this).parents('.chat-container-option--message').next().text();
            $('#chat-edit-text').text(get_text_share);
            $('.chat-container--edit--title').text(get_name_share);

        }



        var x = document.getElementsByClassName("chat-delete-message")
        if (x.length > 0)
            for (let item of x)
                item.addEventListener("click", deleteMsg);
        function deleteMsg(){ // Удаление сообщений отправителя
            $(this).parents('.chat-container-message-out').remove();
            $('.header-panel--fixed').removeClass('anim-bottom');
        }

        $('.chat-container-option-dot').click(function () {
            $('.chat-container-header--delete__message').fadeOut(200);
            $(this).next('.chat-container-header--delete__message').fadeIn(200).css('display','flex');
            $('.chat-container-option-dot').removeClass('chat-close-delete__window');
            $(this).toggleClass('chat-close-delete__window');
        });

        $(document).click(function (e) {
            if (!$(e.target).closest(".chat-container-option-dot,.chat-container-header--delete__message").length) {
                $('.chat-container-header--delete__message').fadeOut(200);
                $('.chat-container-option-dot').removeClass('chat-close-delete__window');

            }
            e.stopPropagation();
        });

        $('.close-delete-chat').click(cdm);
        function cdm(){
            $(this).parent().fadeOut(100);
            $('.chat-container-header--option-delete__panel').css('display','flex');
            $('.gogocar-go-back-chat--mobile').addClass('active');
            $('.chat-container-option-dot').css('display','none');
            $('.chat-container-message--wrap--delete__check--wrap').css('display','flex');
        }


        $('.chat-container-header--option-delete--back').click(cdmb);
        function cdmb(){
            $('.chat-container-header--option-delete__panel').css('display','none');
            $('.chat-container-option-dot').css('display','flex');
            $('.chat-container-message--wrap--delete__check--wrap').css('display','none');
            $('.gogocar-go-back-chat--mobile').removeClass('active');
            $('.chat-delete-out-msg').removeClass('active');
            $('.header-panel--fixed').removeClass('anim-bottom');
        }

        $('.chat-container-header--option-delete--delete').click(showDelMsg);
        function showDelMsg(){ // Изменить или удалить сообщение
            $('.chat-delete-out-msg').addClass('active');

            if($(window).width() < 576){
                $('body').css('overflow','hidden');
                $('.chat-delete-out-msg').fadeIn(200);
            }
            // else {
            //     $('body').css('overflow-y','scroll');
            // }
            if($('.chat-delete-out-msg').hasClass('active')){
                $('.header-panel--fixed').addClass('anim-bottom');
            }
        }

        var x = document.getElementsByClassName("chat-container-message--wrap--delete__check")
        if (x.length > 0)
            for (let item of x)
                item.addEventListener("click", deleteAllMsg);
        function deleteAllMsg(){ // Удаление сообщений отправителя
            $(this).toggleClass('checked');
            if($(this).hasClass('checked')){
                $(this).html('<svg class="icon icon-ok-del "><use xlink:href="static/img/svg/symbol/sprite.svg#ok-del"></use></svg>')
                $(this).parents('.chat-container-message-out').addClass('checked-delete-msg');
            } else {
                $(this).html('');
                $(this).parents('.chat-container-message-out').removeClass('checked-delete-msg');
            }

        }

        $('.delete-choise-chat-msg,.chat-choise-delet-msg').click(function () {
            $('.checked-delete-msg').remove();
        });
        $('.chat-choise-delet-msg').click(function () {
            $('.chat-delete-out-msg').fadeOut(150);
            $('.header-panel--fixed').removeClass('anim-bottom');
        });

        // Добавить сообщение
        var today = new Date();
        var getDate = today.getDate();
        var time = today.getHours() + ":" + today.getMinutes();



        $('.chat-container-footer--submit').click(printMsg);
        function printMsg() {
            var contents = $('#chat-get-text').html();

            var c_name = $('.chat-container--edit--title').text();
            var c_text = $('.chat-container--edit--text').text();
            var content_share = '<div class="chat-message--share--info"><div class="chat-message--share--info__name">'+ c_name +'</div><div class="chat-message--share--info__text">'+ c_text +'</div></div>'

            $('.chat-container-main--info').append(

                '<div class="chat-container-people-messages chat-container-message-out">\n' +
                '                        <div class="chat-container-message--wrapper">\n' +
                '                          <div class="chat-container--message--status">\n' +
                '                            <svg class="icon icon-not-looked ">\n' +
                '                              <use xlink:href="static/img/svg/symbol/sprite.svg#not-looked"></use>\n' +
                '                            </svg>\n' +
                '                          </div>\n' +
                '                          <div class="chat-container-message--wrap">\n' +
                '                            <div class="chat-container-message--info__message">\n' +
                '                              <div class="chat-container-message--date__name"><span>'+ time +'</span>\n' +
                '                                <div class="chat-container-message--name--wrap">\n' +
                '                                  <div class="chat-container-message--name--button">\n' +
                '                                    <svg class="icon icon-down-arrow ">\n' +
                '                                      <use xlink:href="static/img/svg/symbol/sprite.svg#down-arrow"></use>\n' +
                '                                    </svg>\n' +
                '                                  </div>\n' +
                '                                  <div class="chat-container-option--message chat-show-message-out chat-show-message-out--mobile">\n' +
                '                                    <div class="chat-container-option--message--wrap">\n' +
                '                                      <div class="chat-container-option--message--wrap--buttons">\n' +
                '                                        <div class="chat-container-option--message--item chat-change-message">\n' +
                '                                          <svg class="icon icon-pen ">\n' +
                '                                            <use xlink:href="static/img/svg/symbol/sprite.svg#pen"></use>\n' +
                '                                          </svg><span>Изменить</span>\n' +
                '                                        </div>\n' +
                '                                        <div class="chat-container-option--message--item chat-delete-message">\n' +
                '                                          <svg class="icon icon-delete-red ">\n' +
                '                                            <use xlink:href="static/img/svg/symbol/sprite.svg#delete-red"></use>\n' +
                '                                          </svg><span>Удалить</span>\n' +
                '                                        </div>\n' +
                '                                      </div>\n' +
                '                                      <div class="chat-container-option--message--item--cancel">Отмена</div>\n' +
                '                                    </div>\n' +
                '                                  </div>\n' +
                '                                  <div class="chat-container-message--name">Татьяна Гусева</div>\n' +
                '                                </div>\n' +
                '                              </div>\n' +
                '                              <p class="chat-container--message">'+ contents  +'</p>\n' +
                '                            </div>\n' +
                `                          <div class='chat-container-message--img' style='background-image:url("/static/img/content/slider/img1.png");'></div>\n` +
                '                          </div>\n' +
                '                          <div class="chat-container-message--wrap--delete__check--wrap">\n' +
                '                            <div class="chat-container-message--wrap--delete__check"></div>\n' +
                '                          </div>\n' +
                '                        </div>\n' +
                '                      </div>'
            )
            var x = document.getElementsByClassName("chat-container-message--name--button")
            if (x.length > 0)
                for (let item of x)
                    item.addEventListener("click", showChangeMsg);
            var x = document.getElementsByClassName("chat-delete-message")
            if (x.length > 0)
                for (let item of x)
                    item.addEventListener("click", deleteMsg);
            var x = document.getElementsByClassName("chat-container-message--wrap--delete__check")
            if (x.length > 0)
                for (let item of x)
                    item.addEventListener("click", deleteAllMsg);
            var x = document.getElementsByClassName("chat-change-message")
            if (x.length > 0)
                for (let item of x)
                    item.addEventListener("click", changeMsg);
            // var x = document.getElementsByClassName("chat-container-option--message--item--cancel")
            // if (x.length > 0)
            //     for (let item of x)
            //         item.addEventListener("click", closeActionChat);



        }

    });
    var chat_go2 = function() {
        if ($(window).width() > 576) {
            $('.chat-container-header--option-delete--delete').attr('data-toggle','modal').attr('data-target','#popup-del-msg');

        }
    };
    chat_go2();
    // **********************************************************************//


    $('.migdex-lk-content-mat--item__wrap').click(function () {
       $(this).toggleClass('active');
       $(this).children().next().slideToggle(200);
    });

    // "0.009 0.892 0.011 0.883 0.013 0.875 0.015 0.866 0.017 0.857 0.019 0.849 0.021 0.84 0.022 0.831 0.024 0.823 0.026 0.814 0.028 0.806 0.03 0.797 0.032 0.788 0.034 0.78 0.035 0.771 0.037 0.762 0.039 0.754 0.041 0.745 0.043 0.737 0.045 0.728 0.047 0.719 0.049 0.711 0.05 0.702 0.052 0.693 0.054 0.685 0.056 0.676 0.058 0.668 0.06 0.659 0.06 0.656 0.061 0.653 0.062 0.65 0.063 0.647 0.065 0.639 0.067 0.631 0.069 0.624 0.071 0.616 0.074 0.605 0.077 0.594 0.08 0.582 0.084 0.571 0.088 0.559 0.092 0.546 0.097 0.533 0.101 0.521 0.107 0.508 0.112 0.495 0.118 0.482 0.123 0.47 0.129 0.459 0.136 0.448 0.142 0.437 0.148 0.426 0.156 0.418 0.163 0.41 0.17 0.402 0.177 0.395 0.185 0.392 0.193 0.389 0.201 0.386 0.209 0.383 0.217 0.385 0.224 0.386 0.232 0.388 0.239 0.389 0.246 0.393 0.252 0.397 0.259 0.401 0.265 0.405 0.27 0.411 0.275 0.416 0.28 0.422 0.286 0.427 0.29 0.433 0.294 0.44 0.298 0.446 0.302 0.452 0.305 0.459 0.308 0.465 0.311 0.471 0.314 0.477 0.316 0.483 0.318 0.489 0.32 0.494 0.322 0.5 0.323 0.503 0.324 0.507 0.326 0.511 0.327 0.515 0.327 0.516 0.328 0.518 0.328 0.52 0.328 0.521 0.329 0.524 0.33 0.526 0.331 0.529 0.332 0.532 0.335 0.538 0.338 0.543 0.341 0.549 0.344 0.555 0.348 0.561 0.352 0.567 0.357 0.573 0.361 0.579 0.367 0.581 0.373 0.584 0.378 0.586 0.384 0.589 0.391 0.585 0.398 0.581 0.404 0.578 0.411 0.574 0.419 0.56 0.426 0.547 0.434 0.533 0.441 0.52 0.45 0.494 0.458 0.467 0.466 0.441 0.474 0.415 0.482 0.372 0.491 0.33 0.499 0.287 0.507 0.245 0.508 0.242 0.509 0.239 0.51 0.236 0.51 0.233 0.512 0.224 0.514 0.215 0.516 0.206 0.518 0.197 0.521 0.185 0.525 0.173 0.528 0.162 0.532 0.15 0.537 0.139 0.542 0.128 0.547 0.118 0.552 0.107 0.559 0.1 0.566 0.094 0.573 0.087 0.58 0.081 0.589 0.082 0.598 0.083 0.607 0.085 0.616 0.086 0.627 0.099 0.639 0.111 0.65 0.124 0.661 0.136 0.675 0.163 0.689 0.191 0.703 0.218 0.716 0.245 0.731 0.272 0.745 0.298 0.759 0.325 0.774 0.352 0.786 0.363 0.799 0.375 0.811 0.386 0.824 0.397 0.835 0.397 0.846 0.397 0.857 0.396 0.867 0.396 0.876 0.387 0.885 0.379 0.895 0.37 0.904 0.362 0.911 0.349 0.918 0.336 0.925 0.323 0.932 0.31 0.938 0.296 0.943 0.282 0.948 0.269 0.953 0.255 0.956 0.244 0.959 0.233 0.963 0.222 0.966 0.211 0.967 0.207 0.968 0.202 0.969 0.198 0.97 0.193 0.971 0.187 0.972 0.181 0.973 0.175 0.974 0.169 0.975 0.163 0.976 0.157 0.977 0.151 0.978 0.145 0.979 0.139 0.979 0.133 0.98 0.127 0.981 0.121 0.982 0.115 0.983 0.109 0.984 0.103 0.985 0.097 0.986 0.091 0.987 0.085 0.988 0.078 0.989 0.072 0.99 0.066 0.991 0.06 0.992 0.054 0.993 0.048 0.993 0.042 0.994 0.036 0.995 0.03 0.996 0.024 0.997 0.018 0.998 0.012 0.999 0.006 1 0 0.999 0.031 0.997 0.062 0.996 0.094 0.994 0.125 0.993 0.156 0.992 0.188 0.99 0.219 0.989 0.25 0.987 0.281 0.986 0.313 0.985 0.344 0.983 0.375 0.982 0.406 0.98 0.437 0.979 0.469 0.978 0.5 0.976 0.531 0.975 0.563 0.973 0.594 0.972 0.625 0.971 0.656 0.969 0.687 0.968 0.719 0.966 0.75 0.965 0.781 0.964 0.813 0.962 0.844 0.961 0.875 0.959 0.906 0.958 0.938 0.957 0.969 0.955 1 0.925 0.998 0.896 0.996 0.866 0.994 0.836 0.992 0.806 0.99 0.776 0.988 0.746 0.986 0.716 0.984 0.687 0.982 0.657 0.98 0.627 0.978 0.597 0.976 0.567 0.974 0.537 0.972 0.507 0.969 0.478 0.968 0.448 0.966 0.418 0.963 0.388 0.961 0.358 0.959 0.328 0.957 0.299 0.955 0.269 0.953 0.239 0.951 0.209 0.949 0.179 0.947 0.149 0.945 0.119 0.943 0.09 0.941 0.06 0.939 0.03 0.937 0 0.935 0.002 0.926 0.004 0.918 0.006 0.909 0.007 0.9 0.009 0.892"
    //     .split(' ')
    //     .map((p, i) => Math.round(Number(p) * 10000) / 100 + '%' + ((i % 2) ? ',' : ''))
    //     .join(' ');
});