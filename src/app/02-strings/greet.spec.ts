import {greet} from './greet';

describe('greet',()=>{
    it('should inlcude the name in the message', () => {
        expect(greet('mosh')).toBe('welcome mosh');
    })
})