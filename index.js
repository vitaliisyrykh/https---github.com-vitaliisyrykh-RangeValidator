'use strict'

class RangeValidator{
  constructor(from =0,to=0){
    this._from = from;
    this._to = to;
  }
  set from(v){
    if(v === 'number' && v < this._to){
      return this._from = v;
    }
    throw new TypeError('please enter number ');
  }

  get from(){
    return this._from;
  }

  set to(v){
    if (v === 'number' && v > this._from){
      return this._to = v;
    }
    throw new TypeError('please enter number or you number ');
  }
  get to(){
    return this._to;
  }

  get range(){
    const result = new Array();
    result.push(this._from,this._to)
    return result;
  }
  get validate(number){
    if(number >= this._from && number <= this._to){
      return number;
    }return new RangeError('your number is out of range')
  }
}