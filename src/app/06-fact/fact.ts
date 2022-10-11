export function fact (x:number){

    let base = 1;

    if ( x == 0) {
      base = 1;
    }
  
    if (x < 0 ){
      base = 0;
    }
  
    if ( x >= 16) {
      base = 0;
    }
  
    if ( x > 0 && x < 16) {
      for (let i=1; i<x; i++) {
        base = base*(i+1);
      }
    }
  
    return base;
  }   
