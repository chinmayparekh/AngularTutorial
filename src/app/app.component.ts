import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  arr=['ram','sham','sita'];
  getValue(value){
    console.log(value);
  }
  color='orange';

  update(){
    this.color='pink'; 
  }
  name=['Chinmay','Ram','Sita','Ali','Rohan','Rohit'] ;
  parentComponent(value){
    console.log(value);
  }
}
