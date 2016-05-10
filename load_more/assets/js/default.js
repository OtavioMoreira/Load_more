$(document).ready(function () {
    $('.load-more').each(function () {
        var inicial = $( this ).data("inicial");
        $(' li:lt('+inicial+')', this).show();
    })

    $('.btn-load-more').click(function () {
        var $container = $( this ).parent( "div" );
        var $ul = 'ul';
        var $li = 'ul li';

        var size_li = $container.find($li).size();
        var load = $container.find($ul).data("load");
        var inicial = $container.find($ul).data("inicial");
        var menuop = $container.find($ul).data("menu-load");

        if(this['menu_'+menuop] == null){
            this['menu_'+menuop] = inicial;
        }

        this['menu_'+menuop] =+ (this['menu_'+menuop] + load <= size_li) ? this['menu_'+menuop] + load : size_li;
        $($container.find('ul li:lt('+this['menu_'+menuop]+')')).slideDown();

        if(size_li == this['menu_'+menuop]){
            $container.find('.btn-load-more').hide();
        }
    });
});
