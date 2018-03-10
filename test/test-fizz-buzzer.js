const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

describe ('fizzBuzzer', function(){
    it('should return fiz for numbers divisible by 3, return buzz for divisible by 5 and fizzbuzz for numbers divisible by 5 and 3', function(){
        
        const normalCases = [
            {num: 3, expected: 'fizz'},
            {num: 5, expected: 'buzz'},
            {num: 15, expected: 'fizz-buzz'}
            
        ];
        normalCases.forEach(function(input){
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.expected);
        });
    });
    it('should raise error if args not numbers', function(){
        const badInputs =[
            ['a'],
            [false]
        ];
        badInputs.forEach(function(input){
            expect(function(){
                fizzBuzzer(input[0]);
            
            }).to.throw(Error);
        });
    });
});