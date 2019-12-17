init()

function init(){
    fillNewest(3);
}

function fillNewest(count){

    for(let i=recipes.length-1;i>=recipes.length-count;i--){
        let r=recipes[i];
        let $t=$(document.createElement('div'));
        $t.attr('class','thumbnail')
        $t.css('background-image','url('+r.image+')')
        let $text=$(document.createElement('div'))
        $text.attr('class','thumbnail-text')
        $text.html(r.name)
        let $dur=$(document.createElement('div'))
        $dur.attr('class','thumbnail-duration')
        $dur.html('<i class="far fa-clock"></i>'+fancyTime(r.duration))
        $t.append($text)
        $t.append($dur)
        $('.overview-list').append($t)
    }
}