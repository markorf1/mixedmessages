const data = {
    'strang3cr0w': [/*strang3Cr0w array*/],
    'tr_h3x': [/*Tr array*/],
    'boody': [/*boody array*/],
    'markorf1': [/*mark array*/],
    'tmacchi': [/*jose array*/],
    // maybe we could add more?
};
// Or we could do...
// import {data} from "#"


const getArray = () => {
    let dataKey;
    let c = 0;
    for (let i in data) {
        c += 1;
    } // this is to get the length of the object (I might have overcomplicated it - lol)
    const randNum = Math.floor(Math.random() * c);
    switch (randNum) {
        case 0:
            dataKey = 'strang3cr0w';
            break;
        case 1:
            dataKey = 'tr_h3x';
            break;
        case 2:
            dataKey = 'boody';
            break;
        case 3:
            dataKey = 'markorf1';
            break;
        case 4:
            dataKey = 'tmacchi';
            break;
        default:
            console.log("wtf - how did this happen");
            break;
    }
    return data[dataKey]
    // Define a variable to be equal to the function
}


//Essential Global Variables: (idk how i could put them into their own block, sum1 plz tell me how)
const chosenArray = getArray();
const value1 = Math.floor(Math.random() * chosenArray.length);
let value2 = Math.floor(Math.random() * chosenArray.length);
while (value2 === value1) {
    value2 = Math.floor(Math.random() * chosenArray.length);
}




const getFirstValue = () => {
    const firstValue = chosenArray[value1];
    return firstValue
}

const getSecondValue = () => {
    const secondValue = chosenArray[value2];
    return secondValue
}

// Now we can get our Variable nouns... (Y'all can import these functions)
const firstWord = getFirstValue();
const secondWord = getSecondValue();