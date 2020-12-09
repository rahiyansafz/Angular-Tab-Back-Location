import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
 
 public count =0;

setCount(countValue:number){
  this.count +=countValue; 
}
getCount():number{
  return this.count;
}

}