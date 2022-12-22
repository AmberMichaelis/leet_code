let pets = new Set(["Cat", "Dog", "Hamster"]);
let colors = {
    girls: "pink",
    boys: "blue",
    kids: "yellow",
    adults: "green"
}
pets["species"] = "mammals";

for (let color in colors) {
    console.log(color); // "species"
}

for (let color of colors) {
    console.log(color); // "Cat", "Dog", "Hamster"
}
