function bottleSong() {
    
    var word = "bottles";
    var count = 99;
    while (count > 0) {
        var bottle = count == 1 ? "bottle" : "bottles";
        console.log(count + " " + word + " of beer on the wall");
        console.log(count + " " + word + " of beer,");
        console.log("Take one down, pass it around,");
        --count;
        var bottle = count == 1 ? "bottle" : "bottles";
        console.log(count + " " + word + " of beer on the wall.");
    } 
}
function bottleSong() { 

    var bottles;
    for (counter = 99; counter >= 1; counter = counter - 1) 
    {
        if (counter == 1) {
            bottles = 'bottle';
        } else {
            bottles = 'bottles';
        }
        console.log(counter+" "+bottles+" of beer on the wall.");
        if (counter < 99) {
            console.log("");
            console.log(counter+" "+bottles+" of beer on the wall.");
        }
        console.log(counter+" "+bottles+" of beer.");
        console.log("Take one down.");
        console.log("Pass it around.");
        if (counter == 1) {
            console.log("No bottles of beer on the wall.");
        }
    }
}

bottleSong()