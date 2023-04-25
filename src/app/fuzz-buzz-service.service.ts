import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuzzBuzzServiceService {

  constructor() { }

  title = 'practica_1';
  numeros:any[] = [];
  
  /**
   * fuzzBuzz
   */
  public fuzzBuzz() {
    
    for(var i=1;i<=100;i++)
      {
        if(i%3==0 && i%5==0)
          this.numeros.push("FuzzBuzz");
        else if(i%3==0)
                this.numeros.push("Fuzz");
             else if(i%5==0)
                    this.numeros.push("Buzz");
                  else
                    this.numeros.push(i);
      }
      
      //console.log(this.numeros);
      return this.numeros;
  }
}
