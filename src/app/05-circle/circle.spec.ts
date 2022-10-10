
import {circle} from './circle';

describe('circle',() => {
    it('shourld return 0,if radio is 0', () => {
        const result = circle(1);
        expect(result).toBe(3.1416)
    });
});


describe('circle',() => {
    it('shourld return 0,if radio is 0', () => {
        const result = circle(2);
        expect(result).toBe(12.5664)
    });
});


describe('circle',() => {
    it('shourld return 0,if radio is 0', () => {
        const result = circle(3);
        expect(result).toBe(28.2744)
    });
});


describe('circle',() => {
    it('shourld return 0,if radio is 0', () => {
        const result = circle(0);
        expect(result).toBe(0)
    });
});




/**
 * 
-[ ] Should return 0, if radio is 0
-[ ] Should return 0, if radio is negative
-[ ] Should return 3.1416 if radio is 1
-[ ] Should return 12.5664 if radio is 2
-[ ] Should return 28.2744 if radio is 3 */
