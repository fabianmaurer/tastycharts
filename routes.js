const modules = {
    'navbar': 'src/navbar/navbar.html',
    'overview':'src/overview/overview.html',
    'chartview':'src/chartview/chartview.html',
    'footer':'src/footer/footer.html'
}

const firstModules=['navbar','overview','footer','chartview']


function loadModule(name, callback) {
    $(name).load(modules[name], callback)
}

init();
function init() {
    for (let m of firstModules) {
        loadModule(m, null)
    }
}

function showRecipe(recipe){
    console.log('hi')
    $('#overview-container').addClass('hidden')
    $('#chartview-container').removeClass('hidden')
    loadRecipe(recipe)
}

function showLandingPage(){
    console.log('ho')
    $('#chartview-container').addClass('hidden')
    $('#overview-container').removeClass('hidden')
}