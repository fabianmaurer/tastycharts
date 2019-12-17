function getRecipes(category){
    results=[]
    for(let r of recipes){
        if(r.category==category){
            results.push(r)
        }
    }
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