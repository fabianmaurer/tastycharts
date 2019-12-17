const modules = {
    'navbar': 'src/navbar/navbar.html',
    'overview':'src/overview/overview.html',
    'chartview':'src/chartview/chartview.html',
    'footer':'src/footer/footer.html'
}

const firstModules=['navbar','overview','chartview','footer']


function loadModule(name, callback) {
    $(name).load(modules[name], callback)
}

init();
function init() {
    for (let m of firstModules) {
        loadModule(m, null)
    }
}