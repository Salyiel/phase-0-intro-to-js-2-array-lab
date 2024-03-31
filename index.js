// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
}


function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}


function appendCat(){
    const newAppend = [...cats, "Broom"]
    return newAppend
}

function prependCat(){
    const newPrepend = ["Arnold", ...cats]
    return newPrepend
}

function removeLastCat(){
    const byeCat = cats.slice(0, 2)
    return byeCat
}

function removeFirstCat(){
    const byeFirstCat = cats.slice(1, 3)
    return byeFirstCat
}