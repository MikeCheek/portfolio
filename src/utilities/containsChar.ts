const containsChar = (word: string, char:string): boolean => {

    const tmp = Array.from(word);
    let i;
    for(i=0;i<tmp.length;i++){
        if(tmp[i] === char)
            return true
    }   

    return false;
}

export default containsChar;