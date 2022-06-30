export function isEmpty(items){
    for(let i in items)
        if(items[i] === '' || items[i] === null)
            return false;
    return true;
}
export function extractErrorMessage(err){
    return err.split('/')[1].split(')')[0]
}