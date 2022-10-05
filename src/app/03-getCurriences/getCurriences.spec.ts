import {getCurriences} from './getCurriences';

describe ('getCurriences', () => {
    it('should return the supported curriences', ()=> {
        const result = getCurriences();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
        expect(result).toContain('PESOS');
     } );
    });