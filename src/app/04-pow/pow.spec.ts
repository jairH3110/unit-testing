import {pow } from './pow';

describe('pow',()=>{
    it('Should return 9 if x=3, n=2',() => {
       const result = pow(2,3);
        expect(result).toBe(8);
    })
})

describe('pow',()=>{
    it('Should return 9 if x=2, n=3',() => {
       const result = pow(3,2);
        expect(result).toBe(9);
    })
})

describe('pow',()=>{
    it('Should return 9 if  n=0',() => {
       const result = pow(0,3);
        expect(result).toBe(0);
    })
})