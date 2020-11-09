class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
  }

class Manager extends Employee {
    constructor(name, hireDate, salary, descriptionOfJob) {
        super(name, hireDate, salary);
        this.descriptionOfJob = descriptionOfJob;
    }

    jobDescription() {
        console.log(this.name + " was hired on, " + this.hireDate + ", and makes " + this.salary + ", because she " + this.descriptionOfJob);
    }
}

class Designer extends Employee {
    constructor(name, hireDate, salary, experience) {
        super(name, hireDate, salary)
        this.experience = experience;
    }

    yearsExperience() {
        console.log(this.name + " was hired on, " + this.hireDate + ", and makes " + this.salary + ", because she has " + this.experience) + " years of experience.";
    }
}

class SalesAssociate extends Employee { 
    constructor(name, hireDate, salary, degrees) {
        super(name, hireDate, salary)
        this.degrees = degrees
    }
    degreeCompleted() {
        console.log(this.name + " was hired on, " + this.hireDate + ", and makes " + this.salary + ", because she has " + this.degrees + " degrees.");
    }
}

let manager = new Manager("Kateleigh", "04/12/2019", 85000, "manages the staff");
let designer = new Designer("Channel", "05/23/2012", 100000, "five");
let salesAssociate = new SalesAssociate("Janet", "07/18/2010", 90000, "four");

manager.jobDescription();
designer.yearsExperience();
salesAssociate.degreeCompleted();