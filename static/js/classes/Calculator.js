export default class Calculator {
    constructor() {
        this.number1 = '';
        this.number2 = '';
        this.operation = '';
    }

    __sum() {
        return parseFloat(this.number1) + parseFloat(this.number2);
    }
    
    __subtraction() {
        return parseFloat(this.number1) - parseFloat(this.number2);
    }

    __division() {
        return parseFloat(this.number1) / parseFloat(this.number2);
    }

    __multiplication() {
        return parseFloat(this.number1) * parseFloat(this.number2);
    }
    
    delete() {
        if(this.operation.length > 0) this.number2 = '';
        else this.number1 = '';
    }
    
    reset() {
        this.number1 = '';
        this.number2 = '';
        this.operation = '';
        return '0';
    }

    makeOperation() {
        if (this.operation === '+') return this.__sum();
        else if (this.operation === '-') return this.__subtraction();
        else if (this.operation === '/') return this.__division();
        else if (this.operation === 'x') return this.__multiplication();
        return this.number1 || 0;
    }
}