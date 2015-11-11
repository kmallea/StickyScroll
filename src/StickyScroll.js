var StickyScroll = (function(){
    var options = {
        stickyButton : '.top-btn',
        lockTo : '.sitemap',
        wrap : 'body',
        padding : 10,
        minScroll : 500,
        isInited : false
    },
    app = {
        pub : {
            init : function(){
                app.pub.onScroll();
                $(window).on('scroll', app.pub.onScroll);
                $(window).on('resize', app.pub.onScroll);
                $(window).on('orientationchange', app.pub.onScroll);
                $(options.wrap).on('click', options.stickyButton, app.pub.scrolltop);
            },
            onScroll : function(){
                var scrollTop = $(window).scrollTop();
                var lockToPos = $(options.lockTo).offset();
                var lockToHeight = ( lockToPos.top + $(options.lockTo).height() ) - ($(options.stickyButton).height() + options.padding);
                var pageHeight = $(window).innerHeight(), windowHeight = window.innerHeight;
                var maxScroll = (lockToPos.top + lockToHeight) - (windowHeight + lockToPos.top) + ($(options.stickyButton).height() + options.padding);
                var leftPos = (lockToPos.left + $(options.lockTo).width()) - ($(options.stickyButton).width() + options.padding );

                if(options.isInited === false){
                    if(scrollTop < maxScroll){
                        $(options.stickyButton).css({
                            'position':'fixed',
                            'top':'auto',
                            'bottom':'10px',
                            'left' : leftPos
                        });
                    }else{
                        $(options.stickyButton).css({
                            'position':'absolute',
                            'top':lockToHeight,
                            'bottom':'auto',
                            'left' : leftPos
                        });
                    }
                    $(options.stickyButton).hide();
                    options.isInited = true;
                }
                
                if(scrollTop > options.minScroll){
                    if(scrollTop < maxScroll){
                        $(options.stickyButton).css({
                            'position':'fixed',
                            'top':'auto',
                            'bottom':'10px',
                            'left' : leftPos
                        });
                    }else{
                        $(options.stickyButton).css({
                            'position':'absolute',
                            'top':lockToHeight,
                            'bottom':'auto',
                            'left' : leftPos
                        });
                    }
                    if(!$(options.stickyButton).hasClass('sticky-show')){
                        $(options.stickyButton).addClass('sticky-show').fadeIn();
                    }
                    
                }else{
                    if($(options.stickyButton).hasClass('sticky-show')){
                        $(options.stickyButton).removeClass('sticky-show').fadeOut();
                    }
                }
            },
            scrolltop : function(){
                $('html,body').animate({ scrollTop: 0 }, 'slow');
            }
        }
    };

    return app.pub;
})();