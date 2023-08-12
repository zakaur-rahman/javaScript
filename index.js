function calcPI(iterations) {
    let pi = 0, divisor = 1;
    for (let i = 0; i <= iterations; i++) {
        pi = pi + (4 / divisor) - (4 / (divisor + 2));
        divisor += 4;
    }
    document.getElementById("output1").value = pi.toFixed(10);
}

let fibList = [];
// List of Fibonacci numbers
function getFibList(number) {
    let a = 0;
    let b = 1;
    while (number) {
        fibList.push(a);
        [a, b] = [b, (a + b)];
        number--;
    }
    document.getElementById("output1").value = fibList;
}

let mLText = "My dear old ~ sat me down to hear some words of wisdom \n 1. Given a man a ~ and ~ you ~ him for a day ~ a man to ~ and he'll ~ forever \n 2. He ~ who at the right time can ~ again \n 3. Alway ~ ~ wear in case you're in a ~ \n 4. Don't use your to wipe your ~ Always have a clean ~ with you";
let mLArray = mLText.split(" ");
let inputArray = [];

function madLibGenerator() {
    createInputArray();

    if (checkForMissingInput()) {
        document.getElementById("output1").value = "Enter the Values Above";
    } else {
        createMLSentences();
    }
}

function createInputArray() {
    // Create an array with all inputs from textbox
    for (i = 0; i <= 13; i++) {
        inputArray[i] = document.getElementsByName('i' + i).value;
    }
}

function checkForMissingInput() {
    let defaultArrayVals = ["Person", "Noun", "Verb", "Adjective", "plural Verb", "Body Part", "Event"];
    for (i = 0; i < inputArray.length; i++) {
        if (defaultArrayVals.indexOf(inputArray[i] > - 1)) {
            return true;
        }
    }
    return false;
}

function createMLSentences(){
    let arrIndex = 0;
    for(i = 0; i < mLArray.length; i++){
        let matchIndex = mLArray.indexOf("~");
        mLArray[matchIndex] = inputArray[arrIndex];
        arrIndex++;
    
    }
    document.getElementById("output1").value = mLArray.join(" ");

}