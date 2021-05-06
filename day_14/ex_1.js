//forEach loop
var pets = ['Bobby','Sam','Spot'];

pets.forEach(function(pet) {
    console.log(pet);
});

// this will helo to understand that can be indifferen ways
// it can be done like this too either the upper one of this
    // var pets = ['Bobby','Sam','Spot'];

    // pets.forEach(function(pet) {
    //     console.log(pet);
    //     pets[index] = pet.toUpperCase();
    // });
    //asynchronix programming - make a call and wait until it executes
    //     console.log(pets);

let words = ['apple','grape','kiwi','banana'];
words.forEach(function(word){
    console.log(word);
    if(word === 'grape'){
        words.shift();
    }
});
//apple
//grape
//banana