import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiscService {

  // date: any
  // time : any

  constructor() { }

  dt = new Date()

  getDate(){
    return this.dt.getDate() + "." + (this.dt.getMonth()+1) + "." + this.dt.getFullYear()
  }

  getTime(){
    return this.dt.getHours() + ":" + this.dt.getMinutes() + ":" + this.dt.getSeconds()
  }

  getTimestamp(){
    return this.getDate() + " " + this.getTime()
  }
}
