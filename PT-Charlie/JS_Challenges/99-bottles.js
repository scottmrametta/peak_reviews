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
bottleSong();