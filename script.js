// complete this js code
// complete this js code
function Person(name, age) {
	this.name=name;
	this.age=age;
}
Person.prototype.greet=function(){
	return "Hello, my name is " + this.name +", I am "+this.age+" years old.";
};
// var p=new Person('areeb',23);
// console.log(p);
// console.log(Object.getPrototypeOf(p));

function Employee(name, age, jobTitle) {
	Person.call(this,name,age);
	this.jobTitle=jobTitle;
}

Employee.prototype=Object.create(Person.prototype);
Employee.prototype.jobGreet=function(){
	return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
