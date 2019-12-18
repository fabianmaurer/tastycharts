function getRecipes(category){
    results=[]
    for(let r of recipes){
        if(r.category==category){
            results.push(r)
        }
    }
    results.sort(function(a,b){
        if(a.vegan && !b.vegan) return 1;
        if(!a.vegan && b.vegan) return -1;
        if(a.vegetarian && !b.vegetarian) return 1;
        if(!a.vegetarian && b.vegetarian) return -1;
        if(a.name<b.name) return -1;
        else return 1;
    })
    console.log(results)
    return results
}

function fancyTime(mins){
    let h=Math.floor(mins/60)
    let m=mins%60
    let res=''
    if(h>0) res+=h+'h'
    if(m>0) res+=m+'m'
    return res;
}