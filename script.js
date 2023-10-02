let res = document.getElementById('res')
let funcao = String(res.value)


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
    let back = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = back.substring(0, back.length -1)


    
}

/* Limpar */
function clean(){
    funcao = []
    res.innerHTML = ''
}''