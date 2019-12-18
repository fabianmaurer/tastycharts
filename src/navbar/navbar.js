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
        let $dropdown=$(document.createElement('div'))
        $dropdown.attr('class','navbar-dropdown')
        for(let r of recipes){
            let $recipe=$(document.createElement('div'))
            $recipe.attr('class','navbar-dropdown-item')
            $recipe.html(r.name)
            if(r.vegan){
                let $vegan=$(document.createElement('span'))
                $vegan.attr('class','fa-stack dropdown-right vegan-stack')
                $vegan.html('<i class="far fa-leaf fa-stack-1x"></i> <i class="fal fa-circle fa-stack-2x"></i><i class="far fa-plus fa-stack-1x"></i>')
                $recipe.append($vegan)
            }else if(r.vegetarian){
                let $veggie=$(document.createElement('span'))
                $veggie.attr('class','fa-stack dropdown-right veggie-stack')
                $veggie.html('<i class="far fa-leaf fa-stack-1x"></i> <i class="fal fa-circle fa-stack-2x"></i>')
                $recipe.append($veggie)
            }
            $recipe.click(function(){
                showRecipe(r)
            })
            $dropdown.append($recipe)
        }
        $item.append($dropdown)
        $('.navbar-items').append($item)
    }
}

$('#navbar-logo').click(function(){
    showLandingPage();
})