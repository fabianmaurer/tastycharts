

function loadRecipe(recipe){
    let spl=$('#chartview-splash')
    spl.css('background-image','url('+recipe.image+')')
    $('#chartview-splash-text').html(recipe.name)
}