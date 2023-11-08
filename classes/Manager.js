const {Employees} = require('./Employees.js');

class Manager extends Employees{

    #employeesManaged
    
    constructor(name,position, salary, isHired,department,employeesManaged){
        super(name,position,salary,isHired)
        this.department = department;
        this.#employeesManaged = [];
    }

    getEmployeesManaged(){
        return this.#employeesManaged;
    }

    setEmployeesManaged(employee){
        this.#employeesManaged.push(employee)
    }
    
}

module.exports = {
    Manager,
}