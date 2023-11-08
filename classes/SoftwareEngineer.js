const { Employees } = require('./Employees.js');
class SoftwareEngineer extends Employees{

    #programmingLanguages
    constructor(name,position,salary,programmingLanguages) {
        super(name, position, salary)
        this.#programmingLanguages = programmingLanguages;
    }

    getProgrammingLanguages() {
        return this.#programmingLanguages
    }

    setProgrammingLanguages(languages) {
        this.#programmingLanguages.push(languages)
    }

}

module.exports = {
    SoftwareEngineer,
}