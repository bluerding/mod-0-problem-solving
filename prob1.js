var names = ["Ben", "Maya", "Whitney", "Bo"]
for (i = 0; i < names.length; i++){
    if(names[i].length === 4){
        console.log(names[i])
    }
}

// Created a function to capitalize every "A"
function capA(array) {
    for (i = 0; i <  array.length; i++) {
        console.log(array[i].replaceAll("a", "A"))
    }
}
capA(names)
// I want this to return every name that is exactly 4 characters long
// I will have it start at the first element, and go through the entire list of elements
// and have it return only those that are 4 characters. This is done using a 'for statement'
// to create a loop. My loop will look at my condition (names.length) to see if
// it is equal to exactly 4. If it is, it will print. I only have one string that
// meets the criteria, so it will be the only one that prints.