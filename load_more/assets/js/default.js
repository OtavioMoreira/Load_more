$(document).ready(function () {
    $('.load-more').each(function () {
        var inicial = $( this ).data("inicial");
        $(' li:lt('+inicial+')', this).show();
    })

    $('.btn-load-more').click(function () {
        var size_li = ($( this ).parent( "div").find('ul li').size());
        var load = $( this ).parent( "div").find('ul').data("load");
        var inicial = $( this ).parent( "div").find('ul').data("inicial");
        var menuop = $( this ).parent( "div").find('ul').data("menu-load");

        if(this['menu_'+menuop] == null){
            this['menu_'+menuop] = inicial;
        }

        this['menu_'+menuop] =+ (this['menu_'+menuop] + load <= size_li) ? this['menu_'+menuop] + load : size_li;
        $($( this ).parent( "div").find('ul li:lt('+this['menu_'+menuop]+')')).slideDown();

        if(size_li == this['menu_'+menuop]){
            $( this ).parent( "div").find('.btn-load-more').hide();
        }
    });
});