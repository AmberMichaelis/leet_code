let runner = {
    name: 'Runner',
    run: function(speed) {
        console.log(this.name + ' runs at ' + speed + ' mph.');
    }
};


let flyer = {
    name: 'Flyer',
    fly: function(speed) {
        console.log(this.name + ' flies at ' + speed + ' mph.');
    }
};

let person = runner.run.bind(flyer, 20);
person();

let bird = flyer.fly(30)
setTimeout(person,500);
flyer.fly(40);

let numbers = [0,1,2,3,4,5,6]
console.log(numbers.map(timesTwo))

var timesThree = (num) => {
    return num*3;
}

//Test commit for gpg signature verification
