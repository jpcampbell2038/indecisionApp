const add = (a, b) => {
    return a + b;
};


console.log(add(55,1));


const user = {
    name: 'James',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printplacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printplacesLived());


const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};


console.log(multiplier.multiply());