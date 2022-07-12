function getLocalStorage(){
    // if((localStorage.getItem('todos')) === undefined &&
    // (localStorage.getItem('memosMain')) === undefined &&
    // (localStorage.getItem('toReads')) === undefined){
        
    // }
    try {
        if(
            localStorage.getItem('todos') &&
            localStorage.getItem('memosMain') && 
            localStorage.getItem('toReads')){
                return [
                    JSON.parse(localStorage.getItem('todos')),
                    JSON.parse(localStorage.getItem('memosMain')),
                    JSON.parse(localStorage.getItem('toReads'))
                ]
            }else{
                return [
                    [],
                    [],
                    []
                ]
            }
    } catch (error) {
        console.log(error);
    }
    
}

function setLocalStorage(todos, memosMain, toReads){
    localStorage.setItem('todos', JSON.stringify(todos))
    localStorage.setItem('memosMain', JSON.stringify(memosMain))
    localStorage.setItem('toReads', JSON.stringify(toReads))
}


export {getLocalStorage, setLocalStorage}