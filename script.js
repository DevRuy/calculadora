let res = document.getElementById('res')


function insert(n){
    res.innerHTML += `${n}`
    
}

function insertF(f){
    if (res.length == 0){
        res.innerHTML = ''
        return false
    } else {
        res.innerHTML += `${f}`
        return true
    }

}

/* Voltar um */
function back(){
    res.innerHTML = res.substring(0, res.length -1)
}

/* Limpar */
function clean(){
    res.innerHTML = ''
}