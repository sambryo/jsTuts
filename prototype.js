class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;

        let fullName = ()=> {
            return `${this.firstName} ${this.lastName}`
        }
    }
}


Person.prototype.calculateAge = (dob) => {
    let birthday = new Date(dob)
    let diff = Date.now() - new Date(dob).getTime()
    const age  = new Date(diff)
    return Math.abs(age.getUTCFullYear() - 1970)
}



const smith = new Person("Smith", "John")
console.log(smith.calculateAge('05-12-1991'));
