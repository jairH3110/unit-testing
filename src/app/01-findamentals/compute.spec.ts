import {compute, computexd} from './compute';

describe('compute',() => {
  it('should return 0 if input it negative',()=>{

  const result = compute(-1);
  expect(result).toBe(0);

  })  

  it('should increment the input if it is positive ',()=>{
  const result = computexd(1);
  expect(result).toBe(2);


})
}) //suite
