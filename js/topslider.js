$(document).ready( function(){

$('.company').each(function(){
    (function($set){
        setInterval(function(){
            var $cur = $set.find('.current').removeClass('current');
            var $next = $cur.next().length?$cur.next():$set.children().eq(0);
            $next.addClass('current');
        },7000);
    })($(this));
})

setTimeout(function() {$(".trust").css('visibility','visible')},2000);


})