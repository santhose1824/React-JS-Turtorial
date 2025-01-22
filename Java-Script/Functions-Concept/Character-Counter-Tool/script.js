// Character-Counter-Tool

const characterCounterTool=(text,start,end,textTobeReplaced)=>{
    let lengthText = text.length;
    let textToLOwerCase = text.toLowerCase()
    let textToUpperCase = text.toUpperCase()
    let textSlice = text.slice(start,end)
    let replaceText = text.replace('Santhose',textTobeReplaced)
    return [lengthText,textToLOwerCase,textToUpperCase,textSlice,replaceText]
}

console.log(characterCounterTool('Santhose',0,6,'H.M.Santhose'));
