const input = [
    "crocodile",
    "pig",
    "elephant",
    "aardvark",
    "ring tailed lemur",
    "jordan",
    "hippopotamus",
    "kangaroo",
    "blue tit"
  ];


//Output = "Animals: Pig, Elephant, Aardvark, Jordan."

function blaa() {

    let printOut = [];


    for(let i=0; i<input.length; i++) {
        if(input[i].length<9){
            printOut.push(input[i]);
        };
    }
    
    console.log("Animals: " + printOut.toString() + ".");
}

blaa();



let output= [];

input.map(animal => { if(animal.length < 9) {output.push(animal)};});

console.log("Animals: " + output.toString() + ".");

animalOutput = input.filter(animal => {return animal.length<9}).reduce((Total, animal) => {return Total + ", " + animal}).concat('.');

console.log(animalOutput);
