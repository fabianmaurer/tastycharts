init()

function init(){
    fillItems();
}

function fillItems(){
    let first=true;
    for(let cat of categories){
        let $item=$(document.createElement('div'))
        $item.attr('class','navbar-item')
        
        let $text=$(document.createElement('div'))
        $text.attr('class','navbar-item-text')
        $text.html(cat.display)

        if(first){
            first=false;
            $text.addClass('first')
        }

        $item.append($text)
        let recipes=getRecipes(cat.name)
        if(recipes.length>0)
            $item.css('background-image','url('+recipes[0].image+')')
        for(let r in recipes){

        }
        $('.navbar-items').append($item)
    }
}