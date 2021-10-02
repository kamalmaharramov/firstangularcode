import { Component, OnInit } from '@angular/core';
import { Headitem } from './headitem';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent  {

  constructor() { }

  private name="Kamal"
  getName(){
    return this.name
  }
  items=[
    //"item1","item2","item3","item4","item5","item 6"
    {desc:"red",id:1},
    {desc:"red",id:2},
    {desc:"red",id:3}
  ]
}
