import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  getName(name){
    alert(name)
    return this.title;
  }
  person={
    name: 'John',
    age: 36
  }
  arr=[1,2,3,4,5]
  siteUrl = window.location.href
  current=""
  getValue(value){
    console.log(value);
    this.current=value;
  }
  show='yes';
}
