(function($){
    $.fn.writeText = function(content){
        let contentArr = content.split(""),
            current = 0,
            elem = this;
        setInterval(function(){
            if(current < contentArr.length){
                elem.text(elem.text() + contentArr[current++])
            }
        }, 100);
    };
})(jQuery);

$("#p").writeText("This is My Name");


