import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FibonacciServiceService {

  constructor() { }

  public esPar(numero: number){
    if(numero%2==0)
        return true;
    return false
  }

  public estaEnFibonacci(numero: number){
        let fibonacci=[];
        let x = 0;
        let y = 1;
        let z;

        for (let i = 2; i < 100; i++) {
          z = x + y;
          x = y;
          y = z;
          fibonacci.push(z);
        }
        return fibonacci.includes(numero);
  }


}
