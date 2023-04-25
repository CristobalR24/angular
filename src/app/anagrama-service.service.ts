import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnagramaServiceService {
  

  public anagrama(a: String,b: String){

    let word1=a.toLowerCase();
    let word2=b.toLowerCase();
    let count=0;

      if (word1===word2 || word1.length!==word2.length)
        return false;

      //asumiendo que tienen la misma cantidad de letras
      for(let i=0;i<word1.length;i++)
        for(let y=0;y<word2.length;y++)
          if(word2.charAt(y)===word1.charAt(i))
            count+=1;

      if(word1.length==count)
        return true;
      else 
        return false;
  }

  constructor() { }
}
