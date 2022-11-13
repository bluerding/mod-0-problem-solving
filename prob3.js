var animals = ["Cheetah", "Buffalo", "Turtle", "Owl"]
for (i = 0; i < animals.length; i++){
    if (animals[i].charAt(0) === "T"){
        console.log(animals[i])
    }
}

// I want to print every animal in my array that starts with the letter "T"
// I have my initialization start at the first element, and go through the list
// of elements.  I assign the initialization to my variable animals, and have it
// look for every one that has the character "T" as the first (0) spot, and run it
// The only one that should print is Turtle.