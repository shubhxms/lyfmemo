import nlp from 'compromise';

/*
classifies memos into tasks, to read, and other
    - tasks
        - has a #Verb (todo, complete, work on)
        - Get something Done types
    - to read
        - #Url
        - might have "read", "watch", "complete"
    - memos
        - rest
*/


// let toReadJson = [
//     {choices:[{word:'read'}, {word:'watch'}], optional:true}
// ]


const compromiseFunc = (memo) => {
    if(
        nlp(memo).has('~(#Url|read)~')){
            return 2
    }else if(
        nlp(memo).has('~(todo|complete|do|finish)~')){
            return 0
    }else if(nlp(memo).has('~(get * done)~')){
        return 0
    }else{
        return 1
    }
}

export default compromiseFunc;

