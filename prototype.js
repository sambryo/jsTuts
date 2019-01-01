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

function Person2 (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

    this.showName = () =>{
        return `${this.firstName} ${this.lastName}`;
    }
}

function Customer(firstName, lastName, phone, membership){
    Person2.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}



const john = new Customer('John', 'Paul', '444-444-4444', 'Standard')
console.log(john);
/* Output
Customer {
firstName: 'John',
lastName: 'Paul',
showName: [Function],
phone: '444-444-4444',
membership: 'Standard' }
*/
console.log(john.showName())
const smith = new Person("Smith", "John")
console.log(smith.calculateAge('05-12-1991'));
